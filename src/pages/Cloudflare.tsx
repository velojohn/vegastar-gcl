import { Link } from "react-router-dom";
import {
  Shield, Globe, Lock, Server, AlertTriangle,
  CheckCircle, ArrowRight, Eye, Wifi, Database, Layers,
  BookOpen, RefreshCw
} from "lucide-react";

const whatIs = `Cloudflare is an American technology company founded in 2009. It operates one of the largest networks in the world — a network that sits between your website visitors and your web server.

When someone visits a website protected by Cloudflare, their request goes through Cloudflare's servers first. Cloudflare inspects the traffic, blocks anything malicious, and then passes legitimate requests to the real website.

As of 2024, Cloudflare handles traffic for over 20% of all websites on the internet — including major companies like Discord, Shopify, and Canva.`;

const services = [
  {
    icon: Shield,
    title: "DDoS Protection",
    color: "text-red-500",
    bg: "bg-red-50 dark:bg-red-950/30",
    summary: "Blocks large-scale attacks that try to overwhelm a server with traffic.",
    details: `A DDoS (Distributed Denial of Service) attack floods a website with millions of fake requests per second until the server crashes and real users cannot access it.

Cloudflare's global network has capacity to absorb over 100 Tbps (terabits per second) of attack traffic — more than most attackers can generate. It detects attack patterns and silently drops the malicious traffic before it ever reaches your server.

Without this protection, a small business website could be taken offline by a $5/hour rented botnet.`,
  },
  {
    icon: Globe,
    title: "Content Delivery Network (CDN)",
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-950/30",
    summary: "Copies your website's files to 300+ locations worldwide so users load pages from nearby servers.",
    details: `If your website's server is in New York and a visitor is in Tokyo, every file (images, scripts, text) has to travel across the world. That takes time.

Cloudflare's CDN caches your website's static files at over 300 data centers ("Points of Presence") around the globe. The Tokyo visitor gets files from a Cloudflare server in Tokyo instead. This can reduce load times by 50% or more.

This is especially important for image-heavy websites and global audiences.`,
  },
  {
    icon: Lock,
    title: "SSL / TLS Certificates (HTTPS)",
    color: "text-green-600 dark:text-green-500",
    bg: "bg-green-50 dark:bg-green-950/30",
    summary: "Encrypts the connection between users and your website — the padlock in the browser.",
    details: `When you see a padlock icon and "https://" in your browser, it means the connection is encrypted using SSL/TLS. This prevents anyone (your ISP, a hacker on public Wi-Fi) from reading the data sent between you and the website.

Cloudflare provides free SSL certificates to any website using its service. Before Cloudflare, SSL certificates cost hundreds of dollars per year. Now even small personal websites can be encrypted for free.

Google also uses HTTPS as a ranking signal — websites without it rank lower in search results.`,
  },
  {
    icon: Eye,
    title: "Web Application Firewall (WAF)",
    color: "text-violet-600 dark:text-violet-400",
    bg: "bg-violet-50 dark:bg-violet-950/30",
    summary: "Filters out common hacker attack patterns like SQL injection and cross-site scripting.",
    details: `Hackers constantly probe websites for known vulnerabilities. Common attacks include:

• SQL Injection: Inserting malicious database commands into a form field.
• Cross-Site Scripting (XSS): Injecting harmful JavaScript into a website.
• Path Traversal: Accessing server files outside the intended directory.

Cloudflare's WAF recognizes these attack patterns and blocks them automatically, protecting websites even if the website's own code has vulnerabilities. It is updated in real time as new attack methods are discovered.`,
  },
  {
    icon: Wifi,
    title: "DNS Resolution (1.1.1.1)",
    color: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-50 dark:bg-amber-950/30",
    summary: "Cloudflare runs the world's fastest public DNS resolver, making internet browsing faster and more private.",
    details: `DNS is like the phone book of the internet — it converts "www.example.com" into the IP address your device needs to connect to. By default, your ISP handles this, but they can be slow and may log every site you visit.

Cloudflare's 1.1.1.1 DNS resolver is the fastest in the world (benchmarked independently by DNSPerf) and is privacy-respecting — Cloudflare does not sell your DNS query data.

It's free to use, takes 30 seconds to set up, and can noticeably speed up your browsing.`,
  },
  {
    icon: Server,
    title: "Bot Management",
    color: "text-teal-600 dark:text-teal-500",
    bg: "bg-teal-50 dark:bg-teal-950/30",
    summary: "Distinguishes real human visitors from automated bots — blocking bad bots while allowing good ones.",
    details: `Not all bots are bad. Google's web crawlers are bots you want visiting your site. But malicious bots scrape your content, steal prices, attempt logins with stolen passwords, and abuse forms.

Cloudflare uses machine learning and behavior analysis to distinguish human visitors from bots. It can silently block malicious bots, slow down scrapers, or present CAPTCHA challenges to suspicious visitors.

This protects your website's performance, data, and integrity without affecting real users.`,
  },
];

const howItWorks = [
  { step: "1", title: "Visitor types your URL", desc: "A person enters your website address in their browser." },
  { step: "2", title: "DNS points to Cloudflare", desc: "The domain's DNS records point to Cloudflare's servers, not directly to your host." },
  { step: "3", title: "Cloudflare inspects traffic", desc: "Cloudflare analyzes the request: is it human? Is it an attack? Is it a known bot?" },
  { step: "4", title: "Threat is blocked or passed", desc: "Malicious traffic is dropped. Legitimate requests are forwarded to your actual server." },
  { step: "5", title: "Response is cached & delivered", desc: "If content is cached, Cloudflare serves it from the nearest data center. If not, it fetches from your server." },
  { step: "6", title: "Visitor sees your website", desc: "The visitor receives the page — faster, safer, and encrypted with HTTPS." },
];

const plans = [
  { name: "Free", price: "$0/mo", color: "border-border", features: ["DDoS mitigation", "CDN (global)", "Free SSL", "Basic WAF", "1.1.1.1 DNS", "5 firewall rules"] },
  { name: "Pro", price: "$20/mo", color: "border-blue-400 dark:border-blue-600", features: ["All Free features", "Advanced WAF", "Image optimization", "Mobile redirects", "20 firewall rules", "Web analytics"], popular: true },
  { name: "Business", price: "$200/mo", color: "border-border", features: ["All Pro features", "Custom SSL certs", "99.9% SLA", "Advanced bot mgmt", "100 firewall rules", "PCI compliance"] },
];

export default function Cloudflare() {
  return (
    <div>
      {/* Header */}
      <section className="py-14 px-4 border-b border-border bg-gradient-to-b from-orange-50/60 via-background to-background dark:from-orange-950/20">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground mb-4">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-foreground">What is Cloudflare?</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs font-semibold mb-5">
            <Shield className="w-3.5 h-3.5" /> Security & CDN
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-5 leading-tight">
            What is Cloudflare & How Does It Protect the Web?
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Cloudflare is used by over 20% of all websites on the internet. This guide explains
            what it does, how it keeps websites safe from attacks, and why it matters for everyone — even if you don't own a website.
          </p>
        </div>
      </section>

      {/* What is it */}
      <section className="py-14 px-4 border-b border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-5 flex items-center gap-2">
            <Database className="w-5 h-5 text-primary" /> What Exactly is Cloudflare?
          </h2>
          {whatIs.split("\n\n").map((para, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed mb-4 text-sm">{para}</p>
          ))}

          {/* Key Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
            {[
              { val: "20%+", label: "of all websites" },
              { val: "300+", label: "global data centers" },
              { val: "100 Tbps", label: "DDoS capacity" },
              { val: "1.1.1.1", label: "fastest DNS resolver" },
            ].map((s) => (
              <div key={s.label} className="bg-muted/50 border border-border rounded-xl p-4 text-center">
                <div className="text-xl font-extrabold text-primary mb-1">{s.val}</div>
                <div className="text-[11px] text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-14 px-4 bg-muted/20 border-b border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
            <RefreshCw className="w-5 h-5 text-primary" /> How Cloudflare Works — Step by Step
          </h2>
          <p className="text-sm text-muted-foreground mb-8">What happens in the milliseconds between a user typing a URL and seeing your website.</p>
          <div className="space-y-4">
            {howItWorks.map((step) => (
              <div key={step.step} className="flex gap-4 bg-card border border-border rounded-xl p-4">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-extrabold shrink-0 mt-0.5">
                  {step.step}
                </div>
                <div>
                  <div className="font-semibold text-sm text-foreground mb-1">{step.title}</div>
                  <div className="text-xs text-muted-foreground leading-relaxed">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">Cloudflare's Core Security Services</h2>
          <p className="text-sm text-muted-foreground mb-10">Each service solves a real, specific security or performance problem.</p>
          <div className="space-y-6">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <article key={s.title} className="border border-border rounded-2xl overflow-hidden">
                  <div className={`px-6 py-4 flex items-start gap-3 ${s.bg}`}>
                    <div className="w-8 h-8 rounded-lg bg-background border border-border flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className={`w-4 h-4 ${s.color}`} />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">{s.title}</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">{s.summary}</p>
                    </div>
                  </div>
                  <div className="px-6 py-5">
                    {s.details.split("\n\n").map((para, i) => (
                      <p key={i} className="text-sm text-muted-foreground leading-relaxed mb-3 last:mb-0">{para}</p>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Plans Overview */}
      <section className="py-16 px-4 bg-muted/30 border-t border-b border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">Cloudflare Pricing Overview</h2>
          <p className="text-sm text-muted-foreground mb-8">Cloudflare is notable for offering a generous free plan — most websites never need to pay.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {plans.map((plan) => (
              <div key={plan.name} className={`bg-card border-2 rounded-2xl p-6 ${"popular" in plan && plan.popular ? "border-blue-400 dark:border-blue-600" : "border-border"}`}>
                {"popular" in plan && plan.popular && (
                  <div className="text-xs font-bold text-blue-600 dark:text-blue-400 mb-2">MOST POPULAR</div>
                )}
                <h3 className="text-lg font-extrabold text-foreground">{plan.name}</h3>
                <div className="text-2xl font-bold text-primary my-2">{plan.price}</div>
                <ul className="space-y-2 mt-4">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4">* Prices as of 2024. Visit cloudflare.com for current pricing. This site is not affiliated with Cloudflare.</p>
        </div>
      </section>

      {/* Why it matters */}
      <section className="py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-7">
            <h2 className="text-xl font-bold mb-5 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" /> Why Cloudflare Matters — Even if You Don't Own a Website
            </h2>
            <ul className="space-y-3 mb-6">
              {[
                "When you use 1.1.1.1 as your DNS resolver, your browsing is faster and your ISP can't log your DNS queries.",
                "Websites you use daily are protected from attacks that would otherwise take them offline.",
                "Free SSL from Cloudflare means more websites use HTTPS — making the whole internet safer for everyone.",
                "Cloudflare's CAPTCHA system (Turnstile) is more privacy-respecting than traditional options.",
                "Cloudflare publishes annual transparency reports showing government data requests they receive.",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/how-web-works" className="flex-1 text-center py-3 px-5 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 text-sm">
                How the Web Works <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/why-google" className="flex-1 text-center py-3 px-5 border border-border text-foreground font-semibold rounded-lg hover:bg-accent transition-colors flex items-center justify-center gap-2 text-sm">
                <Layers className="w-4 h-4" /> Why Google is #1
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
