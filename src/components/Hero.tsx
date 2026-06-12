import Navbar from "@/components/Navbar";
import CtaButton from "@/components/CtaButton";

export default function Hero() {
  return (
    <section className="hero-gradient flex min-h-dvh w-full flex-col">
      <Navbar />

      <div className="flex flex-1 flex-col justify-end px-6 pb-[clamp(4rem,12vh,8rem)] md:px-12 lg:px-16 xl:px-[20vw]">
        <div className="w-full max-w-4xl xl:max-w-none">
          <h1 className="font-sans text-4xl font-semibold tracking-tight text-[#f5f5f5] md:text-5xl lg:text-6xl">
            Headline goes{" "}
            <span className="font-serif font-extralight italic">here</span>
          </h1>

          <p className="mt-4 max-w-2xl font-sans text-lg font-light text-[#b8b8b8] md:text-xl xl:max-w-none">
            Subheading text goes here
          </p>

          <CtaButton className="mt-8">Call to Action</CtaButton>
        </div>
      </div>
    </section>
  );
}
