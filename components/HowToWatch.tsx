
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

      {/* Plataformas: YouTube (En Vivo) vs Spotify (Audio) */}
      <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {/* Card YouTube / En Vivo */}
        <div className="reveal brutal-shadow bg-black text-white border-3 border-black p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center text-xl shadow">
                  <i className="fab fa-youtube"></i>
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-bamba-yellow block">TRANSMISIÓN EN VIVO</span>
                  <h3 className="font-black-bamba text-xl sm:text-2xl uppercase tracking-tight">Canal de YouTube</h3>
                </div>
              </div>
              <span className="px-2.5 py-1 bg-white/10 text-white/80 rounded-full text-[9px] font-black uppercase tracking-wider hidden sm:inline-block">
                EN VIVO
              </span>
            </div>

            <p className="text-sm font-bold text-gray-300 mb-6 leading-relaxed">
              Sintonizá todos los martes a las 20:30 hs (ARG) con el chat abierto, debates sin filtro y la tribuna en directo.
            </p>

            {/* Horarios Internacionales */}
            <div className="mb-6">
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40 block mb-3">
                HORARIOS INTERNACIONALES
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <div className="p-2.5 bg-white/5 border border-white/10 rounded-lg text-center hover:border-bamba-yellow transition-colors">
                  <span className="text-lg block mb-0.5">🇦🇷</span>
                  <span className="text-[9px] font-bold text-white/60 uppercase block">Buenos Aires</span>
                  <span className="text-sm font-black-bamba text-bamba-yellow">20:30 HS</span>
                </div>
                <div className="p-2.5 bg-white/5 border border-white/10 rounded-lg text-center hover:border-bamba-yellow transition-colors">
                  <span className="text-lg block mb-0.5">🇺🇸</span>
                  <span className="text-[9px] font-bold text-white/60 uppercase block">Miami</span>
                  <span className="text-sm font-black-bamba text-white">18:30 HS</span>
                </div>
                <div className="p-2.5 bg-white/5 border border-white/10 rounded-lg text-center hover:border-bamba-yellow transition-colors">
                  <span className="text-lg block mb-0.5">🇪🇸</span>
                  <span className="text-[9px] font-bold text-white/60 uppercase block">Madrid</span>
                  <span className="text-sm font-black-bamba text-white">00:30 HS</span>
                </div>
                <div className="p-2.5 bg-white/5 border border-white/10 rounded-lg text-center hover:border-bamba-yellow transition-colors">
                  <span className="text-lg block mb-0.5">🇮🇱</span>
                  <span className="text-[9px] font-bold text-white/60 uppercase block">Jerusalem</span>
                  <span className="text-sm font-black-bamba text-bamba-yellow">01:30 HS</span>
                </div>
              </div>
            </div>
          </div>

          <a
            href="https://www.youtube.com/@BambaStreaming"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white px-6 py-4 font-black-bamba uppercase tracking-wider text-sm sm:text-base border-2 border-black transition-all hover:scale-[1.02] shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]"
          >
            <i className="fab fa-youtube text-xl"></i>
            <span>IR AL CANAL DE YOUTUBE</span>
          </a>
        </div>

        {/* Card Spotify / Podcast */}
        <div className="reveal brutal-shadow bg-white text-black border-3 border-black p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-6 border-b border-black/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1DB954] text-white flex items-center justify-center text-xl shadow">
                  <i className="fab fa-spotify"></i>
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-bamba-blue block">PODCAST EN AUDIO</span>
                  <h3 className="font-black-bamba text-xl sm:text-2xl uppercase tracking-tight">Bamba en Spotify</h3>
                </div>
              </div>
              <span className="px-2.5 py-1 bg-black/5 text-black/70 rounded-full text-[9px] font-black uppercase tracking-wider hidden sm:inline-block">
                ON DEMAND
              </span>
            </div>

            <p className="text-sm font-bold text-gray-600 mb-4 leading-relaxed">
              Escuchá los programas completos, debates y entrevistas en cualquier momento estés donde estés.
            </p>

            {/* Spotify Embed */}
            <div className="w-full mb-6 overflow-hidden rounded-xl border border-black/10">
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

          <a
            href="https://open.spotify.com/show/6vHFrfEwlCA1kIbUUdk9FI"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-3 bg-bamba-yellow hover:bg-black hover:text-white text-black px-6 py-4 font-black-bamba uppercase tracking-wider text-sm sm:text-base border-2 border-black transition-all hover:scale-[1.02] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            <i className="fab fa-spotify text-xl"></i>
            <span>ABRIR EN SPOTIFY</span>
          </a>
        </div>
      </div>

    </div>
  );
};

export default HowToWatch;
