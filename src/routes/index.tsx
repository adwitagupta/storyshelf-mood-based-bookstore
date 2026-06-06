import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Star, Quote } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingAssistant } from "@/components/FloatingAssistant";
import { BookCard } from "@/components/BookCard";
import { BookCover } from "@/components/BookCover";
import { BOOKS, MOODS, COLLECTIONS, REVIEWS } from "@/lib/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "StoryShelf — Find a story that matches your mood" },
      { name: "description", content: "A premium online bookstore that helps you discover books by mood, emotion, and reading experience. Built for the way you actually feel." },
      { property: "og:title", content: "StoryShelf — Find a story that matches your mood" },
      { property: "og:description", content: "Discover books by mood, not genre. Curated reads, mood-based collections, and an AI mood finder built for readers." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="bg-hero min-h-screen">
      <Navbar />
      <Hero />
      <MoodGrid />
      <Collections />
      <Trending />
      <AITeaser />
      <Reviews />
      <Newsletter />
      <Footer />
      <FloatingAssistant />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 pt-16 pb-24 lg:grid-cols-[1.1fr_1fr] lg:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground backdrop-blur">
            <Sparkles className="h-3 w-3 text-primary" /> mood-based bookstore
          </span>
          <h1 className="mt-6 font-display text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
            How do you want to <span className="text-gradient-warm italic">feel</span> today?
          </h1>
          <p className="mt-6 max-w-lg text-base text-muted-foreground sm:text-lg">
            StoryShelf doesn't sort books by genre. It sorts them by the way they make you feel — so the next page you turn is the one you actually needed.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/moodfinder" className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]">
              Try the Mood Finder <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link to="/shop" className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-5 py-3 text-sm font-medium backdrop-blur hover:bg-background">
              Browse the shelf
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex -space-x-2">
              {["#B46A72","#A8B58A","#A9B7C6","#2D3A47"].map(c => (
                <span key={c} className="h-8 w-8 rounded-full border-2 border-background" style={{background:c}}/>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-foreground">
                {Array.from({length:5}).map((_,i)=>(<Star key={i} className="h-3.5 w-3.5 fill-primary text-primary"/>))}
                <span className="ml-1 font-medium">4.9</span>
              </div>
              <p>loved by 24,000+ readers</p>
            </div>
          </div>
        </motion.div>

        <div className="relative h-[460px] sm:h-[520px]">
          <FloatingStack />
        </div>
      </div>
    </section>
  );
}

function FloatingStack() {
  const picks = [BOOKS[5], BOOKS[2], BOOKS[3], BOOKS[8]];
  const positions = [
    "left-[8%] top-[6%] w-[44%] rotate-[-8deg]",
    "right-[6%] top-[2%] w-[42%] rotate-[6deg]",
    "left-[16%] bottom-[4%] w-[42%] rotate-[4deg]",
    "right-[10%] bottom-[8%] w-[40%] rotate-[-5deg]",
  ];
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-x-8 top-1/2 -z-10 h-[70%] -translate-y-1/2 rounded-[40%] bg-[var(--gradient-warm)] opacity-30 blur-3xl" />
      {picks.map((b, i) => (
        <motion.div
          key={b.id}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 * i, duration: 0.7 }}
          className={`absolute ${positions[i]} animate-float`}
          style={{ animationDelay: `${i * 0.8}s` }}
        >
          <BookCover book={b} className="shadow-glow ring-1 ring-black/10" />
        </motion.div>
      ))}
    </div>
  );
}

function MoodGrid() {
  return (
    <section id="moods" className="mx-auto max-w-7xl px-6 py-20">
      <SectionHead eyebrow="Pick a feeling" title="Eight moods. Endless stories." />
      <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
        {MOODS.map((m, i) => (
          <motion.button
            key={m.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04, duration: 0.4 }}
            whileHover={{ y: -4 }}
            className="glass group relative overflow-hidden rounded-2xl p-5 text-left transition-shadow hover:shadow-glow"
          >
            <div
              className="absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-40 blur-2xl transition-opacity group-hover:opacity-70"
              style={{ background: m.tint }}
            />
            <span className="text-3xl">{m.emoji}</span>
            <h3 className="mt-4 font-display text-xl">{m.name}</h3>
            <p className="mt-1 text-xs text-muted-foreground">{m.blurb}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
              Explore <ArrowRight className="h-3 w-3" />
            </span>
          </motion.button>
        ))}
      </div>
    </section>
  );
}

function Collections() {
  return (
    <section id="collections" className="mx-auto max-w-7xl px-6 py-20">
      <SectionHead eyebrow="Featured collections" title="Shelves we've quietly obsessed over." />
      <div className="mt-12 grid gap-4 md:grid-cols-3 lg:grid-cols-5">
        {COLLECTIONS.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
            className="group relative h-56 overflow-hidden rounded-2xl p-6 text-cream shadow-soft transition-all hover:shadow-glow"
            style={{
              background:
                i % 2 === 0
                  ? "linear-gradient(160deg,var(--lagoon),color-mix(in oklab,var(--rosewood) 70%,var(--lagoon)))"
                  : "linear-gradient(160deg,color-mix(in oklab,var(--sage) 80%,var(--lagoon)),var(--lagoon))",
            }}
          >
            <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-white/10 blur-2xl transition-transform group-hover:scale-110"/>
            <span className="text-2xl">{c.icon}</span>
            <h3 className="mt-8 font-display text-xl leading-tight">{c.title}</h3>
            <p className="mt-2 text-xs text-white/70">{c.subtitle}</p>
            <span className="absolute bottom-5 inline-flex items-center gap-1 text-xs">Open shelf <ArrowRight className="h-3 w-3"/></span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Trending() {
  return (
    <section id="trending" className="mx-auto max-w-7xl px-6 py-20">
      <div className="flex items-end justify-between">
        <SectionHead eyebrow="Trending this week" title="What readers can't put down." />
        <Link to="/shop" className="hidden text-sm text-primary hover:underline sm:inline-flex sm:items-center sm:gap-1">All books <ArrowRight className="h-3 w-3"/></Link>
      </div>
      <div className="mt-10 -mx-6 overflow-x-auto px-6 pb-4">
        <div className="flex gap-5">
          {BOOKS.slice(0, 8).map((b, i) => (
            <div key={b.id} className="w-[260px] shrink-0">
              <BookCard book={b} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AITeaser() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="glass-strong relative overflow-hidden rounded-3xl p-10 shadow-glow md:p-16">
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[var(--rosewood)] opacity-30 blur-3xl"/>
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[var(--sage)] opacity-30 blur-3xl"/>
        <div className="relative grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs uppercase tracking-widest text-primary">
              <Sparkles className="h-3 w-3"/> Signature feature
            </span>
            <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">
              Tell us how you feel.<br/>We'll find your next read.
            </h2>
            <p className="mt-5 max-w-md text-muted-foreground">
              The StoryShelf Mood Finder reads between your lines. "Burnt out and weirdly nostalgic" gets a different shelf than "wanting to be wrecked." That's the point.
            </p>
            <Link to="/moodfinder" className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]">
              Open Mood Finder <ArrowRight className="h-4 w-4"/>
            </Link>
          </div>
          <div className="glass space-y-3 rounded-2xl p-5">
            {[
              { q: "stressed and overworked", a: "Try slow, warm fiction. Start with Marigold Weather." },
              { q: "lonely on a sunday night", a: "You need Soft Static — tiny essays, big company." },
              { q: "want to be devastated (good)", a: "We Were Made of Static will absolutely ruin you." },
            ].map((row,i)=>(
              <motion.div key={i} initial={{opacity:0,x:20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:i*0.1}} className="rounded-xl bg-background/70 p-3">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">you</p>
                <p className="text-sm">{row.q}</p>
                <p className="mt-3 text-xs uppercase tracking-wider text-primary">storyshelf</p>
                <p className="text-sm">{row.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <SectionHead eyebrow="Reader letters" title="What people say about their shelf." />
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {REVIEWS.map((r, i) => (
          <motion.figure
            key={r.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="glass rounded-2xl p-6"
          >
            <Quote className="h-5 w-5 text-primary"/>
            <blockquote className="mt-3 text-sm leading-relaxed text-foreground/80">{r.text}</blockquote>
            <figcaption className="mt-5 flex items-center justify-between text-xs">
              <div>
                <p className="font-medium text-foreground">{r.name}</p>
                <p className="text-muted-foreground">{r.city}</p>
              </div>
              <div className="flex">{Array.from({length:r.rating}).map((_,i)=>(<Star key={i} className="h-3 w-3 fill-primary text-primary"/>))}</div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20 text-center">
      <h2 className="font-display text-4xl">A monthly letter from the shelf.</h2>
      <p className="mt-3 text-muted-foreground">Curated picks by mood, early access to limited collections, and the occasional reading playlist.</p>
      <form className="mx-auto mt-8 flex max-w-md overflow-hidden rounded-full border border-border bg-background/70 shadow-soft backdrop-blur">
        <input type="email" placeholder="you@bookmail.com" className="flex-1 bg-transparent px-5 py-3 text-sm focus:outline-none"/>
        <button className="bg-primary px-5 text-sm font-medium text-primary-foreground hover:opacity-90">Subscribe</button>
      </form>
    </section>
  );
}

function SectionHead({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <span className="text-xs uppercase tracking-[0.25em] text-primary">{eyebrow}</span>
      <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight sm:text-5xl">{title}</h2>
    </div>
  );
}
