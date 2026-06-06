export type Mood =
  | "Cozy" | "Heartbreaking" | "Adventurous" | "Mysterious"
  | "Romantic" | "Inspiring" | "Funny" | "Dark Academia";

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

export const COLLECTIONS = [
  { title: "Weekend Escape",        subtitle: "Finish by Sunday night",   icon: "🌙" },
  { title: "Cry-Your-Eyes-Out Reads", subtitle: "Bring tissues",          icon: "💧" },
  { title: "Books Under ₹499",      subtitle: "Big stories, small spend", icon: "🪙" },
  { title: "Hidden Gems",           subtitle: "You haven't heard of these yet", icon: "💎" },
  { title: "BookTok Favorites",     subtitle: "What everyone's whispering about", icon: "📱" },
];

export type Book = {
  id: string;
  title: string;
  author: string;
  price: number;
  rating: number;
  reviews: number;
  moods: Mood[];
  pages: number;
  cover: string; // gradient seed
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
  { id: "1", title: "The Salt of Quiet Mornings", author: "Imara Vance", price: 449, rating: 4.7, reviews: 1284, moods: ["Cozy","Inspiring"], pages: 312, cover: grads[0], blurb: "A slow, golden novel about coming home to yourself." },
  { id: "2", title: "We Were Made of Static", author: "Theo Halloran", price: 549, rating: 4.6, reviews: 892, moods: ["Heartbreaking","Romantic"], pages: 384, cover: grads[1], blurb: "Two radios, one summer, and a love that wouldn't quite tune in." },
  { id: "3", title: "The Cartographer's Wife", author: "Nia Okafor", price: 599, rating: 4.8, reviews: 2110, moods: ["Adventurous","Mysterious"], pages: 456, cover: grads[2], blurb: "She mapped the world. He went looking for the edges of her." },
  { id: "4", title: "Velvet Hours", author: "Soren Kade", price: 399, rating: 4.5, reviews: 643, moods: ["Dark Academia","Mysterious"], pages: 298, cover: grads[3], blurb: "Candlelight, philosophy, and a body in the library." },
  { id: "5", title: "Honey on Burnt Toast", author: "Priya Sundar", price: 349, rating: 4.4, reviews: 1502, moods: ["Funny","Cozy"], pages: 256, cover: grads[4], blurb: "A messy, loud, deeply lovable family memoir." },
  { id: "6", title: "Constellations for the Lost", author: "Adwita Ray", price: 499, rating: 4.9, reviews: 3401, moods: ["Inspiring","Romantic"], pages: 340, cover: grads[5], blurb: "A letter to anyone learning to navigate by their own light." },
  { id: "7", title: "The Hour We Were Wolves", author: "Calla Briar", price: 629, rating: 4.6, reviews: 778, moods: ["Adventurous","Dark Academia"], pages: 412, cover: grads[6], blurb: "A boarding-school myth, retold in teeth and snow." },
  { id: "8", title: "Soft Static", author: "June Mitra", price: 299, rating: 4.3, reviews: 421, moods: ["Cozy","Heartbreaking"], pages: 220, cover: grads[7], blurb: "Tiny essays about grief, ramen, and Sunday afternoons." },
  { id: "9", title: "Saltwater Saints", author: "Eli Marchetti", price: 579, rating: 4.7, reviews: 1190, moods: ["Romantic","Inspiring"], pages: 368, cover: grads[0], blurb: "Two strangers, one off-season Italian coast." },
  { id: "10", title: "The Quiet Burglar", author: "Hana Yusef", price: 459, rating: 4.5, reviews: 612, moods: ["Mysterious","Funny"], pages: 304, cover: grads[1], blurb: "She only stole things people had stopped loving." },
  { id: "11", title: "Ink, Iron, Idea", author: "Roman Vesper", price: 699, rating: 4.8, reviews: 980, moods: ["Dark Academia","Inspiring"], pages: 488, cover: grads[2], blurb: "On building a life that thinks back at you." },
  { id: "12", title: "Marigold Weather", author: "Anaya Kapoor", price: 379, rating: 4.6, reviews: 1742, moods: ["Cozy","Romantic"], pages: 280, cover: grads[3], blurb: "A monsoon romance set in a fading Bombay bookstore." },
];

export const REVIEWS = [
  { name: "Sara K.",      city: "Mumbai",    text: "I told StoryShelf I was feeling 'soft and a little lost' and it handed me the exact book I didn't know I needed. Spooky in the best way.", rating: 5 },
  { name: "Devansh M.",   city: "Bengaluru", text: "Finally a bookstore that doesn't make me scroll through 40 thrillers to find one slow, beautiful novel. The mood filters are genius.", rating: 5 },
  { name: "Anika R.",     city: "Delhi",     text: "Packaging felt like a love letter. The 'Cry-Your-Eyes-Out' shelf wrecked me. 10/10 will recover and order again.", rating: 5 },
  { name: "Joshua P.",    city: "Goa",       text: "The AI mood finder is the only recommendation engine that's ever actually understood me. Cancelled two other subscriptions.", rating: 4 },
];
