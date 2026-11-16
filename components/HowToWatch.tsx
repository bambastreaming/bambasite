
import React from 'react';

const HowToWatch: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "SUSCRIBITE",
      description: "Entrá a nuestro canal de YouTube y hacé clic en SUSCRIBIRSE",
      icon: "fab fa-youtube",
      color: "bg-red-500"
    },
    {
      number: "02",
      title: "ACTIVÁ LA CAMPANITA",
      description: "Hacé clic en la campanita 🔔 para enterarte del vivo y de todo el contenido extra que subimos",
      icon: "fas fa-bell",
      color: "bg-bamba-yellow"
    },
    {
      number: "03",
      title: "MARTES 20:30 HS",
      description: "Todos los martes a las 20:30 hs (ARG) transmitimos en vivo",
      icon: "fas fa-calendar-alt",
      color: "bg-bamba-blue"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-12 sm:mb-16 md:mb-20">
        <span className="text-bamba-blue font-black tracking-[0.3em] sm:tracking-[0.4em] text-[10px] sm:text-xs uppercase mb-4 sm:mb-6 block">CÓMO VER</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black-bamba text-black mb-4 sm:mb-6 leading-none uppercase italic tracking-tighter">
          NO TE PIERDAS <span className="text-bamba-yellow">NINGÚN EPISODIO</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 font-bold max-w-2xl mx-auto">
          Seguí estos pasos simples para estar siempre al día con Bamba Streaming
        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
        {steps.map((step, i) => (
          <div 
            key={i} 
            className="reveal brutal-shadow bg-white border-2 border-black p-6 sm:p-8 md:p-10 relative transform hover:rotate-1 transition-all duration-300"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            {/* Number Badge */}
            <div className="absolute -top-4 -left-4 w-12 h-12 sm:w-16 sm:h-16 bg-black text-white flex items-center justify-center font-black-bamba text-xl sm:text-2xl border-2 border-black">
              {step.number}
            </div>

            {/* Icon */}
            <div className={`${step.color} w-16 h-16 sm:w-20 sm:h-20 border-2 border-black flex items-center justify-center text-white text-2xl sm:text-3xl mb-6 sm:mb-8 rotate-3`}>
              <i className={step.icon}></i>
            </div>

            {/* Content */}
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black-bamba mb-3 sm:mb-4 text-black tracking-tighter uppercase">
              {step.title}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base font-bold leading-snug">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      {/* Horarios Internacionales */}
      <div className="reveal bg-black text-white p-6 sm:p-8 border-3 border-black shadow-[8px_8px_0px_0px_rgba(230,172,60,1)] rounded-none mb-12 max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 mb-6 border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-bamba-yellow animate-ping"></span>
            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-bamba-yellow">
              SINTONIZÁ EN VIVO TODOS LOS MARTES
            </span>
          </div>
          <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest">
            En vivo por YouTube
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-center">
          <div className="p-3 bg-white/5 border border-white/10 rounded-xl hover:border-bamba-yellow transition-colors">
            <span className="text-2xl block mb-1">🇦🇷</span>
            <span className="text-[10px] font-bold text-white/60 uppercase tracking-wider block">Argentina</span>
            <span className="text-base sm:text-lg font-black-bamba text-bamba-yellow">20:30 HS</span>
          </div>
          <div className="p-3 bg-white/5 border border-white/10 rounded-xl hover:border-bamba-yellow transition-colors">
            <span className="text-2xl block mb-1">🇺🇸</span>
            <span className="text-[10px] font-bold text-white/60 uppercase tracking-wider block">Miami / NY</span>
            <span className="text-base sm:text-lg font-black-bamba text-white">18:30 HS</span>
          </div>
          <div className="p-3 bg-white/5 border border-white/10 rounded-xl hover:border-bamba-yellow transition-colors">
            <span className="text-2xl block mb-1">🇪🇸</span>
            <span className="text-[10px] font-bold text-white/60 uppercase tracking-wider block">España</span>
            <span className="text-base sm:text-lg font-black-bamba text-white">00:30 HS</span>
          </div>
          <div className="p-3 bg-white/5 border border-white/10 rounded-xl hover:border-bamba-yellow transition-colors">
            <span className="text-2xl block mb-1">🇮🇱</span>
            <span className="text-[10px] font-bold text-white/60 uppercase tracking-wider block">Israel</span>
            <span className="text-base sm:text-lg font-black-bamba text-bamba-yellow">01:30 HS</span>
          </div>
        </div>
      </div>

      {/* Spotify Podcast Embed */}
      <div className="reveal bg-white border-2 border-black p-6 sm:p-8 max-w-4xl mx-auto mb-12 brutal-shadow">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#1DB954] text-white flex items-center justify-center text-xl">
              <i className="fab fa-spotify"></i>
            </div>
            <div>
              <h4 className="font-black-bamba text-lg text-black uppercase tracking-tight">Escuchanos en Spotify</h4>
              <p className="text-xs font-bold text-gray-500">Episodios completos y entrevistas en audio</p>
            </div>
          </div>
          <a 
            href="https://open.spotify.com/show/6vHFrfEwlCA1kIbUUdk9FI" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[10px] font-black uppercase tracking-wider px-4 py-2 border-2 border-black bg-bamba-yellow text-black hover:bg-black hover:text-white transition-colors"
          >
            Abrir en Spotify <i className="fas fa-arrow-up-right-from-square ml-1"></i>
          </a>
        </div>
        <div className="w-full overflow-hidden rounded-xl">
          <iframe 
            style={{ borderRadius: '12px' }} 
            src="https://open.spotify.com/embed/show/6vHFrfEwlCA1kIbUUdk9FI?utm_source=generator&theme=0" 
            width="100%" 
            height="152" 
            frameBorder="0" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
            title="Bamba Streaming en Spotify"
          ></iframe>
        </div>
      </div>

      {/* YouTube CTA */}
      <div className="text-center">
        <a
          href="https://www.youtube.com/@BambaStreaming"
          target="_blank"
          rel="noopener noreferrer"
          className="brutal-shadow inline-flex items-center gap-3 sm:gap-4 bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 font-black uppercase tracking-tighter text-base sm:text-lg md:text-xl border-2 border-black transition-all hover:scale-105"
        >
          <i className="fab fa-youtube text-2xl sm:text-3xl"></i>
          <span>IR AL CANAL DE YOUTUBE</span>
        </a>
      </div>

    </div>
  );
};

export default HowToWatch;
