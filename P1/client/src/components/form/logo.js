import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/images/logo.svg"
      alt="Project Logo"
      priority
      width={32}
      height={25.6}
    />
  );
}
