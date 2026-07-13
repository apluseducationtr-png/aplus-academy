# A Plus Academy Student Forms Plan

Bu dokuman, A Plus Academy sitesine eklenecek ogrenci bilgi ve ders kayit formlarinin soru yapisini, veri toplama mantigini ve Google Sheets entegrasyon planini tanimlar.

## Onerilen Sistem

En pratik ve surdurulebilir yapi:

1. Formlar herkese acik menu sayfalari olarak gosterilmez.
   - AP formu AP program sayfasinin icinde yer alir.
   - IB formu IB program sayfasinin icinde yer alir.
   - SAT formu Digital SAT / ACT program sayfasinin icinde yer alir.
   - Genel ogrenci bilgi formu menude gorunmeyen kontrollu bir sayfada yer alir: `/formlar/ogrenci-bilgi-formu`

2. Ziyaretci token olmadan detayli formu gormez.
   - Program sayfasinda "Form erisimi iste" karti gorunur.
   - Detayli form sadece `formToken` parametresi olan kopyalanabilir linkle acilir.
   - Ornek: `/programlar/ap?formToken=AP-XXXXXX#kayit-formu`

3. Her form A Plus tasarimi ile calisir.
   - Google Forms linki gibi disari firlatmaz.
   - Mobilde kolay doldurulur.
   - Gerekli alanlar ve kosullu sorular site icinde kontrol edilir.

4. Form gonderimleri tek bir Google Spreadsheet icinde ayri tablara yazilir.
   - `Form Talepleri`
   - `Genel Ogrenci Bilgi`
   - `AP Kayit`
   - `IB Kayit`
   - `SAT Kayit`

5. Her kayitta otomatik sistem alanlari tutulur.
   - `submission_id`
   - `created_at`
   - `form_type`
   - `form_token`
   - `copy_link`
   - `student_full_name`
   - `parent_full_name`
   - `parent_phone`
   - `parent_email`
   - `student_email`
   - `source_url`
   - `utm_source`
   - `utm_campaign`
   - `consent_confirmed`

6. Google Sheets baglantisi `APLUS_FORMS_WEBHOOK_URL` ortam degiskeni ile aktif edilir.
   - Bu deger yoksa site formlari gosterir ama gonderim butonlarini pasif tutar.
   - Bu sayede canli sitede veri kaybi yasanmaz.

7. Opsiyonel otomasyonlar sonradan eklenir.
   - Ekip e-posta bildirimi
   - Veliye/ogrenciye otomatik teslim alindi e-postasi
   - WhatsApp takip listesine manuel veya otomatik aktarim
   - CRM, Airtable veya Supabase'e gecis

## Neden Google Sheets?

Google Sheets bu asama icin en iyi ara cozumdur:

- Ekip tarafinda kullanmasi kolay.
- Program bazli ayri listeler tutulabilir.
- Export, filtreleme ve paylasim pratiktir.
- Site uzerinden gelen formlar Apps Script veya Google Sheets API ile ilgili taba yazilabilir.
- Daha sonra CRM veya database yapisina gecmek kolaydir.

Google Forms hizli bir alternatif olabilir ama A Plus sitesinin marka deneyimini zayiflatir. Supabase veya Airtable daha guclu olabilir ama ilk kurulum ve ekip aliskanligi acisindan daha fazla operasyon ister.

## Kontrollu Form Linki Mantigi

Formlar herkese acik menude yer almamalidir. Program sayfalarinda form bolumu bulunur; ancak ziyaretci formun kendisini degil, once "Form erisimi iste" kartini gorur.

A Plus ekibi, uygun ogrenci veya veli icin kopyalanabilir bir form linki uretip WhatsApp ya da e-posta ile gonderebilmelidir.

Onerilen link yapisi:

- AP ders kayit formu: `/programlar/ap?formToken=AP-XXXXXX#kayit-formu`
- IB ders kayit formu: `/programlar/ib-diploma?formToken=IB-XXXXXX#kayit-formu`
- SAT ders kayit formu: `/programlar/digital-sat-act?formToken=SAT-XXXXXX#kayit-formu`
- Genel ogrenci bilgi formu: `/formlar/ogrenci-bilgi-formu?formToken=GENEL-XXXXXX`

Bu linkler iki sekilde uretilebilir:

1. Manuel onayli ilk surum
   - Form erisim talebi Google Sheets'e duser.
   - Ekip `access_token` kolonuna kod yazar veya sistemin uretecegi kodu kopyalar.
   - `copy_link` kolonunda hazir gonderim linki gorunur.
   - Ekip bu linki kopyalayip ogrenciye/veliye gonderir.

2. Otomatik token surumu
   - Talep onaylaninca sistem otomatik token uretir.
   - Link otomatik olusur.
   - Ekip isterse linki manuel kopyalar, isterse sistem otomatik e-posta gonderir.

Ilk asamada en pratik yapi: Google Sheets'te her talep satirinda `copy_link` kolonu olmasi. Bu kolon, ekip tarafindan direkt kopyalanip WhatsApp veya e-postaya yapistirilacak nihai linki tutar.

## KVKK ve Izin Notlari

Formlarda gereksiz hassas veri toplanmamalidir. Kimlik numarasi, pasaport, saglik raporu gibi bilgiler bu formlara alinmamalidir.

Her formun sonunda su onaylar bulunmalidir:

- "Paylastigim bilgilerin A Plus Academy tarafindan egitim planlamasi, iletisim ve kayit sureci amaciyla islenmesini kabul ediyorum."
- "Ogrenci 18 yasindan kucukse bu form veli/vasisi bilgisi ve onayi ile doldurulmustur."
- "A Plus Academy'nin benimle telefon, e-posta veya WhatsApp uzerinden iletisime gecmesini kabul ediyorum."

Ogrenme sureci icin gerekli ozel durumlar sorulabilir; ancak soru hassas veri istemeyecek sekilde yazilmalidir:

"Egitim planlamasinda bilmemizi istediginiz ogrenme, dikkat, zaman yonetimi veya sinav konforu ile ilgili bir durum var mi?"

Bu alan opsiyonel olmalidir.

## Form 1: Genel Ogrenci Bilgi Formu

Amac: Ilk tanisma sonrasinda ogrencinin akademik profili, hedefleri, iletisim bilgileri ve uygun program yonlendirmesi icin temel verileri toplamak.

### Bolum A - Ogrenci Bilgileri

1. Ogrencinin adi soyadi
   - Tip: Kisa yanit
   - Zorunlu: Evet

2. Ogrencinin dogum yili
   - Tip: Kisa yanit veya sayi
   - Zorunlu: Evet

3. Ogrencinin sinif seviyesi
   - Tip: Tek secim
   - Secenekler: 8, 9, 10, 11, 12, Mezun, Universite ogrencisi, Diger
   - Zorunlu: Evet

4. Ogrencinin okulu
   - Tip: Kisa yanit
   - Zorunlu: Evet

5. Ogrencinin okudugu sistem
   - Tip: Coklu secim
   - Secenekler: AP, IB, A-Level, IGCSE/GCSE, MEB, Amerikan lise sistemi, Kanada lise sistemi, Diger
   - Zorunlu: Evet

6. Egitim dili
   - Tip: Tek secim
   - Secenekler: Turkce agirlikli, Ingilizce agirlikli, Cift dilli, Diger
   - Zorunlu: Hayir

### Bolum B - Veli / Iletisim Bilgileri

7. Veli adi soyadi
   - Tip: Kisa yanit
   - Zorunlu: Evet

8. Veli yakinlik derecesi
   - Tip: Tek secim
   - Secenekler: Anne, Baba, Vasi, Diger
   - Zorunlu: Evet

9. Veli telefon numarasi
   - Tip: Telefon
   - Zorunlu: Evet

10. Veli e-posta adresi
    - Tip: E-posta
    - Zorunlu: Evet

11. Ogrenci telefon numarasi
    - Tip: Telefon
    - Zorunlu: Hayir

12. Ogrenci e-posta adresi
    - Tip: E-posta
    - Zorunlu: Hayir

13. Tercih edilen iletisim kanali
    - Tip: Coklu secim
    - Secenekler: WhatsApp, Telefon, E-posta
    - Zorunlu: Evet

### Bolum C - Akademik Hedef

14. Hangi alanlarda destek almak istiyorsunuz?
    - Tip: Coklu secim
    - Secenekler: AP, IB, Digital SAT, ACT, IELTS, TOEFL, Duolingo, A-Level, IGCSE/GCSE, Okul/GPA destegi, Universite ders destegi, Universite basvuru danismanligi, Diger
    - Zorunlu: Evet

15. Ogrencinin hedef ulke veya bolgesi
    - Tip: Coklu secim
    - Secenekler: ABD, Kanada, Birlesik Krallik, Avrupa, Turkiye, Diger, Henuz net degil
    - Zorunlu: Hayir

16. Hedeflenen bolum veya akademik alan
    - Tip: Coklu secim
    - Secenekler: Muhendislik, Tip/Saglik bilimleri, Hukuk, Isletme/Ekonomi, Psikoloji, Sosyal bilimler, Sanat/Tasarim, Bilgisayar bilimi, Fen bilimleri, Kararsiz, Diger
    - Zorunlu: Hayir

17. Hedef universite veya okul listesi var mi?
    - Tip: Uzun yanit
    - Zorunlu: Hayir

18. Kisa vadeli hedef nedir?
    - Tip: Coklu secim
    - Secenekler: Sınav skoru yukseltmek, Okul notlarini yukseltmek, Ders secimi planlamak, Eksik konu kapatmak, Universite basvurusuna hazirlanmak, Diger
    - Zorunlu: Evet

### Bolum D - Mevcut Durum

19. Mevcut not ortalamasi veya GPA bilgisi
    - Tip: Kisa yanit
    - Zorunlu: Hayir

20. Daha once girdigi sinavlar ve skorlar
    - Tip: Uzun yanit
    - Ornek: SAT, ACT, AP, IB predicted, IELTS, TOEFL, deneme sonuclari
    - Zorunlu: Hayir

21. En guclu oldugu dersler
    - Tip: Uzun yanit
    - Zorunlu: Hayir

22. En cok zorlandigi dersler veya beceriler
    - Tip: Uzun yanit
    - Zorunlu: Evet

23. Haftalik ders ve odev temposu
    - Tip: Tek secim
    - Secenekler: Dusuk, Orta, Yogun, Cok yogun, Degisken
    - Zorunlu: Hayir

24. Ogrencinin haftalik ayirabilecegi tahmini calisma suresi
    - Tip: Tek secim
    - Secenekler: 1-2 saat, 3-5 saat, 6-8 saat, 9+ saat, Emin degiliz
    - Zorunlu: Evet

25. Egitim planlamasinda bilmemizi istediginiz ogrenme, dikkat, zaman yonetimi veya sinav konforu ile ilgili bir durum var mi?
    - Tip: Uzun yanit
    - Zorunlu: Hayir

### Bolum E - Ders Format Tercihi

26. Tercih edilen ders formati
    - Tip: Coklu secim
    - Secenekler: 1-1 ders, Kucuk grup, Bootcamp, Deneme analizi, Henuz bilmiyoruz
    - Zorunlu: Evet

27. Derslerin yapilmasi istenen dil
    - Tip: Tek secim
    - Secenekler: Turkce anlatim, Ingilizce anlatim, Iki dil birlikte, Fark etmez
    - Zorunlu: Hayir

28. Uygun gun ve saat araliklari
    - Tip: Uzun yanit
    - Zorunlu: Evet

29. Baslamak istediginiz zaman
    - Tip: Tek secim
    - Secenekler: Hemen, 1-2 hafta icinde, 1 ay icinde, Daha sonra, Emin degiliz
    - Zorunlu: Evet

30. Eklemek istediginiz notlar
    - Tip: Uzun yanit
    - Zorunlu: Hayir

## Form 2: AP Ders Kayit Formu

Amac: AP dersine, AP bootcamp'e, grup dersine veya 1-1 derse katilacak ogrencinin ders secimi, okul/sinav durumu, hedef skoru ve calisma ihtiyacini netlestirmek.

AP course kategorileri College Board AP Students sayfasindaki ana basliklara gore gruplanmalidir: Arts, English, History and Social Sciences, Math and Computer Science, Sciences, World Languages and Cultures, AP Capstone.

### Bolum A - Temel Kayit Bilgileri

1. Ogrencinin adi soyadi
   - Tip: Kisa yanit
   - Zorunlu: Evet

2. Veli adi soyadi
   - Tip: Kisa yanit
   - Zorunlu: Evet

3. Veli telefon numarasi
   - Tip: Telefon
   - Zorunlu: Evet

4. Veli e-posta adresi
   - Tip: E-posta
   - Zorunlu: Evet

5. Ogrencinin okulu ve sinifi
   - Tip: Kisa yanit
   - Zorunlu: Evet

6. Bu kayit hangi format icin?
   - Tip: Tek secim
   - Secenekler: 1-1 AP dersi, AP grup dersi, AP bootcamp, AP deneme analizi, Henuz net degil
   - Zorunlu: Evet

### Bolum B - AP Ders Secimi

7. Hangi AP dersi veya dersleri icin destek almak istiyorsunuz?
   - Tip: Coklu secim
   - Secenekler:
     - AP Calculus AB
     - AP Calculus BC
     - AP Precalculus
     - AP Statistics
     - AP Computer Science A
     - AP Computer Science Principles
     - AP Biology
     - AP Chemistry
     - AP Environmental Science
     - AP Physics 1: Algebra-Based
     - AP Physics 2: Algebra-Based
     - AP Physics C: Mechanics
     - AP Physics C: Electricity and Magnetism
     - AP English Language and Composition
     - AP English Literature and Composition
     - AP Psychology
     - AP Macroeconomics
     - AP Microeconomics
     - AP United States History
     - AP World History: Modern
     - AP European History
     - AP Human Geography
     - AP Comparative Government and Politics
     - AP United States Government and Politics
     - AP Art History
     - AP Music Theory
     - AP 2-D Art and Design
     - AP 3-D Art and Design
     - AP Drawing
     - AP Seminar
     - AP Research
     - AP World Languages and Cultures
     - Diger
   - Zorunlu: Evet

8. AP dersini okulda aliyor musunuz?
   - Tip: Tek secim
   - Secenekler: Evet, Hayir, Okulda benzer ders aliyorum, Emin degilim
   - Zorunlu: Evet

9. AP exam kaydiniz yapildi mi?
   - Tip: Tek secim
   - Secenekler: Evet, Hayir, Surec devam ediyor, Emin degiliz
   - Zorunlu: Evet

10. College Board hesabiniz var mi?
    - Tip: Tek secim
    - Secenekler: Evet, Hayir, Emin degilim
    - Zorunlu: Hayir

11. AP Classroom kullaniyor musunuz?
    - Tip: Tek secim
    - Secenekler: Evet, Hayir, Okul sagliyor ama aktif kullanmiyorum, Emin degilim
    - Zorunlu: Hayir

### Bolum C - Seviye ve Hedef

12. Bu AP dersi icin mevcut seviyenizi nasil tanimlarsiniz?
    - Tip: Tek secim
    - Secenekler: Yeni basliyorum, Konularin bir kismini biliyorum, Okulda isledik ama eksiklerim var, Deneme cozuyorum, Final tekrar asamasindayim
    - Zorunlu: Evet

13. Hedef AP skoru
    - Tip: Tek secim
    - Secenekler: 3, 4, 5, Henuz bilmiyoruz
    - Zorunlu: Evet

14. Daha once AP sinavina girdiniz mi?
    - Tip: Tek secim
    - Secenekler: Evet, Hayir
    - Zorunlu: Evet

15. Girdiyseniz AP dersleri ve skorlariniz
    - Tip: Uzun yanit
    - Zorunlu: Kosullu

16. En cok destek gereken alan
    - Tip: Coklu secim
    - Secenekler: Konu anlatimi, MCQ pratigi, FRQ pratigi, Zaman yonetimi, Okul sinavlari, Deneme analizi, Odev takibi, Study plan
    - Zorunlu: Evet

17. Elinizde guncel deneme, quiz, okul sinavi veya konu listesi var mi?
    - Tip: Tek secim
    - Secenekler: Evet, Hayir, Sonradan paylasabiliriz
    - Zorunlu: Hayir

### Bolum D - Ders Plani

18. Haftada kac ders dusunuyorsunuz?
    - Tip: Tek secim
    - Secenekler: 1 ders, 2 ders, 3+ ders, Bootcamp yogun program, Emin degiliz
    - Zorunlu: Evet

19. Haftalik bireysel calisma icin ayirabileceginiz sure
    - Tip: Tek secim
    - Secenekler: 1-2 saat, 3-5 saat, 6-8 saat, 9+ saat, Emin degiliz
    - Zorunlu: Evet

20. Ders icin uygun gun ve saatler
    - Tip: Uzun yanit
    - Zorunlu: Evet

21. Tercih edilen ogretmen/ders dili
    - Tip: Tek secim
    - Secenekler: Turkce anlatim, Ingilizce anlatim, Iki dil birlikte, Fark etmez
    - Zorunlu: Hayir

22. Eklemek istediginiz notlar
    - Tip: Uzun yanit
    - Zorunlu: Hayir

## Form 3: IB Ders Kayit Formu

Amac: IB DP ogrencisinin subject group, HL/SL, IA/EE/TOK ihtiyaci, predicted grade hedefi ve okul takvimi baglaminda ders destegini planlamak.

IB Diploma Programme resmi yapiya gore DP core ve alti subject group uzerine kuruludur. Formda grup, ders, HL/SL, external/internal assessment ve core ihtiyaclari ayri sorulmalidir.

### Bolum A - Temel Kayit Bilgileri

1. Ogrencinin adi soyadi
   - Tip: Kisa yanit
   - Zorunlu: Evet

2. Veli adi soyadi
   - Tip: Kisa yanit
   - Zorunlu: Evet

3. Veli telefon numarasi
   - Tip: Telefon
   - Zorunlu: Evet

4. Veli e-posta adresi
   - Tip: E-posta
   - Zorunlu: Evet

5. Ogrencinin okulu
   - Tip: Kisa yanit
   - Zorunlu: Evet

6. IB seviyesi
   - Tip: Tek secim
   - Secenekler: Pre-IB, DP1, DP2, Retake, Diger
   - Zorunlu: Evet

7. Kayit formati
   - Tip: Tek secim
   - Secenekler: 1-1 IB dersi, IB grup dersi, IB bootcamp, IA/EE/TOK destegi, Deneme/paper analizi, Henuz net degil
   - Zorunlu: Evet

### Bolum B - IB Dersleri

8. Destek istenen IB dersi veya dersleri
   - Tip: Coklu secim
   - Secenekler:
     - Mathematics AA HL
     - Mathematics AA SL
     - Mathematics AI HL
     - Mathematics AI SL
     - Biology HL
     - Biology SL
     - Chemistry HL
     - Chemistry SL
     - Physics HL
     - Physics SL
     - Computer Science HL
     - Computer Science SL
     - Environmental Systems and Societies
     - Business Management HL
     - Business Management SL
     - Economics HL
     - Economics SL
     - History HL
     - History SL
     - Psychology HL
     - Psychology SL
     - Global Politics HL
     - Global Politics SL
     - Geography HL
     - Geography SL
     - Language A: Literature
     - Language A: Language and Literature
     - Language B
     - Language ab initio
     - Visual Arts
     - Music
     - Theatre
     - Film
     - Diger
   - Zorunlu: Evet

9. Toplam IB subject kombinasyonunuz nedir?
   - Tip: Uzun yanit
   - Yardim metni: 3 veya 4 HL, kalan SL derslerinizi yazin.
   - Zorunlu: Evet

10. Hangi derslerde HL aliyorsunuz?
    - Tip: Uzun yanit
    - Zorunlu: Evet

11. Hangi derslerde SL aliyorsunuz?
    - Tip: Uzun yanit
    - Zorunlu: Evet

### Bolum C - Hedef ve Mevcut Performans

12. Mevcut predicted grade veya okul notlari
    - Tip: Uzun yanit
    - Zorunlu: Hayir

13. Hedeflenen IB toplam puani
    - Tip: Tek secim
    - Secenekler: 24-29, 30-34, 35-38, 39-42, 43-45, Henuz bilmiyoruz
    - Zorunlu: Evet

14. Hedeflenen ders notlari
    - Tip: Uzun yanit
    - Yardim metni: Ornek: Math AA HL 6/7, Economics HL 7.
    - Zorunlu: Hayir

15. En cok zorlanilan alanlar
    - Tip: Coklu secim
    - Secenekler: Konu eksigi, Paper 1, Paper 2, Paper 3, IA, EE, TOK, Essay writing, Data analysis, Zaman yonetimi, Odev takibi, Revision plan
    - Zorunlu: Evet

16. Daha once past paper veya mock exam yaptiniz mi?
    - Tip: Tek secim
    - Secenekler: Evet, Hayir, Okulda yapildi ama sonuc elimizde yok, Emin degiliz
    - Zorunlu: Evet

17. Varsa son mock/paper sonuclari
    - Tip: Uzun yanit
    - Zorunlu: Hayir

### Bolum D - IA / EE / TOK / Core

18. IA destegi gerekiyor mu?
    - Tip: Coklu secim
    - Secenekler: Math IA, Science IA, Economics IA, Business IA, Psychology IA, History IA, Language oral/written task, Diger, Hayir
    - Zorunlu: Evet

19. EE destegi gerekiyor mu?
    - Tip: Tek secim
    - Secenekler: Evet, Hayir, Konu secim asamasindayiz, Yazim asamasindayiz, Son kontrol gerekiyor
    - Zorunlu: Evet

20. EE dersi ve konu basligi
    - Tip: Uzun yanit
    - Zorunlu: Kosullu

21. TOK destegi gerekiyor mu?
    - Tip: Coklu secim
    - Secenekler: TOK essay, TOK exhibition, Presentation/konsept calismasi, Hayir
    - Zorunlu: Evet

22. Okulun verdigi rubric, syllabus, assignment brief veya deadline dokumanlari var mi?
    - Tip: Tek secim
    - Secenekler: Evet, Hayir, Sonradan paylasabiliriz
    - Zorunlu: Evet

### Bolum E - Ders Plani

23. Haftada kac ders dusunuyorsunuz?
    - Tip: Tek secim
    - Secenekler: 1 ders, 2 ders, 3+ ders, Bootcamp yogun program, Emin degiliz
    - Zorunlu: Evet

24. Haftalik bireysel calisma icin ayirabileceginiz sure
    - Tip: Tek secim
    - Secenekler: 1-2 saat, 3-5 saat, 6-8 saat, 9+ saat, Emin degiliz
    - Zorunlu: Evet

25. Ders icin uygun gun ve saatler
    - Tip: Uzun yanit
    - Zorunlu: Evet

26. Tercih edilen ders dili
    - Tip: Tek secim
    - Secenekler: Turkce anlatim, Ingilizce anlatim, Iki dil birlikte, Fark etmez
    - Zorunlu: Hayir

27. Eklemek istediginiz notlar
    - Tip: Uzun yanit
    - Zorunlu: Hayir

## Form 4: SAT Ders Kayit Formu

Amac: Digital SAT veya SAT/ACT baglaminda ogrencinin mevcut skorunu, hedef skorunu, alt alan ihtiyaclarini, Bluebook/Khan Academy durumunu ve ders planini netlestirmek.

SAT formu Digital SAT resmi yapisini baz almalidir: Reading and Writing ve Math olmak uzere iki ana bolum, her bolumde iki modul ve adaptif yapi. Reading and Writing alanlari Information and Ideas, Craft and Structure, Expression of Ideas, Standard English Conventions; Math alanlari Algebra, Advanced Math, Problem-Solving and Data Analysis, Geometry and Trigonometry olarak sorulmalidir.

### Bolum A - Temel Kayit Bilgileri

1. Ogrencinin adi soyadi
   - Tip: Kisa yanit
   - Zorunlu: Evet

2. Veli adi soyadi
   - Tip: Kisa yanit
   - Zorunlu: Evet

3. Veli telefon numarasi
   - Tip: Telefon
   - Zorunlu: Evet

4. Veli e-posta adresi
   - Tip: E-posta
   - Zorunlu: Evet

5. Ogrencinin okulu ve sinifi
   - Tip: Kisa yanit
   - Zorunlu: Evet

6. Kayit formati
   - Tip: Tek secim
   - Secenekler: 1-1 SAT dersi, SAT grup dersi, SAT bootcamp, Deneme analizi, SAT/ACT karar sureci, Henuz net degil
   - Zorunlu: Evet

### Bolum B - SAT / ACT Durumu

7. Hazirlandiginiz sinav
   - Tip: Tek secim
   - Secenekler: Digital SAT, ACT, SAT ve ACT karsilastirma sureci, Emin degiliz
   - Zorunlu: Evet

8. Daha once resmi SAT veya ACT sinavina girdiniz mi?
   - Tip: Tek secim
   - Secenekler: Evet, Hayir
   - Zorunlu: Evet

9. Girdiyseniz skorlariniz
   - Tip: Uzun yanit
   - Yardim metni: SAT total, Reading and Writing, Math; ACT Composite ve section skorlarini yazin.
   - Zorunlu: Kosullu

10. Bluebook practice test cozdunuz mu?
    - Tip: Tek secim
    - Secenekler: Evet, Hayir, Basladim ama tamamlamadim, Emin degilim
    - Zorunlu: Evet

11. Bluebook deneme skorlariniz
    - Tip: Uzun yanit
    - Yardim metni: Test numarasi, tarih olmadan sira bilgisi, total ve section skorlarini yazabilirsiniz.
    - Zorunlu: Hayir

12. Khan Academy veya baska kaynak kullaniyor musunuz?
    - Tip: Coklu secim
    - Secenekler: Khan Academy, Bluebook, UWorld, Princeton Review, Barron's, Erica Meltzer, College Board Question Bank, Diger, Hayir
    - Zorunlu: Hayir

13. College Board hesabiniz var mi?
    - Tip: Tek secim
    - Secenekler: Evet, Hayir, Emin degilim
    - Zorunlu: Hayir

14. Hedef SAT skoru
    - Tip: Tek secim
    - Secenekler: 1200+, 1300+, 1400+, 1450+, 1500+, Henuz bilmiyoruz
    - Zorunlu: Evet

15. Hedeflenen universite/bolum listesi var mi?
    - Tip: Uzun yanit
    - Zorunlu: Hayir

### Bolum C - Reading and Writing Ihtiyaci

16. Reading and Writing bolumunde destek gereken alanlar
    - Tip: Coklu secim
    - Secenekler: Information and Ideas, Craft and Structure, Expression of Ideas, Standard English Conventions, Vocabulary in context, Graph/table interpretation, Passage analysis, Grammar/punctuation, Emin degiliz
    - Zorunlu: Evet

17. Ingilizce okuma seviyesi
    - Tip: Tek secim
    - Secenekler: Zorlaniyorum, Orta, Iyi, Cok iyi, Emin degilim
    - Zorunlu: Evet

18. En cok zorlandiginiz soru tipi veya konu
    - Tip: Uzun yanit
    - Zorunlu: Hayir

### Bolum D - Math Ihtiyaci

19. Math bolumunde destek gereken alanlar
    - Tip: Coklu secim
    - Secenekler: Algebra, Advanced Math, Problem-Solving and Data Analysis, Geometry and Trigonometry, Desmos kullanimi, Student-produced responses, Zaman yonetimi, Emin degiliz
    - Zorunlu: Evet

20. Matematikte okul seviyeniz
    - Tip: Tek secim
    - Secenekler: Temel eksiklerim var, Orta, Iyi, Ileri, Emin degilim
    - Zorunlu: Evet

21. En cok zorlandiginiz matematik konulari
    - Tip: Uzun yanit
    - Zorunlu: Hayir

### Bolum E - Planlama

22. Haftada kac ders dusunuyorsunuz?
    - Tip: Tek secim
    - Secenekler: 1 ders, 2 ders, 3+ ders, Bootcamp yogun program, Emin degiliz
    - Zorunlu: Evet

23. Haftalik bireysel calisma icin ayirabileceginiz sure
    - Tip: Tek secim
    - Secenekler: 1-2 saat, 3-5 saat, 6-8 saat, 9+ saat, Emin degiliz
    - Zorunlu: Evet

24. Ders icin uygun gun ve saatler
    - Tip: Uzun yanit
    - Zorunlu: Evet

25. Deneme cozme disiplininiz
    - Tip: Tek secim
    - Secenekler: Haftalik deneme cozebilirim, Iki haftada bir cozebilirim, Sadece odevle ilerlemek istiyorum, Emin degilim
    - Zorunlu: Hayir

26. Sınav konforu veya sure kullanimi icin bilmemizi istediginiz bir durum var mi?
    - Tip: Uzun yanit
    - Zorunlu: Hayir

27. Eklemek istediginiz notlar
    - Tip: Uzun yanit
    - Zorunlu: Hayir

## Google Sheets Tab Kolonlari

Her tabda ortak ilk kolonlar:

- `submission_id`
- `created_at`
- `form_type`
- `form_token`
- `copy_link`
- `student_full_name`
- `student_birth_year`
- `student_grade`
- `school_name`
- `parent_full_name`
- `parent_relation`
- `parent_phone`
- `parent_email`
- `student_phone`
- `student_email`
- `preferred_contact_channel`
- `program_interest`
- `lesson_format`
- `available_times`
- `consent_confirmed`
- `source_url`
- `utm_source`
- `utm_campaign`

AP tabina ozel kolonlar:

- `ap_courses`
- `ap_school_course_status`
- `ap_exam_registration_status`
- `college_board_account_status`
- `ap_classroom_status`
- `ap_current_level`
- `ap_target_score`
- `previous_ap_scores`
- `ap_support_needs`
- `weekly_study_time`

IB tabina ozel kolonlar:

- `ib_level`
- `ib_subjects_requested`
- `ib_subject_combination`
- `ib_hl_subjects`
- `ib_sl_subjects`
- `ib_predicted_grades`
- `ib_target_total_score`
- `ib_target_subject_scores`
- `ib_support_needs`
- `ib_ia_support`
- `ib_ee_support`
- `ib_tok_support`
- `school_documents_status`

SAT tabina ozel kolonlar:

- `exam_type`
- `official_exam_taken`
- `official_scores`
- `bluebook_practice_status`
- `bluebook_scores`
- `resources_used`
- `college_board_account_status`
- `target_sat_score`
- `reading_writing_needs`
- `english_reading_level`
- `math_needs`
- `math_school_level`
- `mock_test_plan`

## Kaynak Notlari

- College Board AP Students, AP Courses and Exams: AP ders kategorileri ve AP ders listesi.
- College Board SAT Suite, How the SAT Is Structured: Digital SAT bolumleri, modul yapisi, sure ve soru sayilari.
- College Board SAT Suite, Reading and Writing: Reading and Writing content domains.
- College Board SAT Suite, Math: Math content domains.
- International Baccalaureate, DP curriculum: DP core, subject groups, HL/SL yapisi ve ogretim saatleri.
- International Baccalaureate, Assessment and exams: external/internal assessment ve IA tipleri.
- College Board Accommodations: sinav konforu ve accommodations bilgisinin dikkatli sorulmasi.
