import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Star, ShoppingBag, Heart, ArrowLeft, BookOpen, Truck, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingAssistant } from "@/components/FloatingAssistant";
import { BookCard } from "@/components/BookCard";
import { BookCover } from "@/components/BookCover";
import { BOOKS } from "@/lib/data";

export const Route = createFileRoute("/book/$id")({
  loader: ({ params }) => {
    const book = BOOKS.find(b => b.id === params.id);
    if (!book) throw notFound();
    return { book };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.book.title} — StoryShelf` },
          { name: "description", content: loaderData.book.blurb },
          { property: "og:title", content: `${loaderData.book.title} by ${loaderData.book.author}` },
          { property: "og:description", content: loaderData.book.blurb },
        ]
      : [{ title: "Book — StoryShelf" }],
  }),
  notFoundComponent: () => (
    <div className="bg-hero min-h-screen">
      <Navbar />
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="font-display text-5xl">We couldn't find that book.</h1>
        <p className="mt-3 text-muted-foreground">It may have wandered off the shelf.</p>
        <Link to="/shop" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground">
          Back to the shelf
        </Link>
      </div>
      <Footer />
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="bg-hero min-h-screen">
      <Navbar />
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="font-display text-4xl">Something went sideways.</h1>
        <button onClick={() => reset()} className="mt-6 rounded-full bg-primary px-5 py-3 text-sm text-primary-foreground">Try again</button>
      </div>
      <Footer />
    </div>
  ),
  component: BookDetail,
});

function BookDetail() {
  const { book } = Route.useLoaderData();
  const related = BOOKS.filter(b => b.id !== book.id && b.moods.some(m => book.moods.includes(m))).slice(0, 4);

  return (
    <div className="bg-hero min-h-screen">
      <Navbar />

      <div className="mx-auto max-w-7xl px-6 pt-8">
        <Link to="/shop" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-3 w-3" /> Back to shop
        </Link>
      </div>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 pt-8 pb-20 lg:grid-cols-[420px_1fr]">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="mx-auto max-w-xs lg:max-w-none">
            <BookCover book={book} className="shadow-glow ring-1 ring-black/10" />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
          <div className="flex flex-wrap gap-1.5">
            {book.moods.map((m: typeof book.moods[number]) => (
              <Link key={m} to="/shop" search={{ mood: m }} className="rounded-full border border-border bg-background/60 px-2.5 py-1 text-[10px] uppercase tracking-wider text-muted-foreground hover:border-primary/40">
                {m}
              </Link>
            ))}
          </div>

          <h1 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">{book.title}</h1>
          <p className="mt-2 text-muted-foreground">by <span className="text-foreground">{book.author}</span></p>

          <div className="mt-4 flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < Math.round(book.rating) ? "fill-primary text-primary" : "text-muted-foreground/40"}`} />
              ))}
              <span className="ml-1 font-medium">{book.rating}</span>
            </div>
            <span className="text-muted-foreground">·</span>
            <span className="text-muted-foreground">{book.reviews.toLocaleString()} reviews</span>
            <span className="text-muted-foreground">·</span>
            <span className="text-muted-foreground inline-flex items-center gap-1"><BookOpen className="h-3.5 w-3.5" /> {book.pages} pages</span>
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/80">{book.blurb}</p>

          <div className="mt-8 flex items-end gap-4">
            <span className="font-display text-4xl">₹{book.price}</span>
            <span className="pb-1 text-sm text-muted-foreground line-through">₹{Math.round(book.price * 1.4)}</span>
            <span className="pb-1 text-xs font-medium text-[var(--sage)]">Save {Math.round(((book.price * 1.4 - book.price) / (book.price * 1.4)) * 100)}%</span>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]">
              <ShoppingBag className="h-4 w-4" /> Add to cart
            </button>
            <button className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-5 py-3 text-sm font-medium backdrop-blur hover:bg-background">
              <Heart className="h-4 w-4" /> Save for later
            </button>
          </div>

          <div className="mt-10 grid gap-3 text-xs text-muted-foreground sm:grid-cols-3">
            <div className="glass rounded-xl p-3"><Truck className="mb-2 h-4 w-4 text-primary" />Free shipping over ₹499</div>
            <div className="glass rounded-xl p-3"><ShieldCheck className="mb-2 h-4 w-4 text-primary" />7-day easy returns</div>
            <div className="glass rounded-xl p-3"><BookOpen className="mb-2 h-4 w-4 text-primary" />Paperback · English</div>
          </div>
        </motion.div>
      </section>

      {related.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 pb-20">
          <h2 className="font-display text-3xl">If you love this, try…</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((b, i) => (<BookCard key={b.id} book={b} index={i} />))}
          </div>
        </section>
      )}

      <Footer />
      <FloatingAssistant />
    </div>
  );
}
