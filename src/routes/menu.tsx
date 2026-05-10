import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Maple & Bean Café" },
      { name: "description", content: "Breakfast, lunch, drinks and homemade desserts at Maple & Bean Café." },
      { property: "og:title", content: "Menu — Maple & Bean" },
      { property: "og:description", content: "See our full menu of coffee, breakfast, lunch and desserts." },
    ],
  }),
  component: Menu,
});

type Item = { name: string; desc: string; price: string };

const sections: { title: string; items: Item[] }[] = [
  {
    title: "Breakfast",
    items: [
      { name: "Avocado Toast", desc: "Sourdough, smashed avocado, lemon, chili flakes", price: "$8" },
      { name: "Bacon & Egg Bagel", desc: "Toasted bagel, crispy bacon, fried egg, cheddar", price: "$9" },
      { name: "Maple Granola Bowl", desc: "House granola, Greek yogurt, berries, honey", price: "$7" },
      { name: "Buttermilk Pancakes", desc: "Stack of three with maple syrup and butter", price: "$10" },
    ],
  },
  {
    title: "Lunch",
    items: [
      { name: "Roasted Veggie Panini", desc: "Zucchini, peppers, pesto, mozzarella", price: "$11" },
      { name: "Turkey Club", desc: "Roast turkey, bacon, lettuce, tomato, aioli", price: "$12" },
      { name: "Garden Salad Bowl", desc: "Mixed greens, quinoa, feta, lemon vinaigrette", price: "$10" },
      { name: "Tomato Basil Soup", desc: "Slow-simmered, served with crusty bread", price: "$8" },
    ],
  },
  {
    title: "Drinks",
    items: [
      { name: "Espresso", desc: "Single or double shot", price: "$3" },
      { name: "Cappuccino", desc: "Classic, with velvety microfoam", price: "$4.5" },
      { name: "Maple Latte", desc: "Our signature — espresso, milk, real maple", price: "$5" },
      { name: "Matcha Latte", desc: "Ceremonial-grade matcha, oat milk", price: "$5.5" },
      { name: "Iced Cold Brew", desc: "Slow-steeped 18 hours, smooth and bold", price: "$4.5" },
    ],
  },
  {
    title: "Desserts",
    items: [
      { name: "Carrot Cake", desc: "Spiced sponge with cream cheese frosting", price: "$5" },
      { name: "Almond Croissant", desc: "Flaky, filled with almond cream", price: "$4" },
      { name: "Chocolate Chip Cookie", desc: "Warm, gooey, made fresh daily", price: "$3" },
      { name: "Lemon Tart", desc: "Buttery shell, bright citrus curd", price: "$5" },
    ],
  },
];

function Menu() {
  return (
    <>
      <section className="bg-[var(--cream)]">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary">Our menu</p>
          <h1 className="mt-2 font-display text-4xl font-bold md:text-5xl">Made fresh, every day</h1>
          <p className="mt-4 text-muted-foreground">From morning brews to afternoon treats.</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-16">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="font-display text-3xl font-bold text-primary">{s.title}</h2>
              <div className="mt-6 divide-y divide-border">
                {s.items.map((item) => (
                  <div key={item.name} className="flex items-baseline justify-between gap-6 py-5">
                    <div>
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                    <span className="shrink-0 font-display text-lg font-semibold text-secondary">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
