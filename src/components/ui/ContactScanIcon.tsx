import { type CSSProperties } from "react";

const keyframes = `
@keyframes contactScan-clipA {
  0%, 15%  { clip-path: inset(0 0 0 0); }
  45%, 55% { clip-path: inset(100% 0 0 0); }
  85%, 100%{ clip-path: inset(0 0 0 0); }
}
@keyframes contactScan-clipB {
  0%, 15%  { clip-path: inset(0 0 100% 0); }
  45%, 55% { clip-path: inset(0 0 0 0); }
  85%, 100%{ clip-path: inset(0 0 100% 0); }
}
@keyframes contactScan-line {
  0%, 15%  { top: -2px; opacity: 0; }
  17%      { opacity: 1; }
  45%      { top: 100%; opacity: 1; }
  47%, 53% { opacity: 0; }
  55%      { top: 100%; opacity: 1; }
  85%      { top: -2px; opacity: 1; }
  87%, 100%{ opacity: 0; top: -2px; }
}
`;

export default function ContactScanIcon({
  size = 40,
  duration = 7,
  className = "",
  style = {},
}: {
  size?: number;
  duration?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const iconSize = size * 0.65;

  const iconStyle = (anim: string): CSSProperties => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: iconSize,
    height: iconSize,
    animation: `${anim} ${duration}s ease-in-out infinite`,
  });

  const gradientDef = (
    <defs>
      <linearGradient id="contactIconGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="var(--grad-start)" />
        <stop offset="100%" stopColor="var(--grad-end)" />
      </linearGradient>
    </defs>
  );

  return (
    <div
      className={`bg-stone-950 bg-grid-small-white/[0.5] ${className}`}
      style={{
        position: "relative",
        width: size,
        height: size,
        flexShrink: 0,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        transform: "rotate(45deg)",
        border: "2px solid currentColor",
        borderRadius: 2,
        overflow: "hidden",
        ...style,
      }}
    >
      <style>{keyframes}</style>

      {/* Counter-rotate so icons stay upright */}
      <div
        style={{
          position: "relative",
          width: iconSize,
          height: iconSize,
          transform: "rotate(-45deg)",
        }}
      >
        {/* Bigfoot — clips away from top as line descends */}
        <svg
          style={iconStyle("contactScan-clipA")}
          viewBox="0 0 512 512"
          fill="url(#contactIconGrad)"
          xmlns="http://www.w3.org/2000/svg"
        >
          {gradientDef}
          <path d="M295.4 23.11c-13-.12-31.5 7.46-46 16.61 5.7-1.09 11.7-2.58 17.7-3.99-20.7 15.94-15.9 37.95-35.7 52.53-32.2-2.67-50.5 8.75-72.1 23.44 11.3-2.4 24.8-5.2 32.5-.8-10 3.7-36.1 14.7-45.5 22.7 6.9-1 23.5-3.8 28.3-3.6-28.5 17.5-38.2 45.4-54.2 72-.7-3.9-4.8-15.9-7-20.6-5.3 19.8-4.4 39.5-15.08 57.1-11.37 14.4-29.01 21.7-56.59 17.4 4.98 14.4 5.24 28.8 60.07 22.3l93.7-83.8c-8.4 35-30.7 78.7-22 113.1-2.3 9.3-6.1 18.7-11.4 27.6 6.6-2.7 12.9-6.4 17.5-10.8 5.6 13 12.9 25.3 17.3 38.8-31.1 17.7-64.4 22.8-90.9 42.6 8.1-1.5 16.6-3.5 23.8-3.5-12.3 11.4-20.8 25.9-34.99 52.7l105.49 27.9s1.4-19.9-4.6-27.2c-9.3-11.5-42-18.2-42-18.2 12.5-16.8 30.6-21 55.1-31-.5 5.2-5.6 11.6-9 17.6 20.9-5.9 32.8-7.8 42-26l24.2-68.1c65.2 19.6 66.4 108.1 46.7 150l124.1 9s6.8-23.6-.5-30.8c-16-16-67.7-1-67.7-1l6.6-36.3c2.9 1 7.1 1.8 14 2.6-10.8-14.4-16.8-19.1-19.8-36.1 6.4 5.1 13.9 8.4 24.2 7.7-23.1-24.9-30-40-35.3-70.1l-58.4-84.1 9.5-37.3c23.9 14.9 40.7 31.3 63 41.4-7.1-9.7-9-10.9-8.6-17.9 19 6.8 38.4 24.3 58 18.2 23.8-7.5 30.2-4.3 48 13.2-.3-19.9 5.8-18.6-18.1-37.6-11.9-9.2-33.9-19.9-55.4-30.4-10.9-9.6-18.7-19.4-23-32.3.1 7.6-1.2 14.6 1.3 21.6-11.5-5.9-21.7-11.5-28.6-16.6-13.1-9.7-10.1-27.8-14.4-47.3 1.6-10.7 3-19.18 5.3-29.04 5.2 4.71 5.9 10.01 9.4 20.24 3.9-16.95-1.1-33.3-4.2-47.92 1.9-32.41-24.8-35.72-46.7-35.97zm2.9 24.12c14.3 5.84 21.5 8.24 33.3 9.13L320.3 113c-12.1-8-20.4-12.2-38.1-10.7 9.7-17.76 13.8-37.17 16.1-55.07z" />
        </svg>

        {/* Flying saucer — revealed from top as line descends */}
        <svg
          style={iconStyle("contactScan-clipB")}
          viewBox="0 0 24 24"
          fill="url(#contactIconGrad)"
          xmlns="http://www.w3.org/2000/svg"
        >
          {gradientDef}
          <path fillRule="evenodd" clipRule="evenodd" d="M5.67459 7.59346C3.4317 8.35883 2 9.52274 2 10.8262C2 13.1313 6.47715 14.9999 12 14.9999C17.5228 14.9999 22 13.1313 22 10.8262C22 9.52274 20.5683 8.35883 18.3254 7.59346C18.2008 7.88374 17.9937 8.17747 17.6568 8.41182C16.8685 8.96009 15.3013 9.5 12 9.5C8.6987 9.5 7.1315 8.96009 6.34322 8.41182C6.00629 8.17747 5.79918 7.88374 5.67459 7.59346ZM12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13ZM8 11C8 11.5523 7.55228 12 7 12C6.44772 12 6 11.5523 6 11C6 10.4477 6.44772 10 7 10C7.55228 10 8 10.4477 8 11ZM17 12C17.5523 12 18 11.5523 18 11C18 10.4477 17.5523 10 17 10C16.4477 10 16 10.4477 16 11C16 11.5523 16.4477 12 17 12Z" />
          <path d="M7.05498 7.0054C7.40316 4.73714 9.3631 3 11.7288 3H12.2712C14.6369 3 16.5968 4.73714 16.945 7.0054C16.9131 7.07425 16.866 7.13466 16.8003 7.18039C16.3862 7.4684 15.1898 8 12 8C8.81016 8 7.6138 7.4684 7.19972 7.18039C7.13397 7.13466 7.08687 7.07425 7.05498 7.0054Z" />
          <path d="M6 16.25C6.41421 16.25 6.75 16.5858 6.75 17V20C6.75 20.4142 6.41421 20.75 6 20.75C5.58579 20.75 5.25 20.4142 5.25 20V17C5.25 16.5858 5.58579 16.25 6 16.25Z" />
          <path d="M18.75 17C18.75 16.5858 18.4142 16.25 18 16.25C17.5858 16.25 17.25 16.5858 17.25 17V20C17.25 20.4142 17.5858 20.75 18 20.75C18.4142 20.75 18.75 20.4142 18.75 20V17Z" />
          <path d="M12 17.25C12.4142 17.25 12.75 17.5858 12.75 18V21C12.75 21.4142 12.4142 21.75 12 21.75C11.5858 21.75 11.25 21.4142 11.25 21V18C11.25 17.5858 11.5858 17.25 12 17.25Z" />
        </svg>

        {/* Scan line */}
        <span
          style={{
            position: "absolute",
            left: -4,
            right: -4,
            height: 2,
            pointerEvents: "none",
            animation: `contactScan-line ${duration}s ease-in-out infinite`,
            top: -2,
          }}
        >
          <span
            style={{
              position: "absolute",
              inset: 0,
              background: "var(--grad-start)",
              opacity: 0.35,
            }}
          />
          <span
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 2,
              height: 8,
              background:
                "linear-gradient(to bottom, var(--grad-start), transparent)",
              opacity: 0.1,
            }}
          />
        </span>
      </div>
    </div>
  );
}
