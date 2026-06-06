import { Link } from "@tanstack/react-router";
import { Search, ShoppingBag, Heart, Sparkles, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const linkCls = "text-sm text-foreground/80 hover:text-foreground transition-colors";

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4">
        <nav className="glass-strong flex items-center justify-between rounded-2xl px-4 py-3 shadow-soft">
          <Link to="/" className="flex items-center gap-2">
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-[var(--gradient-warm)] text-primary-foreground">
              <span className="font-display text-lg leading-none">S</span>
            </div>
            <span className="font-display text-xl tracking-tight">StoryShelf</span>
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            <Link to="/" className={linkCls}>Home</Link>
            <Link to="/shop" className={linkCls}>Shop</Link>
            <Link to="/moodfinder" className={linkCls + " flex items-center gap-1"}>
              <Sparkles className="h-3.5 w-3.5 text-primary" /> Mood Finder
            </Link>
            <a href="/#collections" className={linkCls}>Collections</a>
            <a href="/#about" className={linkCls}>About</a>
          </div>

          <div className="flex items-center gap-1">
            <button className="grid h-9 w-9 place-items-center rounded-full hover:bg-foreground/5"><Search className="h-4 w-4" /></button>
            <button className="grid h-9 w-9 place-items-center rounded-full hover:bg-foreground/5"><Heart className="h-4 w-4" /></button>
            <button className="grid h-9 w-9 place-items-center rounded-full hover:bg-foreground/5"><ShoppingBag className="h-4 w-4" /></button>
            <button onClick={() => setOpen(v => !v)} className="grid h-9 w-9 place-items-center rounded-full hover:bg-foreground/5 md:hidden">
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="glass-strong mt-2 flex flex-col gap-3 rounded-2xl p-4 md:hidden">
            <Link to="/" onClick={() => setOpen(false)} className={linkCls}>Home</Link>
            <Link to="/shop" onClick={() => setOpen(false)} className={linkCls}>Shop</Link>
            <Link to="/moodfinder" onClick={() => setOpen(false)} className={linkCls}>Mood Finder</Link>
            <a href="/#collections" onClick={() => setOpen(false)} className={linkCls}>Collections</a>
            <a href="/#about" onClick={() => setOpen(false)} className={linkCls}>About</a>
          </div>
        )}
      </div>
    </header>
  );
}
