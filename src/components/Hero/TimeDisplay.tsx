"use client";

import { useState, useEffect } from "react";

export default function TimeDisplay() {
  const [time, setTime] = useState<Date | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTime(new Date());

    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted || !time) {
    return (
      <div>
        <div className="text-sm font-bold uppercase tracking-wide">--:--</div>
        <div className="text-xs text-stone-400 uppercase tracking-wide mt-1">
          Loading...
        </div>
      </div>
    );
  }

  const hours = time.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  const [timePart, period] = hours.split(" ");
  const [hourStr, minuteStr] = timePart.split(":");

  const formattedDate = time.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  return (
    <div>
      <div className="text-sm font-bold uppercase tracking-wide h-[1.75rem] flex items-center">
        {hourStr}<span className="animate-blink">:</span>{minuteStr} {period}
      </div>
      <div className="text-xs text-stone-400 uppercase tracking-wide mt-1">
        {formattedDate}
      </div>
    </div>
  );
}
