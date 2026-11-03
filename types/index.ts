// types/index.ts

export type GiftType = "individual" | "package";

export interface Gift {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  icon: string;
  category: string;
  location: string;
  type: GiftType;
}

export interface Category {
  id: string;
  label: string;
}

export interface LocationOption {
  id: string;
  label: string;
}

export interface GiftCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
  icon: string;
  index?: number;
}

export interface GiftCardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface GiftTypeToggleProps {
  selectedType: GiftType;
  onSelectType: (type: GiftType) => void;
}

export interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
}
export interface PriceRange {
  min: string;
  max: string;
}
export interface GiftCard {
  title: string;
  kind: string; 
  position: string;
  vector: string;
  price: string;
  description: string;
  detail: string;
  image: string;
}

export type SortOption = "default" | "price-asc" | "price-desc";

export interface UseFilteredGiftsParams {
  searchTerm: string;
  selectedCategory: string;
  selectedLocation: string;
  giftType: GiftType;
  priceRange: PriceRange;
  sortBy: SortOption;
}