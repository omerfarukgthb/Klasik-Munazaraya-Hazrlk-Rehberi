import { MünazaraAdımı, MünazaraTaslağı } from "./types";

export const MUNAZARA_ADIMLARI: MünazaraAdımı[] = [
  {
    id: "adim-1",
    title: "1. Konuyu Çözümleme ve Çerçeveleme",
    subtitle: "Savunulacak pencereyi belirleme",
    category: "hazirlik",
    completed: false,
    details: [
      "Münazara konusunun anahtar kelimelerini tespit edin. Örneğin 'Şeker satışı yasaklanmalı' konusunda 'şeker' ve 'yasak' ne anlama geliyor iyi düşünün.",
      "Kavramların sınırlarını çizin. Mesela 'Gençler' derken hangi yaş grubu? Sadece liseliler mi? Baştan belirleyin.",
      "Kendi tarafınızın ana tezini tek bir cümlede özetleyin. 'Çünkü sağlığımız her şeyden önemlidir' gibi akılda kalıcı bir slogan bulun.",
      "Rakibinizin size karşı neler söyleyebileceğini önceden tahmin edip bir kâğıda not alın ki hazırlıksız kalmayın."
    ],
    tips: [
      {
        title: "Tanımların Gücü",
        text: "Tanımları ilk konuşmacı yapar. Eğer tanımları adil ve lehinize yaparsanız, maçı kendi sahanızda oynarsınız."
      },
      {
        title: "Kritik Soru",
        text: "Bu konunun asıl düğümlendiği yer neresi? Adalet mi, verimlilik mi, yoksa özgürlük mü?"
      }
    ]
  },
  {
    id: "adim-2",
    title: "2. Takım Rollerinin Paylaşımı",
    subtitle: "Kürsüye çıkış sırası ve görevler",
    category: "hazirlik",
    completed: false,
    details: [
      "1. Konuşmacı: Takımın açılışını yapar. Konuyu tanımlar, sınırları çizer ve takımın en güçlü 2 iddiasını tanıtır (Örn: 'Biz bugün şu iki nedenle kazanacağız...').",
      "2. Konuşmacı: Kendi iddialarını derinleştirir, yepyeni örnekler verir. Ayrıca rakibin o ana kadar anlattıklarına cevap verip onları çürütür.",
      "3. Konuşmacı: Maçı toparlayan kişidir. Yeni bir iddia ortaya atmaz; takımının neden çok iyi savunduğunu ve rakibin nerede hata yaptığını anlatarak maçı kapatır.",
      "Masanızda konuşan kişiye yardım edecek zaman tutucu rolleri belirleyin. Herkes takımın aktif bir parçası olmalıdır!"
    ],
    tips: [
      {
        title: "Takım Zinciri",
        text: "Münazarada bireysel şov yapılmaz. 2. ve 3. konuşmacılar mutlaka 'Arkadaşımın da belirttiği gibi...' diyerek önceki konuşmalara köprü kurmalıdır."
      }
    ]
  },
  {
    id: "adim-3",
    title: "3. Argüman Üretimi",
    subtitle: "Açıklama, Kanıt ve Örnekleme",
    category: "hazirlik",
    completed: false,
    details: [
      "Açıklama (Analiz): İddianız neden doğru? Kuru kuru 'böyle olmalı' demeyin. Bir dedektif gibi 'Çünkü...' diyerek olayın sebebini alt alta açıklayın.",
      "Kanıt (Gerekçe): Sadece sizin fikriniz yetmez. İddianızı destekleyecek bilimsel raporlar veya istatistikler toplayın (Örn: 'Dünya Sağlık Örgütü verilerine göre...').",
      "Örnek: Fikrinizi jürinin gözünde canlandırın. Anlattıklarınızı gündelik hayattan, herkesin bildiği somut bir sınıf ortamı gibi hikayelerle süsleyin."
    ],
    tips: [
      {
        title: "ARE Altın Formülü",
        text: "Sadece 'Teknoloji yararlıdır çünkü kolaylık sağlar' derseniz puan alamazsınız. Kolaylığın insanın hangi sorununu çözdüğünü adım adım açıklamalısınız."
      }
    ]
  },
  {
    id: "adim-4",
    title: "4. Kürsü Hitabeti ve Beden Dili",
    subtitle: "Duruş, göz teması ve ses tonu",
    category: "hitabet",
    completed: false,
    details: [
      "Kürsüye çıktığınızda dimdik durun. Ayaklarınızı yere sağlam basın. Sallanarak durmak güvensizlik hissi verir.",
      "Sadece önünüzdeki kâğıda bakarak okumayın. Gözlerinizi jüriyle, seyircilerle ve karşı masadaki arkadaşlarınızla ara ara buluşturun.",
      "Hep aynı ses düzeyiyle, robot gibi konuşmaktan kaçının. Önemli kelimelere geldiğinizde sesinizi biraz yükseltip vurgu yapın."
    ],
    tips: [
      {
        title: "Kürsü Heyecanı",
        text: "Heyecanlandığınızda derin bir nefes alın ve jürideki en güler yüzlü kişiye bakarak konuşmaya devam edin."
      },
      {
        title: "El-Kol Kullanımı",
        text: "Ellerinizi bel hizasının üzerinde tutun. Bir fikri savunurken avuç içlerinizi jüriye göstermek dürüstlük ve güven mesajı verir."
      }
    ]
  },
  {
    id: "adim-5",
    title: "5. Çürütme Teknolojisi",
    subtitle: "Rakip iddiaları çürütme sanatı",
    category: "mac",
    completed: false,
    details: [
      "Rakip konuşurken onları asla küçümsemeden, bir dedektif gibi dikkatle dinleyin ve hata yaptıkları yerleri anında not alın.",
      "Anlattıklarında çelişkiler, mantıksız iddialar veya kanıtı olmayan uydurma sözler yakalamaya çalışın.",
      "Kürsüye çıkınca şöyle diyebilirsiniz: 'Rakibimiz az önce ödevlerin gereksiz olduğunu söyledi, ancak öğrenilenlerin nasıl aklımızda kalacağını hiç açıklayamadı.'"
    ],
    tips: [
      {
        title: "Karşı Saldırı",
        text: "Çürütme yaparken rakibin zayıf ve önemsiz kelimelerine takılmayın. Onların en güçlü gördüğü temel argümanını (kalesini) yıkmaya çalışın."
      }
    ]
  },
  {
    id: "adim-6",
    title: "6. Jüri Değerlendirmesi ve Puanlama",
    subtitle: "Maçın kazananını belirleyen faktörler",
    category: "mac",
    completed: false,
    details: [
      "İçerik ve Mantık (30 Puan): İddialarınız mantıklı mı? Sağlam kanıtlar mı sundunuz? Jüri en çok buna bakar.",
      "Çürütme Becerisi (30 Puan): Kendi konunuzu anlatmanız yetmez. Sizi yenmeye çalışan rakibin fikirlerini çürütmeniz de çok değerlidir.",
      "Hitabet ve Etkileme (20 Puan): Sahnede rahat mısınız? Sesinizi, bedeninizi nasıl kullanıyorsunuz? Salondakileri etkileyebildiniz mi?",
      "Takım Uyumu (20 Puan): Arkadaşlarınızla birbirinizi desteklemeniz ve konuşma sürenizi taşırmadan tam zamanında bitirmeniz gerekir."
    ],
    tips: [
      {
        title: "Jüri Neleri Çok Sever?",
        text: "Her argümandan sonra gerekçenizi açıklayın. Güvenilir veriler sunun. Rakibin en güçlü iddialarını çarpıtmadan çürütün. Göz teması kurarak, kendinizden emin ve dostça bir çehreyle hitap edin."
      },
      {
        title: "Jüri Neleri Hiç Sevmez?",
        text: "Kayıt dışı bilgileri kesin doğruymuş gibi sunmayın. Süre bitmesine rağmen inatla konuşmayı sürdürmeyin. Rakibin şahsına eleştiriler yapmayın. Kağıttan tamamen okuyup göz temasını kesmeyin."
      }
    ]
  }
];

export const PREBUILT_DRAFTS: Record<string, { topic: string; tez: MünazaraTaslağı; antitez: MünazaraTaslağı }> = {
  uniform: {
    topic: "Okullarda Üniforma Giymek mi Serbest Kıyafet mi?",
    tez: {
      title: "Eşitlik ve Odaklanmanın Simgesi: Okul Üniforması",
      introduction: "Saygıdeğer Jüri Üyeleri, Kıymetli Öğretmenlerim ve Sevgili Arkadaşlar, bugün burada okullarda üniforma giyilmesinin sadece basit bir kıyafet seçimi değil, eğitimde fırsat eşitliğinin ve birlikteliğin temel taşı olduğunu savunmak üzere Hükümet tarafı olarak karşınızdayız. Hepinizi sevgiyle selamlıyorum.",
      definitions: "Bu münazarada 'okul üniforması' terimiyle, okul yönetimi tarafından belirlenen, tüm öğrencilerin uymak zorunda olduğu standart, temiz giyim kurallarını kastediyoruz. Tartışmamızın sınırlarını okul içi akademik başarı ve sosyal adalet çerçevesine oturtuyoruz.",
      arguments: [
        {
          title: "Sınıfsal Farklılıkları Gizler, Akran Zorbalığını Önler",
          explanation: "Her ailenin maddi durumu aynı değildir. Serbest kıyafet uygulamasında, son model marka kıyafet giyen öğrenciler ile eski kıyafet giymek zorunda kalan öğrenciler arasında gözle görülür bir fark oluşur. Ortaokul çağındaki çocuklar bu durumlardan çok kolay etkilenir ve gizli bir kıskançlık veya akran zorbalığı başlayabilir. Üniforma ise herkesi eşitler.",
          example: "Yapılan araştırmalara göre, okul forması giyen okullardaki öğrencilerin markalara dayalı ayrımcılığa uğrama oranı, serbest kıyafet giyen okullara göre %40 daha düşüktür.",
          bodyLanguageTip: "Bu iddiayı söylerken ellerinizi iki yana açarak 'herkes eşittir' vurgusunu bedeninizle gösterin, ses tonunuzu samimi ve kararlı tutun."
        },
        {
          title: "Zaman ve Odaklanma Tasarrufu Sağlar",
          explanation: "Ortaokulda her sabah 'Bugün ne giyeceğim?' derdi öğrencilerin zihnini gereksiz yere meşgul eder. Kıyafet seçimi, saç uyumu, ayakkabı tercihi derken hem değerli sabah uykusundan hem de çalışma enerjisinden çalınır. Üniforma ise sabah rutinine netlik kazandırır, öğrenciyi okula hazırlar.",
          example: "Sabahları kıyafet seçmeye harcanan ortalama 20 dakika, haftada neredeyse 2 saatlik bir ders çalışma veya dinlenme süresine eşittir. Üniforma bu süreyi öğrencilere geri verir.",
          bodyLanguageTip: "Bileğinize dokunarak zaman işareti yapın ve jüriye doğrudan bakarak konunun önemini göz temasıyla vurgulayın."
        }
      ],
      rebuttals: [
        {
          possibleCounterArgument: "Üniformalar öğrencilerin özgürlüğünü kısıtlar ve yaratıcılıklarını engeller.",
          rebuttalStrategy: "Kıyafet özgürlüğü yüzeysel bir özgürlüktür. Gerçek özgürlük ve yaratıcılık, kıyafetin markasında değil; akılda, sanatta, bilimde ve fikirlerdedir. Üniforma, çocukların dış görünüşe değil, iç dünyalarındaki yaratıcılığa odaklanmasını kolaylaştırır."
        },
        {
          possibleCounterArgument: "Okul formaları çok rahatsız ve sıkıcıdır, öğrenciler içinde mutlu olamazlar.",
          rebuttalStrategy: "Eğer formalar rahatsızsa, çözüm formayı tamamen kaldırmak değil, okul aile birlikleriyle formaların kumaş kalitesini ve rahatlığını artırmaktır. Birkaç kusurlu tasarım yüzünden eşitlik ilkesinden vazgeçilemez."
        }
      ],
      conclusion: "Kısacası sayın jüri, okullar podyum değil; bilimin ve arkadaşlığın beşiğidir. Markaların yarıştığı değil, zihinlerin ve bilgilerin yarıştığı bir okul ortamı için üniforma şarttır. Bizlere kulak verdiğiniz için teşekkür ederiz.",
      pointers: [
        "Sorulan soruları cevaplarken 'Biz podyum eğitimi değil, eşitlik eğitimi istiyoruz' sloganına geri dönün.",
        "Sürenizi aşmamak için giriş konuşmasını çok hızlı değil, kelimeleri tane tane söyleyerek yapın.",
        "Rakip masanın lüks kıyafet özgürlüğü savunmasını 'yüzeysel bir özgürlük anlatısı' olarak adlandırın."
      ]
    },
    antitez: {
      title: "Bireysel Özgürlük ve Güçlü Kişilik: Serbest Kıyafet",
      introduction: "Kıymetli Jüri Üyeleri ve Sevgili Arkadaşlarım, bugün Hükümet tarafının çizdiği yapay sınırları aşmak, ortaokul öğrencilerinin birer robot değil, kendi tercihleri olan saygın bireyler olduğunu savunmak üzere karşınızdayız. Muhalefet masası olarak hepinize en içten selamlarımızı sunuyoruz.",
      definitions: "Bizler 'serbest kıyafet' derken, okulların belirleyeceği genel görgü ve temizlik kurallarına uygun olmak şartıyla, öğrencilerin kendi seçtikleri rahat ve kişisel kıyafetlerle eğitim almalarını savunuyoruz.",
      arguments: [
        {
          title: "Bireysel İfade ve Karar Verme Becerisini Geliştirir",
          explanation: "Ortaokul dönemi, karakterimizin hızla şekillendiği, kendimizi tanımaya başladığımız en kritik dönemdir. Renkleri, tarzı ve kıyafeti seçmek bir çocuğun kendi kararlarını alma yolundaki ilk adımlarıdır. Çocukları tek tip gri gömleklere hapsetmek, onların özgüvenini ve orijinal kimliğini bastırır.",
          example: "Gelişmiş ülkelerdeki eğitim sistemlerinde çocukların serbest kıyafetle okula gitmesi, onların sorumluluk duygusunu ve kendi kararlarının arkasında durma bilincini erken yaşta geliştirir.",
          bodyLanguageTip: "Elinizi kalbinizin üzerine koyarak içtenliğinizi jüriye gösterin. Ses tonunuzda heyecanlı ve özgürlükçü bir esinti hissettirin."
        },
        {
          title: "Fiziksel Rahatlık ve Öğrenme Verimliliği",
          explanation: "Her öğrencinin beden yapısı farklıdır. Standart üretilen sert kumaşlı pantolonlar, yakası sıkan ceketler içinde bir çocuğun tüm gün sırada rahat oturması imkansızdır. Fiziksel olarak rahatsız olan bir öğrenci, dikkate değer bir süre derse odaklanamaz. Serbest kıyafet, öğrencilerin en rahat ettikleri kıyafetlerle derse adapte olmasını sağlar.",
          example: "Sıkı yakalı ve kalıplı formalar içinde terleyen, hareket edemeyen bir öğrencinin teneffüsteki koşma ve deşarj olma ihtiyacı kısıtlanır, bu da bir sonraki dersin verimini düşürür.",
          bodyLanguageTip: "Kollarınızı rahatça ileri doğru uzatarak hareket özgürlüğü kavramını somutlaştırın. Sesi akıcı ve net kullanın."
        }
      ],
      rebuttals: [
        {
          possibleCounterArgument: "Serbest kıyafet zengin ve fakir öğrenci arasındaki farkı ortaya çıkarıp kıskançlık yaratacaktır.",
          rebuttalStrategy: "Zengin ve fakir arasındaki farkları kıyafetleri saklayarak hayattan yok edemezsiniz. Telefonlar, çantalar, kalem kutuları hatta konuşulan tatil anıları bile bu farkı zaten gösterir. Okulun görevi farkları saklamak değil, çocuklara farklılıklara saygı duymayı, markalara göre değil karakterlere göre değer vermeyi öğretmektir!"
        },
        {
          possibleCounterArgument: "Serbest kıyafet olursa öğrenciler okula odaklanamazlar, her gün giyinecek şey ararlar.",
          rebuttalStrategy: "Çocukların sorumluluk bilinci hafife alınmamalıdır. Birkaç hafta içinde serbest giyinme sıradan bir hal alacaktır ve her gün saatlerce düşünme problemi kendiliğinden çözülecektir. Bunu okul disipliniyle yönetmek çok kolaydır."
        }
      ],
      conclusion: "Sonuç olarak kıymetli jüri üyeleri, eğitim tek tipleştirilmiş askerler yetiştirmek değil, rengarenk çiçeklerden oluşan bir bahçe kurmaktır. Gençlerin özgürlüğüne ve karakterine ket vurmayın, okullara renk getirin! Teşekkürler.",
      pointers: [
        "Karşı tarafın 'Eşitlik' argümanını 'Göstermelik bir eşitlik' olarak niteleyin.",
        "Öğrencinin kendi kıyafetini seçmesinin bir sorumluluk eğitimi olduğunu sıkça vurgulayın.",
        "Konuşmanızda 'Biz robot değil, düşünen ve tercih eden bireyleriz' mottosunu öne sürün."
      ]
    }
  },
  social_media: {
    topic: "Sosyal Medya İnsanları Yalnızlaştırır mı, Sosyalleştirir mi?",
    tez: {
      title: "Ekrandaki Yapay Dünyalar: Sosyal Medya İnsanları Yalnızlaştırır",
      introduction: "Saygıdeğer Jüri, Kıymetli Katılımcılar, bugün ekranların ardında kaybolan hayatları, binlerce takipçisi olduğu halde odasında tek başına olan modern insanı konuşacağız. Hükümet tarafı olarak, sosyal medyanın insanları sosyalleştirmek bir kenara dursun, onları derin bir yalnızlığa sürüklediğini savunmak için karşınızdayız.",
      definitions: "Sosyal medya; Instagram, TikTok gibi ağlar üzerinden kurulan sanal bağlantıları ifade eder. 'Yalnızlaşma' ise insanın derin, anlamlı yüz yüze ilişkilerden koparak kendini ruhen tek başına hissetmesi durumudur.",
      arguments: [
        {
          title: "Sanal İllüzyon: Nicelik (Sayı) Nitelikten Üstün Tutuluyor",
          explanation: "Sosyal medyadaki arkadaşlıklar birer sayı oyunundan ibarettir. 1000 takipçi, 500 beğeni gibi sahte onaylar, insanın gerçek dostluk ihtiyacını karşılamaz. Gerçek bir dostun yüz yüze bir kahkahası, ekrandaki 100 adet 'kalp' emojisine feda ediliyor. Sonuçta sanal dünyadan çıkıldığında gerçek dünyada dertleşecek kimse bulunamıyor.",
          example: "Yapılan psikolojik çalışmalara göre, günde 3 saatten fazla sosyal medya kullanan gençlerin kendilerini yalnız hissetme oranı, daha az kullananlara göre tam %65 oranında fazladır.",
          bodyLanguageTip: "Telefon tutuyormuş gibi ellerinizi daraltıp başınızı hafifçe bükerek ekrandaki dar yalnızlığı seyirciye hissettirin."
        },
        {
          title: "Mükemmellik Baskısı ve Sosyal Kaygı",
          explanation: "Sosyal medyada herkes en mutlu, en şık, en zengin hallerini paylaşır. Bunu izleyen ortaokul çağındaki bir çocuk, kendi sıradan hayatını başkalarının bu 'kusursuz' vitrinleriyle kıyaslar. Kendini yetersiz hisseder, sosyal ortamlara girmekten çekinir, içine kapanır ve yalnızlığı seçer.",
          example: "Sosyal medyadaki filtreli hayatlar yüzünden çocuklarda ve gençlerde 'Başkaları benden daha mutlu' travması hızla yayılmakta ve odasından çıkmama isteği uyandırmaktadır.",
          bodyLanguageTip: "Kararlı ve üzgün bir ses tonu kullanarak kelimelerinizin duygusal ağırlığını jüriye geçirin."
        }
      ],
      rebuttals: [
        {
          possibleCounterArgument: "Sosyal medya, dünyanın öbür ucundaki insanlarla bile iletişim kurup arkadaş olmayı sağlar.",
          rebuttalStrategy: "Dünyanın öbür ucundakiyle konuşurken yan odadaki annemizle, sıramızdaki arkadaşımızla bağı koparıyoruz. Coğrafi engelleri aşmak güzeldir ancak bu bağlar yüzeyseldir. Zoom üzerinden doğum günü kutlamak, gerçek bir göz göze sarılmanın verdiği içtenliği asla dolduramaz."
        },
        {
          possibleCounterArgument: "Çekingen, sessiz insanlar sosyal medyada kendilerini daha rahat ifade edip sosyalleşiyorlar.",
          rebuttalStrategy: "Bu durum sosyalleşme değil, gerçek hayattan kaçıştır. Sosyal medya çekingenliği tedavi etmez, aksine onu kalıcı hale getirir. Ekran arkasına saklanarak yazışan bir çocuk, gerçek dünyada bakkaldan ekmek isterken bile kekelemeye başlar."
        }
      ],
      conclusion: "Değerli jüri üyeleri, sosyalleşmek dokunmaktır, duygu paylaşmaktır. Ekranları kapatalım, gözlerin içine bakalım ve sahte beğeniler için gerçek sevgileri feda etmeyelim. Teşekkür ederiz.",
      pointers: [
        "Sık sık 'Takipçilerimiz çok ama dertleşecek dostumuz yok' vurgusu yapın.",
        "Rakibin getireceği 'iletişim kolaylığı' argümanını 'kolay ama içi boş' olarak savuşturun.",
        "Kürsü duruşunuzda dik ve seyirciye odaklı kalarak samimiyetinizi gösterin."
      ]
    },
    antitez: {
      title: "Sınırları Aşan Köprü: Sosyal Medya İnsanları Sosyalleştirir",
      introduction: "Değerli Jüri Üyeleri ve Sevgili Münazara Dostları, bugün karşı masanın geçmiş yüzyılda kalmış, teknoloji karşıtı bakış açısına modern bir yanıt vermek üzere karşınızdayız. Muhalefet olarak, sosyal medyanın insanları yalnızlaştırmadığını aksine tarihte hiç olmadığı kadar büyük topluluklarla sosyalleştirdiğini ispatlayacağız.",
      definitions: "Sosyal medyanın sosyalleştirmesi kavramı; insanların ortak ilgi alanlarına göre topluluklar kurabilmesini, ortak amaçlar için birleşebilmesini ve bilgi alışverişini hızlandırmasını kapsar.",
      arguments: [
        {
          title: "Ortak İlgi Alanları ve Kulüplerle Gerçek Aidiyet",
          explanation: "Gerçek dünyada, kendi sınıfınızda ya da mahallenizde astronomiye, resme veya kodlamaya ilgi duyan tek kişi olabilirsiniz. Bu sizi yalnız hissettirir. Ancak sosyal medya sayesinde Türkiye'nin dört bir yanından aynı hobiye sahip yüzlerce akranınızla gruplar kurabilir, projeler geliştirebilir ve asıl kendi dünyanızı bulursunuz.",
          example: "Sosyal medyadaki kitap okuma toplulukları ve kodlama kulüpleri sayesinde, binlerce ortaokul öğrencisi grup projeleri geliştirmiş ve hayat boyu sürecek dostluklar kurmuştur.",
          bodyLanguageTip: "Ellerinizi birleştirip jüriye doğru uzatarak 'köprü kurma' ve 'birliktelik' hareketini canlandırın."
        },
        {
          title: "Mesafeleri Yok Eden İletişim Gücü",
          explanation: "Sosyal medya olmasaydı, okul değiştiren, başka şehre taşınan veya uzakta yaşayan akrabalarımızla ilişkilerimiz zamanla solup giderdi. Bugün ise tek bir tuşla anında görüntülü konuşuyor, anılarımızı paylaşıyoruz. Sosyal medya akrabalık ve arkadaşlık bağlarının zaman ve mesafe yüzünden kopmasını engeller.",
          example: "Yaz tatilinde köylerine giden çocukların, şehirdeki okul arkadaşlarıyla sosyal medyada oyunlar oynayarak ve mesajlaşarak bağlarını canlı tutması buna en güzel örnektir.",
          bodyLanguageTip: "Gülümseyerek sesinizi daha neşeli tutun, teknolojinin getirdiği neşeyi konuşmanıza yansıtın."
        }
      ],
      rebuttals: [
        {
          possibleCounterArgument: "Sosyal medyada çok vakit geçiren insanlar yüz yüze bakmayı unutup yalnızlaşıyorlar.",
          rebuttalStrategy: "Sorun sosyal medyanın kendisinde değil, onu aşırı kullanan bireyde veya aile kontrolündedir. Arabalar kaza yapıyor diye arabaları yasaklamıyor, doğru kullanmayı öğretiyoruz. Sosyal medya da ölçülü kullanıldığında sosyalleşmenin en güçlü motorudur."
        },
        {
          possibleCounterArgument: "Sanal arkadaşlıklar güvenilmez ve sahtedir, gerçek dostluğun yerini tutamaz.",
          rebuttalStrategy: "Sanal ortamda başlayan birçok ilişki daha sonra buluşmalarla, ortak okul projeleriyle ve gerçek dostluklarla taçlanıyor. Teknolojiyi düşman ilan etmek yerine onu dostluklarımızı beslemek için bir araç olarak görmeliyiz."
        }
      ],
      conclusion: "Saygıdeğer jüri, sosyal medya duvarlar örmez, tam aksine köprüler kurar. Bu köprülerden geçmek ve dünyayla sosyalleşmek varken, eski çağların yalnızlığına sığınmayı reddediyoruz. Teşekkürler.",
      pointers: [
        "Sıkça kullanılan 'Sanal köprüler gerçek dostluklara açılır' motto’sunu vurgulayın.",
        "Karşı tarafın teknoloji korkusunu 'Yeniliğe direnç göstermek' olarak adlandırın.",
        "Sesinizin tonunu kendinden emin, enerjik ve vizyoner tutun."
      ]
    }
  },
  success_source: {
    topic: "Başarıda Çalışmak mı Önemlidir, Zeka mı?",
    tez: {
      title: "Emeğin Zaferi: Başarıda Asıl Önemli Olan Çalışmaktır",
      introduction: "Değerli Jüri Üyeleri ve Sevgili Münazara Severler, bugün doğuştan gelen ayrıcalıklara karşı dik duran, alın terinin ve emeğin asıl sarsılmaz zaferini savunan Hükümet tarafı olarak buradayız. Başarının sihirli bir zeka formülüyle değil, disiplinli bir çalışmayla geleceğini göstereceğiz.",
      definitions: "Bu tartışmada 'çalışmak'; hedef odaklı, planlı, pes etmeden yapılan disiplinli çabayı ifade eder. 'Başarı' ise hedeflenen akademik, sportif ya da sanatsal sonuca ulaşma durumudur.",
      arguments: [
        {
          title: "İşlenmeyen Demir Pas Tutar: Gelişim Zihniyeti",
          explanation: "Çok yüksek bir zekanız olsa bile, eğer çalışmazsanız o zeka körelir ve hiçbir işe yaramaz. Zeka bir tohumdur, ancak o tohumu sulayacak, büyütecek olan şey çalışmaktır. Çalışmak beyindeki nöron bağlarını güçlendirir ve her geçen gün kapasitemizi artırır. Çalışan insan her zaman çalışmayan zekiyi geçer.",
          example: "Dünyaca ünlü bilim adamı Edison, ampulü bulurken binlerce kez hata yapmış ve pes etmeden çalışarak başarmıştır. Kendisi de 'Başarının %1'i deha, %99'u alın teridir' demiştir.",
          bodyLanguageTip: "Alnınıza veya parmak uçlarınıza hafifçe dokunup ardından kararlı şekilde elinizi yumruk yaparak emeğin gücünü vurgulayın."
        },
        {
          title: "Disiplin ve Dayanıklılık Engelleri Aşar",
          explanation: "Hayat engellerle doludur. Sadece zeki olan bir insan zor bir soruyla veya problemle karşılaştığında, 'Ben çözemedim' diyerek pes edebilir. Ancak çalışmayı ve mücadeleyi öğrenmiş bir öğrenci, başarısızlıklardan ders çıkarır, daha çok çalışır ve eninde sonunda o engeli aşar. Disiplin, zekayı her zaman alt eder.",
          example: "Basketbol efsanesi Michael Jordan lisenin ilk yıllarında okul takımından elenmişti. Sadece zekasına güvenseydi sporu bırakırdı ama o günde 8 saat antrenman yapıp dünyanın en iyisi oldu.",
          bodyLanguageTip: "Sesinizi yükselterek 'Asla pes etmemek!' kelimesini üzerine basa basa, jüri üyelerinin gözlerinin içine bakarak vurgulayın."
        }
      ],
      rebuttals: [
        {
          possibleCounterArgument: "Zeki olmayan bir insan ne kadar çalışırsa çalışsın üstün bir başarı elde edemez.",
          rebuttalStrategy: "Bu bilimsel olarak yanlıştır. Beyin plastik bir organdır (nöroplastisite); çalışıp antrenman yaptıkça yeni yollar açar. Bugün zeka testi (IQ) puanları bile düzenli zihinsel antrenman ve ders çalışma ile ciddi şekilde yükseltilebilmektedir."
        },
        {
          possibleCounterArgument: "Zeki insanlar konuları tek seferde anlar ve çalışmadan büyük sınavlarda birinci olabilirler.",
          rebuttalStrategy: "Bu çok nadir ve yanıltıcı bir durumdur. Ortaokul düzeyinde belki günü kurtarırlar fakat lise ve üniversite sınavları gibi büyük maratonlarda sadece zekayla yürünemez. Çalışma disiplini olmayan zekiler ilk ciddi yokuşta havlu atarlar."
        }
      ],
      conclusion: "Kısacası saygıdeğer jüri, dehalar doğabiliriz ama başarılı olmak bizim kendi seçimimiz ve emeğimizdir. Alın terinin zaferi her zaman ışıldayacaktır. Teşekkür ederiz.",
      pointers: [
        "Sıkça 'Emek olmadan yemek olmaz, deha olmadan başarı olur!' mottosunu kullanın.",
        "Edison ve Michael Jordan gibi sarsılmaz gerçek hayat örneklerine konuşmanızda tekrar tekrar değinin.",
        "Kürsüde konuşurken dik durun, ellerinizi masaya dayamadan serbest ve etkili bir şekilde kullanın."
      ]
    },
    antitez: {
      title: "Yolu Çizen Akıl: Başarıda Asıl Önemli Olan Zekadır",
      introduction: "Kıymetli Jüri Üyeleri ve Sevgili Arkadaşlarım, bugün saatlerce aynı noktayı kazanmaya çalışan düz işçiliğe karşı, başarının asıl mimarı olan insan aklını ve pratik zekayı savunmak üzere karşınızdayız. Muhalefet olarak başarıyı başlatan kıvılcımın zeka olduğunu kanıtlayacağız.",
      definitions: "Burada 'zeka'; hızlı kavrama, problem çözme, analiz etme ve değişen durumlara hızla adapte olabilme yeteneğidir. Başarıda yönü çizen fener zekadır.",
      arguments: [
        {
          title: "Zaman ve Kaynak Verimliliği",
          explanation: "Günde 10 saat çalışarak bir konuyu ancak anlayan biriyle, üstün zekası sayesinde 10 dakikada mantığını kavrayan biri arasında devasa bir verimlilik farkı vardır. Zeki bir insan stratejik düşünür, nerede ne yapacağını bilir, kendini boşuna yormaz. Zaman en değerli kaynaktır ve zeka bu kaynağı mükemmel yönetir.",
          example: "Büyük buluşlar yapan yazılımcılar veya girişimciler geceler boyu ezber yapmazlar; kimsenin görmediği bir açığı pratik zekalarıyla görüp tek hamlede milyonlarca insanın önüne geçerler.",
          bodyLanguageTip: "İşaret parmağınızı şakağınıza götürerek 'akıl' ve 'strateji' hareketini net bir şekilde yapın."
        },
        {
          title: "Yaratıcılık ve Özgünlük Sadece Zekayla Mümkündür",
          explanation: "Çok fazla çalışarak harika bir taklitçi veya ezberci olabilirsiniz ama asla çığır açan bir lider ya da mucit olamazsınız. Çalışmak mevcut olanı tekrar etmektir. Zeka ise kimsenin kuramadığı bağlantıları kurup yepyeni, orijinal fikirler üretmektir. Gerçek ve kalıcı başarı her zaman fark yaratmaktır.",
          example: "Sıradan bir ressam binlerce saat tuval başında çalışıp harika kopyalar çizer. Ancak Picasso üstün dehasıyla kübizm akımını başlatarak sanat tarihini baştan yazmıştır.",
          bodyLanguageTip: "Heyecanlı bir ses tonuyla 'Asıl başarı taklit etmek değil, fark yaratmaktır!' diyerek jüriyi etkileyin."
        }
      ],
      rebuttals: [
        {
          possibleCounterArgument: "Çalışmayan zeki insanlar paslanır ve hayatta başarısız olurlar.",
          rebuttalStrategy: "Çalışma eylemi de zekanın kontrolündedir. Zeki insan ne zaman ve ne kadar çalışması gerektiğini akıllıca planlar. Körlemesine saatlerce çalışmak yerine, nokta atışı çalışarak hedefe ulaşır. Dolayısıyla çalışma da zekanın bir alt koludur."
        },
        {
          possibleCounterArgument: "Zeka doğuştan gelir, adil değildir, o yüzden çalışmak daha önemlidir.",
          rebuttalStrategy: "Münazara, adalet tartışması değil, gerçeğin arayışıdır. Zekanın doğuştan gelmesi onun başarıdaki ezici üstünlüğünü ve yönlendirici rolünü değiştirmez. Rüzgarın nereden estiği değil, yelkeni aklınızla nasıl yönettiğiniz başarıyı belirler."
        }
      ],
      conclusion: "Sayın jüri, saatlerce kazmak madenciyi sadece yorar; asıl elması bulduran şey madenin yerini tespit eden akıldır. Başarı, aklın zaferidir. Teşekkürler.",
      pointers: [
        "Sıkça 'Körlemesine çalışma değil, akıllıca yön çizme!' anlayışını savunun.",
        "Picasso ve yaratıcı dehalar gibi ezbere değil orijinal fikre dayalı başarı hikayelerini referans alın.",
        "Duruşunuzu dinamik, göz temasınızı güçlü tutarak konuşmanızı yönetin."
      ]
    }
  }
};
