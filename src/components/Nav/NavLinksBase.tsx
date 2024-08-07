import Link from "next/link";

type NavItem = {
  name: string;
  path: string;
};

type NavLinksProps = {
  isFullScreen: boolean;
  onClose?: () => void;
};

const navItems: NavItem[] = [
  { name: "Home", path: "/" },
  { name: "Archive", path: "/archive" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function NavLinksBase({ isFullScreen, onClose }: NavLinksProps) {
  return (
    <ul
      className={`${
        isFullScreen
          ? "flex flex-col"
          : "flex flex-row items-center gap-3 md:gap-5 "
      }`}
    >
      {navItems.map((item) => (
        <li key={item.name} className={isFullScreen ? "mb-9" : ""}>
          <Link
            href={item.path}
            className={`
              ${
                isFullScreen
                  ? "text-h1.5-clamp leading-none hover:text-blue-500 text-stone-950"
                  : "text-h3-clamp leading-none hover:text-blue-500 text-stone-950"
              } font-bold
            `}
            onClick={isFullScreen ? onClose : undefined}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
