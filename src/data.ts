import { MünazaraAdımı } from "./types";

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
