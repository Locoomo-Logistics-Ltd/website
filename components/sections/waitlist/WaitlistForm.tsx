"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { WAITLIST_CONTENT } from "@/constants/content";

export default function WaitlistForm() {
  const [role, setRole] = useState(WAITLIST_CONTENT.roles[0].value);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | false>(false);

  const handleSubmit = async () => {
    // Basic client-side check before hitting the API
    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!phone.trim()) {
      setError("Please enter your phone number.");
      return;
    }
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    setError(false);
    setLoading(true);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, role }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }

      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="py-2">
        <div className="flex items-start gap-3 bg-white/10 border border-white/20 rounded-[14px] px-5 py-4">
          <span className="text-[22px] mt-[2px]">🎉</span>
          <div>
            <p className="text-white font-semibold text-[15px] mb-1">
              You&apos;re on the list!
            </p>
            <p className="text-white/70 text-[13px] leading-[1.6]">
              Check your inbox for a confirmation email. We&apos;ll be in touch when we launch.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const inputClass = cn(
    "w-full px-[16px] py-[13px] rounded-[12px] text-[14px] font-sans",
    "bg-white/[0.12] border text-white placeholder:text-white/45",
    "outline-none transition-all duration-200",
    "focus:bg-white/[0.16] focus:border-white/60",
    "disabled:opacity-60 disabled:cursor-not-allowed",
    "border-white/25"
  );

  return (
    <div>
      {/* Role selection */}
      <div
        className="flex flex-col gap-[8px] mb-5"
        role="radiogroup"
        aria-label="Select your role"
      >
        {WAITLIST_CONTENT.roles.map((r) => (
          <label
            key={r.value}
            className={cn(
              "flex items-center gap-3 px-4 py-[11px] rounded-[12px] cursor-pointer",
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
              className="accent-white w-4 h-4 shrink-0"
            />
            <span className="text-[13px] sm:text-[14px] font-medium text-white/90 leading-snug">
              {r.label}
            </span>
          </label>
        ))}
      </div>

      {/* Fields */}
      <div className="flex flex-col gap-[10px] mb-[10px]">
        {/* Name */}
        <input
          type="text"
          value={name}
          onChange={(e) => { setName(e.target.value); setError(false); }}
          placeholder="Full name"
          aria-label="Full name"
          disabled={loading}
          className={inputClass}
        />

        {/* Phone */}
        <input
          type="tel"
          value={phone}
          onChange={(e) => { setPhone(e.target.value); setError(false); }}
          placeholder="Phone number (e.g. +234 801 234 5678)"
          aria-label="Phone number"
          disabled={loading}
          className={inputClass}
        />

        {/* Email */}
        <input
          type="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setError(false); }}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          placeholder="Email address"
          aria-label="Email address"
          aria-invalid={!!error}
          disabled={loading}
          className={cn(
            inputClass,
            error ? "border-red-400/60 focus:border-red-400" : "border-white/25"
          )}
        />
      </div>

      {/* Submit */}
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full px-7 py-[14px] rounded-[12px] bg-white text-[var(--brand-blue)] text-[14px] font-bold transition-all duration-200 hover:bg-white/90 hover:-translate-y-px disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
      >
        {loading ? "Submitting..." : WAITLIST_CONTENT.cta}
      </button>

      {error && (
        <p className="text-red-300 text-[12px] mt-3" role="alert">
          {error}
        </p>
      )}

      <p className="text-white/45 text-[12px] mt-3">{WAITLIST_CONTENT.privacy}</p>
    </div>
  );
}