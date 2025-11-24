// src/components/Hero.tsx
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="anasayfa" className="relative h-[600px] flex items-center font-sans">
      <div className="absolute inset-0">
        {/* Arka plan görseli - yüklenemezse gri placeholder gösterir */}
        <ImageWithFallback
          src="/images/hero-bg.jpeg"
          alt="Modern Cam Balkon"
          className="w-full h-full object-cover"
        />
        {/* Karartma efekti (Overlay) - Yazıların okunurluğunu artırır */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
      </div>
      
      {/* Yazı ve Butonlar */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        {/*
          DEĞİŞİKLİK:
          Ana sayfanın ana başlığı SEO kuralına uygun olarak <h2> yerine <h1> yapıldı.
        */}
        <div className="max-w-2xl mx-auto text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Antalya'da Profesyonel <br/> Cam ve PVC Çözümleri
          </h1>
          <p className="text-gray-200 text-lg mb-8 leading-relaxed">
            Cam balkon, duşakabin ve PVC pencere sistemleri ile yaşam alanlarınıza değer katıyoruz. 
            Yılların deneyimi ve uzman kadromuzla hizmetinizdeyiz.
          </p>
          {/* DEĞİŞİKLİK:
            Butonları mobilde ortalamak için justify-center sınıfı eklendi.
            Büyük ekranlarda sola hizalamak için md:justify-start kullanıldı.
          */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a 
              href="#hizmetlerimiz" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-blue-600/30"
            >
              Hizmetlerimizi Keşfedin
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="#iletisim" 
              className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-medium border border-white/30 rounded-lg hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              İletişime Geçin
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
