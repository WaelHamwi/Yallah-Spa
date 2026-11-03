"use client";
import React, { useState, useRef, useEffect } from "react";
import { Search } from "lucide-react";
import GiftTypeToggle from "@/components/ui/GiftTypeToggle";
import CategoryFilter from "@/components/ui/CategoryFilter";
import GiftCard from "@/components/ui/GiftCard";
import { locations } from "@/data/mockData";
import {
  AkarIconsChevronDownSmall,
  HugeiconsFilterHorizontal,
  FluentColorLocationRipple24,
} from "@/components/icons";
import {
  useFilteredGifts,
  sortOptions,
  type SortOption,
} from "@/hooks/useFilteredGifts";
import { GiftType, PriceRange } from "@/types";
export default function Catalog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [giftType, setGiftType] = useState<GiftType>("individual");
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const locationRef = useRef<HTMLDivElement>(null);

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption>("default");
  

  const [priceRange, setPriceRange] = useState<PriceRange>({
    min: "",
    max: "",
  });
  const filterRef = useRef<HTMLDivElement>(null);

  const hasActiveFilters =
    priceRange.min !== "" || priceRange.max !== "" || sortBy !== "default";

  const filteredGifts = useFilteredGifts({
    searchTerm,
    selectedCategory,
    selectedLocation,
    giftType,
    priceRange,
    sortBy,
  });

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        locationRef.current &&
        !locationRef.current.contains(event.target as Node)
      ) {
        setIsLocationOpen(false);
      }
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target as Node)
      ) {
        setIsFilterOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentLocationLabel =
    locations.find((l) => l.id === selectedLocation)?.label || "كل المواقع";

  return (
    <section className="w-full sm:w-[90%] max-w-[1280px] xl:max-w-[2440px] 3xl:max-w-[2540px] mx-auto px-0 md:px-4 3xl:px-8 py-10 3xl:py-16 relative z-20 md:mt-30 md:mb-30">
      <div className="relative w-full rounded-none md:rounded-[30px] bg-[#FDF4F8] shadow-[0_4px_5.8px_50px_rgba(216,139,174,0.23)] md:shadow-none border border-solid border-[#e8a0bf] p-4 sm:p-6 md:p-10 3xl:p-16">
        <div className="flex flex-col w-full gap-6 mb-8 3xl:mb-12">
          <div className="flex flex-col sm:flex-row items-center w-full gap-4 sm:gap-2 md:gap-4 xl:gap-0">
            <div
              className="flex flex-col gap-1 text-center sm:text-right w-full sm:w-auto xl:w-1/3 shrink-0"
              dir="rtl"
            >
              <h1 className="!text-[18px] sm:!text-[22px] !font-bold !text-[#59364c] leading-tight">
                اكتشف هديتك المثالية
              </h1>
              <p className="!text-[12px] sm:!text-[14px] !font-bold !text-[#806b79] leading-tight">
                ابحث حسب نوع الجلسة أو المناسبة
              </p>
            </div>

            <div className="w-full sm:w-auto xl:w-1/3 flex justify-center shrink-0">
              <div className="w-full sm:w-[280px] md:w-[500px] xl:w-[600px] text-center">
                <GiftTypeToggle
                  selectedType={giftType}
                  onSelectType={setGiftType}
                />
              </div>
            </div>
            <div className="hidden xl:block xl:w-1/3"></div>
          </div>

          <div
            className="flex flex-row items-center gap-2 md:gap-3 3xl:gap-5 w-full"
            dir="rtl"
          >
            <div
              className="flex items-center justify-start gap-1 flex-1 min-w-0 sm:w-[650px] lg:w-[400px] xl:flex-1 h-[60px] md:h-[74px] 3xl:h-[84px] rounded-[8px] border border-[#d88bae] bg-transparent px-3 md:px-4 focus-within:border-[#59364c] cursor-text"
              onClick={(e) => {
                const input = e.currentTarget.querySelector("input");
                if (input) input.focus();
              }}
            >
              <input
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="ابحث عن جلسة أو باقة هدايا..."
                className="w-fit max-w-full p-0 bg-transparent outline-none text-right text-sm md:text-xl 3xl:text-2xl text-[#59364c] placeholder:text-[#c4c4c4] [field-sizing:content] [&::-webkit-search-cancel-button]:appearance-none"
              />
              <Search className="shrink-0 w-5 h-5 md:w-6 md:h-6 3xl:w-8 3xl:h-8 text-[#c4c4c4]" />
            </div>

            <div className="relative shrink-0" ref={filterRef}>
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className={`relative flex items-center justify-center w-[60px] md:w-[91px] 3xl:w-[105px] h-[60px] md:h-[74px] 3xl:h-[84px] rounded-[20px] border shrink-0 transition-colors ${
                  isFilterOpen || hasActiveFilters
                    ? "bg-[#f8dce8] border-[#59364c]"
                    : "bg-[#fdf4f8] border-[#e8a0bf]"
                }`}
              >
                <HugeiconsFilterHorizontal />
                {hasActiveFilters && (
                  <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#59364c]" />
                )}
              </button>

              {isFilterOpen && (
                <div
                  className="absolute top-full mt-2 left-0 sm:left-auto sm:right-0 w-[280px] sm:w-[300px] bg-white border border-[#e8a0bf] rounded-xl shadow-lg z-50 p-4 flex flex-col gap-3"
                  dir="rtl"
                >
                  <h3 className="text-sm font-bold text-[#59364c]">
                    تصفية النتائج
                  </h3>

                  <div>
                    <label className="text-xs font-bold text-[#806b79] mb-1 block">
                      نطاق السعر
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        placeholder="من"
                        value={priceRange.min}
                        onChange={(e) =>
                          setPriceRange((p) => ({
                            ...p,
                            min: e.target.value,
                          }))
                        }
                        className="w-full border border-[#e8a0bf] rounded-md p-2 text-sm text-[#59364c] outline-none focus:border-[#59364c]"
                      />
                      <span className="text-[#806b79]">-</span>
                      <input
                        type="number"
                        placeholder="إلى"
                        value={priceRange.max}
                        onChange={(e) =>
                          setPriceRange((p) => ({
                            ...p,
                            max: e.target.value,
                          }))
                        }
                        className="w-full border border-[#e8a0bf] rounded-md p-2 text-sm text-[#59364c] outline-none focus:border-[#59364c]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#806b79] mb-1 block">
                      ترتيب حسب
                    </label>
                    <div className="flex flex-col gap-1">
                      {sortOptions.map((opt) => (
                        <button
                          key={opt.id}
                          onClick={() => setSortBy(opt.id)}
                          className={`text-right text-sm px-2 py-1.5 rounded-md transition-colors ${
                            sortBy === opt.id
                              ? "bg-[#f8dce8] text-[#59364c] font-bold"
                              : "text-gray-600 hover:bg-gray-50"
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setPriceRange({ min: "", max: "" });
                      setSortBy("default");
                    }}
                    className="text-sm font-bold text-[#59364c] border border-[#e8a0bf] rounded-md py-2 hover:bg-[#f8dce8] transition-colors"
                  >
                    إعادة تعيين
                  </button>
                </div>
              )}
            </div>

            <div className="relative shrink-0" ref={locationRef}>
              <button
                onClick={() => setIsLocationOpen(!isLocationOpen)}
                className="flex items-center justify-center gap-2 md:gap-3 3xl:gap-4 w-[60px] sm:w-[326px] 3xl:w-[400px] h-[60px] md:h-[74px] 3xl:h-[84px] rounded-[20px] bg-gradient-to-l from-[#f8dce8] to-[#e8a0bf] border border-[#e8a0bf] px-0 sm:px-4 text-[#59364c] whitespace-nowrap"
              >
                <AkarIconsChevronDownSmall
                  className={`hidden sm:block shrink-0 transition-transform ${isLocationOpen ? "rotate-180" : ""}`}
                />
                <span className="hidden sm:block text-sm md:text-base 3xl:text-lg font-bold">
                  {selectedLocation === "all"
                    ? "الرجاء تحديد موقع المستفيد"
                    : currentLocationLabel}
                </span>
                <FluentColorLocationRipple24 className="shrink-0" />
              </button>

              {isLocationOpen && (
                <div className="absolute top-full mt-2 left-0 sm:left-auto sm:right-0 w-[260px] sm:w-[326px] 3xl:w-[400px] bg-white border border-[#e8a0bf] rounded-xl shadow-lg z-50 overflow-hidden">
                  {locations.map((loc) => (
                    <button
                      key={loc.id}
                      onClick={() => {
                        setSelectedLocation(loc.id);
                        setIsLocationOpen(false);
                      }}
                      className={`w-full text-right px-4 py-3 text-sm font-bold transition-colors ${
                        selectedLocation === loc.id
                          ? "bg-[#f8dce8] text-[#59364c]"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      {loc.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div
          className="flex items-center justify-between mb-4 w-full"
          dir="rtl"
        >
          <span className="text-sm md:text-base font-bold text-[#59364c]">
            تصفح حسب الفئة
          </span>
          <button
            onClick={() => setSelectedCategory("all")}
            className="text-sm md:text-base font-bold text-[#c4c4c4] hover:text-[#59364c] transition-colors"
          >
            عرض الكل
          </button>
        </div>

        <div className="mb-8 3xl:mb-12 w-full overflow-hidden">
          <CategoryFilter
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>

        <div
          className="flex items-center justify-between border-b border-[#D4D4D4] pb-4 3xl:pb-6 mb-6 3xl:mb-10"
          dir="rtl"
        >
          <div>
            <h2 className="text-lg md:text-xl 3xl:text-2xl font-bold text-[#59364c]">
              الهدايا المميزة
            </h2>
            <p className="text-xs md:text-sm 3xl:text-base text-[#59364c] mt-1 3xl:mt-2">
              اكتشف خيارات مختارة لكِ
            </p>
          </div>
          <span className="text-xs md:text-sm 3xl:text-base text-[#59364c]">
            {filteredGifts.length} منتجًا
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 3xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6 3xl:gap-10">
          {filteredGifts.length > 0 ? (
            filteredGifts.map((gift, index) => (
              <GiftCard
                key={gift.id}
                title={gift.title}
                description={gift.description}
                price={gift.price}
                image={gift.image}
                icon={gift.icon}
                index={index}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-10 text-[#59364c] font-bold">
              لا توجد نتائج مطابقة لبحثك.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
