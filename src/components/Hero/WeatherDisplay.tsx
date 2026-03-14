"use client";

import { useState, useEffect } from "react";

const RALEIGH_LAT = 35.7796;
const RALEIGH_LON = -78.6382;
const API_URL = `https://api.open-meteo.com/v1/forecast?latitude=${RALEIGH_LAT}&longitude=${RALEIGH_LON}&current=temperature_2m,weather_code,is_day&temperature_unit=fahrenheit`;

function getWeatherEmoji(code: number, isDay: boolean): string {
  if (code === 0) return isDay ? "\u2600\uFE0F" : "\uD83C\uDF19";
  if (code <= 2) return isDay ? "\uD83C\uDF24\uFE0F" : "\uD83C\uDF19";
  if (code === 3) return "\u2601\uFE0F";
  if (code <= 48) return "\uD83C\uDF2B\uFE0F";
  if (code <= 67) return "\uD83C\uDF27\uFE0F";
  if (code <= 77) return "\uD83C\uDF28\uFE0F";
  if (code <= 82) return "\uD83C\uDF27\uFE0F";
  if (code <= 86) return "\uD83C\uDF28\uFE0F";
  return "\u26C8\uFE0F";
}

export default function WeatherDisplay() {
  const [temp, setTemp] = useState<number | null>(null);
  const [emoji, setEmoji] = useState("\u26C5");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        const current = data.current;
        setTemp(Math.round(current.temperature_2m));
        setEmoji(getWeatherEmoji(current.weather_code, current.is_day === 1));
      })
      .catch(() => {
        // Fallback to defaults on error
      });
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center gap-1">
        <span className="text-xl">{"\u26C5"}</span>
        <span className="text-sm font-semibold">--°</span>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center gap-1 h-[1.75rem]">
        <span className="text-xl leading-none">{emoji}</span>
        <span className="text-sm font-semibold">
          {temp !== null ? `${temp}\u00B0` : "--\u00B0"}
        </span>
      </div>
      <div className="text-xs text-stone-400 uppercase tracking-wide mt-1">
        Raleigh, NC
      </div>
    </div>
  );
}
