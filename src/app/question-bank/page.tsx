import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CardGrid, CtaBand, PageHero, PlaceholderSection, ProcessSection, SectionHeading } from "@/components/MarketingSections";

export const metadata: Metadata = {
  title: "Deneme ve Soru Bankası Sistemi | A Plus Academy",
  description: "Deneme, soru çözümü ve performans analizinin çalışma planına dönüştürülmesi.",
};

export default function QuestionBankPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Deneme ve analiz sistemi"
        title="Her denemeyi bir sonraki çalışma planına dönüştüren yapı"
        intro="Bu sayfa artık yalnızca bir ürün iddiası sunmak yerine sistemin nasıl çalışacağını, öğrenciye ne vereceğini ve hangi sınavları kapsayacağını gösterecek."
        primary={{ label: "Ücretsiz seviye görüşmesi", href: "/contact" }}
        secondary={{ label: "Programları incele", href: "/exams" }}
        panelItems={[
          "Sınav formatına uygun soru ve deneme alanı",
          "Konu, süre ve hata tipi bazında analiz",
          "Eğitmen geri bildirimi ve eksik listesi",
          "Analizden üretilen haftalık çalışma planı",
        ]}
      />
      <section className="section">
        <div className="site-container">
          <SectionHeading eyebrow="Sistem bileşenleri" title="Ürün sayfasında gösterilecek temel alanlar" text="Gerçek platform veya materyaller hazırlandığında bu kartlar demo ve ekran görüntüleriyle desteklenecek." />
          <CardGrid columns={3} items={[
            { title: "Seviye tespit", text: "Öğrencinin başlangıç noktasını ve öncelikli konu eksiklerini belirleyen ilk ölçüm." },
            { title: "Konu bazlı soru setleri", text: "Ders ve sınav programına bağlı, hedeflenen beceriye göre düzenlenmiş pratik." },
            { title: "Tam deneme sınavları", text: "Süre, format ve sınav koşullarına uygun prova uygulamaları." },
            { title: "Performans analizi", text: "Sonucun yalnızca skor değil, konu ve hata türü üzerinden incelenmesi." },
            { title: "Eğitmen geri bildirimi", text: "Analiz sonuçlarının ders ve ödev planına aktarılması." },
            { title: "Gelişim raporu", text: "Öğrenci ve veli için dönemsel ilerleme görünümü." },
          ]} />
        </div>
      </section>
      <ProcessSection title="Bir denemenin sistem içindeki yolculuğu" text="Bu akış, daha sonra gerçek rapor örnekleri ve ürün ekranlarıyla görselleştirilecek." steps={[
        { title: "Denemeyi uygula", text: "Öğrenci sınav koşullarına yakın biçimde denemeyi tamamlar." },
        { title: "Sonucu analiz et", text: "Skor, konu, süre ve hata türleri ayrıştırılır." },
        { title: "Öncelikleri belirle", text: "En fazla puan kaybettiren alanlar çalışma sırasına alınır." },
        { title: "Yeni planı oluştur", text: "Ders, ödev ve bir sonraki deneme takvimi güncellenir." },
      ]} />
      <PlaceholderSection eyebrow="Ürün kanıtı" title="İçerik aşamasında eklenecek gerçek materyaller" text="Şu anda bunlar yapısal yer tutuculardır; sayı ve özellikler gerçek ürün envanterine göre yazılacak." items={["Örnek deneme ekranı", "Örnek analiz raporu", "Örnek soru çözümü", "Öğrenci gelişim grafiği"]} />
      <CtaBand title="Ücretsiz tanı çalışmasıyla başlangıç seviyesini görelim" text="Öğrencinin hedef sınavını ve mevcut hazırlık durumunu birlikte değerlendirelim." />
      <Footer />
    </main>
  );
}
