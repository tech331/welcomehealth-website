import Navbar from "@/components/Navbar";
import CtaButton from "@/components/CtaButton";

export default function Hero() {
  return (
    <section className="hero-gradient flex min-h-dvh w-full flex-col">
      <Navbar variant="light" />

      <div className="flex flex-1 flex-col justify-end px-6 pb-[clamp(4rem,12vh,8rem)] md:px-12 lg:px-16 xl:px-[20vw]">
        <div className="w-full max-w-4xl xl:max-w-none">
          <h1 className="font-sans text-4xl font-semibold tracking-tight text-[#2a2a2a] md:text-5xl lg:text-6xl">
            Simplifying{" "}
            <span className="font-serif font-extralight italic">healthcare</span>{" "}
            data exchange
          </h1>

          <p className="mt-4 max-w-2xl font-sans text-lg font-light text-[#5c5c5c] md:text-xl xl:max-w-none">
            Welcome Health keeps Approved Providers and Associated Providers aligned on
            referrals, visits, and clinical documentation by syncing key data between
            their systems.
          </p>

          <CtaButton href="/book-a-demo" variant="green" className="mt-8">
            Book a demo
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
