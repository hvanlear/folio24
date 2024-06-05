export default function ButtonStroke() {
  return (
    <>
      <svg
        className="button-stroke button-stroke-green"
        viewBox="0 0 154 5"
        style={{
          display: "block",
          position: "absolute",
          strokeWidth: 2,
          stroke: "#00bc8c",
          height: "10px",
          width: "calc(100% - 50px)",
        }}
      >
        <use href="#line"></use>
      </svg>
      <svg
        className="button-stroke button-stroke-green"
        viewBox="0 0 154 5"
        style={{
          animation: "strokeAnimation 1s ease-out",
          strokeDasharray: "650px",
          strokeDashoffset: "650px",
          stroke: "#181f2b",
          strokeWidth: 5,
          WebkitTransition: "stroke-dashoffset 900ms ease-out",
          transition: "stroke-dashoffset 900ms ease-out",
        }}
      >
        <use href="#line"></use>
      </svg>
    </>
  );
}
