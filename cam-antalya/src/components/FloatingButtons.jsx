import React from 'react';
import { MessageSquare, Send } from 'lucide-react';

// Varsayılan telefon numaranız ve mesaj metni
const WHATSAPP_NUMBER = "905326947419"; // +90'sız ve boşluksuz
const WHATSAPP_MESSAGE = "Merhaba, Antalya-cam hizmetleriniz hakkında bilgi almak istiyorum.";

// WhatsApp ve Telegram linkleri
const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
const telegramLink = `https://t.me/serhankuyumcu`; // Örnek bir Telegram kullanıcı adı/kanal linki

export function FloatingButtons() {
  return (
    // Fixed konumlandırma ile sağ altta sabit durur
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4">
      
      {/* WhatsApp Butonu */}
      <a 
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile İletişime Geçin"
        className="
          flex items-center justify-center 
          w-14 h-14 rounded-full 
          bg-green-500 text-white 
          shadow-xl hover:bg-green-600 transition-all 
          transform hover:scale-110 
          ring-4 ring-green-500/30
        "
      >
        <MessageSquare className="w-7 h-7" />
      </a>

      {/* Telegram Butonu */}
      <a 
        href={telegramLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Telegram ile İletişime Geçin"
        className="
          flex items-center justify-center 
          w-14 h-14 rounded-full 
          bg-blue-500 text-white 
          shadow-xl hover:bg-blue-600 transition-all 
          transform hover:scale-110
          ring-4 ring-blue-500/30
        "
      >
        <Send className="w-7 h-7" />
      </a>
    </div>
  );
}