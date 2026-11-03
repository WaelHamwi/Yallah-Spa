"use client";
import React, { useState, useRef } from "react";
import { createPortal } from "react-dom";
import { X, Check, Plus, Minus } from "lucide-react";
import { AkarIconsCalendar } from "@/components/icons";
import { useModalAnimation } from "@/hooks/useModalAnimation";
import { GiftCardModalProps } from "@/types";
import Image from "next/image";
export default function GiftCardModal({ isOpen, onClose }: GiftCardModalProps) {
  // Visual States
  const [selectedStyle, setSelectedStyle] = useState("gift-card");
  const [selectedAmount, setSelectedAmount] = useState(1000);
  const [quantity, setQuantity] = useState(1);
  const [customImage, setCustomImage] = useState<string | null>(null);

  // Form States
  const [senderName, setSenderName] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [message, setMessage] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [address, setAddress] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);
  const dateInputRef = useRef<HTMLInputElement>(null);

  // Use the custom hook for the 1000ms animation and body scroll lock
  const isMounted = useModalAnimation(isOpen, 1000);

  if (!isMounted) return null;

  const styles = [
    {
      id: "happy-birthday",
      img: "/Happy birthday.png",
      label: "Happy Birthday",
    },
    { id: "happy", img: "/happy.png", label: "Happy" },
    { id: "gift-card", img: "/card 2.png", label: "Gift Card" },
  ];

  const amounts = [1000, 1250, 1500, 1750];

  const getPreviewImage = () => {
    if (selectedStyle === "custom" && customImage) return customImage;
    const style = styles.find((s) => s.id === selectedStyle);
    return style?.img || "/card 2.png";
  };

  const handleMoreClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setCustomImage(imageUrl);
      setSelectedStyle("custom");
    }
  };

  const handleRemoveCustomImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (customImage) {
      URL.revokeObjectURL(customImage);
    }
    setCustomImage(null);
    setSelectedStyle("gift-card");
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setRecipientEmail(val);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(val.length > 0 && !emailRegex.test(val));
  };

  const openDatePicker = () => {
    const input = dateInputRef.current;
    if (!input) return;

    if (typeof (input as any).showPicker === "function") {
      (input as any).showPicker();
    } else {
      input.focus();
      input.click();
    }
  };

  // WRAPPED IN CREATEPORTAL TO FORCE TOP LAYER
  return createPortal(
    <div
      className="fixed inset-0 z-[99999] flex items-end md:items-center justify-center p-0 md:p-4"
      dir="rtl"
    >
      {/* Dark Overlay Background */}
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity duration-1000 ease-out ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Modal Container */}
      <div
        className={`relative w-full max-w-[1100px] bg-white rounded-t-2xl md:rounded-[24px] shadow-xl flex flex-col md:flex-row max-h-[95vh] md:max-h-[100vh] overflow-y-auto transition-all duration-1000 ease-out transform ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "translate-y-full md:translate-y-10 opacity-0"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 z-20 p-2 bg-white/80 rounded-full hover:bg-gray-100 transition-colors shadow-sm"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* --- PREVIEW SECTION --- */}
        <div className="w-full h-full md:w-[40%] flex flex-col border-b md:border-b-0  border-gray-200 shrink-0 bg-white p-4 md:p-6">
          {/* Inner wrapper */}
          <div className="flex flex-col flex-1 rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm">
            {/* Image Area */}
            <div className="w-full bg-[#D4D4D4] flex justify-center items-center py-10 md:py-24 relative">
              <Image
                src={getPreviewImage()}
                alt="Gift Card Preview"
                width={0}
                height={0}
                sizes="100vw"
                priority
                className="w-[150px] md:w-[240px] h-auto object-contain drop-shadow-md transition-all duration-300"
              />
            </div>

            {/* Preview Details */}
            <div className="p-4 md:p-8 flex flex-col flex-1 justify-center">
              <div className="flex justify-between items-center border-b border-gray-200 pb-3 md:pb-4 mb-4 md:mb-6">
                <span className="text-xs md:text-sm font-bold text-gray-800">
                  بطاقة هدايا افتراضية
                </span>
                <span className="text-[10px] md:text-xs font-bold text-[#59364c]">
                  {selectedAmount} ر.س
                </span>
              </div>

              <div className="space-y-3 md:space-y-4 text-xs md:text-sm text-gray-600">
                <div className="flex justify-between gap-4">
                  <span className="font-bold text-gray-800 shrink-0">من</span>
                  <span className="text-left truncate">{address || "..."}</span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="font-bold text-gray-800 shrink-0">إلى</span>
                  <span className="text-left truncate">
                    {senderName || "..."}
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="font-bold text-gray-800 shrink-0">
                    البريد الإلكتروني
                  </span>
                  <span className="text-left truncate break-all" dir="ltr">
                    {recipientEmail || "..."}
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="font-bold text-gray-800 shrink-0">
                    تاريخ التوصيل
                  </span>
                  <span className="text-left truncate">
                    {deliveryDate || "..."}
                  </span>
                </div>

                <div className="flex justify-between gap-4 pt-3 md:pt-4 mt-1 md:mt-2">
                  <span className="font-bold text-gray-800 shrink-0">
                    الرسالة
                  </span>
                  <span className="text-left line-clamp-4 break-words">
                    {message || "..."}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- FORM SECTION --- */}
        <div className="w-full md:w-[60%] p-4 py-6 md:p-10 flex flex-col justify-between">
          <div>
            <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-6 md:mb-8 text-right">
              بطاقة هدايا افتراضية
            </h2>

            {/* 1. Choose Style */}
            <div className="mb-6 md:mb-8">
              <h3 className="text-xs md:text-sm font-bold text-gray-800 mb-3 md:mb-4 text-right">
                اختر نمط
              </h3>

              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
              />

              <div className="flex items-center gap-2 md:gap-3 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {/* "المزيد" Button */}
                <button className="shrink-0 w-[70px] h-[70px] md:w-24 md:h-24 rounded-lg flex items-center justify-center border border-gray-200 bg-white text-gray-600 font-bold text-xs md:text-sm hover:bg-gray-50">
                  المزيد
                </button>

                {styles.map((style) => (
                  <button
                    key={style.id}
                    onClick={() => setSelectedStyle(style.id)}
                    className={`relative shrink-0 w-[70px] h-[70px] md:w-24 md:h-24 rounded-lg flex items-center justify-center overflow-hidden transition-all ${
                      selectedStyle === style.id
                        ? "border-2 border-teal-400 shadow-md"
                        : "border border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <Image
                      src={style.img!}
                      alt={style.label}
                      width={0}
                      height={0}
                      sizes="100vw"
                      priority
                      className="w-full h-full object-cover"
                    />
                    {selectedStyle === style.id && (
                      <div className="absolute top-1 right-1 bg-teal-500 text-white rounded-full p-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                    )}
                  </button>
                ))}

                {/* Upload Button */}
                <button
                  onClick={customImage ? undefined : handleMoreClick}
                  className={`relative shrink-0 w-[70px] h-[70px] md:w-24 md:h-24 rounded-lg flex flex-col items-center justify-center overflow-hidden transition-all bg-gray-50/50 ${
                    selectedStyle === "custom"
                      ? "border-2 border-teal-400 shadow-md"
                      : "border border-gray-200 hover:border-gray-300"
                  }`}
                >
                  {customImage ? (
                    <>
                     <Image
  src={customImage}
  alt="Custom"
  width={0}
  height={0}
  sizes="100vw"
  priority
  className="w-full h-full object-cover"
/>
                      <div
                        onClick={handleRemoveCustomImage}
                        className="absolute top-1 left-1 bg-red-500 text-white rounded-full p-0.5 hover:bg-red-600 transition-colors z-10 shadow-sm"
                      >
                        <X className="w-3 h-3" />
                      </div>
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4 md:w-5 md:h-5 mb-1 text-gray-300" />
                      <span className="text-[9px] md:text-[10px] text-gray-400">
                        اختر صورة
                      </span>
                    </>
                  )}
                  {selectedStyle === "custom" && customImage && (
                    <div className="absolute top-1 right-1 bg-teal-500 text-white rounded-full p-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                  )}
                </button>
              </div>
            </div>

            {/* 2. Select Amount */}
            <div className="mb-6 md:mb-8">
              <h3 className="text-xs md:text-sm font-bold text-gray-800 mb-2 md:mb-3 text-right">
                حدد المبلغ
              </h3>
              <div className="grid grid-cols-4 border border-gray-200 overflow-hidden">
                {[...amounts].reverse().map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setSelectedAmount(amount)}
                    className={`py-2 md:py-3.5 text-[10px] md:text-sm font-bold transition-colors border-l last:border-l-0 border-gray-200 ${
                      selectedAmount === amount
                        ? "bg-[#E8F5E9] text-[#4CAF50]"
                        : "bg-white text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {amount} ر.س
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Delivery Info */}
            <div className="mb-4 md:mb-6">
              <h3 className="text-xs md:text-sm font-bold text-gray-800 mb-3 md:mb-4 text-right">
                معلومات التوصيل
              </h3>

              <div className="grid grid-cols-2 gap-2 md:gap-4">
                <div className="flex flex-col gap-1 text-right">
                  <label className="text-[10px] md:text-xs text-gray-600">
                    الاسم
                  </label>
                  <input
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    className="border border-gray-200 rounded-md p-2 md:p-3 outline-none focus:border-pink-400 text-xs md:text-sm"
                  />
                </div>

                <div className="flex flex-col gap-1 text-right">
                  <label className="text-[10px] md:text-xs text-gray-600">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    value={recipientEmail}
                    onChange={handleEmailChange}
                    className={`border rounded-md p-2 md:p-3 outline-none text-xs md:text-sm transition-colors ${
                      emailError
                        ? "border-red-500 focus:border-red-500 bg-red-50/30"
                        : "border-gray-200 focus:border-pink-400"
                    }`}
                    dir="ltr"
                  />
                  {emailError && (
                    <span className="text-red-500 text-[9px] md:text-[10px] font-bold mt-0.5">
                      يرجى إدخال بريد إلكتروني صحيح
                    </span>
                  )}
                </div>

                {/* Message Spans 2 columns */}
                <div className="flex flex-col gap-1 col-span-2 text-right">
                  <label className="text-[10px] md:text-xs text-gray-600">
                    رسالة
                  </label>
                  <textarea
                    rows={2}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="border border-gray-200 rounded-md p-2 md:p-3 outline-none focus:border-pink-400 text-xs md:text-sm resize-none"
                  ></textarea>
                </div>

                {/* Address */}
                <div className="flex flex-col gap-1 text-right">
                  <label className="text-[10px] md:text-xs text-gray-600">
                    اسمك
                  </label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="border border-gray-200 rounded-md p-2 md:p-3 outline-none focus:border-pink-400 text-xs md:text-sm"
                  />
                </div>

                {/* Date with Icon */}
                <div className="flex flex-col gap-1 text-right">
                  <label className="text-[10px] md:text-xs text-gray-600">
                    التوصيل في
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      ref={dateInputRef}
                      value={deliveryDate}
                      onChange={(e) => setDeliveryDate(e.target.value)}
                      onClick={openDatePicker}
                      className="w-full border border-gray-200 rounded-md p-2 md:p-3 pl-8 md:pl-10 outline-none focus:border-pink-400 text-xs md:text-sm [&::-webkit-calendar-picker-indicator]:hidden"
                    />
                    <AkarIconsCalendar
                      onClick={openDatePicker}
                      className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 md:w-5 md:h-5 text-gray-500 cursor-pointer"
                    />
                  </div>
                </div>

                {/* Hidden input */}
                <div className="hidden">
                  <input
                    type="text"
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 4. Actions (Quantity + Add to Cart) */}
          <div className="flex flex-row-reverse items-center justify-start gap-3 md:gap-4  border-t md:border-t-0 border-gray-100">
            <button className="w-[120px] md:w-[140px] bg-[#E8F5E9] text-[#4CAF50] hover:bg-[#d0ebd3] font-bold py-2.5 md:py-3.5 rounded-md transition-colors text-xs md:text-sm">
              أضف إلى السلة
            </button>

            <div className="flex items-center border border-gray-200 rounded-md overflow-hidden h-[40px] md:h-[48px] w-[90px] md:w-[100px]">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-2 md:px-3 h-full text-gray-400 hover:bg-gray-50 flex-1"
              >
                <Minus className="w-3 h-3 mx-auto" />
              </button>
              <span className="w-6 md:w-8 text-center text-xs md:text-sm font-bold text-gray-800">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-2 md:px-3 h-full text-gray-400 hover:bg-gray-50 flex-1"
              >
                <Plus className="w-3 h-3 mx-auto" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body, // PORTAL TARGET
  );
}
