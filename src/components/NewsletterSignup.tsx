
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle, ArrowRight } from "lucide-react";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && /\S+@\S+\.\S+/.test(email)) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setEmail("");
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-vaillant-teal to-blue-600">
      <div className="container max-w-4xl">
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-12 animate-fade-in">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-vaillant-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail size={32} className="text-vaillant-teal" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-vaillant-dark">
              Bleiben Sie auf dem Laufenden
            </h2>
            <p className="text-xl text-vaillant-gray max-w-2xl mx-auto">
              Erhalten Sie die neuesten Produktinformationen, Schulungsangebote und exklusive Angebote für Fachpartner direkt in Ihr Postfach.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                className="flex-1 h-12 px-4 rounded-xl border-gray-200 focus:border-vaillant-teal focus:ring-vaillant-teal"
                placeholder="Ihre E-Mail-Adresse"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={submitted}
              />
              <Button 
                type="submit" 
                disabled={submitted || !email.trim()} 
                className="h-12 px-8 rounded-xl font-medium"
              >
                {submitted ? (
                  <>
                    <CheckCircle size={18} className="mr-2" />
                    Angemeldet!
                  </>
                ) : (
                  <>
                    <span>Anmelden</span>
                    <ArrowRight size={18} className="ml-2" />
                  </>
                )}
              </Button>
            </div>
          </form>

          {submitted && (
            <div className="text-center mt-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 text-green-600 font-medium">
                <CheckCircle size={20} />
                <span>Vielen Dank für Ihre Anmeldung!</span>
              </div>
            </div>
          )}

          <div className="flex items-center justify-center gap-8 mt-8 text-sm text-vaillant-gray">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Monatliche Updates</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Exklusive Angebote</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Jederzeit abmeldbar</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
