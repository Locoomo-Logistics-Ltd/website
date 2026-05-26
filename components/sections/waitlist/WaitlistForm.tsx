"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { WAITLIST_CONTENT } from "@/constants/content";

/**
 * Waitlist signup form — Client Component.
 * Handles role selection, email input, and submission state.
 * Replace the mock submit handler with your real API call.
 */
export default function WaitlistForm() {
  const [role, setRole] = useState(WAITLIST_CONTENT.roles[0].value);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (!email || !email.includes("@")) {
      setError(true);
      return;
    }
    setError(false);
    // TODO: Replace with actual API / form submission
    console.log("Waitlist signup:", { email, role });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="py-4">
        <p className="text-white font-semibold text-[16px]">
          🎉 You&apos;re on the list! We&apos;ll be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Role selection */}
      <div
        className="flex flex-col gap-[10px] mb-7"
        role="radiogroup"
        aria-label="Select your role"
      >
        {WAITLIST_CONTENT.roles.map((r) => (
          <label
            key={r.value}
            className={cn(
              "flex items-center gap-3 px-[18px] py-[14px] rounded-[12px] cursor-pointer",
              "bg-white/[0.08] border border-white/[0.15]",
              "transition-all duration-200",
              "hover:bg-white/[0.14] hover:border-white/30",
              role === r.value && "bg-white/[0.14] border-white/30"
            )}
          >
            <input
              type="radio"
              name="waitlist-role"
              value={r.value}
              checked={role === r.value}
              onChange={() => setRole(r.value)}
              className="accent-white w-4 h-4"
            />
            <span className="text-[14px] font-medium text-white/90">{r.label}</span>
          </label>
        ))}
      </div>

      {/* Email + submit */}
      <div className="flex flex-col sm:flex-row gap-[10px]">
        <input
          type="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setError(false); }}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          placeholder="Enter your email address"
          aria-label="Email address"
          aria-invalid={error}
          className={cn(
            "flex-1 px-[18px] py-[14px] rounded-[12px] text-[14px] font-sans",
            "bg-white/[0.12] border text-white placeholder:text-white/50",
            "outline-none transition-all duration-200",
            "focus:bg-white/[0.16]",
            error
              ? "border-red-400/60 focus:border-red-400"
              : "border-white/25 focus:border-white/60"
          )}
        />
        <button
          onClick={handleSubmit}
          className="px-7 py-[14px] rounded-[12px] bg-white text-[var(--brand-blue)] text-[14px] font-bold whitespace-nowrap transition-all duration-200 hover:bg-white/90 hover:-translate-y-px"
        >
          {WAITLIST_CONTENT.cta}
        </button>
      </div>

      {error && (
        <p className="text-red-300 text-[12px] mt-2" role="alert">
          Please enter a valid email address.
        </p>
      )}
      <p className="text-white/45 text-[12px] mt-3">{WAITLIST_CONTENT.privacy}</p>
    </div>
  );
}