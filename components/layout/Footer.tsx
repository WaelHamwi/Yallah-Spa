import {
  PinheadFlowerBouquet,
  PinheadFlowerBouquet1,
  AndrsrxnShieldCheck,
  DownloadOnTheAppStoreBadge1,
  GooglePlay1,
  LogosPaypal,
  SelfhstStripe,
  SelfhstVisa,
  ArcticonsEmojiAlarmClock,
  BoxiconsMessageCircleDetail,
  GlyphsPolyMicrophone,
  WithiconsPastelRoseBouquet,
} from "@/components/icons";
import Image from "next/image";
export default function Footer() {
  return (
    // Added [font-family:'Cairo',Helvetica,sans-serif] to the root to force Cairo globally
    <footer
      className="w-full relative [font-family:'Cairo',Helvetica,sans-serif] mt-auto"
      dir="rtl"
    >
      {/* Wave Image & Flowers */}
      <div className="w-full bg-white relative ">
        <div className="relative w-full">
          {/* Desktop Wave Image */}
          <Image
            src="/wave.png"
            alt="Wave Shape"
            width={0}
            height={0}
            sizes="100vw"
            className="hidden md:block w-full h-auto object-bottom"
            priority
          />

          {/* Mobile Wave Image */}
          <Image
            src="/wave mob.png"
            alt="Wave Shape Mobile"
            width={0}
            height={0}
            sizes="100vw"
            className="block md:hidden w-full h-auto object-bottom mt-0"
            priority
          />

          {/* Flowers anchored to the extreme bottom corners */}
          <PinheadFlowerBouquet1 className="absolute left-0 -bottom-5 md:-bottom-28 w-40 md:w-64 h-auto object-contain pointer-events-none z-10" />

          <PinheadFlowerBouquet className="absolute right-[-7px] md:right-[-100px] -bottom-5 md:-bottom-28  w-40 md:w-64 h-auto object-contain pointer-events-none z-10" />
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-white w-full pt-4 pb-12 md:pt-8 md:pb-16">
        {/* Kept the Quick Links column smaller across lg, xl, and 3xl */}
        <div className="max-w-[1440px] mx-auto px-4 lg:px-4 xl:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_0.8fr_1.2fr_1fr] xl:grid-cols-[1fr_1fr_0.7fr_1.3fr_1fr] 3xl:grid-cols-[1fr_1fr_0.6fr_1.4fr_1fr] gap-8 lg:gap-2 xl:gap-6">
          {/* Column 1: Logo & Description */}
          <div className="flex flex-col items-center md:items-start text-center md:text-right md:mt-[-30px]">
            <Image
              src="/Yallah Spa Pink Wellness Logo 1.png"
              alt="Yallah Spa"
              width={0}
              height={0}
              sizes="100vw"
              className="h-16 md:h-20 w-auto object-contain mb-4"
              priority
            />
            {/* Mobile Tagline */}
            <p className="block md:hidden text-[#59364c] text-sm font-bold mb-6">
              لأن راحتك .. تستحق أفضل
            </p>

            {/* Desktop Description */}
            <p className="hidden md:block text-[#59364c] text-xs md:text-sm lg:text-xs xl:text-sm 2xl:text-base leading-relaxed mb-6 max-w-[280px]">
              وجهتك الأولى للاسترخاء والعناية حيث تلقي الراحة بالجمال وتحول كل
              لحظة إلى تجربة استثنائية مميزة
            </p>

            <div className="flex items-center gap-2 xl:gap-3">
              <a
                href="#"
                aria-label="Twitter"
                className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#FDF4F8] flex items-center justify-center text-[#59364c] hover:bg-[#e8a0bf] hover:text-white transition-colors"
              >
                <svg
                  className="w-3 h-3 md:w-4 md:h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#FDF4F8] flex items-center justify-center text-[#59364c] hover:bg-[#e8a0bf] hover:text-white transition-colors"
              >
                <svg
                  className="w-3 h-3 md:w-4 md:h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#FDF4F8] flex items-center justify-center text-[#59364c] hover:bg-[#e8a0bf] hover:text-white transition-colors"
              >
                <svg
                  className="w-3 h-3 md:w-4 md:h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Help & Support - HIDDEN ON MOBILE */}
          <div className="hidden md:flex flex-col items-center md:items-start text-center md:text-right">
            <h3 className="text-[#59364c] font-bold text-base lg:text-base xl:text-lg mb-4 xl:mb-6">
              المساعدة والدعم
            </h3>
            <ul className="space-y-4 xl:space-y-5">
              <li className="flex items-center gap-2 xl:gap-3">
                <div className="w-8 h-8 xl:w-10 xl:h-10 rounded-full bg-[#FDF4F8] flex items-center justify-center shrink-0">
                  <GlyphsPolyMicrophone />
                </div>
                <div>
                  <p className="text-xs md:text-sm text-[#59364c]">
                    خدمة العملاء
                  </p>
                  <p
                    className="text-xs md:text-sm font-bold text-[#59364c]"
                    dir="ltr"
                  >
                    +966125101770
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-2 xl:gap-3">
                <div className="w-8 h-8 xl:w-10 xl:h-10 rounded-full bg-[#FDF4F8] flex items-center justify-center shrink-0">
                  <BoxiconsMessageCircleDetail />
                </div>
                <div>
                  <p className="text-xs md:text-sm text-[#59364c]">
                    البريد الإلكتروني
                  </p>
                  <p className="text-xs md:text-sm font-bold text-[#59364c]">
                    info@yallahspah.com
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-2 xl:gap-3">
                <div className="w-8 h-8 xl:w-10 xl:h-10 rounded-full bg-[#FDF4F8] flex items-center justify-center shrink-0">
                  <ArcticonsEmojiAlarmClock />
                </div>
                <div>
                  <p className="text-xs md:text-sm text-[#59364c]">
                    أوقات العمل
                  </p>
                  <p className="text-xs md:text-sm font-bold text-[#59364c]">
                    9 صباحاً حتى 11 مساءً
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links - HIDDEN ON MOBILE */}
          <div className="hidden md:flex flex-col items-center md:items-start text-center md:text-right">
            <h3 className="text-[#59364c] font-bold text-base lg:text-base xl:text-lg mb-4 xl:mb-6">
              روابط سريعة
            </h3>
            <ul className="space-y-3 xl:space-y-4">
              {[
                "الرئيسية",
                "جميع المنتجات",
                "جلسات المساج",
                "باقات الهدايا",
                "من نحن",
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="text-[#59364c] text-xs md:text-sm xl:text-base hover:text-[#e8a0bf] transition-colors flex items-center justify-center md:justify-start gap-1.5 xl:gap-2 group"
                  >
                    <svg
                      className="w-3 h-3 xl:w-4 xl:h-4 text-[#59364c] group-hover:text-[#e8a0bf] transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 19l-7-7 7-7"
                      ></path>
                    </svg>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter - HIDDEN ON MOBILE */}
          <div className="hidden md:flex flex-col items-center md:items-start text-center md:text-right w-full lg:pl-6 xl:pl-8 md:gap-2">
            <h3 className="text-[#59364c] font-bold text-base lg:text-base xl:text-lg mb-2">
              اشترك في نشرتنا البريدية
            </h3>
            <p className="text-[#59364c] text-xs lg:text-xs xl:text-sm mb-4">
              ليصلك كل جديد من عروضنا وخدماتنا
            </p>

            <div className="relative w-full mb-3 xl:mb-4">
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="w-full h-10 xl:h-12 bg-white border border-gray-200 rounded-lg px-3 xl:px-4 pr-9 xl:pr-10 text-xs xl:text-sm text-[#59364c] outline-none focus:border-[#e8a0bf] shadow-sm"
              />
              <svg
                className="w-4 h-4 xl:w-5 xl:h-5 text-[#c4c4c4] absolute right-2.5 xl:right-3 top-1/2 -translate-y-1/2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
            <button className="w-full h-10 xl:h-12 rounded-lg bg-[#e8a0bf] text-white font-bold text-xs xl:text-sm flex items-center justify-center gap-2 hover:bg-[#d88bae] transition-colors">
              <svg
                className="w-3 h-3 xl:w-4 xl:h-4 rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
              اشترك الآن
            </button>
          </div>

          {/* Column 5: Payment Methods & Apps */}
          <div className="flex flex-col items-center md:items-start text-center md:text-right w-full mt-6 md:mt-0">
            {/* Hidden on mobile */}
            <h3 className="hidden md:block text-[#59364c] font-bold text-base lg:text-base xl:text-lg mb-3 xl:mb-4">
              طرق الدفع
            </h3>
            <div className="hidden md:flex items-center gap-1.5 xl:gap-2 mb-3 xl:mb-4">
              <SelfhstVisa className="w-10 xl:w-12" />
              <LogosPaypal className="w-10 xl:w-12" />
              <SelfhstStripe className="w-10 xl:w-12" />
            </div>

            <div className="hidden md:flex items-center gap-1.5 xl:gap-2 text-xs xl:text-sm text-gray-500 mb-4 xl:mb-6">
              <AndrsrxnShieldCheck />
              تسوق بأمان
            </div>

            {/* App Stores - Visible on mobile, border removed on mobile */}
            <div className="w-full md:border-t md:border-gray-100 pt-0 md:pt-4 xl:pt-6 flex flex-col items-center md:items-start">
              {/* HIDDEN ON MOBILE */}
              <h4 className="hidden md:block text-[#59364c] font-bold text-sm xl:text-lg mb-3 xl:mb-3 self-center md:self-center">
                تطبيقاتنا
              </h4>

              <div className="flex items-center gap-2 xl:gap-2 justify-center md:justify-start w-full">
                <button className="h-10 w-28 xl:w-32 bg-black rounded-lg flex items-center justify-center overflow-hidden hover:opacity-80 transition-opacity">
                  <DownloadOnTheAppStoreBadge1 />
                </button>
                <button className="h-10 w-28 xl:w-32 bg-black rounded-lg flex items-center justify-center overflow-hidden hover:opacity-80 transition-opacity">
                  <GooglePlay1 />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#f8dce8] py-3 md:py-4 px-2 md:px-6 w-full">
        <div className="max-w-[1440px] mx-auto flex flex-row items-center justify-center md:justify-between gap-2 md:gap-4 w-full">
          {/* Links */}
          <div className="flex items-center gap-1 sm:gap-2 md:gap-3 xl:gap-4 font-semibold text-[#59364c]">
            <WithiconsPastelRoseBouquet className="hidden md:block" />
            <a
              href="#"
              className="hover:text-[#e8a0bf] transition-colors whitespace-nowrap text-[8px] sm:text-xs md:text-sm"
            >
              سياسة الخصوصية
            </a>
            <span className="text-[#3b1d2d] text-[10px] sm:text-base md:text-lg font-bold mx-0.5">
              |
            </span>
            <a
              href="#"
              className="hover:text-[#e8a0bf] transition-colors whitespace-nowrap text-[8px] sm:text-xs md:text-sm"
            >
              شروط الاستخدام
            </a>
            <span className="text-[#3b1d2d] text-[10px] sm:text-base md:text-lg font-bold mx-0.5">
              |
            </span>
            <a
              href="#"
              className="hover:text-[#e8a0bf] transition-colors whitespace-nowrap text-[8px] sm:text-xs md:text-sm"
            >
              سياسة الارجاع
            </a>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            <span className="whitespace-nowrap font-semibold text-[8px] sm:text-xs md:text-sm">
              جميع الحقوق محفوظة{" "}
              <span className="hidden sm:inline">Yalla Spah 2026</span>
            </span>
            <div className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full bg-[#59364c] text-white flex items-center justify-center text-[7px] sm:text-[10px] md:text-xs font-bold shrink-0">
              R
            </div>
          </div>
        </div>
      </div>
      <div className="md:h-20"></div>
    </footer>
  );
}
