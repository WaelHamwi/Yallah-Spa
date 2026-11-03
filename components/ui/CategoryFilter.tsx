"use client";
import React, { useRef } from "react";
import { categories } from "@/data/mockData";

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
}

export default function CategoryFilter({ selectedCategory, onSelectCategory }: CategoryFilterProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const dragStateRef = useRef({
    isDown: false,
    startX: 0,
    startScrollLeft: 0,
    hasDragged: false,
  });

  React.useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleMouseDown = (e: MouseEvent) => {
      if (e.button !== 0) return;
      dragStateRef.current.isDown = true;
      dragStateRef.current.hasDragged = false;
      dragStateRef.current.startX = e.clientX;
      dragStateRef.current.startScrollLeft = el.scrollLeft;
      el.style.cursor = "grabbing";
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!dragStateRef.current.isDown) return;
      const dx = e.clientX - dragStateRef.current.startX;
      if (Math.abs(dx) > 5) {
        dragStateRef.current.hasDragged = true;
        e.preventDefault();
      }
      el.scrollLeft = dragStateRef.current.startScrollLeft + dx;
    };

    const handleMouseUp = () => {
      if (!dragStateRef.current.isDown) return;
      dragStateRef.current.isDown = false;
      el.style.cursor = "";
    };

    el.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      el.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const handleCategoryClick = (catId: string) => {
    if (dragStateRef.current.hasDragged) {
      dragStateRef.current.hasDragged = false;
      return;
    }
    onSelectCategory(catId);
  };

  return (
    <div
      ref={scrollRef}
      dir="rtl"
      className="flex items-center gap-2 md:gap-3 w-full overflow-x-auto touch-pan-x overscroll-x-contain py-1 cursor-grab select-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
    >
      {categories.map((cat) => (
        <button
          key={cat.id}
          type="button"
          onClick={() => handleCategoryClick(cat.id)}
          className={`shrink-0 px-5 md:px-6 py-2 md:py-2.5 rounded-full text-sm md:text-base font-bold transition-all border ${
            selectedCategory === cat.id
              ? "bg-[#59364c] text-white border-[#59364c]"
              : "bg-white text-[#59364c] border-[#e8a0bf] hover:border-[#59364c]"
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}