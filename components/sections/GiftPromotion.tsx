"use client";
import { ArrowUpRight } from "lucide-react";
import { WrappedGift } from "@/components/icons"
const ratingIcons = ["/vector-4.svg", "/vector-3.svg", "/vector-2.svg", "/image.svg", "/vector.svg"];

export const GiftPromotion = () => {
  return (
    <section aria-label="عرض علب الهدايا" className="absolute top-[296px] left-[calc(50.00%_-_639px)] w-[1280px] xl:max-w-[2440px] h-[440px] flex bg-white rounded-3xl overflow-hidden">
      <img className="w-[640px] h-[440px] object-cover" src="/left-side.png" alt="مجموعة من علب الهدايا" />
      <div className="w-[640px] h-[440px] relative bg-[#f8dce8]">
        <button type="button" aria-label="تسوق الآن" className="absolute w-[23.28%] h-[9.55%] top-[75.68%] left-[calc(72.97%)] bg-[#d9d9d9] rounded-[20px] border border-solid border-neutral-100 cursor-pointer">
          <span className="absolute w-[51.68%] h-[45.24%] top-[26.19%] left-[24.83%] text-[#fff8f5] [font-family:'Cairo-Bold',Helvetica] font-bold text-base text-center tracking-[0] leading-[19.2px] whitespace-nowrap [direction:rtl]">تسوق الآن</span>
        </button>
        <button type="button" aria-label="اكتشف فروعنا" className="absolute w-[32.66%] h-[9.55%] top-[75.68%] left-[37.34%] flex items-center justify-center bg-[url('/rectangle-5.svg')] bg-[100%_100%] cursor-pointer">
          <span className="inline-flex -mt-0.5 h-6 w-[135px] relative items-center gap-[7px]">
            <ArrowUpRight aria-hidden="true" className="!relative !w-6 !h-6 !aspect-[1]" />
            <span className="relative w-fit text-[#c4c4c4] [font-family:'Cairo-Bold',Helvetica] font-bold text-base text-center tracking-[0] leading-[19.2px] whitespace-nowrap [direction:rtl]">اكتشف فروعنا</span>
          </span>
        </button>
        <p className="absolute w-[20.00%] h-[3.86%] top-[59.09%] left-[39.38%] [font-family:'Cairo-Bold',Helvetica] font-bold text-black text-sm leading-[16.8px] whitespace-nowrap tracking-[0] [direction:rtl]">(أكثر من 1200 تقييم)</p>
        <div className="flex w-[31.88%] h-[4.55%] items-center gap-[26px] absolute top-[58.64%] left-[64.53%]" aria-label="تقييم خمس نجوم" role="img">
          {ratingIcons.map((icon, _index) => <img key={icon} src={icon} alt="" aria-hidden="true" />)}
        </div>
        <p className="absolute w-[75.31%] h-[5.91%] top-[47.05%] left-[20.94%] [font-family:'Cairo-Bold',Helvetica] font-bold text-black text-[11px] leading-[13.2px] tracking-[0] [direction:rtl]">
          اكتشف مجموعتنا المميزة من علب الهدايا المختارة بعناية، والمصممة لتُضفي البهجة على كل مناسبة<br />وتُسعد أحبّاءك بأجمل اللحظات
        </p>
        <h2 className="absolute w-[73.75%] h-[17.27%] top-[24.09%] left-[22.50%] [font-family:'Cairo-Bold',Helvetica] font-bold text-transparent text-[32px] leading-[38.4px] tracking-[0] [direction:rtl]">
          <span className="text-black">اجعل لحظات أحبّائك أجمل مع علب <br />الهدايا </span>
          <span className="text-[#fff8f5]">المميزة</span>
          <span className="text-black"> من يلا </span>
          <span className="text-[#e8a0bf]">سبا</span>
        </h2>
        <div className="absolute w-[23.75%] h-[7.73%] top-[7.05%] left-[67.66%] bg-[url('/gift-rectangle.svg')] bg-[100%_100%]" aria-label="هدية من القلب">
          <span className="absolute w-[80.60%] h-[76.00%] top-[23.53%] left-0 [font-family:'Cairo-Bold',Helvetica] font-bold text-[#c4c4c4] text-base text-center leading-[19.2px] tracking-[0] [direction:rtl]">هدية من القلب</span>
          <WrappedGift aria-hidden="true" className="!absolute !w-[19.72%] !top-[5px] !left-[80.28%] !h-[25px] !aspect-[1]" />
        </div>
      </div>
    </section>
  );
};