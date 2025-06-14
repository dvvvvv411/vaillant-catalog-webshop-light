
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Simulate fake submit (no backend), then "confirm"
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && /\S+@\S+\.\S+/.test(email)) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3500);
      setEmail("");
    }
  };

  return (
    <section className="container py-10 max-w-lg">
      <div className="bg-white/90 rounded-2xl shadow px-7 py-8 flex flex-col items-center gap-4 animate-fade-in">
        <Mail size={32} className="text-primary" />
        <div className="font-bold text-xl text-center">Newsletter abonnieren</div>
        <p className="text-gray-600 text-center mb-2">
          Immer informiert: Produkt-News, Aktionen &amp; Serviceangebote für Fachpartner direkt per E-Mail.
        </p>
        <form onSubmit={handleSubmit} className="flex w-full gap-2 max-w-md flex-col sm:flex-row">
          <input
            type="email"
            className="flex-1 rounded-md border px-4 py-2 text-base focus:outline-primary bg-gray-50"
            placeholder="Ihre E-Mail-Adresse"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={submitted}
          />
          <Button type="submit" disabled={submitted || !email.trim()} className="flex-shrink-0 min-w-[110px]">
            Anmelden
          </Button>
        </form>
        {submitted && (
          <div className="text-green-600 font-semibold transition-all mt-2">Danke für Ihre Anmeldung!</div>
        )}
      </div>
    </section>
  );
};

export default NewsletterSignup;
