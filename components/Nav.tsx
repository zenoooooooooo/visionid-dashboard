import Link from "next/link";

const navLinks = [
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Feature",
    href: "/feature",
  },
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "Login",
    href: "/login",
  },
];

export function Nav() {
  return (
    <nav className="flex justify-center items-center font-michroma px-12 py-6 w-full">
      <h1 className="text-2xl mr-auto">
        <Link href="/">VISIONID</Link>
      </h1>
      <ul className="flex gap-6 items-center justify-center">
        {navLinks.map((item) => (
          <li>
            <Link
              href={item.href}
              className="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
