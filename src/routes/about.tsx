import { createFileRoute } from "@tanstack/react-router";
import { Heart, Leaf, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Maple & Bean Café" },
      { name: "description", content: "Our story, our values, and the people behind Maple & Bean Café." },
      { property: "og:title", content: "About Maple & Bean" },
      { property: "og:description", content: "A small café built on great coffee and good neighbors." },
    ],
  }),
  component: About,
});

const values = [
  { icon: Heart, title: "Made with care", desc: "Everything is prepared by hand, in small batches, every day." },
  { icon: Leaf, title: "Thoughtfully sourced", desc: "Beans from ethical roasters and produce from local farms." },
  { icon: Users, title: "A place to belong", desc: "We want every guest to feel like a regular from the first visit." },
];

function About() {
  return (
    <>
      <section className="bg-[var(--cream)]">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary">Our story</p>
          <h1 className="mt-2 font-display text-4xl font-bold md:text-5xl">Brewed with love since 2015</h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Maple & Bean started as a tiny coffee cart with one espresso machine and a big dream:
            to build a place where neighbors gather and good mornings begin.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="space-y-6 text-base leading-relaxed text-foreground/90">
          <p>
            Ten years later, we've grown into a cozy corner café — but our soul hasn't changed.
            Every cup is still pulled with care. Every pastry is still baked from scratch. And the
            door is still wide open for students cramming for finals, parents grabbing a quiet
            moment, and friends catching up over a slow Sunday brunch.
          </p>
          <p>
            We believe a great café is more than coffee. It's the smell of warm bread in the
            morning. It's the chalkboard with the day's special. It's the barista who remembers
            your name. We work hard to make all of that feel effortless.
          </p>
        </div>
      </section>

      <section className="bg-[var(--cream)] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center font-display text-3xl font-bold md:text-4xl">What we believe</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl bg-card p-8 shadow-sm">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
