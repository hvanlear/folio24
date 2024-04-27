import Marquee from "react-fast-marquee";

const services = ["UI Design", "UX Audit", "AI Consultancy", "Web Development"];

export default function Ticker() {
  return (
    <Marquee>
      {services.map((str, index) => (
        <p className="text-4xl sm:text-7xl px-5 py-4 text-black" key={index}>
          {str}
        </p>
      ))}
    </Marquee>
  );
}
