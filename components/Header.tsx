import Image from "next/image";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header>
      <Image width={100} height={50} src="/next.svg" alt="" />
      <Navbar />
    </header>
  );
}
