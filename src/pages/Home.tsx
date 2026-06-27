import { Link } from "react-router-dom";
import { Search, Shield, ArrowRight, BookOpen, Globe, Cpu, Lock, Zap, ChevronRight } from "lucide-react";

const topics = [
  {
    icon: Search,
    title: "Why Google is #1",
    desc: "Understand the technology, algorithms, and strategies that made Google the world's most visited website and dominant search engine.",
    link: "/why-google",
    color: "bg-blue-50 dark:bg-blue-950/30",
    iconColor: "text-blue-600 dark:text-blue-400",
    badge: "Search Engines",
  },
  {
    icon: Shield,
    title: "What is Cloudflare?",
    desc: "Learn how Cloudflare protects millions of websites from cyber threats, speeds up content delivery, and keeps the internet safer.",
    link: "/cloudflare",
    color: "bg-orange-50 dark:bg-orange-950/30",
    iconColor: "text-orange-500 dark:text-orange-400",
    badge: "Security & CDN",
  },
  {
    icon: Globe,
    title: "How the Web Works",
    desc: "A plain-English explanation of DNS, HTTP, servers, browsers, and how a simple URL becomes the page you see on screen.",
    link: "/how-web-works",
    color: "bg-green-50 dark:bg-green-950/30",
    iconColor: "text-green-600 dark:text-green-500",
    badge: "Fundamentals",
  },
];

const quickFacts = [
  { label: "Google's market share", value: "91.6%", note: "of all search engine traffic worldwide" },
  { label: "Websites behind Cloudflare", value: "19%+", note: "of all sites on the internet" },
  { label: "Daily Google searches", value: "8.5 Billion", note: "queries processed every day" },
  { label: "Cloudflare DDoS blocked", value: "~2 Trillion", note: "malicious requests blocked daily" },
];

const learnItems = [
  { icon: Cpu, title: "PageRank Algorithm", desc: "How Google's core algorithm ranks web pages by relevance and authority.", link: "/why-google" },
  { icon: Lock, title: "DDoS Protection", desc: "How Cloudflare absorbs and blocks distributed denial-of-service attacks.", link: "/cloudflare" },
  { icon: Zap, title: "Content Delivery Networks", desc: "Why CDNs make websites load faster from anywhere in the world.", link: "/how-web-works" },
  { icon: Globe, title: "DNS Resolution", desc: "How typing a website address finds the right server in milliseconds.", link: "/how-web-works" },
  { icon: Shield, title: "SSL / TLS Encryption", desc: "What the padlock icon in your browser actually means and does.", link: "/cloudflare" },
  { icon: Search, title: "Web Crawlers & Indexing", desc: "How search engines discover, read, and store billions of web pages.", link: "/why-google" },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 px-4 border-b border-border bg-gradient-to-b from-muted/40 to-background">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6 border border-primary/20">
            <BookOpen className="w-3.5 h-3.5" />
            Free Educational Resource
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-5 leading-tight">
            Understand the Technologies <br className="hidden sm:block" />
            <span className="text-primary">Running the Internet</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            This site explains — in plain language — why Google became the world's #1 search engine
            and how Cloudflare protects websites from cyber threats. No fluff, just clear information.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/why-google" className="px-7 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
              Why Google Leads <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/cloudflare" className="px-7 py-3 border border-border text-foreground font-semibold rounded-lg hover:bg-accent transition-colors flex items-center justify-center gap-2">
              What is Cloudflare? <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-10 px-4 border-b border-border bg-muted/20">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {quickFacts.map((fact) => (
            <div key={fact.label} className="text-center">
              <div className="text-2xl md:text-3xl font-extrabold text-primary mb-1">{fact.value}</div>
              <div className="text-xs font-semibold text-foreground mb-0.5">{fact.label}</div>
              <div className="text-[11px] text-muted-foreground">{fact.note}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Topics */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-2">Main Topics</h2>
          <p className="text-muted-foreground mb-8">Pick a topic to start learning.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {topics.map((t) => {
              const Icon = t.icon;
              return (
                <Link
                  key={t.title}
                  to={t.link}
                  className={`rounded-xl border border-border p-6 hover:shadow-md transition-all hover:-translate-y-0.5 ${t.color} flex flex-col`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <Icon className={`w-7 h-7 ${t.iconColor}`} />
                    <span className="text-xs font-semibold text-muted-foreground bg-background/60 px-2 py-0.5 rounded-full border border-border">
                      {t.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{t.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{t.desc}</p>
                  <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-primary">
                    Read article <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Concepts */}
      <section className="py-16 px-4 bg-muted/30 border-t border-b border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-2">Key Concepts Explained</h2>
          <p className="text-muted-foreground mb-8">Bite-sized explanations of the terms and technologies you'll encounter.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {learnItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.title}
                  to={item.link}
                  className="bg-card border border-border rounded-xl p-5 hover:shadow-sm hover:border-primary/30 transition-all flex gap-4 items-start"
                >
                  <Icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm text-foreground mb-1">{item.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* About this site */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto bg-card border border-border rounded-2xl p-8 md:p-10 text-center">
          <BookOpen className="w-10 h-10 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-3">About This Site</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong className="text-foreground">WebInsight</strong> is an independent educational resource. We are
            not affiliated with Google, Cloudflare, or any other company mentioned. Our goal is simply to
            explain — clearly and accurately — how these important technologies work and why they matter.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Whether you're a student, a business owner, or just curious about the internet — this site
            is written for you. No technical background required.
          </p>
        </div>
      </section>
    </div>
  );
}
