import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/cafe-hero.jpg";
import { Coffee, Croissant, Cake } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maple & Bean Café — Your cozy corner for coffee" },
      { name: "description", content: "Welcome to Maple & Bean. Handcrafted coffee, fresh breakfast, lunch, and homemade desserts in a warm neighborhood café." },
    ],
  }),
  component: Home,
});

const popular = [
  { icon: Coffee, name: "Maple Latte", desc: "Espresso, steamed milk and a touch of real maple syrup." },
  { icon: Croissant, name: "Almond Croissant", desc: "Buttery, flaky, baked in-house every morning." },
  { icon: Cake, name: "Carrot Cake", desc: "Warmly spiced with cream cheese frosting." },
];

function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Cozy café interior" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 py-32 md:py-44">
          <div className="max-w-xl text-primary-foreground">
            <p className="text-sm uppercase tracking-[0.2em] opacity-90">Maple & Bean Café</p>
            <h1 className="mt-3 font-display text-5xl font-bold leading-tight md:text-6xl">
              Your cozy corner for coffee & comfort.
            </h1>
            <p className="mt-5 text-lg opacity-90">
              Handcrafted drinks, fresh-baked pastries, and a warm welcome — every single day.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/menu" className="rounded-md bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground shadow-lg transition hover:opacity-90">
                View Menu
              </Link>
              <Link to="/contact" className="rounded-md border border-primary-foreground/40 bg-primary-foreground/10 px-6 py-3 text-sm font-semibold backdrop-blur transition hover:bg-primary-foreground/20">
                Visit Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="font-display text-3xl font-bold md:text-4xl">A little café with a big heart</h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          We're a small neighborhood spot serving carefully sourced coffee and food made from
          scratch. Whether you're studying, meeting a friend, or just need a quiet moment — pull
          up a chair.
        </p>
      </section>

      <section className="bg-[var(--cream)] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-secondary">Customer favorites</p>
            <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">Popular this week</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {popular.map((p) => (
              <div key={p.name} className="rounded-2xl border border-border bg-card p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-[var(--shadow-warm)]">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary/15 text-secondary">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/menu" className="inline-flex rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90">
              See full menu
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
