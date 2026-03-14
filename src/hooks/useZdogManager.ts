import { useEffect, useRef } from "react";

type UpdateCallback = (delta: number, gradColor: string) => void;

const callbacks = new Set<UpdateCallback>();
let rafId: number | null = null;
let lastTime = 0;

function loop(time: number) {
  const delta = lastTime ? time - lastTime : 16;
  lastTime = time;

  const gradColor = getComputedStyle(document.documentElement)
    .getPropertyValue("--grad-start")
    .trim();

  callbacks.forEach((cb) => cb(delta, gradColor));
  rafId = requestAnimationFrame(loop);
}

function start() {
  if (rafId === null) {
    lastTime = 0;
    rafId = requestAnimationFrame(loop);
  }
}

function stop() {
  if (rafId !== null) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }
}

export function useZdogManager(callback: UpdateCallback) {
  const cbRef = useRef(callback);
  cbRef.current = callback;

  useEffect(() => {
    const wrappedCb: UpdateCallback = (delta, color) =>
      cbRef.current(delta, color);
    callbacks.add(wrappedCb);
    start();

    return () => {
      callbacks.delete(wrappedCb);
      if (callbacks.size === 0) stop();
    };
  }, []);
}
