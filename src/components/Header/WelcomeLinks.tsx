export default function WelcomeLinks() {
  return (
    <div
      id="container-welcome-links"
      className="flex flex-row space-x-8 ml-4 mt-8"
    >
      <div className="link-container flex flex-col">
        <a className="welcome-links text-h3-clamp font-bold " href="#">
          resume
        </a>
      </div>
      <div className="link-container flex flex-col">
        <a className="welcome-links text-h3-clamp font-bold " href="#">
          contact me
        </a>
      </div>
    </div>
  );
}
