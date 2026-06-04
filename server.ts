import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Healthy check route
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", time: new Date() });
});

// Debate Draft Generator Endpoint
app.post("/api/debate-draft", async (req, res) => {
  const { topic, side, keywords } = req.body;

  if (!topic) {
    return res.status(400).json({ error: "Lütfen bir münazara konusu belirtin." });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === "MY_GEMINI_API_KEY" || apiKey.trim() === "") {
    return res.status(400).json({
      error: "API_KEY_MISSING",
      message: "Yapay zeka ile taslak oluşturmak için geçerli bir GEMINI_API_KEY gereklidir. Lütfen AI Studio Secrets (Sırları) panelinden anahtarınızı ekleyin."
    });
  }

  try {
    const ai = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });

    const sideText = side === "tez" ? "Hükümet (Tez / Savunan) Tarafı" : "Muhalefet (Antitez / Karşı Çıkan) Tarafı";
    const keywordsText = keywords ? `Odaklanılması istenen anahtar kavramlar: ${keywords}` : "";

    const systemInstruction = `Sen ortaokul öğrencilerine yönelik, onların seviyesini çok iyi bilen şefkatli, motive edici ve deneyimli bir Klasik Münazara Koçusun. 
Görevin, girilen konuya ve tarafa özel, ortaokul düzeyindeki (11-14 yaş) çocukların kolayca anlayıp sunabileceği, akıcı, ikna edici, mantıksal olarak tutarlı ve heyecan verici bir savunma taslağı oluşturmaktır.
Seviye ortaokul olduğu için ağır jargonlardan veya felsefi kavramlardan ziyade, günlük yaşamdan somut örneklere, anlaşılır açıklamalara yer verilmelidir.
Kesinlikle Türkçe yanıt vermelisin.`;

    const userPrompt = `Aşağıdaki kriterlere sahip bir münazara savunma taslağı oluştur:
Konu: "${topic}"
Taraf: ${sideText}
${keywordsText}

Lütfen bilgileri şu yapıda bir JSON olarak döndür:
1. title: Taslak için ilgi çekici ve Türkçe bir başlık (örneğin: "Geleceğin Penceresi: Teknoloji" vb.)
2. introduction: Jüriyi ve seyircileri selamlayan, konunun önemine değinen etkileyici bir giriş konuşması (Yaklaşık 3-4 cümle, hitabeti yüksek).
3. definitions: Konula ilgili temel kavramların tanımları ve tartışmanın sınırlarının (çerçevesinin) belirlenmesi.
4. arguments: En az 2 adet güçlü argüman içeren bir liste. Her argüman şunları içermelidir:
   - title: Argümanın kısa ve etkili başlığı.
   - explanation: Argümanın ortaokul seviyesinde, sebep-sonuç ilişkisi kurularak açıklandığı kısım.
   - example: Argümanı destekleyecek günlük hayattan, bilimden veya haberlerden eğlenceli ve ikna edici bir örnek.
   - bodyLanguageTip: Bu argümanı kürsüde anlatırken uygulanacak beden dili, ses tonu veya jest tavsiyesi.
5. rebuttals: Karşı tarafın (Muhalefet/Tez) ortaya atabileceği 2 adet olası iddia ve bunlara verilecek akılcı çürütme cevapları. Her çürütme şunları içermelidir:
   - possibleCounterArgument: Karşı tarafın muhtemelen söyleyeceği iddia.
   - rebuttalStrategy: Bu iddiayı geçersiz kılacak, jürinin dikkatini çekecek çürütme yöntemi ve cevabı.
6. conclusion: Konuşmayı güçlü bir savla, etkileyici bir slogan veya kapanış cümlesiyle bitiren özet ve kapanış konuşması.
7. pointers: Konuşmacıya özel 3 adet kritik taktik/tavsiye (örneğin süre yönetimi, sakin kalma vb.).`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: userPrompt,
      config: {
        systemInstruction: systemInstruction,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING, description: "Taslağın başlığı" },
            introduction: { type: Type.STRING, description: "Giriş ve selamlama metni" },
            definitions: { type: Type.STRING, description: "Kavramların tanımları ve çerçeveleme" },
            arguments: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING, description: "Argüman başlığı" },
                  explanation: { type: Type.STRING, description: "Argümanın açıklaması" },
                  example: { type: Type.STRING, description: "Argümanı destekleyen somut örnek" },
                  bodyLanguageTip: { type: Type.STRING, description: "Bu argümanı konuşurken verilecek beden dili tüyosu" }
                },
                required: ["title", "explanation", "example", "bodyLanguageTip"]
              },
              description: "Münazara için en az 2 güçlü argüman listesi"
            },
            rebuttals: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  possibleCounterArgument: { type: Type.STRING, description: "Karşı tarafın muhtemelen öne süreceği iddia" },
                  rebuttalStrategy: { type: Type.STRING, description: "Bu iddiaya karşı çürütme cevabı ve strateji" }
                },
                required: ["possibleCounterArgument", "rebuttalStrategy"]
              },
              description: "Karşı argümanları çürütme listesi"
            },
            conclusion: { type: Type.STRING, description: "Güçlü özet ve kapanış metni" },
            pointers: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Öğrenciye özel 3 konuşma tüyosu"
            }
          },
          required: ["title", "introduction", "definitions", "arguments", "rebuttals", "conclusion", "pointers"]
        }
      }
    });

    const textOutput = response.text;
    if (!textOutput) {
      throw new Error("Yapay zeka boş bir yanıt döndürdü.");
    }

    const parsedData = JSON.parse(textOutput.trim());
    return res.json(parsedData);

  } catch (error: any) {
    console.error("Gemini API hatası:", error);
    return res.status(500).json({
      error: "API_ERROR",
      message: "Taslak oluşturulurken sunucu tarafında bir hata oluştu: " + (error.message || error)
    });
  }
});

// Serve frontend assets
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    // Development mode with Vite middleware
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production mode
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Express + Vite full-stack server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
