import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { WrappedGift, Star } from "@/components/icons";

export default function Hero() {
  return (
    <section className="w-full sm:w-[90%] max-w-[1280px] xl:max-w-[2440px] mx-auto xl:px-8 mt-6 md:mt-24 relative">
      {/* Mobile Confetti (hd 1 as requested) - z-50 to overlay the banner */}
      <img
        src="/136783-vector-surprise-birthday-gift-free-clipart-hd 1.png"
        alt=""
        className="block md:hidden absolute left-[-40px] bottom-[-130px] w-[160px] h-auto object-contain pointer-events-none z-50"
        style={{ transform: "rotate(-150deg)" }}
      />
      <img
        src="/136783-vector-surprise-birthday-gift-free-clipart-hd 1.png"
        alt=""
        className="block md:hidden absolute right-[-40px] bottom-[-130px] w-[160px] h-auto object-contain pointer-events-none z-50"
        style={{ transform: "rotate(15deg)" }}
      />

      {/* Desktop Confetti */}
      <img
        src="/136783-vector-surprise-birthday-gift-free-clipart-hd 4.png"
        alt=""
        style={{ transform: "rotate(359.03deg)" }}
        className="hidden md:block absolute left-[5%] xl:left-[10%] -bottom-[195px] object-contain pointer-events-none z-0"
      />
      <img
        src="/136783-vector-surprise-birthday-gift-free-clipart-hd 4.png"
        alt=""
        style={{ transform: "rotate(359.03deg)" }}
        className="hidden md:block absolute right-[5%] xl:right-[10%] -bottom-[195px] object-contain pointer-events-none z-0"
      />

      <div className="flex flex-col md:flex-row w-full rounded-none md:rounded-[30px] overflow-hidden bg-[#f8dce8] relative z-10 shadow-sm">
        <div className="w-full md:w-1/2 p-8 md:p-10 lg:p-14 xl:p-16 flex flex-col justify-center items-center md:items-start gap-5">
          <div className="self-center md:self-start bg-white/60 rounded-full px-4 py-1.5 flex items-center gap-2 text-[#c4c4c4] font-bold text-sm">
            <WrappedGift />
            هدية من القلب
          </div>

          {/* FIXED: Removed <br>, added text-balance, and optimized font sizes for laptops */}
          <h1 className="text-3xl md:text-4xl lg:text-[42px] xl:text-5xl 2xl:text-6xl font-bold leading-tight text-black text-center md:text-right text-balance">
            اجعل لحظات أحبائك أجمل مع علب الهدايا{" "}
            <span className="text-white">المميزة</span> من يلا{" "}
            <span className="text-[#e8a0bf]">سبا</span>
          </h1>

          <p className="text-sm md:text-base xl:text-lg text-black/80 leading-relaxed text-center md:text-right">
            اكتشف مجموعتنا المميزة من علب الهدايا المختارة بعناية، والمصممة
            لتُضفي البهجة على كل مناسبة وتُسعد أحبّاءك بأجمل اللحظات
          </p>

          <div className="flex items-center justify-center md:justify-start gap-2 mt-2 w-full">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} />
              ))}
            </div>
            <span className="text-sm xl:text-base font-bold text-black mr-2">
              (أكثر من 1200 تقييم)
            </span>
          </div>

          <div className="flex flex-row gap-2 sm:gap-4 mt-6 w-full">
            <button className="flex-1 sm:flex-none bg-[#d9d9d9] text-white font-bold py-3 px-4 sm:px-12 xl:py-4 xl:px-16 rounded-full hover:bg-gray-400 transition-colors text-sm sm:text-base whitespace-nowrap">
              تسوق الآن
            </button>
            <button className="flex-1 sm:flex-none bg-white text-[#c4c4c4] font-bold py-3 px-4 sm:px-8 xl:py-4 xl:px-10 rounded-full flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors text-sm sm:text-base whitespace-nowrap">
              اكتشف فروعنا
              <ArrowUpRight />
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 h-[350px] md:h-auto relative">
          <Image
            src="/Left side.png"
            alt="Gift Boxes"
            fill
            priority
            quality={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1440px) 50vw, 720px"
            className="object-fit md:object-fit"
          />
        </div>
      </div>

      {/* Moved outside the overflow-hidden container so it can show */}
      <div className="absolute -bottom-8 left-0 w-full flex justify-center gap-[26px] md:hidden z-50">
        <div className="w-4 h-4 rounded-full bg-[#E8ADB0] border border-[#E8A0BF]"></div>
        <div className="w-4 h-4 rounded-full bg-white border border-[#E8A0BF]"></div>
        <div className="w-4 h-4 rounded-full bg-white border border-[#E8A0BF]"></div>
        <div className="w-4 h-4 rounded-full bg-white border border-[#E8A0BF]"></div>
        <div className="w-4 h-4 rounded-full bg-white border border-[#E8A0BF]"></div>
      </div>
    </section>
  );
}
