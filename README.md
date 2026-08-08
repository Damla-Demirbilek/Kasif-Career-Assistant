# Kaşif — Geleceğin Meslekleri Keşif Asistanı

Live Demo
[Kaşif Career Assistant'ı Görüntüle](https://damla-demirbilek.github.io/Kasif-Career-Assistant/)
 
## 1. Proje Adı

**Kaşif — Geleceğin Meslekleri Keşif Asistanı**

Kaşif; DİGEM’e gelen 14–24 yaş arasındaki gençlerin ilgi alanlarını keşfetmelerini, geleceğin mesleklerini tanımalarını, bu mesleklerin gerektirdiği yetkinlikleri öğrenmelerini ve kendilerine uygun bir gelişim yol haritası oluşturmalarını sağlayan web tabanlı bir kariyer keşif platformudur.

**Slogan:**  
**Geleceğini tahmin etme, keşfet.**

---

## 2. Çözülen Problem

DİGEM’e gelen gençler, gelecekte ortaya çıkması veya dönüşmesi beklenen meslekler hakkında çoğu zaman dağınık, yüzeysel ve doğruluğu belirsiz bilgilerle karşılaşmaktadır. Gençlerin önemli bir bölümü:

- Hangi mesleklerin gelecekte önem kazanacağını bilmemektedir.
- İlgi alanları ile meslekler arasında bağlantı kurmakta zorlanmaktadır.
- Seçtiği bir mesleğe başlamak için hangi becerileri geliştirmesi gerektiğini kestirememektedir.
- İnternette bulunan yoğun bilgi arasından güvenilir bir başlangıç noktası seçememektedir.
- DİGEM eğitimlerinin kendi kariyer hedefleriyle nasıl ilişkili olduğunu görememektedir.
- Yapay zekâ tarafından verilen kariyer önerilerini sorgulamadan kesin karar olarak değerlendirebilmektedir.

Kaşif, bu problemi tek bir platform üzerinden çözmeyi amaçlamaktadır. Kullanıcı; keşif testini tamamlayarak ilgi alanlarıyla eşleşen meslekleri görmekte, önerinin neden verildiğini incelemekte, ilgili yetkinlikleri öğrenmekte ve 30/60/90 günlük yol haritası oluşturmaktadır.

---

## 3. Hedef Kitle — DİGEM Perspektifi

### Birincil hedef kitle

- DİGEM’lerden yararlanan 14–24 yaş arasındaki gençler
- Kariyer alanını henüz belirlememiş lise ve üniversite öğrencileri
- Dijital ve teknoloji odaklı meslekleri keşfetmek isteyen gençler
- Yeni bir beceri alanına başlamak isteyen katılımcılar
- Kendisine uygun eğitim ve atölyeleri bulmak isteyen kullanıcılar

### İkincil hedef kitle

- DİGEM eğitmenleri
- Gençlik çalışanları
- Kariyer danışmanları
- Eğitim ve atölye planlayan belediye veya kurum çalışanları

### DİGEM perspektifi

Kaşif, yalnızca meslek tanıtan bir web sitesi değildir. Meslek keşfini DİGEM eğitimleriyle ilişkilendirerek gençlerin keşif sonucunu somut bir öğrenme adımına dönüştürmesini sağlar.

---

## 4. Kullanılan Yapay Zekâ Araçları

### ChatGPT

Projenin aşağıdaki aşamalarında kullanılmıştır:

- Proje probleminin ve çözüm önerisinin netleştirilmesi
- Hedef kitlenin belirlenmesi
- Site haritasının ve kullanıcı akışlarının hazırlanması
- Meslek kategorilerinin oluşturulması
- Meslek açıklamalarının ve yetkinlik listelerinin hazırlanması
- Keşif testi sorularının geliştirilmesi
- Meslek eşleştirme mantığının planlanması
- 30/60/90 günlük yol haritalarının oluşturulması
- HTML, CSS ve JavaScript kodlarının üretilmesi
- Hata ayıklama ve kod düzenleme
- Etik, mahremiyet ve kullanılabilirlik metinlerinin hazırlanması
- README dokümantasyonunun oluşturulması

### Yapay zekâ kullanım sınırı

Uygulamadaki **AI Mentör** bölümü, bu MVP sürümünde gerçek zamanlı bir dış yapay zekâ API’sine bağlı değildir. Güvenli demo modu olarak, önceden hazırlanmış meslek verileri ve kurallar üzerinden yanıt üretmektedir. Bu tercih:

- API anahtarı güvenliği
- Ücretsiz ve kesintisiz demo
- Kullanıcı verisinin dış servislere gönderilmemesi
- İnternet bağlantısı olmadan çalışabilme

amaçlarıyla yapılmıştır.

---

## 5. Yapay Zekâ Kullanım Süreci ve Prompt Örnekleri

Projede promptlar rastgele değil; **rol, bağlam, görev, kısıt ve teslimat** bileşenleri kullanılarak yapılandırılmıştır.

### Aşama 1 — Problem ve ürün tanımı

**Amaç:** Projenin hangi kullanıcı problemini çözeceğini belirlemek.

**Kullanılan prompt örneği:**

> Sen kıdemli bir ürün yöneticisisin. DİGEM’e gelen 14–24 yaş arasındaki gençlerin geleceğin meslekleri hakkında yeterli bilgi ve rehberliğe sahip olmaması problemini analiz et. Bu probleme yönelik, web tabanlı ve çalışan MVP olarak geliştirilebilecek bir çözüm öner. Çözüm; kişiselleştirilmiş meslek keşfi, yetkinlik yol haritası ve DİGEM eğitim eşleştirmesi içersin. Çıktıyı problem, hedef kitle, çözüm, temel özellikler ve kullanıcı akışı başlıklarıyla sun.

### Aşama 2 — Meslek veri modelinin hazırlanması

**Amaç:** Meslek içeriklerinin tutarlı bir yapıda hazırlanması.

**Kullanılan prompt örneği:**

> Sen kariyer teknolojileri alanında çalışan bir içerik tasarımcısısın. Geleceğin meslekleri için standart bir veri modeli oluştur. Her meslek için şu alanları kullan: meslek adı, kategori, kısa açıklama, teknik beceriler, sosyal beceriler, kullanılan araçlar, başlangıç adımları, 30/60/90 günlük yol haritası, proje fikirleri ve DİGEM eğitimleri. Dil 14–24 yaş grubuna uygun, sade ve motive edici olsun. Kesin istihdam veya maaş garantisi verme.

### Aşama 3 — Keşif testi

**Amaç:** İlgi alanlarına göre açıklanabilir meslek önerileri üretmek.

**Kullanılan prompt örneği:**

> Sen kariyer keşfi ve kullanıcı deneyimi konusunda uzman bir araştırmacısın. 14–24 yaş arasındaki gençler için 16 soruluk bir ilgi alanı keşif testi oluştur. Sorular teknik problem çözme, veri ve analitik düşünme, yaratıcılık, insan odaklılık, güvenlik, sürdürülebilirlik, liderlik ve uygulamalı öğrenme boyutlarını ölçsün. Sorular tanı koymasın ve psikometrik test iddiası taşımasın. Her soru 1–5 Likert ölçeğiyle yanıtlanabilsin.

### Aşama 4 — Web sitesi geliştirme

**Amaç:** Çalışan, responsive ve profesyonel bir web uygulaması üretmek.

**Kullanılan prompt örneği:**

> Sen deneyimli bir frontend geliştiricisin. Kaşif adlı geleceğin meslekleri keşif platformu için HTML, CSS ve JavaScript kullanarak çalışan bir web sitesi geliştir. Site; ana sayfa, meslek kütüphanesi, keşif testi, sonuçlar, kişisel panel, yol haritası, DİGEM eğitimleri, AI Mentör ve hakkında bölümlerini içersin. DİGEM marka renkleri olan #D97706 turuncu ve #1F2937 lacivert/gri tonlarını kullan. Site mobil, tablet ve masaüstünde responsive olsun. Kodları index.html, assets/css/styles.css, assets/js/data.js ve assets/js/app.js olarak ayır. Harici framework kullanma.

### Aşama 5 — Etik ve mahremiyet

**Amaç:** Yanıltıcı ve riskli kariyer yönlendirmelerini önlemek.

**Kullanılan prompt örneği:**

> Sen sorumlu yapay zekâ ve dijital mahremiyet uzmanısın. 14–24 yaş grubuna yönelik kariyer keşif sitesinde kullanılacak etik sınırları hazırla. Sistem kesin meslek kararı vermesin, maaş veya iş garantisi sunmasın, cinsiyet veya sosyoekonomik durum üzerinden kalıp yargılı yönlendirme yapmasın, hassas kişisel veri istemesin ve sonuçların keşif amaçlı olduğunu açıkça belirtsin. Çıktıyı kısa ve kullanıcı dostu maddeler hâlinde sun.

### Aşama 6 — Hata ayıklama ve iyileştirme

**Amaç:** Fonksiyonların çalışmasını ve dosya yapısının düzenli olmasını sağlamak.

**Kullanılan prompt örneği:**

> Sen kıdemli bir frontend geliştirici ve test uzmanısın. Verilen HTML, CSS ve JavaScript projesini incele. Menü bağlantıları, sayfa geçişleri, keşif testindeki önceki/sonraki butonları, filtreleme, meslek detayları, yol haritası, localStorage kullanımı ve mobil menüyü kontrol et. Hataları düzelt; çalışan kodu profesyonel klasör yapısıyla sun. Mevcut tasarımı ve özellikleri gereksiz yere değiştirme.

---

## 6. Projenin DİGEM’lere Katkısı

Kaşif’in DİGEM’lere sağlayabileceği katkılar şunlardır:

- Gençlerin geleceğin mesleklerini tek bir platform üzerinden keşfetmesini sağlar.
- Meslekler ile DİGEM eğitimleri arasında görünür bağlantı kurar.
- Gençlerin kendi ilgi alanlarını tanımasına yardımcı olur.
- Eğitim seçimini daha bilinçli hâle getirir.
- Katılımcıların rastgele eğitim seçmesi yerine hedef odaklı ilerlemesini destekler.
- DİGEM eğitmenleri için kariyer rehberliği sırasında kullanılabilecek dijital bir araç sunar.
- Atölye ve eğitim planlamalarında gençlerin ilgi alanlarının anlaşılmasına katkı sağlayabilir.
- Teknik, yaratıcı, sosyal, sürdürülebilirlik ve insan odaklı meslekleri aynı sistem içinde sunar.
- DİGEM’in gençleri geleceğin mesleklerine hazırlama amacını destekler.

---

## 7. Projenin Kullanılabilirliği

Kaşif, kurulum gerektirmeyen ve doğrudan tarayıcıda çalışan bir web sitesidir.

### Kullanım adımları

1. Proje ZIP dosyası bilgisayara indirilir.
2. ZIP dosyası tamamen ayıklanır.
3. `kasif` klasörü açılır.
4. `index.html` dosyasına çift tıklanır.
5. Site Chrome veya Microsoft Edge üzerinde kullanılır.

### Kullanılabilirlik özellikleri

- Mobil, tablet ve masaüstü uyumlu responsive tasarım
- Açık ve anlaşılır menü yapısı
- Meslek arama ve kategori filtreleme
- Önceki/sonraki soru navigasyonu
- Açıklanabilir sonuç ekranı
- 30/60/90 günlük yol haritası
- Görevleri tamamlandı olarak işaretleme
- Tarayıcı üzerinde ilerleme kaydı
- Üyelik gerektirmeyen kullanım
- Hassas kişisel veri istememe
- Etik ve mahremiyet bilgilendirmesi
- İnternet bağlantısı olmadan temel özellikleri kullanabilme

---

## 8. Temel Özellikler

- 40’tan fazla geleceğin mesleği
- Dokuz meslek kategorisi
- Meslek arama ve filtreleme
- Meslek karşılaştırma
- 16 soruluk keşif testi
- İlgi alanı eşleştirme algoritması
- Açıklanabilir meslek önerileri
- Kişisel dashboard
- Meslek bazlı 30/60/90 günlük yol haritası
- İlerleme takibi
- DİGEM eğitim bağlantıları
- AI Mentör güvenli demo modu
- Responsive arayüz
- Dark mode
- Etik ve mahremiyet uyarıları

---

## 9. Teknik Yapı

```text
kasif/
├── index.html
├── README.md
└── assets/
    ├── css/
    │   └── styles.css
    └── js/
        ├── data.js
        └── app.js
```

### Dosyaların görevleri

- **index.html:** Sitenin sayfa yapısını ve ana bileşenlerini içerir.
- **styles.css:** Renkler, responsive tasarım, kartlar, animasyonlar ve dark mode stillerini içerir.
- **data.js:** Meslekler, kategoriler, test soruları ve eğitim kaynaklarını içerir.
- **app.js:** Sayfa geçişleri, filtreleme, test hesaplama, sonuçlar, yol haritası ve AI Mentör fonksiyonlarını içerir.

---

## 10. Etik, Yanlılık ve Dijital Mahremiyet

Kaşif aşağıdaki ilkeleri uygular:

- Kullanıcıya kesin kariyer kararı vermez.
- Sonuçları psikometrik test olarak sunmaz.
- Maaş veya istihdam garantisi vermez.
- Kullanıcının cinsiyeti, ekonomik durumu veya benzeri özellikleri üzerinden meslek sınırlaması yapmaz.
- Hassas kişisel veri istemez.
- Üyelik zorunluluğu bulunmaz.
- Kullanıcı seçimleri yalnızca tarayıcı içinde saklanır.
- AI Mentör gerçek zamanlı dış API kullanmadığı için kullanıcı soruları dış servislere gönderilmez.
- Kullanıcıya farklı alanları deneyerek ve eğitmen desteği alarak karar vermesi önerilir.

---

## 11. MVP Kapsamı ve Sınırlılıklar

### MVP kapsamında bulunanlar

- Çalışan web arayüzü
- Meslek kütüphanesi
- Keşif testi
- Meslek öneri sistemi
- Yol haritası
- Eğitim yönlendirmeleri
- Demo mentör
- Responsive tasarım

### Mevcut sınırlılıklar

- AI Mentör gerçek zamanlı yapay zekâ API’sine bağlı değildir.
- Kullanıcı hesabı ve çevrim içi veritabanı bulunmamaktadır.
- DİGEM eğitim içerikleri kurumlara göre değişebileceği için bağlantılar dış kaynaklara yönlendirme amacı taşır.
- Keşif testi bilimsel veya psikometrik değerlendirme değildir.
- Meslek içerikleri zaman içinde güncellenmelidir.

---

## 12. Gelecek Geliştirmeler

- Gerçek zamanlı ve güvenli AI Mentör entegrasyonu
- Kullanıcı hesabı ve bulut tabanlı ilerleme kaydı
- DİGEM merkezleri için yönetici paneli
- Gerçek eğitim takvimi ve başvuru entegrasyonu
- PDF kariyer keşif raporu
- Rozet ve görev sistemi
- Daha fazla meslek ve eğitim içeriği
- Kullanılabilirlik testi ve kullanıcı geri bildirimi modülü
- Türkçe dışında farklı dil seçenekleri

---

## 13. Geliştiren

**Damla Demirbilek**

Bilgisayar Mühendisliği Öğrencisi

---

## 14. Proje Notu

Bu proje, “Yazılım ve Tasarım için Komut Mühendisliğine Giriş Programı” kapsamında öğrenilen prompt tasarımı, üretken yapay zekâ kullanımı, kullanıcı odaklı ürün geliştirme, UI/UX, etik yapay zekâ ve dokümantasyon becerilerinin uygulamaya dönüştürülmesi amacıyla hazırlanmıştır.
