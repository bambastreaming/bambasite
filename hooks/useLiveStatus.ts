import { useState, useEffect } from 'react';

export interface LiveStatus {
  isLive: boolean;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  formattedCountdown: string;
}

/**
 * Hook to calculate whether Bamba Streaming is live right now
 * (Tuesdays from 20:30 to 23:00 ART / Argentina Time UTC-3),
 * or calculate the countdown until the next Tuesday 20:30 ART.
 */
export const useLiveStatus = (): LiveStatus => {
  const calculateStatus = (): LiveStatus => {
    // Current UTC time
    const now = new Date();
    
    // Argentina is UTC-3 (no daylight saving currently)
    const artOffsetMs = -3 * 60 * 60 * 1000;
    const artNow = new Date(now.getTime() + (now.getTimezoneOffset() * 60 * 1000) + artOffsetMs);

    const dayOfWeek = artNow.getDay(); // 0 = Sunday, 1 = Monday, 2 = Tuesday, ...
    const hours = artNow.getHours();
    const minutes = artNow.getMinutes();

    // Check if live: Tuesday between 20:30 and 23:00
    const isTuesday = dayOfWeek === 2;
    const isTimeSlot = (hours === 20 && minutes >= 30) || hours === 21 || hours === 22;

    if (isTuesday && isTimeSlot) {
      return {
        isLive: true,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        formattedCountdown: 'EN VIVO AHORA'
      };
    }

    // Calculate next Tuesday 20:30 ART
    let daysUntilTuesday = (2 - dayOfWeek + 7) % 7;
    // If today is Tuesday but already past 23:00, next stream is next Tuesday
    if (dayOfWeek === 2 && (hours > 22 || (hours === 20 && minutes < 30) === false && !isTimeSlot)) {
      if (hours >= 23) {
        daysUntilTuesday = 7;
      }
    }

    const nextStream = new Date(artNow);
    nextStream.setDate(artNow.getDate() + daysUntilTuesday);
    nextStream.setHours(20, 30, 0, 0);

    let diffMs = nextStream.getTime() - artNow.getTime();
    if (diffMs < 0) {
      nextStream.setDate(nextStream.getDate() + 7);
      diffMs = nextStream.getTime() - artNow.getTime();
    }

    const totalSeconds = Math.floor(diffMs / 1000);
    const d = Math.floor(totalSeconds / (3600 * 24));
    const h = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;

    const pad = (n: number) => n.toString().padStart(2, '0');

    return {
      isLive: false,
      days: d,
      hours: h,
      minutes: m,
      seconds: s,
      formattedCountdown: `${d}d ${pad(h)}h ${pad(m)}m ${pad(s)}s`
    };
  };

  const [status, setStatus] = useState<LiveStatus>(calculateStatus);

  useEffect(() => {
    const interval = setInterval(() => {
      setStatus(calculateStatus());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return status;
};
