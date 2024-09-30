import ButtonUnderline from "../ui/ButtonStroke";

export default function WelcomeLinks() {
  return (
    <div
      id="container-welcome-links"
      className="flex flex-row justify-normal space-x-8 ml-0 md:ml-4 mt-4 md:mt-8"
    >
      <ButtonUnderline href="/docs/resume.pdf">
        <span className="text-h3-clamp font-bold">Resume</span>
      </ButtonUnderline>
      <ButtonUnderline href="/contact">
        <span className="text-h3-clamp font-bold">Contact</span>
      </ButtonUnderline>
    </div>
  );
}
