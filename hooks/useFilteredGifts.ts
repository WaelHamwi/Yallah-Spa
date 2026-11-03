"use client";
import { useMemo } from "react";
import { mockGifts } from "@/data/mockData";

export type SortOption = "default" | "price-asc" | "price-desc";

export const sortOptions: { id: SortOption; label: string }[] = [
  { id: "default", label: "الافتراضي" },
  { id: "price-asc", label: "السعر: من الأقل للأعلى" },
  { id: "price-desc", label: "السعر: من الأعلى للأقل" },
];

const getPrice = (gift: { price: number | string }) => {
  if (typeof gift.price === "number") return gift.price;
  const cleaned = String(gift.price).replace(/[^\d.]/g, "");
  const n = parseFloat(cleaned);
  return isNaN(n) ? 0 : n;
};

interface UseFilteredGiftsParams {
  searchTerm: string;
  selectedCategory: string;
  selectedLocation: string;
  giftType: "individual" | "package";
  priceRange: { min: string; max: string };
  sortBy: SortOption;
}

export function useFilteredGifts({
  searchTerm,
  selectedCategory,
  selectedLocation,
  giftType,
  priceRange,
  sortBy,
}: UseFilteredGiftsParams) {
  return useMemo(() => {
    const list = mockGifts.filter((gift) => {
      const matchesSearch =
        gift.title.includes(searchTerm) ||
        gift.description.includes(searchTerm);
      const matchesCategory =
        selectedCategory === "all" || gift.category === selectedCategory;
      const matchesLocation =
        selectedLocation === "all" || gift.location === selectedLocation;
      const matchesType = gift.type === giftType;
      const price = getPrice(gift);
      const matchesMin =
        priceRange.min === "" || price >= Number(priceRange.min);
      const matchesMax =
        priceRange.max === "" || price <= Number(priceRange.max);

      return (
        matchesSearch &&
        matchesCategory &&
        matchesLocation &&
        matchesType &&
        matchesMin &&
        matchesMax
      );
    });

    if (sortBy === "price-asc") {
      return [...list].sort((a, b) => getPrice(a) - getPrice(b));
    }
    if (sortBy === "price-desc") {
      return [...list].sort((a, b) => getPrice(b) - getPrice(a));
    }
    return list;
  }, [
    searchTerm,
    selectedCategory,
    selectedLocation,
    giftType,
    priceRange,
    sortBy,
  ]);
}