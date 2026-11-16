import React, { useState, useMemo } from 'react';

interface VideoItem {
  id: string;
  title: string;
  tag: string;
  duration: string;
  type: 'full' | 'clip';
  viewsCount: number;
  viewsDisplay: string;
}

// Lista ordenada por cantidad de reproducciones (de mayor a menor)
const featuredVideos: VideoItem[] = [
  {
    id: "BhEXMmgQyIc",
    title: "IAIR HORN, 498 DÍAS SECUESTRADO EN GAZA | TESTIMONIO EXCLUSIVO",
    tag: "PROGRAMA COMPLETO",
    duration: "58:58",
    type: "full",
    viewsCount: 6351,
    viewsDisplay: "6.4K vistas"
  },
  {
    id: "pV6pAluA6J0",
    title: "¿CUÁNTOS HIJOS QUERÉS TENER? | FAMILIA, VALORES Y PROYECTO",
    tag: "CLIP VIRAL",
    duration: "0:26",
    type: "clip",
    viewsCount: 6173,
    viewsDisplay: "6.2K vistas"
  },
  {
    id: "fWSjCFnAh2w",
    title: "¿VIVIR CON TORÁ O NO? | DEBATE SIN FILTRO EN LA MESA",
    tag: "DEBATE",
    duration: "0:23",
    type: "clip",
    viewsCount: 2943,
    viewsDisplay: "2.9K vistas"
  },
  {
    id: "RcPQd_yT1yo",
    title: "ISRAEL Y LA CARNE ARGENTINA | CULTURA, KASHRUT Y COSTUMBRES",
    tag: "CLIP VIRAL",
    duration: "0:37",
    type: "clip",
    viewsCount: 2844,
    viewsDisplay: "2.8K vistas"
  },
  {
    id: "NdhWFtwi5pw",
    title: "¿LA APARIENCIA IMPORTA? | PREJUICIOS Y REALIDAD DIGITAL",
    tag: "DEBATE",
    duration: "1:14",
    type: "clip",
    viewsCount: 2256,
    viewsDisplay: "2.3K vistas"
  },
  {
    id: "heREVYAUwCE",
    title: "¿QUIÉN ES EL VERDADERO MESÍAS DE LOS JUDÍOS? | DEBATE TEOLÓGICO",
    tag: "PROGRAMA COMPLETO",
    duration: "1:00:41",
    type: "full",
    viewsCount: 2092,
    viewsDisplay: "2.1K vistas"
  },
  {
    id: "CWBXgmaWshc",
    title: "EL DEBUT DE BAMBA STREAMING | ACHO COMO ESTILO DE VIDA",
    tag: "PROGRAMA COMPLETO",
    duration: "57:14",
    type: "full",
    viewsCount: 1898,
    viewsDisplay: "1.9K vistas"
  },
  {
    id: "dkCA4BuuKPA",
    title: "¿LA ORTODOXIA LIMITA A LA MUJER JUDÍA? | DIÁLOGO ABIERTO",
    tag: "PROGRAMA COMPLETO",
    duration: "59:21",
    type: "full",
    viewsCount: 1705,
    viewsDisplay: "1.7K vistas"
  },
  {
    id: "O7ckhMWuZQ4",
    title: "MAURO STENDEL EN BAMBA STREAMING | MANO A MANO EN VIVO",
    tag: "ENTREVISTA",
    duration: "1:04:26",
    type: "full",
    viewsCount: 1646,
    viewsDisplay: "1.6K vistas"
  }
];

const Episodes: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'full' | 'clip'>('all');
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);

  // Ordenados estrictamente de mayor a menor número de vistas
  const filtered = useMemo(() => {
    const list = activeTab === 'all' 
      ? featuredVideos 
      : featuredVideos.filter(v => v.type === activeTab);
    return [...list].sort((a, b) => b.viewsCount - a.viewsCount);
  }, [activeTab]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      {/* Header de la sección */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6">
        <div>
          <span className="text-bamba-blue font-black tracking-[0.3em] sm:tracking-[0.4em] text-[10px] sm:text-xs uppercase mb-3 sm:mb-4 block">
            RANKING DE AUDIENCIA • MÁS VISTOS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black-bamba text-black leading-none uppercase italic tracking-tighter">
            PROGRAMAS & <span className="text-bamba-blue">CLIPS VIRALES</span>
          </h2>
        </div>

        {/* Filtros */}
        <div className="flex items-center gap-2 self-start md:self-auto flex-wrap">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 text-xs font-black uppercase tracking-wider border-2 border-black transition-all ${
              activeTab === 'all' 
                ? 'bg-bamba-yellow text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]' 
                : 'bg-white text-black/70 hover:bg-gray-100'
            }`}
          >
            Top Todos
          </button>
          <button
            onClick={() => setActiveTab('full')}
            className={`px-4 py-2 text-xs font-black uppercase tracking-wider border-2 border-black transition-all ${
              activeTab === 'full' 
                ? 'bg-bamba-yellow text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]' 
                : 'bg-white text-black/70 hover:bg-gray-100'
            }`}
          >
            Emisiones Completas
          </button>
          <button
            onClick={() => setActiveTab('clip')}
            className={`px-4 py-2 text-xs font-black uppercase tracking-wider border-2 border-black transition-all ${
              activeTab === 'clip' 
                ? 'bg-bamba-yellow text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]' 
                : 'bg-white text-black/70 hover:bg-gray-100'
            }`}
          >
            Clips & Debates
          </button>
        </div>
      </div>

      {/* Grid de videos ordenados por reproducciones */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
        {filtered.map((video, idx) => (
          <div
            key={video.id}
            className="reveal brutal-shadow bg-white border-2 border-black overflow-hidden flex flex-col group cursor-pointer"
            style={{ transitionDelay: `${idx * 60}ms` }}
            onClick={() => setSelectedVideoId(video.id)}
          >
            {/* Thumbnail con Play Button Overlay */}
            <div className="relative aspect-video bg-black overflow-hidden">
              <img
                src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                alt={video.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-red-600 text-white flex items-center justify-center text-xl shadow-xl transform group-hover:scale-110 transition-transform border-2 border-black">
                  <i className="fas fa-play ml-1"></i>
                </div>
              </div>
              
              {/* Badge de Ranking (#1, #2, #3, ...) */}
              <div className={`absolute top-2 left-2 px-2 py-0.5 border border-black text-[10px] font-black uppercase tracking-wider ${
                idx === 0 ? 'bg-bamba-yellow text-black' : idx === 1 ? 'bg-white text-black' : 'bg-black text-white'
              }`}>
                #{idx + 1} MÁS VISTO
              </div>

              {/* Tag y Duración */}
              <span className="absolute bottom-2 right-2 bg-black/85 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                {video.duration}
              </span>
              <span className="absolute bottom-2 left-2 bg-bamba-blue text-white text-[9px] font-black uppercase tracking-wider px-2 py-0.5 border border-black">
                {video.tag}
              </span>
            </div>

            {/* Content */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <h3 className="font-black-bamba text-base sm:text-lg text-black uppercase tracking-tight leading-snug group-hover:text-bamba-blue transition-colors line-clamp-2 mb-3">
                {video.title}
              </h3>
              <div className="flex items-center justify-between text-[11px] font-bold pt-3 border-t border-black/5">
                <span className="inline-flex items-center gap-1.5 text-red-600 font-black">
                  <i className="fas fa-fire"></i>
                  {video.viewsDisplay}
                </span>
                <span className="text-black font-black uppercase text-[10px] tracking-wider group-hover:underline flex items-center gap-1">
                  Ver ahora <i className="fas fa-arrow-right text-[9px]"></i>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Botón CTA al canal de YouTube */}
      <div className="text-center">
        <a
          href="https://www.youtube.com/@BambaStreaming/videos"
          target="_blank"
          rel="noopener noreferrer"
          className="brutal-shadow inline-flex items-center gap-3 bg-bamba-blue hover:bg-black text-white px-8 sm:px-12 py-4 sm:py-5 font-black uppercase tracking-tight text-base sm:text-lg border-2 border-black transition-all hover:scale-105"
        >
          <i className="fab fa-youtube text-red-500 text-2xl"></i>
          <span>EXPLORÁ TODOS LOS VIDEOS EN YOUTUBE</span>
        </a>
      </div>

      {/* Modal de Reproducción de Video */}
      {selectedVideoId && (
        <div 
          className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedVideoId(null)}
        >
          <div 
            className="relative w-full max-w-4xl bg-black border-4 border-bamba-yellow shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rounded-none overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-3 bg-black border-b border-white/10 text-white">
              <span className="text-xs font-black uppercase tracking-wider text-bamba-yellow">
                BAMBA STREAMING • REPRODUCTOR
              </span>
              <button
                onClick={() => setSelectedVideoId(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white hover:text-black flex items-center justify-center text-sm transition-colors"
                aria-label="Cerrar video"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${selectedVideoId}?autoplay=1&rel=0`}
                title="Bamba Streaming Video Player"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Episodes;
