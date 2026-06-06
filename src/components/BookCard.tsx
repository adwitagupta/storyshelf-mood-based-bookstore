import { motion } from "framer-motion";
import { Star, ShoppingBag, Eye } from "lucide-react";
import type { Book } from "@/lib/data";
import { BookCover } from "./BookCover";

export function BookCard({ book, index = 0 }: { book: Book; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.05 }}
      className="group glass rounded-2xl p-4 transition-all hover:shadow-glow"
    >
      <div className="relative">
        <BookCover book={book} className="transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-[-1deg]" />
        <button className="absolute right-2 top-2 grid h-9 w-9 place-items-center rounded-full bg-background/80 opacity-0 backdrop-blur transition-all group-hover:opacity-100" aria-label="Quick view">
          <Eye className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-4 flex items-start justify-between gap-2">
        <div className="min-w-0">
          <h3 className="truncate font-display text-base">{book.title}</h3>
          <p className="text-xs text-muted-foreground">by {book.author}</p>
        </div>
        <div className="flex shrink-0 items-center gap-1 rounded-full bg-accent/30 px-2 py-0.5 text-xs">
          <Star className="h-3 w-3 fill-current text-primary" />
          {book.rating}
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-1">
        {book.moods.slice(0, 2).map(m => (
          <span key={m} className="rounded-full border border-border bg-background/60 px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">{m}</span>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="font-display text-lg">₹{book.price}</span>
        <button className="flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-transform hover:scale-105">
          <ShoppingBag className="h-3.5 w-3.5" /> Add
        </button>
      </div>
    </motion.article>
  );
}
