"use client";

import { useState } from "react";

type Step = 1 | 2 | 3 | 4 | 5;

const STATES = [
  "Alabama",
  "Florida",
  "Kansas",
  "Michigan",
  "North Carolina",
  "Ohio",
  "Pennsylvania",
  "South Carolina",
  "Virginia",
];

const LINES_OF_AUTHORITY = [
  "Life Insurance",
  "Health Insurance",
  "Variable Life / Variable Annuity",
  "Property & Casualty",
];

export function RecruitForm() {
  const [step, setStep] = useState<Step>(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    // Step 1
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    state: "",
    // Step 2
    licensedStates: [] as string[],
    licenseNumbers: {} as Record<string, string>,
    linesOfAuthority: [] as string[],
    yearsLicensed: "",
    // Step 3
    currentAgency: "",
    currentCarriers: "",
    annualPremium: "",
    // Step 4
    whyLeft: "",
    whatLookingFor: "",
    howDidYouHear: "",
    // Step 5
    agree1099: false,
    agreeTerms: false,
  });

  const totalSteps = 5;

  const update = (field: string, value: unknown) =>
    setForm((f) => ({ ...f, [field]: value }));

  const toggleState = (s: string) => {
    const current = form.licensedStates;
    update(
      "licensedStates",
      current.includes(s)
        ? current.filter((x) => x !== s)
        : [...current, s]
    );
  };

  const toggleLine = (l: string) => {
    const current = form.linesOfAuthority;
    update(
      "linesOfAuthority",
      current.includes(l)
        ? current.filter((x) => x !== l)
        : [...current, l]
    );
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/agents/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Submission failed. Please try again.");
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-16 px-6">
        <div className="text-gold text-5xl mb-4">✓</div>
        <h2
          className="text-3xl text-navy mb-4"
          style={{ fontFamily: "DM Serif Display, serif" }}
        >
          Application Received
        </h2>
        <p className="text-charcoal/60 max-w-md mx-auto">
          We&apos;ve got your application. A member of our recruiting team will
          review it and reach out within 1–2 business days. Check your inbox —
          and your spam folder just in case.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-xs text-charcoal/50 mb-2">
          <span>Step {step} of {totalSteps}</span>
          <span>{Math.round((step / totalSteps) * 100)}% complete</span>
        </div>
        <div className="h-1.5 bg-[#e2e0db] rounded-full overflow-hidden">
          <div
            className="h-full bg-gold transition-all duration-300"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      {/* STEP 1 — Basic Info */}
      {step === 1 && (
        <div className="space-y-5">
          <h2
            className="text-2xl text-navy"
            style={{ fontFamily: "DM Serif Display, serif" }}
          >
            Let&apos;s start with the basics.
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1.5">
                First Name
              </label>
              <input
                type="text"
                value={form.firstName}
                onChange={(e) => update("firstName", e.target.value)}
                className="w-full border border-[#e2e0db] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-navy transition-colors"
                placeholder="James"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1.5">
                Last Name
              </label>
              <input
                type="text"
                value={form.lastName}
                onChange={(e) => update("lastName", e.target.value)}
                className="w-full border border-[#e2e0db] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-navy transition-colors"
                placeholder="Walker"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-charcoal mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              className="w-full border border-[#e2e0db] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-navy transition-colors"
              placeholder="james.walker@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-charcoal mb-1.5">
              Phone Number
            </label>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              className="w-full border border-[#e2e0db] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-navy transition-colors"
              placeholder="(555) 867-5309"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-charcoal mb-1.5">
              Primary State of Residence
            </label>
            <select
              value={form.state}
              onChange={(e) => update("state", e.target.value)}
              className="w-full border border-[#e2e0db] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-navy transition-colors bg-white"
            >
              <option value="">Select a state...</option>
              {STATES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      {/* STEP 2 — License Info */}
      {step === 2 && (
        <div className="space-y-5">
          <h2
            className="text-2xl text-navy"
            style={{ fontFamily: "DM Serif Display, serif" }}
          >
            Tell us about your license.
          </h2>
          <div>
            <p className="text-sm text-charcoal/60 mb-3">
              Select all states where you hold an active license.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {STATES.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => toggleState(s)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium border transition-colors text-left ${
                    form.licensedStates.includes(s)
                      ? "bg-navy text-white border-navy"
                      : "bg-white text-charcoal border-[#e2e0db] hover:border-navy"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm text-charcoal/60 mb-3">
              Lines of authority (select all that apply):
            </p>
            <div className="grid grid-cols-2 gap-2">
              {LINES_OF_AUTHORITY.map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => toggleLine(l)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium border transition-colors text-left ${
                    form.linesOfAuthority.includes(l)
                      ? "bg-navy text-white border-navy"
                      : "bg-white text-charcoal border-[#e2e0db] hover:border-navy"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-charcoal mb-1.5">
              How long have you been licensed?
            </label>
            <select
              value={form.yearsLicensed}
              onChange={(e) => update("yearsLicensed", e.target.value)}
              className="w-full border border-[#e2e0db] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-navy transition-colors bg-white"
            >
              <option value="">Select...</option>
              <option value="new">Just got licensed (less than 1 year)</option>
              <option value="1-2">1–2 years</option>
              <option value="3-5">3–5 years</option>
              <option value="5+">More than 5 years</option>
            </select>
          </div>
        </div>
      )}

      {/* STEP 3 — Experience */}
      {step === 3 && (
        <div className="space-y-5">
          <h2
            className="text-2xl text-navy"
            style={{ fontFamily: "DM Serif Display, serif" }}
          >
            What does your current book look like?
          </h2>
          <div>
            <label className="block text-sm font-medium text-charcoal mb-1.5">
              Who are you contracted with right now? (Agency or FMO/MGA name)
            </label>
            <input
              type="text"
              value={form.currentAgency}
              onChange={(e) => update("currentAgency", e.target.value)}
              className="w-full border border-[#e2e0db] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-navy transition-colors"
              placeholder="Current agency or FMO/MGA name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-charcoal mb-1.5">
              What carriers do you have appointments with?
            </label>
            <input
              type="text"
              value={form.currentCarriers}
              onChange={(e) => update("currentCarriers", e.target.value)}
              className="w-full border border-[#e2e0db] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-navy transition-colors"
              placeholder="e.g., Transamerica, Foresters, National Life Group"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-charcoal mb-1.5">
              Approximate annual premium volume (all carriers):
            </label>
            <select
              value={form.annualPremium}
              onChange={(e) => update("annualPremium", e.target.value)}
              className="w-full border border-[#e2e0db] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-navy transition-colors bg-white"
            >
              <option value="">Select a range...</option>
              <option value="new">Haven&apos;t sold yet (new licensee)</option>
              <option value="0-50k">Under $50,000/year</option>
              <option value="50k-150k">$50,000 – $150,000/year</option>
              <option value="150k-300k">$150,000 – $300,000/year</option>
              <option value="300k+">$300,000+/year</option>
            </select>
          </div>
        </div>
      )}

      {/* STEP 4 — Goals */}
      {step === 4 && (
        <div className="space-y-5">
          <h2
            className="text-2xl text-navy"
            style={{ fontFamily: "DM Serif Display, serif" }}
          >
            What would make you leave?
          </h2>
          <div>
            <label className="block text-sm font-medium text-charcoal mb-1.5">
              What&apos;s the primary reason you&apos;d consider switching
              agencies?
            </label>
            <textarea
              value={form.whyLeft}
              onChange={(e) => update("whyLeft", e.target.value)}
              rows={3}
              className="w-full border border-[#e2e0db] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-navy transition-colors resize-none"
              placeholder="e.g., Low overrides, no carrier options, poor back-office support..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-charcoal mb-1.5">
              What would &quot;the perfect agency&quot; give you that you don&apos;t
              have now?
            </label>
            <textarea
              value={form.whatLookingFor}
              onChange={(e) => update("whatLookingFor", e.target.value)}
              rows={3}
              className="w-full border border-[#e2e0db] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-navy transition-colors resize-none"
              placeholder="e.g., Better override splits, more carrier access, someone who actually answers the phone..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-charcoal mb-1.5">
              How did you hear about us?
            </label>
            <select
              value={form.howDidYouHear}
              onChange={(e) => update("howDidYouHear", e.target.value)}
              className="w-full border border-[#e2e0db] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-navy transition-colors bg-white"
            >
              <option value="">Select...</option>
              <option value="linkedin">LinkedIn</option>
              <option value="google">Google Search</option>
              <option value="referral">Agent Referral</option>
              <option value="email">Email</option>
              <option value="text">Text Message</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
      )}

      {/* STEP 5 — Review & Submit */}
      {step === 5 && (
        <div className="space-y-5">
          <h2
            className="text-2xl text-navy"
            style={{ fontFamily: "DM Serif Display, serif" }}
          >
            Review &amp; Submit.
          </h2>
          <p className="text-charcoal/60 text-sm">
            Confirm your information before submitting.
          </p>
          <div className="bg-[#f8f6f2] rounded-lg p-5 space-y-2 text-sm">
            <p>
              <span className="font-semibold">Name:</span>{" "}
              {form.firstName} {form.lastName}
            </p>
            <p>
              <span className="font-semibold">Email:</span>{" "}
              {form.email}
            </p>
            <p>
              <span className="font-semibold">Phone:</span>{" "}
              {form.phone || "—"}
            </p>
            <p>
              <span className="font-semibold">Primary State:</span>{" "}
              {form.state || "—"}
            </p>
            <p>
              <span className="font-semibold">Licensed States:</span>{" "}
              {form.licensedStates.join(", ") || "—"}
            </p>
            <p>
              <span className="font-semibold">Lines:</span>{" "}
              {form.linesOfAuthority.join(", ") || "—"}
            </p>
          </div>
          <div className="space-y-4">
            <label className="flex gap-3 items-start cursor-pointer">
              <input
                type="checkbox"
                checked={form.agree1099}
                onChange={(e) => update("agree1099", e.target.checked)}
                className="mt-1 w-4 h-4 rounded border-[#e2e0db] text-navy focus:ring-navy"
              />
              <span className="text-sm text-charcoal/70">
                I understand this is a 1099 independent contractor relationship.
                I am responsible for my own taxes, insurance, and compliance.
              </span>
            </label>
            <label className="flex gap-3 items-start cursor-pointer">
              <input
                type="checkbox"
                checked={form.agreeTerms}
                onChange={(e) => update("agreeTerms", e.target.checked)}
                className="mt-1 w-4 h-4 rounded border-[#e2e0db] text-navy focus:ring-navy"
              />
              <span className="text-sm text-charcoal/70">
                I confirm that all information provided is accurate. I authorize
                Method Life Group to contact me regarding my application and
                potential contracting opportunities.
              </span>
            </label>
          </div>
          {error && (
            <p className="text-red-600 text-sm bg-red-50 rounded-lg px-4 py-3">
              {error}
            </p>
          )}
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between mt-8 pt-6 border-t border-[#e2e0db]">
        {step > 1 ? (
          <button
            type="button"
            onClick={() => setStep((s) => (s - 1) as Step)}
            className="px-6 py-3 text-sm font-medium text-charcoal border border-[#e2e0db] rounded-lg hover:border-navy hover:text-navy transition-colors"
          >
            ← Back
          </button>
        ) : (
          <div />
        )}

        {step < totalSteps ? (
          <button
            type="button"
            onClick={() => setStep((s) => (s + 1) as Step)}
            className="px-8 py-3 bg-navy text-white text-sm font-semibold rounded-lg hover:bg-light-navy transition-colors"
          >
            Continue →
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={loading || !form.agree1099 || !form.agreeTerms}
            className="px-8 py-3 bg-gold text-navy text-sm font-semibold rounded-lg hover:bg-gold/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        )}
      </div>
    </div>
  );
}
