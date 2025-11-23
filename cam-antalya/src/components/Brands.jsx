import React from "react";
import { Award, Zap } from "lucide-react";

// Marka bilgileri ve logo URL'leri için yer tutucular
const brands = [
  { 
    name: "Pimapen", 
    category: "PVC Pencere Sistemleri", 
    logoUrl: "/public/images/logo/pimapen.png" // URL'nizi buraya yapıştırın
  },
  { 
    name: "Albert Genau", 
    category: "Cam Balkon Sistemleri", 
    logoUrl: "/public/images/logo/albert-genau.png" // URL'nizi buraya yapıştırın
  },
  { 
    name: "Winsa", 
    category: "PVC ve Cam Sistemleri", 
    logoUrl: "/public/images/logo/winsa.png" // URL'nizi buraya yapıştırın
  },
  { 
    name: "Rehau", 
    category: "Yüksek Performans PVC", 
    logoUrl: "/public/images/logo/rehau.svg" // URL'nizi buraya yapıştırın
  },
  { 
    name: "Kömmerling", 
    category: "Alman PVC Sistemleri", 
    logoUrl: "/public/images/logo/kommerling.svg" // URL'nizi buraya yapıştırın
  },
  { 
    name: "Adopen", 
    category: "PVC ve Kapı Sistemleri", 
    logoUrl: "/public/images/logo/adopen.png" // URL'nizi buraya yapıştırın
  },
  { 
    name: "Schüco", 
    category: "Premium Alüminyum", 
    logoUrl: "/public/images/logo/schuco.svg" // URL'nizi buraya yapıştırın
  },
  { 
    name: "Veka", 
    category: "PVC Profiller", 
    logoUrl: "/public/images/logo/veka.svg" // URL'nizi buraya yapıştırın
  }
];

export function Brands() {
  return (
    <section id="markalar" className="py-20 bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Başlık Bölümü */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center shadow-lg">
              <Award className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Çözüm Ortaklarımız ve Markalarımız
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Sistemlerimizde, enerji verimliliği ve dayanıklılık konusunda sektörün en güvenilir ve lider markalarını tercih ediyoruz.
          </p>
        </div>

        {/* Marka Kartları */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {brands.map((brand, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100 transform hover:-translate-y-1"
            >
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 overflow-hidden border border-gray-200">
                {/* Logo URL'si buraya gelecek */}
                <img 
                    src={brand.logoUrl} 
                    alt={`${brand.name} Logo`} 
                    // Logoların her zaman 80x80'lik alana sığmasını ve yuvarlak çerçeveye oturmasını sağlar
                    className="w-full h-full object-contain" 
                    onError={(e) => {
                        e.target.onerror = null; 
                        e.target.src = "https://placehold.co/80x80/ef4444/ffffff?text=LOGO+YOK"; // Eğer resim yüklenemezse hata gösterir
                    }}
                />
              </div>
              <h4 className="text-xl font-semibold text-center mb-1 text-gray-900">
                {brand.name}
              </h4>
              <p className="text-gray-600 text-center text-sm font-medium">
                {brand.category}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action (CTA) Bölümü */}
        <div className="mt-16 bg-blue-700 rounded-2xl p-8 md:p-12 text-white text-center shadow-2xl shadow-blue-700/40">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ücretsiz Keşif ve Teklif Alın
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            Projeleriniz için en uygun, garantili ve kaliteli çözümleri sunmak üzere uzman ekibimizle hemen iletişime geçin.
          </p>
          <a 
            href="tel:+905551234567" 
            className="inline-flex items-center px-10 py-3 bg-white text-blue-700 font-semibold rounded-full hover:bg-gray-100 transition-colors shadow-lg shadow-black/20 transform hover:scale-[1.02]"
          >
            <Zap className="w-5 h-5 mr-2" />
            Hemen Arayın: 0532 694 74 19
          </a>
        </div>
      </div>
    </section>
  );
}