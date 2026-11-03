import { useState } from "react";
import {
  EmojioneV1PersonGettingMassage,
  NotoV1Lipstick,
  Vector,
  ArcticonsThaiSupermodels,
} from "@/components/icons";
import GiftCardModal from "./GiftDetailsModal";
import Image from "next/image";
import { GiftCardProps } from "@/types";

export default function GiftCard({
  title,
  description,
  price,
  image,
  icon,
  index,
}: GiftCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <article className="relative flex flex-col w-full bg-white rounded-[15px] border border-solid border-[#e8a0bf] shadow-sm hover:shadow-md transition-shadow overflow-hidden">
        {/* Image Container */}
        <div className="w-full p-3 pb-0 sm:p-4 sm:pb-0 3xl:p-6 3xl:pb-0">
          <div className="relative w-full h-45 sm:h-55 3xl:h-75 overflow-hidden rounded-[10px]">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Content Container */}
        <div className="flex flex-col flex-1 p-3 sm:p-4 3xl:p-6" dir="rtl">
          <div className="flex items-start justify-between mb-4 3xl:mb-6">
            <div>
              <h2 className="text-sm sm:text-base 3xl:text-lg font-bold text-[#59364c] line-clamp-1">
                {title}
              </h2>
              <p className="text-[10px] sm:text-xs 3xl:text-sm text-[#d9d9d9] line-clamp-1 mt-1">
                {description}
              </p>
            </div>
            {index === 1 || index === 4 ? (
              <ArcticonsThaiSupermodels className="w-5 h-5 sm:w-6 sm:h-6 object-contain shrink-0" />
            ) : icon === "massage" ? (
              <EmojioneV1PersonGettingMassage width={35} height={35} />
            ) : (
              <NotoV1Lipstick />
            )}
          </div>

          {/* Bottom Section */}
          <div className="relative w-full mt-auto pt-3 border-t border-[#e8a0bf]/30">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 3xl:gap-2 text-[#e8a0bf] font-extrabold text-xs sm:text-sm 3xl:text-base">
                {price}
              </div>

              {/* TRIGGER: Wrapped both the button and the icon in a single clickable div */}
              <div
                className="flex items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => setIsModalOpen(true)}
              >
                <button className="text-[#e8a0bf] font-bold text-[10px] sm:text-xs 3xl:text-sm hover:text-[#59364c] transition-colors pointer-events-none">
                  أرسل كهدية
                </button>
                <Vector className="pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* MODAL POPUP */}
      <GiftCardModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
