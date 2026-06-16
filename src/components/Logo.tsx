import Link from "next/link";

type LogoProps = {
  variant?: "light" | "dark";
};

export default function Logo({ variant = "dark" }: LogoProps) {
  return (
    <Link href="/" className="inline-flex items-center gap-2">
      <span className="logo-mark" aria-hidden="true">
        W
      </span>
      <span
        className={`font-sans text-base font-medium ${
          variant === "dark" ? "text-white" : "text-[#2a2a2a]"
        }`}
      >
        Welcome Health
      </span>
    </Link>
  );
}
