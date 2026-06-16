"use client";

import { FormEvent, useState } from "react";

const australianStates = [
  "Australian Capital Territory",
  "New South Wales",
  "Northern Territory",
  "Queensland",
  "South Australia",
  "Tasmania",
  "Victoria",
  "Western Australia",
];

const roleOptions = [
  "Clinical / Care Manager",
  "Operations Manager",
  "Executive / Leadership",
  "IT / Technology",
  "Finance / Billing",
  "Other",
];

const inputClasses =
  "w-full rounded-[3px] border border-[#ddd8cc] bg-white px-4 py-3 font-sans text-sm text-[#2a2a2a] placeholder:text-[#8a8578] focus:border-[#1a7a52] focus:outline-none focus:ring-1 focus:ring-[#1a7a52]";

const labelClasses = "mb-2 block font-sans text-sm font-medium text-[#2a2a2a]";

export default function BookDemoForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-lg border border-[#e8e4db] bg-[#f9f7f2] px-8 py-12 text-center">
        <h2 className="font-sans text-xl font-semibold text-[#2a2a2a]">
          Thanks for your interest
        </h2>
        <p className="mt-3 font-sans text-sm font-light leading-relaxed text-[#5c5c5c]">
          We&apos;ve received your request and will be in touch shortly to schedule your
          demo.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-[#e8e4db] bg-[#f9f7f2] px-6 py-8 md:px-8 md:py-10"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className={labelClasses}>
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            autoComplete="given-name"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="lastName" className={labelClasses}>
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            autoComplete="family-name"
            className={inputClasses}
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="email" className={labelClasses}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={inputClasses}
        />
      </div>

      <div className="mt-5">
        <label htmlFor="companyName" className={labelClasses}>
          Company Name
        </label>
        <input
          id="companyName"
          name="companyName"
          type="text"
          required
          autoComplete="organization"
          className={inputClasses}
        />
      </div>

      <div className="mt-5">
        <label htmlFor="state" className={labelClasses}>
          State
        </label>
        <select id="state" name="state" required defaultValue="" className={inputClasses}>
          <option value="" disabled>
            Select state
          </option>
          {australianStates.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor="role" className={labelClasses}>
          Which best describes your role
        </label>
        <select id="role" name="role" required defaultValue="" className={inputClasses}>
          <option value="" disabled>
            Select role
          </option>
          {roleOptions.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="mt-8 w-full rounded-[3px] bg-[#1a7a52] px-8 py-4 text-sm font-medium tracking-[0.1em] text-white transition-colors hover:bg-[#156644]"
      >
        Book a demo
      </button>
    </form>
  );
}
