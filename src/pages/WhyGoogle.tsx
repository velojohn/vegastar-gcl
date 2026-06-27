import { Link } from "react-router-dom";
import {
  Search, BarChart2, Cpu, Globe, ArrowRight, Clock,
  TrendingUp, Database, CheckCircle, BookOpen, Layers
} from "lucide-react";

const timeline = [
  { year: "1996", event: "Larry Page and Sergey Brin begin the BackRub research project at Stanford University." },
  { year: "1998", event: "Google is officially founded. The name comes from 'googol' — the number 1 followed by 100 zeros." },
  { year: "2000", event: "Google AdWords launches, creating the pay-per-click advertising model that funds everything." },
  { year: "2004", event: "Gmail launches. Google goes public on the stock market." },
  { year: "2005", event: "Google Maps and Google Analytics launch. Google acquires Android." },
  { year: "2006", event: "Google acquires YouTube for $1.65 billion. 'Google' becomes a verb in the dictionary." },
  { year: "2008", event: "Google Chrome browser launches, later becoming the world's most-used browser." },
  { year: "2012", event: "Google Search handles over 1 trillion unique queries per year for the first time." },
  { year: "2019", event: "BERT neural network model revolutionizes how Google understands natural language queries." },
  { year: "2023", event: "Google processes ~8.5 billion searches per day. AI Overviews integrated into search results." },
];

const reasons = [
  {
    icon: Cpu,
    title: "The PageRank Algorithm",
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-950/30",
    content: `Before Google, search engines ranked pages by simply counting how many times a keyword appeared on a page. This was easily gamed and produced poor results.

Google's founders invented PageRank — an algorithm that ranks pages based on how many other credible websites link to them. A link from a trusted website counts as a "vote of confidence." More votes from trustworthy sites = higher ranking.

This mirrored how academic research works: a paper cited by many respected journals is more credible than one cited by nobody. The insight was simple but revolutionary.`,
  },
  {
    icon: Search,
    title: "Understanding What You Actually Mean",
    color: "text-violet-600 dark:text-violet-400",
    bg: "bg-violet-50 dark:bg-violet-950/30",
    content: `Early search engines matched keywords literally. If you searched "best restaurants near me," they'd look for pages containing those exact words.

Google invested billions into understanding intent. When you type "how do I fix a leaky tap," Google understands you want step-by-step instructions — not a page that just contains those words.

Breakthroughs like BERT (2019) and MUM (2021) let Google understand context, nuance, follow-up questions, and even typos. No competitor has matched this level of natural language understanding at scale.`,
  },
  {
    icon: Database,
    title: "The World's Largest Index",
    color: "text-green-600 dark:text-green-500",
    bg: "bg-green-50 dark:bg-green-950/30",
    content: `Google's web crawlers — programs called "Googlebots" — constantly browse the internet, following links from page to page, reading and storing content. Google has indexed hundreds of billions of web pages.

This index is replicated across Google's global data centers. When you search, Google doesn't browse the web in real time — it searches its pre-built index, which is why results appear in under a second.

The sheer scale of Google's infrastructure (estimated 1 million+ servers worldwide) is impossible for most competitors to match.`,
  },
  {
    icon: Clock,
    title: "Speed — Results in Under 0.5 Seconds",
    color: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-50 dark:bg-amber-950/30",
    content: `Google engineers discovered that every 100ms of delay in search results reduces user satisfaction significantly. They became obsessed with speed.

Google's infrastructure uses custom hardware, fiber optic networks, and data centers on every continent to deliver results faster than any rival.

Users form habits around tools that feel instant. Google's speed advantage — built up over 25 years — is now deeply embedded in user behavior and expectations.`,
  },
  {
    icon: Globe,
    title: "A Global Ecosystem of Products",
    color: "text-teal-600 dark:text-teal-500",
    bg: "bg-teal-50 dark:bg-teal-950/30",
    content: `Google isn't just a search box. Gmail, Chrome, Android, Maps, YouTube, and Google Ads all feed data back into Google's ecosystem — and they all default to Google Search.

Over 3 billion Android phones use Google Search by default. Chrome has 65%+ of browser market share and defaults to Google. Gmail, Maps, and YouTube are top-5 global apps.

This product ecosystem creates a "network effect" — each product reinforces the others, making the whole system stickier and harder to leave.`,
  },
  {
    icon: TrendingUp,
    title: "Advertising Revenue Funds Everything",
    color: "text-rose-600 dark:text-rose-400",
    bg: "bg-rose-50 dark:bg-rose-950/30",
    content: `Google Search is free to use because advertisers pay to appear in results. When you search "buy running shoes," shoe companies bid in an auction to show their ad. Google earns money only when you click.

This model generates over $175 billion per year in revenue, funding continuous improvements to search quality, AI research, and infrastructure that free/smaller competitors cannot afford.

Bing, DuckDuckGo, and others cannot outspend Google because Google's own search dominance generates the funds to maintain that dominance — a powerful self-reinforcing cycle.`,
  },
];

const competitors = [
  { name: "Google", share: "91.6%", color: "bg-blue-500", width: "w-[91%]" },
  { name: "Bing", share: "3.9%", color: "bg-slate-400", width: "w-[4%]" },
  { name: "Yahoo", share: "1.2%", color: "bg-purple-400", width: "w-[1%]" },
  { name: "DuckDuckGo", share: "0.6%", color: "bg-orange-400", width: "w-[0.6%]" },
  { name: "Others", share: "2.7%", color: "bg-muted-foreground", width: "w-[2.7%]" },
];

export default function WhyGoogle() {
  return (
    <div>
      {/* Header */}
      <section className="py-14 px-4 border-b border-border bg-gradient-to-b from-blue-50/60 via-background to-background dark:from-blue-950/20">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground mb-4">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-foreground">Why Google is #1</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-5">
            <Search className="w-3.5 h-3.5" /> Search Engine
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-5 leading-tight">
            Why Google is the World's #1 Search Engine
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Google controls over 91% of all global search traffic. This article explains the real
            technical, business, and behavioral reasons behind that dominance — and why it has
            been nearly impossible to dislodge for over two decades.
          </p>
        </div>
      </section>

      {/* Market Share Visual */}
      <section className="py-12 px-4 border-b border-border bg-muted/20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-lg font-bold mb-5 flex items-center gap-2">
            <BarChart2 className="w-5 h-5 text-primary" /> Global Search Engine Market Share (2024)
          </h2>
          <div className="space-y-3">
            {competitors.map((c) => (
              <div key={c.name} className="flex items-center gap-3">
                <div className="w-28 text-sm text-muted-foreground font-medium shrink-0">{c.name}</div>
                <div className="flex-1 bg-muted rounded-full h-6 overflow-hidden">
                  <div className={`h-full rounded-full ${c.color} ${c.width} min-w-[4px] flex items-center justify-end pr-2`}>
                    <span className="text-white text-[11px] font-bold">{c.share}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4">Source: StatCounter Global Stats, 2024</p>
        </div>
      </section>

      {/* Main Reasons */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-10">
          <div>
            <h2 className="text-2xl font-bold mb-1">6 Reasons Google Stays on Top</h2>
            <p className="text-muted-foreground text-sm">Each factor alone would be powerful. Together, they create a near-unbreakable lead.</p>
          </div>

          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <article key={r.title} className="border border-border rounded-2xl overflow-hidden">
                <div className={`px-6 py-4 flex items-center gap-3 ${r.bg}`}>
                  <div className="w-8 h-8 rounded-lg bg-background flex items-center justify-center border border-border shrink-0">
                    <Icon className={`w-4 h-4 ${r.color}`} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground font-medium">Reason #{i + 1}</div>
                    <h3 className="font-bold text-foreground text-base">{r.title}</h3>
                  </div>
                </div>
                <div className="px-6 py-5">
                  {r.content.split("\n\n").map((para, pi) => (
                    <p key={pi} className="text-sm text-muted-foreground leading-relaxed mb-3 last:mb-0">{para}</p>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 bg-muted/30 border-t border-b border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary" /> Google's Rise: A Timeline
          </h2>
          <p className="text-muted-foreground text-sm mb-8">From a Stanford research project to the most visited website on Earth.</p>
          <div className="relative border-l-2 border-border pl-6 space-y-6">
            {timeline.map((item) => (
              <div key={item.year} className="relative">
                <div className="absolute -left-[29px] top-1 w-4 h-4 rounded-full bg-primary border-2 border-background" />
                <div className="text-xs font-bold text-primary mb-1">{item.year}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-7">
            <h2 className="text-xl font-bold mb-5 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" /> Key Takeaways
            </h2>
            <ul className="space-y-3">
              {[
                "Google's PageRank algorithm was genuinely better than competitors at launch — not just lucky.",
                "Revenue from advertising funds a continuous improvement cycle no free competitor can match.",
                "The Android + Chrome + Gmail ecosystem locks billions of users into Google's defaults.",
                "User habit is the most powerful force keeping Google dominant — people don't think about changing.",
                "AI investments (BERT, Gemini) ensure Google evolves faster than challengers can catch up.",
                "To truly compete, a rival would need to simultaneously beat Google on search quality, speed, ecosystem, and brand trust.",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link to="/cloudflare" className="flex-1 text-center py-3 px-5 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 text-sm">
              Next: What is Cloudflare? <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/how-web-works" className="flex-1 text-center py-3 px-5 border border-border text-foreground font-semibold rounded-lg hover:bg-accent transition-colors flex items-center justify-center gap-2 text-sm">
              <Layers className="w-4 h-4" /> How the Web Works
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
