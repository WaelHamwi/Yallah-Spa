"use client";
import { EmojioneV1PersonGettingMassage, FluentColorGiftCard16 } from "@/components/icons";

interface GiftTypeToggleProps {
  selectedType: "individual" | "package";
  onSelectType: (type: "individual" | "package") => void;
}

export default function GiftTypeToggle({ selectedType, onSelectType }: GiftTypeToggleProps) {
  return (
    <div className="inline-flex items-center bg-[#fdf4f8] border border-[#e8a0bf] rounded-full p-2 md:p-2.5 relative z-20 shadow-md w-full max-w-[350px] md:max-w-[600px]">
      <button
        onClick={() => onSelectType("individual")}
        className={`flex-1 flex items-center justify-center gap-2 md:gap-3 px-2 md:px-6 py-3 md:py-5 rounded-full transition-all duration-300 ${
          selectedType === "individual"
            ? "bg-gradient-to-l from-[#f8dce8] to-[#e8a0bf] text-[#59364c] shadow-sm"
            : "text-[#59364c] hover:bg-white/50"
        }`}
      >
        <span className="flex items-center justify-center  md:w-10 md:h-10 lg:w-12 lg:h-12 shrink-0 [&_svg]:w-full [&_img]:w-full [&_img]:h-full">
          <EmojioneV1PersonGettingMassage />
        </span>
        <span className=" md:text-xl lg:text-2xl font-bold whitespace-nowrap">جلسات فردية</span>
      </button>

      <button
        onClick={() => onSelectType("package")}
        className={`flex-1 flex items-center justify-center gap-2 md:gap-3 px-2 md:px-6 py-3 md:py-5 rounded-full transition-all duration-300 ${
          selectedType === "package"
            ? "bg-gradient-to-l from-[#f8dce8] to-[#e8a0bf] text-[#59364c] shadow-sm"
            : "text-[#59364c] hover:bg-white/50"
        }`}
      >
        <span className="flex items-center justify-center md:w-10 md:h-10 lg:w-12 lg:h-12 shrink-0 [&_svg]:w-full [&_img]:w-full [&_img]:h-full">
          <FluentColorGiftCard16 />
        </span>
        <span className=" md:text-xl lg:text-2xl font-bold whitespace-nowrap">باقات الهدايا</span>
      </button>
    </div>
  );
}