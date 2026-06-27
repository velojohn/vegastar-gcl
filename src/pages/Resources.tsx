import { Link } from "react-router-dom";
import {
  BookOpen, ExternalLink, Search, Shield, Globe,
  Cpu, Lock, Database, GraduationCap, CheckCircle
} from "lucide-react";

const glossary = [
  { term: "Algorithm", def: "A set of rules a computer follows to solve a problem or complete a task." },
  { term: "CDN (Content Delivery Network)", def: "A distributed network of servers that delivers web content to users from the nearest location." },
  { term: "DNS (Domain Name System)", def: "The system that translates domain names like 'google.com' into IP addresses like '142.250.200.46'." },
  { term: "DDoS Attack", def: "Distributed Denial of Service — flooding a server with so much fake traffic it becomes unreachable." },
  { term: "Firewall (WAF)", def: "A security system that monitors and filters incoming/outgoing network traffic based on rules." },
  { term: "HTTPS", def: "HyperText Transfer Protocol Secure — HTTP with TLS encryption. The padlock in your browser." },
  { term: "IP Address", def: "A unique numerical label (e.g. 192.168.1.1) assigned to every device connected to the internet." },
  { term: "PageRank", def: "Google's original algorithm that ranks web pages based on how many trusted sites link to them." },
  { term: "SSL/TLS", def: "Cryptographic protocols that provide encrypted communication over the internet." },
  { term: "SQL Injection", def: "An attack that inserts malicious database commands into input fields to access or destroy data." },
  { term: "Web Crawler", def: "An automated program (like Googlebot) that systematically browses the web to index pages." },
  { term: "XSS (Cross-Site Scripting)", def: "An attack that injects malicious scripts into web pages viewed by other users." },
];

const officialLinks = [
  { label: "Google — How Search Works", url: "https://www.google.com/search/howsearchworks/", icon: Search, desc: "Official explanation of Google's crawling, indexing, and ranking systems." },
  { label: "Cloudflare Learning Center", url: "https://www.cloudflare.com/learning/", icon: Shield, desc: "Free educational articles on DDoS, DNS, security, and the internet — by Cloudflare." },
  { label: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/", icon: Globe, desc: "Mozilla's comprehensive reference for HTML, CSS, JavaScript, and web APIs." },
  { label: "How DNS Works (Cloudflare)", url: "https://www.cloudflare.com/learning/dns/what-is-dns/", icon: Database, desc: "A clear visual explanation of DNS resolution." },
  { label: "OWASP Top 10 Web Threats", url: "https://owasp.org/www-project-top-ten/", icon: Lock, desc: "The 10 most critical web application security risks, updated regularly." },
  { label: "Google PageRank Patent", url: "https://patents.google.com/patent/US6285999B1", icon: Cpu, desc: "The original 1998 PageRank patent by Larry Page — dense but fascinating." },
];

const articles = [
  { topic: "Why Google?", title: "Why Google is the World's #1 Search Engine", link: "/why-google", icon: Search, color: "text-blue-600 dark:text-blue-400" },
  { topic: "Security", title: "What is Cloudflare and How Does It Protect Websites?", link: "/cloudflare", icon: Shield, color: "text-orange-500" },
  { topic: "Fundamentals", title: "How the Web Actually Works: DNS, HTTP, TLS Explained", link: "/how-web-works", icon: Globe, color: "text-green-600 dark:text-green-500" },
];

const quiz = [
  { q: "What does DNS stand for?", a: "Domain Name System — it converts domain names into IP addresses." },
  { q: "What year was Google founded?", a: "1998, by Larry Page and Sergey Brin at Stanford University." },
  { q: "What percentage of search traffic does Google have?", a: "Approximately 91.6% globally as of 2024." },
  { q: "What is a DDoS attack?", a: "Distributed Denial of Service — flooding a server with traffic to crash it." },
  { q: "What does HTTPS mean?", a: "HyperText Transfer Protocol Secure — HTTP with TLS encryption. The padlock in your browser." },
  { q: "What is Cloudflare's free DNS resolver?", a: "1.1.1.1 — the world's fastest public DNS resolver." },
];

export default function Resources() {
  return (
    <div>
      {/* Header */}
      <section className="py-14 px-4 border-b border-border bg-gradient-to-b from-muted/50 to-background">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground mb-4">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-foreground">Resources</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-5">
            <GraduationCap className="w-3.5 h-3.5" /> Learning Resources
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
            Resources & Further Reading
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            Links to trusted official sources, a plain-English glossary of tech terms, and a quick-review quiz to test your understanding.
          </p>
        </div>
      </section>

      {/* Site Articles */}
      <section className="py-12 px-4 border-b border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold mb-5 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary" /> Articles on This Site
          </h2>
          <div className="space-y-3">
            {articles.map((a) => {
              const Icon = a.icon;
              return (
                <Link
                  key={a.title}
                  to={a.link}
                  className="flex items-start gap-4 bg-card border border-border rounded-xl p-4 hover:shadow-sm hover:border-primary/30 transition-all"
                >
                  <Icon className={`w-5 h-5 mt-0.5 ${a.color} shrink-0`} />
                  <div>
                    <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-wide mb-0.5">{a.topic}</div>
                    <div className="text-sm font-semibold text-foreground hover:text-primary transition-colors">{a.title}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Official External Links */}
      <section className="py-12 px-4 border-b border-border bg-muted/20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
            <ExternalLink className="w-5 h-5 text-primary" /> Trusted External Sources
          </h2>
          <p className="text-xs text-muted-foreground mb-6">Official and reputable sources for deeper learning. We have no affiliation with any of these.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {officialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="bg-card border border-border rounded-xl p-5 hover:shadow-md hover:border-primary/30 transition-all flex gap-3 items-start group"
                >
                  <Icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-1">
                      {link.label}
                      <ExternalLink className="w-3 h-3 opacity-50" />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{link.desc}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Glossary */}
      <section className="py-12 px-4 border-b border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary" /> Plain-English Glossary
          </h2>
          <p className="text-xs text-muted-foreground mb-6">Key terms used throughout this site — defined without jargon.</p>
          <div className="space-y-2">
            {glossary.map((item) => (
              <div key={item.term} className="bg-card border border-border rounded-lg px-5 py-3.5 flex gap-4 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                <div>
                  <span className="font-bold text-sm text-foreground">{item.term}: </span>
                  <span className="text-sm text-muted-foreground">{item.def}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Quiz */}
      <section className="py-12 px-4 bg-muted/20 border-b border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-primary" /> Quick Knowledge Check
          </h2>
          <p className="text-xs text-muted-foreground mb-6">Test yourself — answers are visible below each question.</p>
          <div className="space-y-4">
            {quiz.map((item, i) => (
              <details key={i} className="bg-card border border-border rounded-xl overflow-hidden group">
                <summary className="px-5 py-4 font-semibold text-sm text-foreground cursor-pointer list-none flex items-center justify-between hover:bg-muted/40 transition-colors">
                  <span>Q{i + 1}: {item.q}</span>
                  <span className="text-xs text-muted-foreground font-normal group-open:hidden">Tap to reveal</span>
                  <span className="text-xs text-primary font-semibold hidden group-open:block">Hide answer</span>
                </summary>
                <div className="px-5 pb-4 pt-2 border-t border-border">
                  <div className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    {item.a}
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-10 px-4">
        <div className="max-w-3xl mx-auto bg-card border border-border rounded-2xl p-7 text-center">
          <BookOpen className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
          <h3 className="font-bold text-lg mb-2">About This Resource</h3>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto">
            WebInsight is an independent educational website. All information is provided for
            educational purposes only. We are not affiliated with Google, Cloudflare, Mozilla,
            or any other company mentioned. External links open third-party sites we do not control.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
            <Link to="/" className="px-6 py-2.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors text-sm">
              Back to Home
            </Link>
            <Link to="/why-google" className="px-6 py-2.5 border border-border text-foreground font-semibold rounded-lg hover:bg-accent transition-colors text-sm">
              Start Reading
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
