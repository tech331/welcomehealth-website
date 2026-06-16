import Link from "next/link";

type CtaButtonProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  variant?: "light" | "green";
};

const baseClasses =
  "inline-block rounded-[3px] px-8 py-4 text-sm font-medium tracking-[0.1em] transition-colors text-center";

const variantClasses = {
  light:
    "border border-[#e5e5e5] bg-[#ececec] text-[#1a1a1a] hover:bg-[#f5f5f5]",
  green: "bg-[#1a7a52] text-white hover:bg-[#156644]",
};

export default function CtaButton({
  children,
  className = "",
  href,
  variant = "light",
}: CtaButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes}>
      {children}
    </button>
  );
}
