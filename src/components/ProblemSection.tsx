import CtaButton from "@/components/CtaButton";

const pillars = [
  {
    icon: (
      <svg viewBox="0 0 80 80" fill="none" aria-hidden="true" className="h-20 w-20">
        <circle cx="28" cy="32" r="18" fill="#1a7a52" fillOpacity="0.35" />
        <circle cx="52" cy="28" r="14" fill="#d4d4d4" fillOpacity="0.5" />
        <rect x="18" y="48" width="44" height="8" rx="4" fill="#1a7a52" fillOpacity="0.25" />
        <path d="M36 20v24M28 32h16" stroke="#1a7a52" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Care teams lose time chasing updates",
    description:
      "Emails, calls and manual follow-ups become the default way to coordinate care with other providers.",
  },
  {
    icon: (
      <svg viewBox="0 0 80 80" fill="none" aria-hidden="true" className="h-20 w-20">
        <rect x="14" y="18" width="24" height="32" rx="4" fill="#1a7a52" fillOpacity="0.3" />
        <rect x="42" y="26" width="24" height="32" rx="4" fill="#d4d4d4" fillOpacity="0.45" />
        <path d="M38 34h8M38 42h8" stroke="#2a2a2a" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.4" />
      </svg>
    ),
    title: "Separate systems create separate versions of the truth",
    description:
      "Approved Providers and Associated Providers duplicate the same work across platforms that often fall out of alignment.",
  },
  {
    icon: (
      <svg viewBox="0 0 80 80" fill="none" aria-hidden="true" className="h-20 w-20">
        <circle cx="40" cy="40" r="22" fill="#d4d4d4" fillOpacity="0.35" />
        <path
          d="M28 40h24M40 28v24"
          stroke="#1a7a52"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeOpacity="0.6"
        />
        <circle cx="40" cy="40" r="6" fill="#1a7a52" fillOpacity="0.5" />
      </svg>
    ),
    title: "Completed work is not captured cleanly",
    description:
      "Services can be delivered but missed, delayed or incorrectly reconciled in accounting systems.",
  },
  {
    icon: (
      <svg viewBox="0 0 80 80" fill="none" aria-hidden="true" className="h-20 w-20">
        <rect x="20" y="16" width="40" height="48" rx="4" fill="#1a7a52" fillOpacity="0.2" />
        <path
          d="M28 30h24M28 38h18M28 46h22M28 54h14"
          stroke="#2a2a2a"
          strokeWidth="2"
          strokeLinecap="round"
          strokeOpacity="0.25"
        />
        <circle cx="56" cy="24" r="10" fill="#1a7a52" fillOpacity="0.4" />
      </svg>
    ),
    title: "Compliance evidence is scattered",
    description:
      "It becomes harder to show that the right service happened at the right time, for the right client, under the right approval.",
  },
];

export default function ProblemSection() {
  return (
    <section className="bg-[#f3efe6] text-[#2a2a2a]">
      <div className="px-6 py-20 md:px-12 md:py-24 lg:px-16 xl:px-[20vw]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-sans text-3xl font-semibold tracking-tight md:text-4xl lg:text-[2.5rem] lg:leading-tight">
            Provider-to-provider care is still coordinated by inbox
          </h2>
          <p className="mt-5 font-sans text-base font-light leading-relaxed text-[#5c5c5c] md:text-lg">
            Care providers rely on external partners to deliver services, but the systems
            behind those services rarely stay aligned.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="flex flex-col items-center text-center">
              <div className="mb-6 flex h-24 items-center justify-center">{pillar.icon}</div>
              <h3 className="font-sans text-lg font-semibold leading-snug tracking-tight">
                {pillar.title}
              </h3>
              <p className="mt-3 font-sans text-sm font-light leading-relaxed text-[#5c5c5c]">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <CtaButton href="/book-a-demo" variant="green">
            Book a demo
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
