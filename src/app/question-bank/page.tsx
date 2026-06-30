import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CardGrid, CtaBand, FeaturePanelSection, PageHero, ProcessSection, SectionHeading } from "@/components/MarketingSections";

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
        intro="Sınav formatına uygun denemeler; uzman değerlendirmesi, ayrıntılı geri bildirim ve eksik tamamlama çalışmalarıyla akademik plana dönüştürülür."
        primary={{ label: "Seviye görüşmesi", href: "/contact" }}
        secondary={{ label: "Programları incele", href: "/exams" }}
        panelItems={[
          "Sınav formatına uygun soru ve deneme alanı",
          "Konu, süre ve hata tipi bazında analiz",
          "Eğitmen geri bildirimi ve eksik listesi",
          "Analizden üretilen düzenli çalışma planı",
        ]}
      />
      <section className="section">
        <div className="site-container">
          <SectionHeading eyebrow="Sistem bileşenleri" title="Deneme sonucundan çalışma planına uzanan bütün yapı" text="Her uygulama yalnızca puan üretmek için değil, öğrencinin sıradaki çalışma önceliğini belirlemek için kullanılır." />
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
      <ProcessSection title="Bir denemenin sistem içindeki yolculuğu" text="Deneme yaklaşımımız; ölçüm, değerlendirme, eksik tamamlama ve yeniden uygulama döngüsüne dayanır." steps={[
        { title: "Denemeyi uygula", text: "Öğrenci sınav koşullarına yakın biçimde denemeyi tamamlar." },
        { title: "Sonucu analiz et", text: "Skor, konu, süre ve hata türleri ayrıştırılır." },
        { title: "Öncelikleri belirle", text: "En fazla puan kaybettiren alanlar çalışma sırasına alınır." },
        { title: "Yeni planı oluştur", text: "Ders, ödev ve bir sonraki uygulamanın çalışma hedefleri güncellenir." },
      ]} />
      <FeaturePanelSection
        eyebrow="Deneme sonrası destek"
        title="Sonuç öğrenciye nasıl geri döner?"
        text="Değerlendirme sonucu, öğrencinin neyi neden yanlış yaptığını ve sıradaki çalışmada neye odaklanacağını açık hale getirir."
        items={[
          { title: "Uzman değerlendirmesi", text: "Yanıtlar ilgili dersin soru yapısını bilen eğitmenler tarafından incelenir." },
          { title: "Ayrıntılı sonuç özeti", text: "Skorun yanında konu eksikleri, soru tipleri ve zaman kullanımı görünür hale getirilir." },
          { title: "Soru çözüm desteği", text: "Öğrencinin çözemediği veya yanlış yaklaştığı sorular ders içinde yeniden ele alınır." },
          { title: "Eksik tamamlama planı", text: "En fazla puan kaybettiren alanlar için konu tekrarı, soru seti ve yeni uygulama hedefi belirlenir." },
        ]}
      />
      <CtaBand title="Tanı çalışmasıyla başlangıç seviyesini görelim" text="Öğrencinin hedef sınavını ve mevcut hazırlık durumunu birlikte değerlendirelim." />
      <Footer />
    </main>
  );
}
