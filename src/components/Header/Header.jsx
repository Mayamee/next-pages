import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <Image src={"/images/logo_black.png"} width={50} height={50} alt="Logo" />
        </div>
        <nav>
          <Link href="/events">Events</Link>
          <Link href="/">Home</Link>
          <Link href="/about">About us</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
