import CtaButton from "@/components/CtaButton";
import Logo from "@/components/Logo";

export default function Navbar() {
  return (
    <nav
      aria-label="Main navigation"
      className="flex w-full items-center justify-between px-6 py-6 md:px-12 md:py-8 lg:px-16 xl:px-[20vw]"
    >
      <Logo />
      <CtaButton>Book a Demo</CtaButton>
    </nav>
  );
}
