import Marquee from "react-fast-marquee";
import { Arrow } from "../assets/Arrow";

const services = ["UI Design", "UX Audit", "AI Consultancy", "Web Development"];

const ticketGroup = services.flatMap((service, index) => [
  service,
  <Arrow key={index} />,
]);

export default function Ticker() {
  return (
    <Marquee>
      {ticketGroup.map((str, index) => (
        <p className="text-4xl sm:text-7xl px-5 py-4 text-black" key={index}>
          {str}
        </p>
      ))}
    </Marquee>
  );
}
