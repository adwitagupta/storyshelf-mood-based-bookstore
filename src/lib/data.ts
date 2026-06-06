export type Mood =
  | "Cozy" | "Heartbreaking" | "Adventurous" | "Mysterious"
  | "Romantic" | "Inspiring" | "Funny" | "Dark Academia";

export type CollectionSlug =
  | "weekend-escape" | "cry-your-eyes-out" | "under-499" | "hidden-gems" | "booktok";

export const MOODS: { name: Mood; emoji: string; blurb: string; tint: string }[] = [
  { name: "Cozy",          emoji: "☕", blurb: "Warm blankets & soft pages",    tint: "var(--rosewood)" },
  { name: "Heartbreaking", emoji: "🥀", blurb: "Stories that stay with you",    tint: "var(--lagoon)" },
  { name: "Adventurous",   emoji: "🗺️", blurb: "Wide horizons, brave hearts",   tint: "var(--sage)" },
  { name: "Mysterious",    emoji: "🔍", blurb: "Shadows, secrets, slow burns",  tint: "var(--misty)" },
  { name: "Romantic",      emoji: "💌", blurb: "Slow glances and longing",      tint: "var(--rosewood)" },
  { name: "Inspiring",     emoji: "✨", blurb: "Sparks of becoming",            tint: "var(--sage)" },
  { name: "Funny",         emoji: "😂", blurb: "Out-loud-on-the-train laughs",  tint: "var(--rosewood)" },
  { name: "Dark Academia", emoji: "🕯️", blurb: "Candlelit halls, dangerous ideas", tint: "var(--lagoon)" },
];

export const COLLECTIONS: { slug: CollectionSlug; title: string; subtitle: string; icon: string }[] = [
  { slug: "weekend-escape",    title: "Weekend Escape",          subtitle: "Finish by Sunday night",            icon: "🌙" },
  { slug: "cry-your-eyes-out", title: "Cry-Your-Eyes-Out Reads", subtitle: "Bring tissues",                     icon: "💧" },
  { slug: "under-499",         title: "Books Under ₹499",        subtitle: "Big stories, small spend",          icon: "🪙" },
  { slug: "hidden-gems",       title: "Hidden Gems",             subtitle: "You haven't heard of these yet",    icon: "💎" },
  { slug: "booktok",           title: "BookTok Favorites",       subtitle: "What everyone's whispering about",  icon: "📱" },
];

export type Book = {
  id: string;
  title: string;
  author: string;
  price: number;
  rating: number;
  reviews: number;
  moods: Mood[];
  collections: CollectionSlug[];
  pages: number;
  cover: string;
  blurb: string;
};

const grads = [
  "linear-gradient(135deg,#B46A72,#2D3A47)",
  "linear-gradient(135deg,#A8B58A,#2D3A47)",
  "linear-gradient(135deg,#A9B7C6,#B46A72)",
  "linear-gradient(135deg,#2D3A47,#A8B58A)",
  "linear-gradient(135deg,#B46A72,#A9B7C6)",
  "linear-gradient(135deg,#A8B58A,#B46A72)",
  "linear-gradient(135deg,#2D3A47,#B46A72)",
  "linear-gradient(135deg,#A9B7C6,#2D3A47)",
];

export const BOOKS: Book[] = [
  { id: "a-man-called-ove", title: "A Man Called Ove", author: "Fredrik Backman", price: 399, rating: 4.6, reviews: 18420, moods: ["Cozy","Heartbreaking"], collections: ["weekend-escape","under-499"], pages: 337, cover: grads[0], blurb: "A grumpy yet lovable man finds his solitary world turned upside down when a boisterous young family moves in next door." },
  { id: "the-house-in-the-cerulean-sea", title: "The House in the Cerulean Sea", author: "TJ Klune", price: 499, rating: 4.7, reviews: 24130, moods: ["Cozy","Inspiring"], collections: ["weekend-escape","booktok"], pages: 396, cover: grads[1], blurb: "A magical island, six unusual children, and a caseworker who didn't know he was lonely until he wasn't." },
  { id: "a-little-life", title: "A Little Life", author: "Hanya Yanagihara", price: 699, rating: 4.5, reviews: 31200, moods: ["Heartbreaking"], collections: ["cry-your-eyes-out"], pages: 720, cover: grads[2], blurb: "Four friends in New York and the decades-long story of one of them you will never forget — or fully recover from." },
  { id: "the-kite-runner", title: "The Kite Runner", author: "Khaled Hosseini", price: 349, rating: 4.6, reviews: 28900, moods: ["Heartbreaking","Inspiring"], collections: ["cry-your-eyes-out","under-499"], pages: 372, cover: grads[3], blurb: "A haunting tale of friendship, betrayal, and the long road home in a Kabul that no longer exists." },
  { id: "the-name-of-the-wind", title: "The Name of the Wind", author: "Patrick Rothfuss", price: 599, rating: 4.7, reviews: 35400, moods: ["Adventurous","Dark Academia"], collections: ["booktok"], pages: 662, cover: grads[4], blurb: "The story of Kvothe — magician, musician, thief, and legend — told in his own voice." },
  { id: "project-hail-mary", title: "Project Hail Mary", author: "Andy Weir", price: 549, rating: 4.8, reviews: 42100, moods: ["Adventurous","Funny"], collections: ["weekend-escape","booktok"], pages: 476, cover: grads[5], blurb: "One man wakes up alone on a spaceship with no memory of how he got there — and the fate of Earth on his shoulders." },
  { id: "the-silent-patient", title: "The Silent Patient", author: "Alex Michaelides", price: 379, rating: 4.5, reviews: 38700, moods: ["Mysterious"], collections: ["under-499","booktok"], pages: 336, cover: grads[6], blurb: "A famous painter shoots her husband and never speaks again. A psychotherapist becomes obsessed with finding out why." },
  { id: "gone-girl", title: "Gone Girl", author: "Gillian Flynn", price: 399, rating: 4.4, reviews: 49100, moods: ["Mysterious","Dark Academia"], collections: ["under-499"], pages: 432, cover: grads[7], blurb: "On their fifth wedding anniversary, Amy disappears. Everyone has a theory. Nick has the worst one." },
  { id: "it-ends-with-us", title: "It Ends with Us", author: "Colleen Hoover", price: 349, rating: 4.5, reviews: 61000, moods: ["Romantic","Heartbreaking"], collections: ["booktok","under-499","cry-your-eyes-out"], pages: 384, cover: grads[0], blurb: "Lily thought she'd escaped the pattern. Then her past walks back through the door of her flower shop." },
  { id: "beach-read", title: "Beach Read", author: "Emily Henry", price: 379, rating: 4.4, reviews: 22300, moods: ["Romantic","Funny"], collections: ["weekend-escape","under-499","booktok"], pages: 361, cover: grads[1], blurb: "Two rival writers, one summer in a beach house, and a bet to swap genres — what could possibly go right?" },
  { id: "atomic-habits", title: "Atomic Habits", author: "James Clear", price: 499, rating: 4.8, reviews: 89200, moods: ["Inspiring"], collections: ["booktok"], pages: 320, cover: grads[2], blurb: "Tiny changes, remarkable results. The proven framework for building good habits and breaking bad ones." },
  { id: "tuesdays-with-morrie", title: "Tuesdays with Morrie", author: "Mitch Albom", price: 299, rating: 4.7, reviews: 33800, moods: ["Inspiring","Heartbreaking"], collections: ["under-499","weekend-escape","cry-your-eyes-out"], pages: 192, cover: grads[3], blurb: "An old man, a young man, and life's greatest lesson — taught over fourteen Tuesdays." },
  { id: "bossypants", title: "Bossypants", author: "Tina Fey", price: 349, rating: 4.5, reviews: 18900, moods: ["Funny"], collections: ["under-499","weekend-escape"], pages: 277, cover: grads[4], blurb: "From SNL to 30 Rock to motherhood — Tina Fey on awkwardness, ambition, and the joke of it all." },
  { id: "good-omens", title: "Good Omens", author: "Terry Pratchett & Neil Gaiman", price: 449, rating: 4.7, reviews: 41200, moods: ["Funny","Adventurous"], collections: ["weekend-escape"], pages: 412, cover: grads[5], blurb: "The Apocalypse is coming. An angel and a demon have grown fond of Earth and would quite like it to stay." },
  { id: "if-we-were-villains", title: "If We Were Villains", author: "M.L. Rio", price: 459, rating: 4.6, reviews: 27600, moods: ["Dark Academia","Mysterious"], collections: ["hidden-gems","booktok"], pages: 354, cover: grads[6], blurb: "Seven Shakespearean acting students. One body. A truth the survivor has spent a decade refusing to tell." },
  { id: "the-secret-history", title: "The Secret History", author: "Donna Tartt", price: 599, rating: 4.6, reviews: 47800, moods: ["Dark Academia","Mysterious"], collections: ["booktok"], pages: 559, cover: grads[7], blurb: "A small group of clever, eccentric classics students at a New England college — and the murder they don't quite get away with." },
];

export const REVIEWS = [
  { name: "Sara K.",      city: "Mumbai",    text: "I told StoryShelf I was feeling 'soft and a little lost' and it handed me the exact book I didn't know I needed. Spooky in the best way.", rating: 5 },
  { name: "Devansh M.",   city: "Bengaluru", text: "Finally a bookstore that doesn't make me scroll through 40 thrillers to find one slow, beautiful novel. The mood filters are genius.", rating: 5 },
  { name: "Anika R.",     city: "Delhi",     text: "Packaging felt like a love letter. The 'Cry-Your-Eyes-Out' shelf wrecked me. 10/10 will recover and order again.", rating: 5 },
  { name: "Joshua P.",    city: "Goa",       text: "The AI mood finder is the only recommendation engine that's ever actually understood me. Cancelled two other subscriptions.", rating: 4 },
];
