import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Maple & Bean Café" },
      { name: "description", content: "Find us, call us, or send a message. We'd love to hear from you." },
      { property: "og:title", content: "Contact Maple & Bean" },
      { property: "og:description", content: "Visit, call, or write to our café team." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="bg-[var(--cream)]">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary">Get in touch</p>
          <h1 className="mt-2 font-display text-4xl font-bold md:text-5xl">Come say hello</h1>
          <p className="mt-4 text-muted-foreground">Drop by, give us a ring, or send a note below.</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2">
        <div className="space-y-6">
          <InfoRow icon={MapPin} title="Visit">
            123 Oak Street<br />Downtown, City 10001
          </InfoRow>
          <InfoRow icon={Phone} title="Call">
            <a className="hover:text-primary" href="tel:+15551234567">(555) 123-4567</a>
          </InfoRow>
          <InfoRow icon={Mail} title="Email">
            <a className="hover:text-primary" href="mailto:hello@mapleandbean.cafe">hello@mapleandbean.cafe</a>
          </InfoRow>
          <InfoRow icon={Clock} title="Hours">
            Mon – Fri · 7am – 8pm<br />Sat – Sun · 8am – 6pm
          </InfoRow>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="rounded-2xl border border-border bg-card p-8 shadow-sm"
        >
          {sent ? (
            <div className="py-12 text-center">
              <h3 className="font-display text-2xl font-bold text-primary">Thanks!</h3>
              <p className="mt-2 text-muted-foreground">We've got your message and will get back to you soon.</p>
            </div>
          ) : (
            <div className="space-y-4">
              <Field label="Name" id="name" />
              <Field label="Email" id="email" type="email" />
              <div>
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
              >
                Send message
              </button>
            </div>
          )}
        </form>
      </section>
    </>
  );
}

function InfoRow({ icon: Icon, title, children }: { icon: typeof Mail; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary/15 text-secondary">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{children}</p>
      </div>
    </div>
  );
}

function Field({ label, id, type = "text" }: { label: string; id: string; type?: string }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium">{label}</label>
      <input
        id={id}
        type={type}
        required
        className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}
