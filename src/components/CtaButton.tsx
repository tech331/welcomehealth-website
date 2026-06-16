import Link from "next/link";

type CtaButtonProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  variant?: "light" | "green" | "nav";
  size?: "default" | "sm";
};

const sizeClasses = {
  default: "rounded-[3px] px-8 py-4 text-sm font-medium tracking-[0.1em]",
  sm: "rounded-lg px-4 py-2 text-sm font-medium tracking-normal",
};

const variantClasses = {
  light:
    "border border-[#e5e5e5] bg-[#ececec] text-[#1a1a1a] hover:bg-[#f5f5f5]",
  green: "bg-[#1e9b6e] text-white hover:bg-[#178a5f]",
  nav: "border-0 bg-white text-[#2a2a2a] hover:bg-[#f5f4f2]",
};

export default function CtaButton({
  children,
  className = "",
  href,
  variant = "light",
  size = "default",
}: CtaButtonProps) {
  const classes = `inline-block transition-colors text-center ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

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
