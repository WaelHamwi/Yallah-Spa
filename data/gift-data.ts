import type { Category, GiftCard } from "@/types";

export const categories: Category[] = [
  { label: "الكل", width: "w-[122px]", textClass: "text-[#fff8f5]" },
  { label: "سبا الرجال", width: "w-[153px]", textClass: "text-black" },
  { label: "الحمام المغربي", width: "w-[180px]", textClass: "text-[#59364c]" },
  { label: "الأطفال", width: "w-[121px]", textClass: "text-[#59364c]" },
  { label: "مساج", width: "w-[118px]", textClass: "text-black" },
  { label: "عناية بالبشرة", width: "w-[145px]", textClass: "text-[#59364c]" },
];

export const giftCards: GiftCard[] = [
  { image: "/rectangle-14-3.png", vector: "/vector-9.svg", price: "480 ر.س", title: "مساج مغربي لشد ونحت الجسم", description: "الضغط المتوسك ومساج الأعشاب", detail: "مدة الجلسة", position: "top-[39.14%] left-[2.05%]", kind: "massage" },
  { image: "/image.png", vector: "/vector-7.svg", price: "480 ر.س", title: "مساج مغربي لشد ونحت الجسم", description: "الضغط المتوسك ومساج الأعشاب", detail: "مدة الجلسة", position: "top-[39.14%] left-[35.36%]", kind: "massage" },
  { image: "/rectangle-14.png", vector: "/vector-6.svg", price: "680 ر.س", title: "باكج فاخر جداً", description: "يشمل مكياجات ومقشرات بشرة", detail: "علب مختلفة 5", position: "top-[39.14%] left-[68.67%]", kind: "beauty" },
  { image: "/rectangle-14-5.png", vector: "/vector-11.svg", price: "480 ر.س", title: "مساج مغربي لشد ونحت الجسم", description: "الضغط المتوسك ومساج الأعشاب", detail: "مدة الجلسة", position: "top-[68.54%] left-[2.05%]", kind: "massage" },
  { image: "/rectangle-14-4.png", vector: "/vector-10.svg", price: "480 ر.س", title: "مساج مغربي لشد ونحت الجسم", description: "الضغط المتوسك ومساج الأعشاب", detail: "مدة الجلسة", position: "top-[68.54%] left-[35.36%]", kind: "massage" },
  { image: "/rectangle-14-2.png", vector: "/vector-8.svg", price: "680 ر.س", title: "باكج فاخر جداً", description: "يشمل مكياجات ومقشرات بشرة", detail: "علب مختلفة 5", position: "top-[68.54%] left-[68.67%]", kind: "beauty" },
];