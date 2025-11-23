import React, { useState, useRef } from 'react';
import { Droplet, Home, Frame, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

// Proje görselleri için basit bir yer tutucu bileşen
function ProjectImagePlaceholder({ src, alt, className }) {
  return (
    <img 
      src={src} 
      alt={alt} 
      className={className} 
      onError={(e) => {
        e.currentTarget.onerror = null; 
        e.currentTarget.src = "https://placehold.co/400x300/e0e0e0/333333?text=Resim+Yok";
        e.currentTarget.className = e.currentTarget.className + " object-contain";
      }}
    />
  );
}
// Yeni Galeri Bileşeni: Aynı anda 3 görseli gösterir ve sağ/sol oklarla kaydırma yapar.
function ProjectGallery({ projects }) {
    // Kaydırma (scrolling) işlemini gerçekleştirmek için ref kullanıyoruz
    const galleryRef = useRef(null);

    // Sağ tarafa kaydırma fonksiyonu
    const scrollRight = () => {
        if (galleryRef.current) {
            // Bir seferde kaydırma miktarını, galerinin görünür genişliğinin %75'i olarak ayarla
            const scrollAmount = galleryRef.current.offsetWidth * 0.75; 
            galleryRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };
    // Sol tarafa kaydırma fonksiyonu
    const scrollLeft = () => {
        if (galleryRef.current) {
            // Bir seferde kaydırma miktarını, galerinin görünür genişliğinin %75'i olarak ayarla
            const scrollAmount = galleryRef.current.offsetWidth * 0.75; 
            galleryRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
    };

    if (projects.length === 0) {
        return <div className="text-center py-6 text-gray-500">Gösterilecek proje görseli bulunmamaktadır.</div>;
    }

    return (
        <div className="relative">
            {/* Görsel Kaydırma Alanı */}
            <div 
                ref={galleryRef}
                // Tailwind sınıfları: Yatay kaydırma, kaydırma çubuğunu gizle (scrollbar-hide)
                // Flex ile kartları yan yana diz, gap-6 ile aralarına boşluk ver
                className="flex overflow-x-scroll snap-x snap-mandatory space-x-6 pb-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Firefox ve IE/Edge için scrollbar gizleme
            >
                {projects.map((project) => (
                    // Her bir kart, kaydırma pozisyonuna yapışır
                    <a 
                        key={project.id}
                        href="#" 
                        // ÖNEMLİ MOBİL DEĞİŞİKLİK: 
                        // w-[calc(100%-32px)] -> XS'de tek kart (margin dahil)
                        // sm:w-[calc(50%-12px)] -> SM ve üstünde (Mobil/Tablet) yarım kart göster (Daha büyük görsel)
                        // lg:w-[calc((100%/3)-16px)] -> Masaüstünde 3'te bir kart göster
                        className="group relative flex-shrink-0 snap-center w-[calc(100%-32px)] sm:w-[calc(50%-12px)] lg:w-[calc((100%/3)-16px)] max-w-sm rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="aspect-[4/3] overflow-hidden">
                            <ProjectImagePlaceholder
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                <p className="text-white text-lg font-medium truncate">{project.title}</p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>

            {/* Sol Ok Butonu - MOBİL VE MASAÜSTÜ İÇİN GÖRÜNÜR HALE GETİRİLDİ */}
            <button
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-lg text-gray-800 hover:bg-gray-100 transition-colors z-20" 
                aria-label="Önceki Projeler"
            >
                {/* Mobil için daha küçük ikon (w-5 h-5) */}
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            {/* Sağ Ok Butonu - MOBİL VE MASAÜSTÜ İÇİN GÖRÜNÜR HALE GETİRİLDİ */}
            <button
                onClick={scrollRight}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-lg text-gray-800 hover:bg-gray-100 transition-colors z-20" 
                aria-label="Sonraki Projeler"
            >
                {/* Mobil için daha küçük ikon (w-5 h-5) */}
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            
             {/* Mobil kaydırma ipucu kaldırıldı, çünkü oklar artık görünüyor. */}
        </div>
    );
}

// Yeni görseller eklendiğinde array uzunluğunu (length) değiştirmemek için 
// 50 olarak sabit bir üst sınır (limit) belirliyoruz.
const MAX_PROJECTS = 20; 

// --- DUŞAKABİN VERİSİ OLUŞTURMA İŞLEMİ ---
// 1'den MAX_PROJECTS'e kadar sabit bir boyutla proje listesini oluşturur.
const dusakabinProjects = Array.from({ length: MAX_PROJECTS }, (_, i) => {
    const id = i + 1;
    return {
        id: id,
        // public/images/dusakabin/dusakabin_1.webp, dusakabin_2.webp, ... şeklinde yol oluşturulur
        image: `/images/dusakabin/dusakabin_${id}.webp`, 
        // Başlıktan toplam proje sayısı bilgisini kaldırdık
        title: `Duşakabin Projesi #${id}` 
    };
});

// --- CAM BALKON VERİSİ OLUŞTURMA İŞLEMİ ---
// 1'den MAX_PROJECTS'e kadar sabit bir boyutla proje listesini oluşturur.
const cambalkonProjects = Array.from({ length: MAX_PROJECTS }, (_, i) => {
    const id = i + 1;
    return {
        id: id,
        // public/images/cam-balkon/cambalkon_1.webp, cambalkon_2.webp, ... şeklinde yol oluşturulur
        image: `/images/cam-balkon/cambalkon_${id}.webp`, 
        // Başlıktan toplam proje sayısı bilgisini kaldırdık
        title: `Cam Balkon Projesi #${id}` 
    };
});

// --- PVC PENCERE VERİSİ OLUŞTURMA İŞLEMİ ---
// 1'den MAX_PROJECTS'e kadar sabit bir boyutla proje listesini oluşturur.
// Varsayılan klasör yapısı: public/images/pvc-sistem/pvc_1.webp
const pvcProjects = Array.from({ length: MAX_PROJECTS }, (_, i) => {
    const id = i + 1;
    return {
        id: id,
        image: `/images/pvc-sistem/pvc_${id}.webp`, 
        // Başlıktan toplam proje sayısı bilgisini kaldırdık
        title: `PVC Pencere Projesi #${id}`
    };
});
// Hizmet verileri
const services = [
  {
    icon: <Droplet className="w-8 h-8" />,
    id: "dusakabin",
    title: "Duşakabin Sistemleri",
    description: `Modern ve şık duşakabin çözümleri ile banyolarınıza estetik ve fonksiyonellik katıyoruz.`,
    // Otomatik oluşturulan listeyi buraya ekliyoruz
    projects: dusakabinProjects,
  },
    {
    icon: <Home className="w-8 h-8" />,
    id: "cambalkon",
    title: "Cam Balkon Sistemleri",
    description: `Sürme ve katlanır cam balkon sistemleri ile mekanlarınızı genişletin ve koruyun.`,
    // Yeni oluşturulan cam balkon listesini buraya ekliyoruz
    projects: cambalkonProjects,
  },
    {
    icon: <Frame className="w-8 h-8" />,
    id: "pvc",
    title: "PVC Pencere Sistemleri",
    // Açıklamayı güncelledik
    description: `Enerji tasarruflu ve dayanıklı PVC kapı-pencere sistemleri ile konforunuzu artırın.`,
    // Yeni otomatik listeyi kullandık
    projects: pvcProjects,
  }
];

export function Services() {
  return (
    <section id="hizmetlerimiz" className="py-20 bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Başlık ve Açıklama */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Hizmetlerimiz
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Antalya'da yıllardır süregelen deneyimimizle, cam balkon, duşakabin ve PVC sistemleri alanında 
            profesyonel çözümler sunuyoruz.
          </p>
        </div>

        {/* Hizmet Blokları */}
        <div className="space-y-20">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100" 
            >
              <div className="p-8 md:p-12">
                
                {/* İkon, Başlık ve Açıklama Alanı */}
                <div className="flex flex-col md:flex-row items-center text-center md:text-left mb-8 md:space-x-8"> 
                    <div className="flex-shrink-0 mb-4 md:mb-0">
                      <div className="w-16 h-16 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-600 mx-auto md:mx-0">
                        {service.icon}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-3xl font-semibold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-lg">
                        {service.description}
                      </p>
                    </div>
                </div>

                {/* Yeni Proje Galeri Alanı */}
                <div className="mt-8">
                  {/* Projeler 3'lü grup halinde, sağa sola kaydırılabilir */}
                  <ProjectGallery projects={service.projects} />

                  <div className="flex justify-center mt-8">
                    <a 
                        href="#iletisim"
                        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-blue-600/30"
                    >
                        Teklif Alın
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}