import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Catalog from "@/components/sections/Catalog";
import Footer from "@/components/layout/Footer";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col w-full relative overflow-hidden bg-white">
      
      <div className="absolute inset-0 max-w-[2540px] mx-auto w-full pointer-events-none ">
        <img
          src="/136783-vector-surprise-birthday-gift-free-clipart-hd 1.png"
          alt="Birthday Gift Decoration"
          className="hidden md:block absolute top-[100px] right-[-24px]  w-[276px] h-auto object-contain z-999"
        />

        <img
          src="/Gift.png"
          alt="Gift"
          style={{ width: '228.45px', height: '146.57px', transform: 'rotate(-23.84deg)' }}
          className="hidden md:block  absolute top-[580px] right-[-150px]  3xl:top-[680px] 3xl:w-[2000px] object-contain z-30 3xl:z-9"
        />
      </div>

      <Header />

      <div className="relative z-40 w-full max-w-[2540px] mx-auto flex-1">
        <Hero />
        <Catalog />
      </div>

      <Footer />
    </main>
  );
}