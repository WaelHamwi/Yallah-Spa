"use client";

import {
  SimpleLineIconsSocialInstagram,
  Facebook,
  StreamlineTwitter,
  LucideExtendedGiftFilled,
} from "@/components/icons";

export default function AnnouncementBar() {
  return (
    <div className="w-full bg-[#ddeadd] md:text-[#FFFFFF] text-[#3B4D3B] px-4 py-2 text-xs md:text-sm font-bold">
      {/* Mobile View: Centered group with gap */}
      <div className="flex md:hidden items-center justify-center gap-2 w-full">
        <LucideExtendedGiftFilled className=" h-5 shrink-0" />
        <p className="text-center">
          عرض خاص لفترة محدودة - خصم 15% على باقات الهدايا
        </p>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex items-center justify-between w-full max-w-[1440px] mx-auto">
        {/* Right Side (Icons) - Kept your exact names */}
        <div className="w-1/3 flex items-center justify-start gap-4">
          <StreamlineTwitter className=" cursor-pointer hover:opacity-80" />
          <SimpleLineIconsSocialInstagram className="cursor-pointer hover:opacity-80" />
          <Facebook className="cursor-pointer hover:opacity-80" />
        </div>

        {/* Center */}
        <p className="w-1/3 text-center">
          دلّل من تحب — أهدِي لحظات من الاسترخاء
        </p>

        {/* Left Side (Location) */}
        <p className="w-1/3 text-left">
          مركز العوالي – حي النسيم، مكة المكرمة، السعودية
        </p>
      </div>
    </div>
  );
}
