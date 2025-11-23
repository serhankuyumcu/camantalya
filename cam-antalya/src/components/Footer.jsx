import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer id="iletisim" className="bg-gray-900 text-gray-300 font-sans border-t-8 border-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Mobil cihazlarda ortalanmış, büyük ekranlarda sola hizalanmış sütunlar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-8 text-center md:text-left">
          
          {/* Sütun 1: Şirket Hakkında */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Antalya Cam & PVC
            </h3>
            <p className="text-gray-400 text-sm">
              Antalya'da güvenilir cam balkon, duşakabin ve PVC sistemleri çözüm ortağınız. Kalite ve müşteri memnuniyeti önceliğimizdir.
            </p>
          </div>

          {/* Sütun 2: Hizmet Navigasyonu */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Hizmetlerimiz</h4>
            <ul className="space-y-3">
              <li>
                <a href="/#hizmetlerimiz" className="hover:text-blue-400 transition-colors text-sm">
                  Duşakabin Sistemleri
                </a>
              </li>
              <li>
                <a href="/#hizmetlerimiz" className="hover:text-blue-400 transition-colors text-sm">
                  Cam Balkon Sistemleri
                </a>
              </li>
              <li>
                <a href="/#hizmetlerimiz" className="hover:text-blue-400 transition-colors text-sm">
                  PVC Pencere Sistemleri
                </a>
              </li>
            </ul>
          </div>

          {/* Sütun 3: İletişim Bilgileri */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Bize Ulaşın</h4>
            <ul className="space-y-3">
              {/* İletişim öğeleri mobil görünümde ortalanıyor */}
              <li className="flex items-start md:items-center md:justify-start justify-center"> 
                <Phone className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-blue-400" />
                <div>
                  <a href="tel:+905551234567" className="hover:text-blue-400 transition-colors text-sm">
                    0532 694 74 19
                  </a>
                </div>
              </li>
              <li className="flex items-start md:items-center md:justify-start justify-center">
                <Mail className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-blue-400" />
                <div>
                  <a href="mailto:info@antalyacam.com" className="hover:text-blue-400 transition-colors text-sm">
                    info@antalyacam.com
                  </a>
                </div>
              </li>
              <li className="flex items-start md:items-center md:justify-start justify-center">
                <MapPin className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-blue-400" />
                <div className="text-sm">
                  Antalya, Türkiye
                  <p className="text-gray-500">Konyaaltı</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Sütun 4: Çalışma Saatleri */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Çalışma Saatleri</h4>
            <ul className="space-y-2">
              {/* Çalışma saatleri öğesi mobil görünümde ortalanıyor */}
              <li className="flex items-start md:items-center md:justify-start justify-center">
                <Clock className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-blue-400" />
                <div>
                  <p className="text-sm">Pazartesi - Cumartesi</p>
                  <p className="text-gray-400 text-sm">09:00 - 18:00</p>
                </div>
              </li>
              {/* Diğer saat bilgisi sadece metin olduğu için text-center ile yetiniyor */}
              <li className="mt-2 text-center md:text-left"> 
                <p className="text-sm">Pazar</p>
                <p className="text-gray-400 text-sm">Kapalı</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Telif Hakkı (Copyright) Bölümü */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500 text-sm">
          <p>
            &copy; 2025 Antalya Cam & PVC Sistemleri. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}