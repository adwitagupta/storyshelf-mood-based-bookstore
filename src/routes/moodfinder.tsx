import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Send } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BookCard } from "@/components/BookCard";
import { BOOKS, type Book, type Mood } from "@/lib/data";

export const Route = createFileRoute("/moodfinder")({
  head: () => ({
    meta: [
      { title: "Mood Finder — StoryShelf" },
      { name: "description", content: "Tell StoryShelf how you feel and get personalized book recommendations in seconds." },
    ],
  }),
  component: MoodFinder,
});

const SUGGESTIONS = ["Stressed", "Happy", "Lonely", "Excited", "Heartbroken", "Nostalgic", "Curious", "Inspired"];

// Tiny rules-based "AI" — maps feelings to moods, picks top-rated matches.
const FEELING_MAP: Record<string, Mood[]> = {
  stressed:    ["Cozy", "Funny"],
  overworked:  ["Cozy", "Inspiring"],
  burnt:       ["Cozy", "Romantic"],
  tired:       ["Cozy", "Romantic"],
  happy:       ["Funny", "Adventurous"],
  excited:     ["Adventurous", "Inspiring"],
  lonely:      ["Cozy", "Heartbreaking"],
  sad:         ["Heartbreaking", "Cozy"],
  heartbroken: ["Heartbreaking", "Romantic"],
  nostalgic:   ["Heartbreaking", "Cozy"],
  curious:     ["Mysterious", "Dark Academia"],
  inspired:    ["Inspiring", "Adventurous"],
  motivated:   ["Inspiring", "Dark Academia"],
  romantic:    ["Romantic", "Cozy"],
  bored:       ["Mysterious", "Adventurous"],
  anxious:     ["Cozy", "Inspiring"],
  devastated:  ["Heartbreaking", "Romantic"],
  thoughtful:  ["Dark Academia", "Inspiring"],
};

function recommend(input: string): { moods: Mood[]; books: Book[] } {
  const lc = input.toLowerCase();
  const hits = new Set<Mood>();
  for (const key of Object.keys(FEELING_MAP)) {
    if (lc.includes(key)) FEELING_MAP[key].forEach(m => hits.add(m));
  }
  if (hits.size === 0) { hits.add("Cozy"); hits.add("Inspiring"); }
  const moods = [...hits];
  const books = [...BOOKS]
    .filter(b => b.moods.some(m => hits.has(m)))
    .sort((a,b)=>b.rating-a.rating)
    .slice(0,6);
  return { moods, books };
}

function MoodFinder() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<{ moods: Mood[]; books: Book[] } | null>(null);
  const [loading, setLoading] = useState(false);

  const submit = (text?: string) => {
    const q = (text ?? input).trim();
    if (!q) return;
    setInput(q);
    setLoading(true);
    setResult(null);
    setTimeout(() => {
      setResult(recommend(q));
      setLoading(false);
    }, 700);
  };

  return (
    <div className="bg-hero min-h-screen">
      <Navbar />
      <section className="relative mx-auto max-w-4xl px-6 pt-20 pb-12 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs uppercase tracking-widest text-primary">
          <Sparkles className="h-3 w-3"/> Signature feature
        </span>
        <h1 className="mt-6 font-display text-5xl leading-tight sm:text-6xl">
          What are you <span className="text-gradient-warm italic">feeling</span> today?
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
          Be honest. Be specific. "Soft, a little lost, want to cry but in a good way" works better than "happy."
        </p>

        <form
          onSubmit={(e)=>{e.preventDefault(); submit();}}
          className="glass-strong mx-auto mt-10 flex max-w-2xl items-center gap-2 rounded-full p-2 shadow-glow"
        >
          <input
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            placeholder="Tell me how you feel…"
            className="flex-1 bg-transparent px-5 py-3 text-base focus:outline-none"
          />
          <button type="submit" className="flex items-center gap-1.5 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]">
            <Send className="h-4 w-4"/> Find
          </button>
        </form>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {SUGGESTIONS.map(s => (
            <button key={s} onClick={()=>submit(s)} className="rounded-full border border-border bg-background/60 px-3 py-1.5 text-xs backdrop-blur transition hover:border-primary hover:text-primary">
              {s}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <AnimatePresence mode="wait">
          {loading && (
            <motion.div key="loading" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="glass mx-auto max-w-md rounded-2xl p-8 text-center">
              <div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-primary border-t-transparent"/>
              <p className="mt-4 text-sm text-muted-foreground">Reading between your lines…</p>
            </motion.div>
          )}

          {result && !loading && (
            <motion.div key="result" initial={{opacity:0, y:20}} animate={{opacity:1,y:0}} transition={{duration:0.5}}>
              <div className="mb-8 text-center">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Reading you as</p>
                <div className="mt-3 flex flex-wrap justify-center gap-2">
                  {result.moods.map(m => (
                    <span key={m} className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">{m}</span>
                  ))}
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {result.books.map((b,i)=>(<BookCard key={b.id} book={b} index={i}/>))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <Footer/>
    </div>
  );
}
