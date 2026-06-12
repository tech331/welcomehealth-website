type CtaButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export default function CtaButton({ children, className = "" }: CtaButtonProps) {
  return (
    <button
      type="button"
      className={`rounded-[3px] border border-[#e5e5e5] bg-[#ececec] px-8 py-4 text-sm font-medium tracking-[0.1em] text-[#1a1a1a] transition-colors hover:bg-[#f5f5f5] ${className}`}
    >
      {children}
    </button>
  );
}
