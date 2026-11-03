"use client";

import { Cart, StashBurgerClassic } from "@/components/icons";
import Image from "next/image";

const navLinks = [
  { label: "الرئيسية", active: false },
  { label: "خدماتنا", active: false },
  { label: "الإهداء", active: true },
  { label: "البكجات", active: false },
  { label: "مركز سبا", active: false },
];

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-gray-100 relative z-40 h-19.5">
      {/* Mobile View */}
      <div className="flex md:hidden items-center justify-between px-4 py-0">
        <button aria-label="Menu">
          <StashBurgerClassic />
        </button>

        <a href="/" aria-label="Yallah Spa Home">
          <Image
            src="/Yallah spa.png"
            alt="Yallah Spa"
            width={0}
            height={0}
            sizes="100vw"
            className="w-auto object-contain"
            priority
          />
        </a>

        <button aria-label="Cart" className="relative">
          <Cart />
        </button>
      </div>

      {/* Desktop View*/}
      <div className="hidden md:flex items-center justify-between px-8 py-4 max-w-[1440px] mx-auto">
        <a href="/" aria-label="Yallah Spa Home" className="shrink-0">
          <Image
            src="/Yallah spa.png"
            alt="Yallah Spa"
            width={0}
            height={0}
            sizes="100vw"
            className="w-auto object-contain"
            priority
          />
        </a>

        <div className="flex items-center justify-center bg-[#F8DCE8] border border-solid border-[#D88BAE] rounded-full w-[719px] h-[68px] mx-[71px] gap-15">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href="#"
              className={`text-xl font-extrabold whitespace-nowrap tracking-[0] leading-[21.6px] transition-colors ${
                link.active
                  ? "text-[#DFFADD]"
                  : "text-[#FFF8F5] hover:text-[#e8a0bf]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button aria-label="Cart" className="relative shrink-0">
          <Cart />
        </button>
      </div>
    </nav>
  );
}