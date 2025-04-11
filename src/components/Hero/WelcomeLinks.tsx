import ButtonUnderline from "../ui/ButtonStroke";

export default function WelcomeLinks() {
  return (
    <div
      id="container-welcome-links"
      className="flex flex-row justify-normal space-x-8 ml-0 md:ml-4 mt-4 md:mt-8"
    >
      <nav className="">
        <ul className="flex flex-row gap-8">
          <li>
            <a
              target="_blank"
              className="text-h3-clamp font-bold hover:text-blue-500 "
              href="/docs/Hunter-Van-Lear-Resume.pdf"
            >
              Resume
            </a>
          </li>
          <li>
            <a
              className="text-h3-clamp font-bold hover:text-blue-500 "
              href="/contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
