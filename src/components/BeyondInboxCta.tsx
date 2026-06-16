import CtaButton from "@/components/CtaButton";

export default function BeyondInboxCta() {
  return (
    <section className="bg-white text-[#2a2a2a]">
      <div className="px-6 pb-20 md:px-12 md:pb-24 lg:px-16 xl:px-[20vw]">
        <div className="mx-auto max-w-4xl rounded-lg bg-[#faf8f5] px-8 py-14 text-center md:px-12 md:py-16">
          <h2 className="font-sans text-3xl font-semibold tracking-tight md:text-4xl">
            Move beyond the inbox
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-sans text-base font-light leading-relaxed text-[#5c5c5c] md:text-lg">
            The future of provider-to-provider care will not be coordinated through email
            chains, manual follow-ups and disconnected records.
          </p>
          <p className="mx-auto mt-4 max-w-2xl font-sans text-base font-light leading-relaxed text-[#5c5c5c] md:text-lg">
            Start connecting your provider network across referrals, visits, and clinical
            records.
          </p>
          <div className="mt-8 flex justify-center">
            <CtaButton href="/book-a-demo" variant="green">
              Book a demo
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}
