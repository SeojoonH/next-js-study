import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link
        style={{ color: router.pathname === "/" ? "red" : "green" }}
        href="/"
      >
        Home
      </Link>
      <Link
        style={{ color: router.pathname === "/about" ? "red" : "green" }}
        href="/about"
      >
        About
      </Link>
    </nav>
  );
}
