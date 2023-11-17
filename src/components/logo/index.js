"use client";
import Image from "next/image";
import { LogoLG } from "@/images";
import useImageDimensions from "@/hook/getImageSize";
import Link from "next/link";

const Logo = () => {
  const { width, height } = useImageDimensions(LogoLG);

  return (
    <Link href="/">
      <Image src={LogoLG} width={width} height={height} alt="s" />
    </Link>
  );
};

export default Logo;
