import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingAssistant } from "@/components/FloatingAssistant";
import { BookCard } from "@/components/BookCard";
import { BOOKS, MOODS, COLLECTIONS, type Mood, type CollectionSlug } from "@/lib/data";

type ShopSearch = { mood?: Mood | "All"; collection?: CollectionSlug };

export const Route = createFileRoute("/shop")({
  validateSearch: (search: Record<string, unknown>): ShopSearch => ({
    mood: (search.mood as Mood | "All" | undefined) ?? undefined,
    collection: (search.collection as CollectionSlug | undefined) ?? undefined,
  }),
  head: () => ({
    meta: [
      { title: "Shop — StoryShelf" },
      { name: "description", content: "Browse the full StoryShelf catalog. Filter by mood, price, rating, author, and reading length." },
    ],
  }),
  component: Shop,
});

function Shop() {
  const search = Route.useSearch();
  const [mood, setMood] = useState<Mood | "All">(search.mood ?? "All");
  const [collection, setCollection] = useState<CollectionSlug | "All">(search.collection ?? "All");
  const [maxPrice, setMaxPrice] = useState(800);
  const [minRating, setMinRating] = useState(0);
  const [author, setAuthor] = useState("");
  const [length, setLength] = useState<"Any"|"Short"|"Medium"|"Long">("Any");

  useEffect(() => { if (search.mood) setMood(search.mood); }, [search.mood]);
  useEffect(() => { if (search.collection) setCollection(search.collection); }, [search.collection]);

  const filtered = useMemo(() => BOOKS.filter(b => {
    if (mood !== "All" && !b.moods.includes(mood)) return false;
    if (collection !== "All" && !b.collections.includes(collection)) return false;
    if (b.price > maxPrice) return false;
    if (b.rating < minRating) return false;
    if (author && !b.author.toLowerCase().includes(author.toLowerCase())) return false;
    if (length === "Short" && b.pages >= 280) return false;
    if (length === "Medium" && (b.pages < 280 || b.pages > 400)) return false;
    if (length === "Long" && b.pages <= 400) return false;
    return true;
  }), [mood, collection, maxPrice, minRating, author, length]);

  const collectionTitle = COLLECTIONS.find(c => c.slug === collection)?.title;
  const headline = collection !== "All" && collectionTitle
    ? collectionTitle
    : mood !== "All"
    ? `${mood} reads`
    : "Every book, sorted by feeling.";

  return (
    <div className="bg-hero min-h-screen">
      <Navbar />
      <header className="mx-auto max-w-7xl px-6 pt-12 pb-6">
        <span className="text-xs uppercase tracking-[0.25em] text-primary">The shelf</span>
        <h1 className="mt-3 font-display text-5xl">{headline}</h1>
        <p className="mt-3 max-w-xl text-muted-foreground">Filter by mood, price, author, or how long you want to spend inside someone else's life.</p>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[260px_1fr]">
        <aside className="glass h-fit space-y-6 rounded-2xl p-5 lg:sticky lg:top-24">
          <Filter label="Mood">
            <div className="flex flex-wrap gap-1.5">
              {(["All", ...MOODS.map(m=>m.name)] as const).map(m => (
                <button key={m} onClick={()=>setMood(m as Mood|"All")} className={`rounded-full border px-2.5 py-1 text-xs transition ${mood===m?"border-primary bg-primary text-primary-foreground":"border-border bg-background/60 hover:border-primary/40"}`}>{m}</button>
              ))}
            </div>
          </Filter>
          <Filter label="Collection">
            <div className="flex flex-wrap gap-1.5">
              <button onClick={()=>setCollection("All")} className={`rounded-full border px-2.5 py-1 text-xs transition ${collection==="All"?"border-primary bg-primary text-primary-foreground":"border-border bg-background/60 hover:border-primary/40"}`}>All</button>
              {COLLECTIONS.map(c => (
                <button key={c.slug} onClick={()=>setCollection(c.slug)} className={`rounded-full border px-2.5 py-1 text-xs transition ${collection===c.slug?"border-primary bg-primary text-primary-foreground":"border-border bg-background/60 hover:border-primary/40"}`}>{c.icon} {c.title}</button>
              ))}
            </div>
          </Filter>
          <Filter label={`Max price · ₹${maxPrice}`}>
            <input type="range" min={199} max={800} step={10} value={maxPrice} onChange={e=>setMaxPrice(+e.target.value)} className="w-full accent-[var(--rosewood)]"/>
          </Filter>
          <Filter label={`Min rating · ${minRating.toFixed(1)}`}>
            <input type="range" min={0} max={5} step={0.1} value={minRating} onChange={e=>setMinRating(+e.target.value)} className="w-full accent-[var(--rosewood)]"/>
          </Filter>
          <Filter label="Author">
            <input value={author} onChange={e=>setAuthor(e.target.value)} placeholder="Search author…" className="w-full rounded-lg border border-border bg-background/70 px-3 py-2 text-sm focus:border-primary focus:outline-none"/>
          </Filter>
          <Filter label="Reading length">
            <div className="grid grid-cols-2 gap-1.5">
              {(["Any","Short","Medium","Long"] as const).map(l => (
                <button key={l} onClick={()=>setLength(l)} className={`rounded-lg border px-2 py-1.5 text-xs ${length===l?"border-primary bg-primary text-primary-foreground":"border-border bg-background/60"}`}>{l}</button>
              ))}
            </div>
          </Filter>
        </aside>

        <section>
          <div className="mb-5 flex items-center justify-between text-sm text-muted-foreground">
            <p>{filtered.length} {filtered.length === 1 ? "book" : "books"}</p>
          </div>
          {filtered.length === 0 ? (
            <div className="glass rounded-2xl p-12 text-center">
              <p className="font-display text-2xl">No books match that exact mood.</p>
              <p className="mt-2 text-sm text-muted-foreground">Try widening the price range or clearing the author filter.</p>
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((b,i)=>(<BookCard key={b.id} book={b} index={i}/>))}
            </div>
          )}
        </section>
      </div>

      <Footer/>
      <FloatingAssistant/>
    </div>
  );
}

function Filter({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</p>
      {children}
    </div>
  );
}
