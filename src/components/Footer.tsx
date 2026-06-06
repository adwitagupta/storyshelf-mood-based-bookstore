import { Link } from "@tanstack/react-router";
import { Instagram, Twitter, Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer id="about" className="mt-32 border-t border-border/60 bg-[color-mix(in_oklab,var(--lagoon)_96%,black)] text-[color-mix(in_oklab,var(--cream)_95%,white)]">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-[var(--gradient-warm)]">
                <span className="font-display text-lg leading-none text-primary-foreground">S</span>
              </div>
              <span className="font-display text-2xl">StoryShelf</span>
            </div>
            <h3 className="mt-8 font-display text-xl text-cream">About StoryShelf</h3>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-white/70">
              <p>StoryShelf was created by <span className="text-cream">Adwita Gupta</span> with a simple belief: books are more than stories—they're experiences, emotions, and companions for every stage of life.</p>
              <p>As a passionate reader, Adwita often found that choosing a book based on genre wasn't enough. Sometimes, readers aren't looking for fantasy, romance, or mystery—they're looking for comfort, adventure, inspiration, or a story that truly understands how they feel.</p>
              <p>That's why StoryShelf was built differently. Instead of browsing endless categories, readers can discover books based on moods, emotions, and the experience they're seeking.</p>
              <p>Our mission is to connect every reader with a story that resonates with them. Through curated recommendations, mood-based discovery, and a seamless shopping experience, StoryShelf transforms book buying into a more personal journey.</p>
              <p className="italic text-cream/90">Because sometimes, you're not looking for a book. You're looking for a feeling.</p>
            </div>
          </div>

          <FooterCol title="Discover" links={[
            { label: "Shop all", to: "/shop" },
            { label: "Mood Finder", to: "/moodfinder" },
            { label: "Collections", href: "/#collections" },
            { label: "Trending", href: "/#trending" },
          ]}/>
          <FooterCol title="Company" links={[
            { label: "About", href: "#about" },
            { label: "Careers", href: "#" },
            { label: "Press", href: "#" },
            { label: "Contact", href: "#" },
          ]}/>
          <div>
            <h4 className="font-display text-lg">Stay in the story</h4>
            <p className="mt-3 text-sm text-white/60">A monthly letter. Mood-based picks, no spam.</p>
            <form className="mt-5 flex overflow-hidden rounded-full border border-white/15 bg-white/5">
              <input type="email" placeholder="you@bookmail.com" className="flex-1 bg-transparent px-4 py-2.5 text-sm placeholder:text-white/40 focus:outline-none"/>
              <button className="bg-primary px-4 text-sm font-medium text-primary-foreground hover:opacity-90">Join</button>
            </form>
            <div className="mt-6 flex gap-3">
              <a href="#" className="grid h-9 w-9 place-items-center rounded-full border border-white/15 hover:bg-white/10"><Instagram className="h-4 w-4"/></a>
              <a href="#" className="grid h-9 w-9 place-items-center rounded-full border border-white/15 hover:bg-white/10"><Twitter className="h-4 w-4"/></a>
              <a href="#" className="grid h-9 w-9 place-items-center rounded-full border border-white/15 hover:bg-white/10"><Sparkles className="h-4 w-4"/></a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} StoryShelf. Made with care by Adwita Gupta.</p>
          <p>Find a story that matches your mood.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; to?: string; href?: string }[] }) {
  return (
    <div>
      <h4 className="font-display text-lg">{title}</h4>
      <ul className="mt-4 space-y-2.5 text-sm text-white/65">
        {links.map(l => (
          <li key={l.label}>
            {l.to ? <Link to={l.to} className="hover:text-cream">{l.label}</Link>
                  : <a href={l.href} className="hover:text-cream">{l.label}</a>}
          </li>
        ))}
      </ul>
    </div>
  );
}
