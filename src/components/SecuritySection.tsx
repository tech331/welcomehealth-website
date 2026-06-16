const certifications = [
  { name: "HIPAA", label: "Compliant" },
  { name: "AICPA", label: "SOC 2" },
  { name: "APP", label: "Compliant" },
  { name: "ISO 9001", label: "Certified" },
];

export default function SecuritySection() {
  return (
    <section className="bg-white text-[#2a2a2a]">
      <div className="px-6 py-20 md:px-12 md:py-24 lg:px-16 xl:px-[20vw]">
        <h2 className="text-center font-sans text-2xl font-semibold tracking-tight md:text-3xl">
          Industry grade security and compliance
        </h2>

        <div className="mx-auto mt-12 flex max-w-4xl flex-wrap items-center justify-center gap-6 md:gap-10">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="flex min-w-[7.5rem] flex-col items-center justify-center rounded-xl border border-[#e8e4db] bg-[#f9f7f2] px-8 py-6 text-center"
            >
              <span className="font-sans text-lg font-semibold tracking-tight text-[#2a2a2a] md:text-xl">
                {cert.name}
              </span>
              <span className="mt-1 font-sans text-xs font-medium uppercase tracking-[0.12em] text-[#8a8578]">
                {cert.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
