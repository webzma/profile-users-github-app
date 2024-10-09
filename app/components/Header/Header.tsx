"use client";
import Image from "next/image";

export function Header({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center items-start h-[330px]">
      <Image
        src="/hero-image-github-profile.png"
        alt="Hero Image Github Profile"
        width={370}
        height={370}
        layout="responsive"
        className="min-h-[370px] max-h-[370px] w-auto h-auto object-cover absolute -z-10"
        quality={100}
        priority={false}
      />

      {children}
    </div>
  );
}
