import CtaButton from "@/components/CtaButton";
import Logo from "@/components/Logo";

type NavbarProps = {
  variant?: "light" | "dark";
  showCta?: boolean;
};

export default function Navbar({ variant = "light", showCta = true }: NavbarProps) {
  return (
    <nav
      aria-label="Main navigation"
      className="font-inter flex w-full items-center justify-between px-6 py-6 md:px-12 md:py-8 lg:px-16 xl:px-[20vw]"
    >
      <Logo variant={variant} />
      {showCta && (
        <CtaButton href="/book-a-demo" size="sm" variant="nav">
          Book a Demo
        </CtaButton>
      )}
    </nav>
  );
}
