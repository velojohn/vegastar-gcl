import { Link } from "react-router-dom";
import {
  Globe, Server, Lock, Wifi, ArrowRight,
  Monitor, Database, Layers, CheckCircle, BookOpen,
  HardDrive, Search
} from "lucide-react";

const dnsSteps = [
  { step: "1", title: "You type a URL", desc: 'You enter "www.example.com" into your browser.' },
  { step: "2", title: "Browser checks its cache", desc: "The browser first checks if it already knows this address from a recent visit." },
  { step: "3", title: "DNS Resolver is queried", desc: "If not cached, your device asks a DNS resolver (usually your ISP or 1.1.1.1) for the IP address." },
  { step: "4", title: "Root → TLD → Authoritative", desc: 'The resolver asks the root server ("who handles .com?"), then the TLD server ("who handles example.com?"), then the site\'s own nameserver.' },
  { step: "5", title: "IP address returned", desc: 'The resolver returns an IP address like "93.184.216.34" — the actual location of the server.' },
  { step: "6", title: "Browser connects to server", desc: "Your browser opens a TCP connection to that IP address." },
  { step: "7", title: "TLS handshake (HTTPS)", desc: "Browser and server agree on encryption keys. This is the padlock you see — takes milliseconds." },
  { step: "8", title: "Page is delivered", desc: "The server sends HTML, CSS, and JavaScript. Your browser renders it into the page you see." },
];

const protocols = [
  {
    name: "HTTP / HTTPS",
    icon: Globe,
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-950/30",
    desc: "HyperText Transfer Protocol — the language browsers and servers use to communicate. HTTPS adds TLS encryption.",
    fact: "HTTP/3 (the newest version) uses UDP instead of TCP for faster connections on unreliable networks.",
  },
  {
    name: "DNS",
    icon: Database,
    color: "text-green-600 dark:text-green-500",
    bg: "bg-green-50 dark:bg-green-950/30",
    desc: "Domain Name System — translates human-readable domain names into numeric IP addresses that computers understand.",
    fact: "There are only 13 root DNS server clusters in the world, but they have hundreds of physical instances globally.",
  },
  {
    name: "TCP / IP",
    icon: Wifi,
    color: "text-violet-600 dark:text-violet-400",
    bg: "bg-violet-50 dark:bg-violet-950/30",
    desc: "The fundamental protocol suite of the internet. TCP ensures reliable delivery of data packets; IP routes them.",
    fact: "Every device on the internet has an IP address. IPv4 has ~4.3 billion addresses. IPv6 has 340 undecillion.",
  },
  {
    name: "TLS / SSL",
    icon: Lock,
    color: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-50 dark:bg-amber-950/30",
    desc: "Transport Layer Security — encrypts data in transit so only the intended recipient can read it.",
    fact: "TLS 1.3 (2018) removed insecure legacy features and made the handshake faster — from 2 round trips to 1.",
  },
  {
    name: "CDN",
    icon: Server,
    color: "text-teal-600 dark:text-teal-500",
    bg: "bg-teal-50 dark:bg-teal-950/30",
    desc: "Content Delivery Network — a network of servers worldwide that caches website content close to users.",
    fact: "Around 50% of all internet traffic is served through CDNs. Cloudflare, Akamai, and Fastly are the biggest.",
  },
  {
    name: "HTML / CSS / JS",
    icon: Monitor,
    color: "text-rose-600 dark:text-rose-400",
    bg: "bg-rose-50 dark:bg-rose-950/30",
    desc: "The three languages of the web. HTML is structure, CSS is style, JavaScript is behaviour.",
    fact: "JavaScript was created by Brendan Eich in 10 days in 1995. It now runs on 98.7% of all websites.",
  },
];

const threats = [
  { name: "DDoS Attack", severity: "High", desc: "Floods a server with traffic until it crashes. Cloudflare's global network can absorb these.", color: "text-red-500", badge: "bg-red-100 text-red-700 dark:bg-red-950/40 dark:text-red-400" },
  { name: "SQL Injection", severity: "High", desc: "Inserts malicious database commands into input fields to steal or destroy data.", color: "text-red-500", badge: "bg-red-100 text-red-700 dark:bg-red-950/40 dark:text-red-400" },
  { name: "Man-in-the-Middle", severity: "Medium", desc: "Intercepts unencrypted traffic. HTTPS (TLS) prevents this entirely.", color: "text-amber-500", badge: "bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400" },
  { name: "Phishing", severity: "High", desc: "Fake websites impersonating trusted ones to steal credentials.", color: "text-red-500", badge: "bg-red-100 text-red-700 dark:bg-red-950/40 dark:text-red-400" },
  { name: "Cross-Site Scripting (XSS)", severity: "Medium", desc: "Injects malicious JavaScript into web pages viewed by other users.", color: "text-amber-500", badge: "bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400" },
  { name: "DNS Hijacking", severity: "Medium", desc: "Redirects DNS lookups to malicious servers. Using 1.1.1.1 or DNSSEC helps prevent this.", color: "text-amber-500", badge: "bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400" },
];

const layers = [
  { number: "7", name: "Application Layer", examples: "HTTP, HTTPS, DNS, FTP", desc: "What applications use to communicate." },
  { number: "6", name: "Presentation Layer", examples: "TLS/SSL, JPEG, PNG", desc: "Encryption and data formatting." },
  { number: "5", name: "Session Layer", examples: "NetBIOS, PPTP", desc: "Managing connections between apps." },
  { number: "4", name: "Transport Layer", examples: "TCP, UDP", desc: "Reliable or fast delivery of data." },
  { number: "3", name: "Network Layer", examples: "IP, ICMP", desc: "Routing packets across networks." },
  { number: "2", name: "Data Link Layer", examples: "Ethernet, Wi-Fi MAC", desc: "Node-to-node data transfer." },
  { number: "1", name: "Physical Layer", examples: "Cables, fiber, radio waves", desc: "The actual physical transmission medium." },
];

export default function HowWebWorks() {
  return (
    <div>
      {/* Header */}
      <section className="py-14 px-4 border-b border-border bg-gradient-to-b from-green-50/60 via-background to-background dark:from-green-950/20">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground mb-4">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-foreground">How the Web Works</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-semibold mb-5">
            <Globe className="w-3.5 h-3.5" /> Web Fundamentals
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-5 leading-tight">
            How the Web Actually Works
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            When you type a URL and press Enter, dozens of systems spring into action in under half a second.
            This guide explains each step — from DNS lookups to TLS encryption — in plain English.
          </p>
        </div>
      </section>

      {/* DNS Journey */}
      <section className="py-14 px-4 border-b border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
            <Database className="w-5 h-5 text-primary" /> What Happens When You Type a URL?
          </h2>
          <p className="text-sm text-muted-foreground mb-8">
            A surprising number of systems work together in under 500 milliseconds to show you a web page.
          </p>
          <div className="space-y-3">
            {dnsSteps.map((s) => (
              <div key={s.step} className="flex gap-4 items-start bg-card border border-border rounded-xl p-4">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-extrabold flex items-center justify-center shrink-0">
                  {s.step}
                </div>
                <div>
                  <div className="font-semibold text-sm text-foreground mb-0.5">{s.title}</div>
                  <div className="text-xs text-muted-foreground leading-relaxed">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Protocols */}
      <section className="py-14 px-4 border-b border-border bg-muted/20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
            <Layers className="w-5 h-5 text-primary" /> Key Internet Protocols Explained
          </h2>
          <p className="text-sm text-muted-foreground mb-8">The core standards and languages that make the web work.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {protocols.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.name} className={`border border-border rounded-xl overflow-hidden`}>
                  <div className={`px-5 py-3 flex items-center gap-2 ${p.bg}`}>
                    <Icon className={`w-4 h-4 ${p.color}`} />
                    <span className="font-bold text-sm text-foreground">{p.name}</span>
                  </div>
                  <div className="px-5 py-4">
                    <p className="text-xs text-muted-foreground leading-relaxed mb-3">{p.desc}</p>
                    <div className="bg-muted/50 rounded-lg p-3">
                      <p className="text-[11px] text-muted-foreground leading-relaxed">
                        <span className="font-semibold text-foreground">Fun fact:</span> {p.fact}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OSI Model */}
      <section className="py-14 px-4 border-b border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
            <HardDrive className="w-5 h-5 text-primary" /> The OSI Model — 7 Layers of the Internet
          </h2>
          <p className="text-sm text-muted-foreground mb-8">
            The OSI (Open Systems Interconnection) model describes how data moves through a network in 7 layers — from physical cables to the apps you use.
          </p>
          <div className="space-y-2">
            {layers.map((layer, i) => {
              const colors = ["bg-blue-500", "bg-violet-500", "bg-teal-500", "bg-green-500", "bg-amber-500", "bg-orange-500", "bg-red-500"];
              return (
                <div key={layer.number} className="flex gap-3 items-start bg-card border border-border rounded-lg px-4 py-3">
                  <div className={`w-7 h-7 rounded flex items-center justify-center text-white text-xs font-extrabold shrink-0 ${colors[i]}`}>
                    {layer.number}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-0.5">
                      <span className="font-semibold text-sm text-foreground">{layer.name}</span>
                      <span className="text-[10px] bg-muted text-muted-foreground px-2 py-0.5 rounded font-mono">{layer.examples}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{layer.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Common Threats */}
      <section className="py-14 px-4 bg-muted/20 border-b border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
            <Lock className="w-5 h-5 text-primary" /> Common Web Threats & How They're Stopped
          </h2>
          <p className="text-sm text-muted-foreground mb-8">Understanding how attacks work is the first step in stopping them.</p>
          <div className="space-y-3">
            {threats.map((t) => (
              <div key={t.name} className="bg-card border border-border rounded-xl px-5 py-4 flex gap-4 items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-sm text-foreground">{t.name}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${t.badge}`}>{t.severity}</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-7">
            <h2 className="text-xl font-bold mb-5 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" /> Key Takeaways
            </h2>
            <ul className="space-y-3 mb-6">
              {[
                "Every website visit involves DNS lookup, TCP connection, TLS handshake, and HTTP request — all in under 500ms.",
                "HTTPS (the padlock) means data is encrypted in transit — your ISP or hackers cannot read it.",
                "CDNs like Cloudflare serve cached website content from nearby servers, dramatically speeding up load times.",
                "Most web attacks (DDoS, SQL injection, XSS) have known defenses — security services like Cloudflare apply them automatically.",
                "Google Search processes a request against an index of hundreds of billions of pages — returning results in ~0.3 seconds.",
                "The internet is a collection of agreed-upon protocols — any device speaking the same language can communicate.",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/resources" className="flex-1 text-center py-3 px-5 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 text-sm">
                Further Reading <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/cloudflare" className="flex-1 text-center py-3 px-5 border border-border text-foreground font-semibold rounded-lg hover:bg-accent transition-colors flex items-center justify-center gap-2 text-sm">
                <Search className="w-4 h-4" /> What is Cloudflare?
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
