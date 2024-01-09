import React, { useEffect } from 'react';

const GoogleTranslate = () => {
  useEffect(() => {
    // Función para inicializar el widget de Google Translate
    function googleTranslateElementInit() {
      new window.google.translate.TranslateElement({
        pageLanguage: 'es',
        includedLanguages: 'ca,eu,gl,en,fr,it,pt,de',
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        gaTrack: true
      }, 'google_translate_element');
    }

    // Verificar si el script ya está cargado (para evitar errores al cargar varias veces)
    if (!window.google || !window.google.translate) {
      const script = document.createElement('script');
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
      script.onload = googleTranslateElementInit;
    } else {
      googleTranslateElementInit();
    }
  }, []);

  return (
    <div id="google_translate_element" className="google"></div>
  );
};

export default GoogleTranslate;
