import CtaButton from "@/components/CtaButton";
import Logo from "@/components/Logo";

type NavbarProps = {
  variant?: "light" | "dark";
  showCta?: boolean;
};

export default function Navbar({ variant = "dark", showCta = true }: NavbarProps) {
  return (
    <nav
      aria-label="Main navigation"
      className={`flex w-full items-center justify-between px-6 py-6 md:px-12 md:py-8 lg:px-16 xl:px-[20vw] ${
        variant === "light" ? "border-b border-[#e8e4db] bg-white" : ""
      }`}
    >
      <Logo variant={variant} />
      {showCta && (
        <CtaButton href="/book-a-demo" variant={variant === "dark" ? "light" : "green"}>
          Book a Demo
        </CtaButton>
      )}
    </nav>
  );
}
