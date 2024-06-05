export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-4 justify-center">
      <div className="">
        <h1
          className="text-7xl font-bold"
          style={{
            WebkitTextFillColor: "black",
            WebkitTextStroke: "1px white",
          }}
        >
          Hunter Van Lear
        </h1>
      </div>
      <nav>
        <ul className="flex flex-row gap-10 ">
          <li className="text-4xl font-bold">
            <a href="http://">Home</a>
          </li>
          <li className="text-4xl font-bold">
            <a href="http://">Work</a>
          </li>
          <li className="text-4xl font-bold">
            <a href="http://">About</a>
          </li>
        </ul>
      </nav>
      <div className="flex flex-row">
        <p>Elsewhere</p>
      </div>
    </div>
  );
}
