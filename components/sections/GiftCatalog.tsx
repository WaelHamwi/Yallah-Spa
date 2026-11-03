"use client";
import { useMemo, useState } from "react";
import type { JSX } from "react";
import { giftCards } from "@/data/gift-data";
import { GiftCardItem } from "@/components/ui/GiftCardItem";
import CategoryFilter from "@/components/ui/CategoryFilter";
import { AkarIconsChevronDownSmall, FluentColorLocationRipple24, HugeiconsFilterHorizontal } from "@/components/icons";

export const GiftCatalog = (): JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState("الكل");
  const [searchTerm, setSearchTerm] = useState("");
  const [locationOpen, setLocationOpen] = useState(false);

  const visibleCards = useMemo(() => {
    const normalizedSearch = searchTerm.trim();
    if (!normalizedSearch) return giftCards;
    return giftCards.filter((card) => `${card.title} ${card.description} ${card.detail}`.includes(normalizedSearch));
  }, [searchTerm]);

  return (
    <section className="absolute left-23.5 top-245.5 h-315.5 w-316.75 overflow-hidden rounded-xl border border-solid border-[#e8a0bf] bg-[#fdf4f8]" aria-labelledby="gift-catalog-title" dir="rtl">
      {visibleCards.map((card) => <GiftCardItem key={`${card.image}-${card.position}`} card={card} />)}
      
      <h2 id="gift-catalog-title" className="absolute left-238.25 top-3 [font-family:'Cairo-Bold',Helvetica] text-[22px] font-bold leading-[normal] tracking-[0] text-[#59364c] font-extrabold">اكتشف هديتك المثالية</h2>
      <p className="absolute left-238.5 top-13.25 [font-family:'Cairo-Bold',Helvetica] text-sm font-bold leading-[normal] tracking-[0] text-[#806b79]">ابحث حسب نوع الجلسة أو المناسبة</p>
      
      <button type="button" className="absolute left-11.25 top-23.5 h-20 w-81.5 cursor-pointer" onClick={() => setLocationOpen((isOpen) => !isOpen)} aria-expanded={locationOpen} aria-haspopup="listbox" aria-label="تحديد موقع المستفيد">
        <img className="absolute left-0 top-0 h-[101.25%] w-[100.31%]" src="/rectangle-3.svg" alt="" aria-hidden="true" />
        <span className="inline-flex absolute left-[calc(50%_-_32.25rem)] top-[calc(50%_-_3.75rem)] items-center gap-3.5">
          <AkarIconsChevronDownSmall className="!relative !h-6 !w-6 !aspect-[1]" />
          <span className="relative -mt-px w-fit [font-family:'Cairo-Regular',Helvetica] text-base font-normal leading-[normal] tracking-[0] text-[#59364c]">الرجاء تحديد موقع المستفيد</span>
          <FluentColorLocationRipple24 className="!relative !h-6 !w-6 !aspect-[1]" />
        </span>
      </button>

      <form className="absolute left-130.25 top-25.5 h-18.5 w-172.25" onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="gift-search" className="sr-only">ابحث عن جلسة أو باقة هدايا</label>
        <input id="gift-search" type="search" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} placeholder="ابحث عن جلسة أو باقة هدايا..." className="absolute left-0 top-0 z-10 h-full w-full rounded-lg border border-solid border-[#d88bae] bg-transparent px-8 text-right [font-family:'Cairo-Regular',Helvetica] text-xl font-normal leading-[normal] tracking-[0] text-[#59364c] outline-none placeholder:text-[#c4c4c4]" />
        <img className="pointer-events-none absolute left-[51.31%] top-[31.76%] h-[68.24%] w-[48.69%]" src="/vector-5.svg" alt="" aria-hidden="true" />
      </form>

      <button type="button" className="absolute left-104.25 top-26.25 flex h-17.25 w-22.75 cursor-pointer bg-[url('/rectangle-6.svg')] bg-[100%_100%]" aria-label="فتح خيارات التصفية">
        <HugeiconsFilterHorizontal className="!mt-2.75 !h-10.58 !flex-1 !aspect-[1]" />
      </button>

      <CategoryFilter selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />

      <div className="absolute left-24.25 top-52.5 [font-family:'Cairo-Regular',Helvetica] text-sm font-normal leading-[normal] tracking-[0] text-[#59364c]">تصفح حسب الفئة</div>
      <button type="button" className="absolute left-271.5 top-51.25 cursor-pointer [font-family:'Cairo-Regular',Helvetica] text-sm font-normal leading-[normal] tracking-[0] text-[#c4c4c4]" onClick={() => setSelectedCategory("الكل")}>عرض الكل</button>
      
      <div className="absolute left-31.5 top-101.25 [font-family:'Cairo-Regular',Helvetica] text-xl font-normal leading-[normal] tracking-[0] text-[#59364c]">الهدايا المميزة</div>
      <div className="absolute left-25.75 top-109 [font-family:'Cairo-Regular',Helvetica] text-sm font-normal leading-[normal] tracking-[0] text-[#59364c]">اكتشف خيارات مختارة لكِ</div>
      <div className="absolute left-290 top-100.75 [font-family:'Cairo-Regular',Helvetica] text-sm font-normal leading-[normal] tracking-[0] text-[#59364c]">١٢ منتجًا</div>
      
      <img className="absolute left-20.5 top-90.75 h-2 w-282 object-cover" src="/line-1.svg" alt="" aria-hidden="true" />
      
      {/* Replaced AndrsrxnArrowStart with standard SVG to prevent compile errors */}
      <svg className="absolute left-287 top-52 h-6 w-6 aspect-square text-[#59364c]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </section>
  );
};