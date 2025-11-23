import React, { useState } from 'react';

/**
 * Görsel yüklenemediğinde bir yedek (fallback) içerik gösteren React bileşeni.
 * Not: Projede TypeScript kullanılmadığı için tipler kaldırılmıştır.
 */
export const ImageWithFallback = ({ 
  src, 
  alt, 
  className = "", 
  fallback = null, // fallback prop'u isteğe bağlı (optional)
  ...rest
}) => {
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setHasError(true);
  };
  
  // Hata oluştuysa ve bir fallback içeriği varsa, onu göster.
  if (hasError && fallback) {
    return <div className={className}>{fallback}</div>;
  }
  
  // Hata oluştuysa ve fallback içeriği yoksa, basit bir placeholder göster.
  if (hasError) {
      return (
        <div className={`flex items-center justify-center bg-gray-200 text-gray-500 rounded-xl ${className}`}>
            Görsel Yüklenemedi
        </div>
      );
  }

  // Normal görseli göster
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={handleError}
      loading="lazy"
      {...rest}
    />
  );
};