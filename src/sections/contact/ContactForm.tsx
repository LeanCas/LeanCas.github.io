"use client";

import { ArrowRight, Check, LoaderCircle } from "lucide-react";
import { AnimatePresence, m } from "motion/react";
import { useState, type FormEvent, type ReactNode } from "react";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

const needs = [
  "New Shopify store",
  "Shopify redesign",
  "Custom development",
  "Custom sections",
  "Performance",
  "CRO",
  "Other",
];

const budgets = ["< USD 3k", "USD 3k – 8k", "USD 8k – 15k", "USD 15k+", "Not sure yet"];

type Status = "idle" | "submitting" | "success" | "error";

const inputBase =
  "peer w-full rounded-xl bg-paper px-4 pt-6 pb-2.5 text-[15px] text-carbon ring-1 ring-carbon/10 transition-[box-shadow,background-color] duration-300 outline-none placeholder:text-transparent hover:ring-carbon/20 focus:bg-white focus:ring-2 focus:ring-green";

function Field({
  id,
  label,
  required,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="relative">
      {children}
      <label
        htmlFor={id}
        className="pointer-events-none absolute top-2 left-4 text-[11px] font-medium tracking-wide text-graphite uppercase"
      >
        {label}
        {required && <span className="text-green-ink"> *</span>}
      </label>
    </div>
  );
}

function Chip({ type, name, value }: { type: "checkbox" | "radio"; name: string; value: string }) {
  return (
    <label className="relative cursor-pointer">
      <input type={type} name={name} value={value} className="peer sr-only" />
      <span
        className={cn(
          "flex items-center gap-2 rounded-full px-3.5 py-2 text-sm text-carbon/80 ring-1 ring-carbon/12 transition-all duration-300 select-none",
          "hover:ring-carbon/30 peer-checked:bg-carbon peer-checked:text-white peer-checked:ring-carbon peer-focus-visible:ring-2 peer-focus-visible:ring-green",
        )}
      >
        {value}
      </span>
    </label>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("_gotcha")) return; // bot

    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      company: data.get("company"),
      shopify_url: data.get("shopify_url"),
      needs: data.getAll("needs").join(", "),
      budget: data.get("budget"),
      message: data.get("message"),
      _subject: `New project inquiry — ${data.get("name") || "hoty.com.ar"}`,
    };

    setStatus("submitting");
    try {
      const res = await fetch(site.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="relative overflow-hidden rounded-3xl bg-white p-5 shadow-[0_40px_80px_-40px_rgb(14_17_16/0.2)] ring-1 ring-carbon/[0.07] sm:p-8 md:p-10">
      <AnimatePresence mode="wait" initial={false}>
        {status === "success" ? (
          <m.div
            key="success"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex min-h-[520px] flex-col items-start justify-center"
            role="status"
          >
            <span className="flex size-14 items-center justify-center rounded-full bg-green text-carbon">
              <Check className="size-6" strokeWidth={2.5} aria-hidden="true" />
            </span>
            <h3 className="mt-8 text-4xl font-semibold tracking-[-0.04em]">Thanks — message received.</h3>
            <p className="mt-4 max-w-md text-lg text-graphite">
              We&apos;ll review your project and get back to you within 48 hours at the email you provided.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-8 text-sm font-medium underline decoration-green decoration-2 underline-offset-4"
            >
              Send another message
            </button>
          </m.div>
        ) : (
          <m.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={onSubmit}
            className="flex flex-col gap-4"
            noValidate={false}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field id="cf-name" label="Name" required>
                <input id="cf-name" name="name" autoComplete="name" required placeholder="Your name" className={inputBase} />
              </Field>
              <Field id="cf-email" label="Email" required>
                <input
                  id="cf-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="you@brand.com"
                  className={inputBase}
                />
              </Field>
              <Field id="cf-company" label="Company">
                <input id="cf-company" name="company" autoComplete="organization" placeholder="Brand" className={inputBase} />
              </Field>
              <Field id="cf-url" label="Current Shopify URL">
                <input
                  id="cf-url"
                  name="shopify_url"
                  inputMode="url"
                  autoComplete="url"
                  placeholder="yourstore.com"
                  className={inputBase}
                />
              </Field>
            </div>

            <fieldset className="mt-3">
              <legend className="mb-3 text-[11px] font-medium tracking-wide text-graphite uppercase">What do you need?</legend>
              <div className="flex flex-wrap gap-2">
                {needs.map((n) => (
                  <Chip key={n} type="checkbox" name="needs" value={n} />
                ))}
              </div>
            </fieldset>

            <fieldset className="mt-3">
              <legend className="mb-3 text-[11px] font-medium tracking-wide text-graphite uppercase">Budget</legend>
              <div className="flex flex-wrap gap-2">
                {budgets.map((b) => (
                  <Chip key={b} type="radio" name="budget" value={b} />
                ))}
              </div>
            </fieldset>

            <Field id="cf-message" label="Project details" required>
              <textarea
                id="cf-message"
                name="message"
                required
                rows={5}
                placeholder="Tell us about your store and goals"
                className={cn(inputBase, "mt-3 resize-y pt-7")}
              />
            </Field>

            {/* Honeypot */}
            <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

            <div className="mt-3 flex flex-col-reverse items-start justify-between gap-4 sm:flex-row sm:items-center">
              <p className="text-sm text-graphite" aria-live="polite">
                {status === "error" ? (
                  <span className="text-[#b42318]">
                    Something went wrong. Please email{" "}
                    <a className="underline" href={`mailto:${site.contact.email}`}>
                      {site.contact.email}
                    </a>
                    .
                  </span>
                ) : (
                  "We reply within 48 hours."
                )}
              </p>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="group inline-flex h-14 w-full items-center justify-center gap-3 rounded-full bg-carbon px-7 text-[15px] font-medium text-white transition-colors duration-300 hover:bg-carbon-3 disabled:opacity-70 sm:w-auto"
              >
                {status === "submitting" ? (
                  <>
                    Sending <LoaderCircle className="size-4 animate-spin" aria-hidden="true" />
                  </>
                ) : (
                  <>
                    Send inquiry
                    <span className="flex size-7 items-center justify-center rounded-full bg-green text-carbon transition-transform duration-500 ease-(--ease-out-expo) group-hover:translate-x-1">
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </span>
                  </>
                )}
              </button>
            </div>
          </m.form>
        )}
      </AnimatePresence>
    </div>
  );
}
