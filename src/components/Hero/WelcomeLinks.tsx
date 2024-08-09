import ButtonUnderline from "../ui/ButtonStroke";

export default function WelcomeLinks() {
  return (
    <div
      id="container-welcome-links"
      className="flex flex-row space-x-8 ml-4 mt-8"
    >
      <ButtonUnderline href="#resume">
        <span className="text-3xl">Resume</span>
      </ButtonUnderline>
      <ButtonUnderline href="#contact">
        <span className="text-3xl">Contact</span>
      </ButtonUnderline>
    </div>
  );
}
