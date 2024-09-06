import ButtonUnderline from "../ui/ButtonStroke";

export default function WelcomeLinks() {
  return (
    <div
      id="container-welcome-links"
      className="flex flex-row md:justify-normal justify-center space-x-8 ml-0 md:ml-4 mt-4 md:mt-8"
    >
      <ButtonUnderline href="/docs/resume.pdf">
        <span className="text-h3-clamp">Resume</span>
      </ButtonUnderline>
      <ButtonUnderline href="/contact">
        <span className="text-h3-clamp">Contact</span>
      </ButtonUnderline>
    </div>
  );
}
