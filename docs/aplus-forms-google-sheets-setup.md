# A Plus Academy Google Sheets Form Kurulumu

Google Sheet:

https://docs.google.com/spreadsheets/d/1J-y0dnryvdt8dFNTyO4lxWqUNt6uMaZkaq2il4xoLIE/edit

## Sheet Tab Yapisi

- `Ayarlar`
- `Form Talepleri`
- `Genel Ogrenci Bilgi`
- `AP Kayit`
- `IB Kayit`
- `SAT Kayit`

## Site Akisi

Program sayfalarinda form bolumu vardir ama token olmadan detayli form acilmaz.

Kopyalanabilir link formatlari:

- AP: `/programlar/ap?formToken=AP-XXXXXX#kayit-formu`
- IB: `/programlar/ib-diploma?formToken=IB-XXXXXX#kayit-formu`
- SAT: `/programlar/digital-sat-act?formToken=SAT-XXXXXX#kayit-formu`
- Genel bilgi: `/formlar/ogrenci-bilgi-formu?formToken=GENEL-XXXXXX`

## Apps Script Kurulumu

1. Google Sheet'i acin.
2. `Extensions > Apps Script` menusuyle script editor'u acin.
3. Varsayilan `Code.gs` icerigini silin.
4. `docs/aplus-forms-apps-script-webhook.js` dosyasindaki kodu yapistirin.
5. Apps Script sol menude `Project Settings` alanina girin.
6. `Script properties` altina su degerleri ekleyin:
   - `APLUS_SITE_BASE_URL`: Canli site URL'i. Ornek: `https://www.yenidomain.com`
   - `APLUS_FORMS_WEBHOOK_SECRET`: Uzun ve rastgele bir gizli anahtar.
7. `Deploy > New deployment` secin.
8. Type olarak `Web app` secin.
9. Ayarlar:
   - Execute as: `Me`
   - Who has access: `Anyone`
10. Deploy edin ve Web App URL'ini kopyalayin.

## Vercel Environment Variables

Vercel projesine su degerleri eklenmelidir:

- `APLUS_FORMS_WEBHOOK_URL`: Apps Script Web App URL'i
- `APLUS_FORMS_WEBHOOK_SECRET`: Apps Script'teki ayni gizli anahtar

Bu degerler eklendikten sonra site yeniden deploy edilmelidir. Deploy sonrasinda:

- Token'siz sayfalarda "Form erisimi iste" formu aktif olur.
- Talep gelince `Form Talepleri` tabina yazar.
- Apps Script otomatik `access_token` ve `copy_link` olusturur.
- Ekip `copy_link` alanini kopyalayip ogrenciye/veliye gonderir.
- Token'li linkten gelen ogrenci ilgili detayli kayit formunu doldurur.
- Detayli kayit formu programina gore `AP Kayit`, `IB Kayit`, `SAT Kayit` veya `Genel Ogrenci Bilgi` tabina yazar.

## Test Senaryosu

1. Canli sitede AP program sayfasina girin:
   - `/programlar/ap`
2. Form erisimi talep edin.
3. Google Sheet'te `Form Talepleri` tabinda yeni satir olusmali.
4. `copy_link` kolonundaki linki acin.
5. AP kayit formu sayfa icinde acilmali.
6. Formu doldurup gonderin.
7. Google Sheet'te `AP Kayit` tabinda yeni satir olusmali.
