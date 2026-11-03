"use client";
import type { JSX } from "react";
import type { GiftCard } from "@/types";
import { CodexMoney, EmojioneV1PersonGettingMassage, NotoV1Lipstick } from "@/components/icons";

export const GiftCardItem = ({ card }: { card: GiftCard }): JSX.Element => {
  const isBeauty = card.kind === "beauty";

  return (
    <article className={`${card.position} absolute w-[30.15%] h-[27.58%]`} aria-label={card.title}>
      <div className="absolute top-0 left-0 h-full w-[97.38%] rounded-[15px] border border-solid border-[#e8a0bf] bg-white" />
      <button type="button" className="absolute top-[286px] left-[59px] cursor-pointer [font-family:'Cairo-Bold',Helvetica] text-xs font-bold leading-[normal] tracking-[0] text-[#e8a0bf] [direction:rtl]" aria-label={`إرسال ${card.title} كهدية`}>
        أرسل كهدية
      </button>
      <CodexMoney className="!absolute !left-[70.94%] !top-[322px] !h-6 !w-[29.06%] !aspect-[1]" />
      <img className="absolute left-[8.12%] top-[83.05%] h-[16.95%] w-[91.88%]" src={card.vector} alt="" aria-hidden="true" />
      <div className="absolute left-[295px] top-[323px] [font-family:'Cairo-Bold',Helvetica] text-xs font-bold leading-[normal] tracking-[0] text-[#e8a0bf]">{card.price}</div>
      <div className={`absolute left-[50.52%] top-[80.17%] h-[6.32%] [font-family:'Cairo-Regular',Helvetica] text-xs font-normal leading-[normal] tracking-[0] text-[#d9d9d9] [direction:rtl] ${isBeauty ? "w-[40.05%]" : "w-[42.93%]"}`}>{card.description}</div>
      <div className={`absolute top-[86.21%] h-[6.32%] [font-family:'Cairo-Regular',Helvetica] text-xs font-normal leading-[normal] tracking-[0] text-[#d9d9d9] [direction:rtl] ${isBeauty ? "left-[72.51%] w-[19.37%] top-[86.78%]" : "left-[75.92%] w-[19.37%]"}`}>{card.detail}</div>
      <p className={`absolute [font-family:'Cairo-Regular',Helvetica] text-sm font-normal leading-[normal] tracking-[0] text-[#59364c] [direction:rtl] ${isBeauty ? "left-[70.68%] top-[75.57%] h-[7.47%] w-[19.9%]" : "left-[46.6%] top-[75%] h-[7.47%] w-[46.07%]"}`}>{card.title}</p>
      <img className="absolute left-[4.97%] top-[8.33%] h-[91.67%] w-[95.03%] object-cover" src={card.image} alt={card.title} />
      {isBeauty ? <NotoV1Lipstick className="!absolute !left-[255px] !top-[304px] !h-4 !w-4 !aspect-[1]" /> : <EmojioneV1PersonGettingMassage className="!absolute !left-[257px] !top-[299px] !h-4 !w-4 !aspect-[1]" />}
    </article>
  );
};