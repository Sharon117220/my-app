import Link from "next/link";

type NavProps = {
  isOpen: boolean;
};

export default function Nav({ isOpen }: NavProps) {
  return (
    <nav
      className={`${
        isOpen ? "flex" : "hidden"
      } md:flex flex-col md:flex-row absolute md:static top-full left-0 right-0 bg-white md:bg-transparent p-4 md:p-0 gap-4 md:gap-8 shadow-md md:shadow-none`}
    >
      <Link href="/" className="hover:text-blue-600 font-medium">
        Home
      </Link>
      <Link href="/about" className="hover:text-blue-600 font-medium">
        About
      </Link>
      <Link href="/services" className="hover:text-blue-600 font-medium">
        Services
      </Link>
      <Link href="/contact" className="hover:text-blue-600 font-medium">
        Contact
      </Link>
    </nav>
  );
}
