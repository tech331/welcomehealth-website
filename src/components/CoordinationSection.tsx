import ProductTabs from "@/components/ProductTabs";

export default function CoordinationSection() {
  return (
    <section className="bg-[#faf8f5] text-[#2a2a2a]">
      <div className="px-6 py-20 md:px-12 md:py-24 lg:px-16 xl:px-[20vw]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-sans text-3xl font-semibold tracking-tight md:text-4xl lg:text-[2.5rem] lg:leading-tight">
            One coordination layer for provider-to-provider care
          </h2>
          <p className="mt-5 font-sans text-base font-light leading-relaxed text-[#5c5c5c] md:text-lg">
            Welcome Health gives care providers the infrastructure to exchange clinical and
            operational data across their provider network.
          </p>
        </div>

        <ProductTabs />
      </div>
    </section>
  );
}
