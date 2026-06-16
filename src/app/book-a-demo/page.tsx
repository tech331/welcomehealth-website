import type { Metadata } from "next";
import BookDemoForm from "@/components/BookDemoForm";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Book a Demo | Welcome Health",
  description: "Schedule a demo to see how Welcome Health connects your provider network.",
};

export default function BookADemoPage() {
  return (
    <div className="min-h-dvh bg-[#faf8f5] text-[#2a2a2a]">
      <Navbar variant="light" showCta={false} />

      <div className="px-6 py-12 md:px-12 md:py-16 lg:px-16 xl:px-[20vw]">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="lg:pt-8">
            <p className="font-sans text-sm font-medium uppercase tracking-[0.12em] text-[#1a7a52]">
              Book a Demo
            </p>
            <h1 className="mt-4 font-sans text-4xl font-semibold tracking-tight md:text-5xl lg:text-[3.25rem] lg:leading-tight">
              Get Setup Today
            </h1>
          </div>

          <BookDemoForm />
        </div>
      </div>
    </div>
  );
}
