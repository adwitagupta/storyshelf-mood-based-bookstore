import type { Book } from "@/lib/data";

export function BookCover({ book, className = "" }: { book: Book; className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-md shadow-soft ${className}`}
      style={{ background: book.cover, aspectRatio: "2 / 3" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_55%)]" />
      <div className="absolute inset-y-0 left-1.5 w-[3px] bg-black/25" />
      <div className="absolute inset-0 flex flex-col justify-between p-4 text-white">
        <span className="font-display text-[10px] uppercase tracking-[0.25em] opacity-80">StoryShelf</span>
        <div>
          <h4 className="font-display text-lg leading-tight drop-shadow">{book.title}</h4>
          <p className="mt-1 text-[11px] uppercase tracking-widest opacity-80">{book.author}</p>
        </div>
      </div>
    </div>
  );
}
