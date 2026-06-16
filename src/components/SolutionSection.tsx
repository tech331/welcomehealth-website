import CareSyncCodeBlock from "@/components/CareSyncCodeBlock";

const benefits = [
  "Keep providers aligned across referrals, visits, and clinical documentation.",
  "Give your team visibility over what has been approved, scheduled, and completed.",
  "Reduce manual follow-up between Approved Providers and Associated Providers.",
  "Create a clearer operational record across care delivery, compliance and billing.",
];

export default function SolutionSection() {
  return (
    <section className="bg-white text-[#2a2a2a]">
      <div className="px-6 py-20 md:px-12 md:py-24 lg:px-16 xl:px-[20vw]">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl text-left">
            <p className="font-sans text-xl font-light leading-relaxed tracking-tight md:text-2xl lg:text-[1.75rem] lg:leading-snug">
              Welcome Health connects provider systems, automatically syncing the information
              each party needs to coordinate care, support compliance and capture completed
              work.
            </p>

            <ul className="mt-8 list-disc space-y-3 pl-5 font-sans text-base font-light leading-relaxed text-[#5c5c5c] md:text-lg">
              {benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </div>

          <CareSyncCodeBlock />
        </div>
      </div>
    </section>
  );
}
