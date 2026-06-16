const fitCriteria = [
  "Coordinate services across Associated Providers.",
  "Reduce inbox-heavy follow-up around visits, schedule changes and clinical documentation.",
  "Keep authorisations, completed services and billing records aligned.",
  "Improve visibility over what has been approved, scheduled, completed, documented and billed.",
  "Create a clearer operational record across care delivery, compliance and finance.",
];

export default function FitSection() {
  return (
    <section className="bg-white text-[#2a2a2a]">
      <div className="px-6 py-20 md:px-12 md:py-24 lg:px-16 xl:px-[20vw]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-sans text-3xl font-semibold tracking-tight md:text-4xl lg:text-[2.5rem] lg:leading-tight">
            Is Welcome Health right for you?
          </h2>
          <p className="mt-5 font-sans text-base font-light leading-relaxed text-[#5c5c5c] md:text-lg">
            Welcome Health is built for care providers whose operations depend on external
            provider relationships, shared accountability and timely data exchange.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-2xl">
          <p className="text-center font-sans text-base font-medium text-[#2a2a2a] md:text-lg">
            It is a strong fit if your team needs to:
          </p>

          <ul className="mt-8 space-y-4">
            {fitCriteria.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1e9b6e]/15"
                >
                  <svg
                    viewBox="0 0 12 12"
                    fill="none"
                    className="h-3 w-3 text-[#1e9b6e]"
                    aria-hidden="true"
                  >
                    <path
                      d="M2.5 6l2.5 2.5 4.5-5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="font-sans text-base font-light leading-relaxed text-[#5c5c5c] md:text-lg">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
