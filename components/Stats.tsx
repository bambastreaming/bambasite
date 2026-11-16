
import React, { useState, useEffect, useRef } from 'react';

interface MetricItem {
  target: number;
  decimals: number;
  suffix: string;
  label: string;
  icon: string;
}

const AnimatedNumber: React.FC<{ target: number; decimals: number; suffix: string; animate: boolean }> = ({
  target,
  decimals,
  suffix,
  animate
}) => {
  const [current, setCurrent] = useState(animate ? 0 : target);

  useEffect(() => {
    if (!animate) return;
    let startTimestamp: number | null = null;
    const duration = 1600;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCurrent(ease * target);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCurrent(target);
      }
    };

    const animId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animId);
  }, [animate, target]);

  const formatted = decimals > 0 ? current.toFixed(decimals) : Math.floor(current).toString();

  return (
    <span>
      {formatted}{suffix}
    </span>
  );
};

const Stats: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const metrics: MetricItem[] = [
    { target: 1.8, decimals: 1, suffix: "K", label: "Youtube Subs", icon: "fa-play" },
    { target: 9.4, decimals: 1, suffix: "K", label: "Instagram", icon: "fa-camera" },
    { target: 7, decimals: 0, suffix: "M", label: "Total Views", icon: "fa-eye" },
    { target: 1, decimals: 0, suffix: "M", label: "Engagement", icon: "fa-heart" }
  ];

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        {metrics.map((stat, i) => (
          <div key={i} className="stat-card reveal bg-black p-6 sm:p-8 md:p-10 border-b-6 sm:border-b-8 border-white transition-all hover:border-bamba-blue group min-w-0 overflow-hidden" style={{ transitionDelay: `${i * 100}ms` }}>
            <div className="flex justify-between items-start mb-4 sm:mb-6">
              <div className="text-white/20 text-2xl sm:text-3xl group-hover:text-bamba-yellow transition-colors">
                <i className={`fas ${stat.icon}`}></i>
              </div>
              <div className="w-6 sm:w-8 h-1 bg-bamba-yellow"></div>
            </div>
            <div className="stat-number font-black-bamba text-white mb-2 tracking-tighter leading-none">
              <AnimatedNumber
                target={stat.target}
                decimals={stat.decimals}
                suffix={stat.suffix}
                animate={hasAnimated}
              />
            </div>
            <div className="text-[10px] sm:text-[11px] md:text-[12px] font-black text-bamba-yellow uppercase tracking-[0.25em] sm:tracking-[0.35em] md:tracking-[0.4em]">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
