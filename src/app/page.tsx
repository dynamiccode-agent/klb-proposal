"use client";

import { useState } from "react";
import {
  FileText,
  Target,
  Globe,
  TrendingUp,
  Users,
  CheckCircle,
  Calendar,
  ArrowRight,
  Shield,
  Search,
  Layers,
  BarChart3,
  Megaphone,
  Clock,
  Star,
  Building2,
  ChevronDown,
  ChevronUp,
  Printer,
  Mail,
  Phone,
  MapPin,
  Award,
  Zap,
  LineChart,
  BookOpen,
  Briefcase,
} from "lucide-react";

const GOLD = "#CA8A04";
const NAVY = "#0F172A";

function PDFButton() {
  const handlePrint = () => {
    window.print();
  };
  return (
    <button
      onClick={handlePrint}
      className="no-print fixed top-6 right-6 z-50 flex items-center gap-2 px-5 py-3 rounded-lg font-semibold text-sm shadow-xl cursor-pointer transition-all duration-200 hover:scale-105"
      style={{ backgroundColor: GOLD, color: "#fff" }}
      aria-label="Export as PDF"
    >
      <Printer className="w-4 h-4" />
      Export PDF
    </button>
  );
}

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="h-px flex-1" style={{ backgroundColor: GOLD, maxWidth: 48 }} />
      <span
        className="text-xs font-bold tracking-widest uppercase"
        style={{ color: GOLD }}
      >
        {text}
      </span>
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-3xl md:text-4xl font-bold mb-6"
      style={{ color: NAVY, fontFamily: "Poppins, sans-serif" }}
    >
      {children}
    </h2>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`bg-white rounded-2xl border p-6 shadow-sm ${className}`}
      style={{ borderColor: "#E2E8F0" }}
    >
      {children}
    </div>
  );
}

function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: GOLD }} />
      <span className="text-slate-700 text-sm leading-relaxed">{text}</span>
    </li>
  );
}

function TimelineItem({
  week,
  title,
  items,
  last = false,
}: {
  week: string;
  title: string;
  items: string[];
  last?: boolean;
}) {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col items-center">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold"
          style={{ backgroundColor: GOLD }}
        >
          {week}
        </div>
        {!last && <div className="w-0.5 flex-1 mt-2" style={{ backgroundColor: "#E2E8F0" }} />}
      </div>
      <div className="pb-8">
        <h4
          className="font-semibold text-base mb-2"
          style={{ color: NAVY, fontFamily: "Poppins, sans-serif" }}
        >
          {title}
        </h4>
        <ul className="space-y-1">
          {items.map((item, i) => (
            <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
              <span style={{ color: GOLD }} className="mt-1 text-xs">▸</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function DeliverableRow({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) {
  return (
    <div className="flex items-start gap-4 py-4 border-b last:border-b-0" style={{ borderColor: "#F1F5F9" }}>
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: "#FEF9C3" }}
      >
        <Icon className="w-5 h-5" style={{ color: GOLD }} />
      </div>
      <div>
        <p className="font-semibold text-sm mb-0.5" style={{ color: NAVY }}>{title}</p>
        <p className="text-xs text-slate-500 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function PageCard({
  num,
  title,
  purpose,
}: {
  num: string;
  title: string;
  purpose: string;
}) {
  return (
    <div className="bg-white rounded-xl border p-4 flex items-start gap-3 hover:shadow-md transition-shadow duration-200 cursor-default" style={{ borderColor: "#E2E8F0" }}>
      <span
        className="text-xs font-bold w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 text-white"
        style={{ backgroundColor: NAVY }}
      >
        {num}
      </span>
      <div>
        <p className="font-semibold text-sm" style={{ color: NAVY }}>{title}</p>
        <p className="text-xs text-slate-500 mt-0.5">{purpose}</p>
      </div>
    </div>
  );
}

function FutureItem({ title, description }: { title: string; description: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border rounded-xl overflow-hidden" style={{ borderColor: "#E2E8F0" }}>
      <button
        className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-slate-50 transition-colors duration-150 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-sm" style={{ color: NAVY }}>{title}</span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-slate-400" />
        ) : (
          <ChevronDown className="w-4 h-4 text-slate-400" />
        )}
      </button>
      {open && (
        <div className="px-4 pb-4 bg-white">
          <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
        </div>
      )}
    </div>
  );
}

export default function ProposalPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F8FAFC" }}>
      <PDFButton />

      {/* ── COVER ── */}
      <section
        className="relative min-h-screen flex flex-col justify-between overflow-hidden"
        style={{ backgroundColor: NAVY }}
      >
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, ${GOLD} 0%, transparent 50%), radial-gradient(circle at 80% 20%, #334155 0%, transparent 50%)`,
          }}
        />
        <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 opacity-10"
          style={{
            background: `conic-gradient(from 0deg, ${GOLD}, transparent, ${GOLD})`,
            borderRadius: "0 0 0 100%",
          }}
        />

        <div className="relative z-10 flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 max-w-5xl mx-auto w-full">
          {/* Prepared by */}
          <div className="mb-12">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-6"
              style={{ backgroundColor: `${GOLD}20`, color: GOLD, border: `1px solid ${GOLD}40` }}
            >
              <Star className="w-3 h-3" />
              Prepared by Dynamic Code
            </div>
          </div>

          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: `${GOLD}` }}
          >
            Digital Growth Proposal
          </p>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            KLB Consulting
            <br />
            <span style={{ color: GOLD }}>Group</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed mb-12">
            A strategic digital presence and lead generation system designed to establish authority,
            win tenders, and grow your consultancy across Queensland and beyond.
          </p>

          {/* Key stats */}
          <div className="grid grid-cols-3 gap-6 max-w-lg">
            {[
              { value: "2 Wks", label: "Delivery Timeline" },
              { value: "7+", label: "Core Pages" },
              { value: "100%", label: "Custom-Built" },
            ].map((stat) => (
              <div key={stat.label}>
                <p
                  className="text-2xl md:text-3xl font-bold"
                  style={{ color: GOLD, fontFamily: "Poppins, sans-serif" }}
                >
                  {stat.value}
                </p>
                <p className="text-xs text-slate-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 px-8 md:px-16 lg:px-24 py-8 border-t max-w-5xl mx-auto w-full" style={{ borderColor: "#1E293B" }}>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <p className="text-slate-400 text-xs">Prepared for</p>
              <p className="text-white font-semibold">KLB Consulting Group</p>
              <p className="text-slate-400 text-xs">WHS & ISO Compliance Consultancy · Queensland</p>
            </div>
            <div className="text-left md:text-right">
              <p className="text-slate-400 text-xs">Date</p>
              <p className="text-white font-semibold">May 2026</p>
              <p className="text-slate-400 text-xs">Version 1.0 — Confidential</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-12 py-16 space-y-20">

        {/* ── 1. EXECUTIVE SUMMARY ── */}
        <section>
          <SectionLabel text="01 — Executive Summary" />
          <SectionHeading>Building a Digital Foundation<br />That Works as Hard as You Do</SectionHeading>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-4">
              <p className="text-slate-700 leading-relaxed">
                KLB Consulting Group is an established WHS and ISO compliance consultancy with real expertise,
                recurring client relationships, and a strong service offering. The gap isn&apos;t the work — it&apos;s
                the <strong className="text-slate-900">digital presence that reflects it.</strong>
              </p>
              <p className="text-slate-700 leading-relaxed">
                Civil construction companies researching compliance partners go online first. Tender committees
                vet suppliers digitally before a single phone call is made. Right now, KLB&apos;s online presence
                doesn&apos;t match the quality of the work delivered on the ground.
              </p>
              <p className="text-slate-700 leading-relaxed">
                This proposal outlines a strategic digital engagement — not a brochure website — designed to
                establish authority, generate inbound enquiries, support your new business development staff,
                and position KLB Consulting Group as the premium compliance partner for civil contractors
                across Queensland.
              </p>
              <div
                className="mt-6 p-5 rounded-xl border-l-4"
                style={{ backgroundColor: "#FEF9C3", borderLeftColor: GOLD }}
              >
                <p className="text-sm font-semibold" style={{ color: NAVY }}>
                  Our recommendation
                </p>
                <p className="text-sm text-slate-700 mt-1">
                  A professionally designed, SEO-optimised website with structured lead capture, a clear capability
                  statement, and digital infrastructure that supports growth — delivered within two weeks.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { icon: Shield, label: "Authority & Trust", desc: "Position KLB as the go-to compliance partner in civil construction" },
                { icon: TrendingUp, label: "Lead Generation", desc: "A system that brings inbound enquiries, not just a static presence" },
                { icon: Search, label: "Google Visibility", desc: "SEO foundations that compound over time" },
                { icon: FileText, label: "Tender Ready", desc: "Professional credibility that wins contracts before you walk in the door" },
              ].map(({ icon: Icon, label, desc }) => (
                <div key={label} className="flex items-start gap-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${GOLD}15` }}
                  >
                    <Icon className="w-4 h-4" style={{ color: GOLD }} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: NAVY }}>{label}</p>
                    <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 2. UNDERSTANDING YOUR BUSINESS ── */}
        <section>
          <SectionLabel text="02 — Understanding Your Business" />
          <SectionHeading>Where KLB Consulting<br />Sits in the Market</SectionHeading>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-5 h-5" style={{ color: GOLD }} />
                <h3 className="font-semibold" style={{ color: NAVY, fontFamily: "Poppins, sans-serif" }}>Your Services</h3>
              </div>
              <ul className="space-y-2.5">
                {[
                  "WHS (Work Health & Safety) Compliance",
                  "ISO Accreditation Support & Management",
                  "Lead Auditing for Civil Projects",
                  "Site Inspections & Compliance Reporting",
                  "Embedded Consultancy Support (On-Site)",
                ].map((s) => (
                  <CheckItem key={s} text={s} />
                ))}
              </ul>
            </Card>
            <Card>
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-5 h-5" style={{ color: GOLD }} />
                <h3 className="font-semibold" style={{ color: NAVY, fontFamily: "Poppins, sans-serif" }}>Your Target Market</h3>
              </div>
              <ul className="space-y-2.5">
                {[
                  "Civil construction companies in Queensland",
                  "10–50 employees, $2M–$50M turnover",
                  "Companies requiring ISO accreditation for tenders",
                  "Contractors needing embedded WHS support",
                  "Future expansion: Victoria market",
                ].map((s) => (
                  <CheckItem key={s} text={s} />
                ))}
              </ul>
            </Card>
            <Card className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-5 h-5" style={{ color: GOLD }} />
                <h3 className="font-semibold" style={{ color: NAVY, fontFamily: "Poppins, sans-serif" }}>Current Situation & Opportunity</h3>
              </div>
              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  {
                    label: "Strong Foundation",
                    desc: "Recurring consulting relationships in place. The business works — the digital presence just needs to catch up.",
                  },
                  {
                    label: "Critical Timing",
                    desc: "New business development staff onboarding now. A professional digital presence directly supports their ability to close clients.",
                  },
                  {
                    label: "Competitive Advantage",
                    desc: "Most small compliance consultancies have weak digital presences. This is a genuine opportunity to own the space online.",
                  },
                ].map(({ label, desc }) => (
                  <div key={label}>
                    <p className="font-semibold text-sm mb-1" style={{ color: NAVY }}>{label}</p>
                    <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* ── 3. BUSINESS OBJECTIVES ── */}
        <section>
          <SectionLabel text="03 — Business Objectives" />
          <SectionHeading>What We&apos;re Building Towards</SectionHeading>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                num: "01",
                icon: Award,
                title: "Establish Authority",
                desc: "Position KLB as the credible, experienced compliance partner that civil contractors choose with confidence.",
              },
              {
                num: "02",
                icon: TrendingUp,
                title: "Generate Inbound Leads",
                desc: "Create a digital system that attracts and converts enquiries from companies actively searching for WHS and ISO support.",
              },
              {
                num: "03",
                icon: Search,
                title: "Improve Google Visibility",
                desc: "Rank for the search terms your clients use, driving consistent, free, high-intent traffic over time.",
              },
              {
                num: "04",
                icon: FileText,
                title: "Win Better Tenders",
                desc: "A professional capability statement and digital presence that gives tender committees confidence before you step in the room.",
              },
            ].map(({ num, icon: Icon, title, desc }) => (
              <Card key={num} className="relative overflow-hidden">
                <span
                  className="absolute top-4 right-4 text-4xl font-black opacity-10"
                  style={{ color: GOLD, fontFamily: "Poppins, sans-serif" }}
                >
                  {num}
                </span>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${GOLD}15` }}
                >
                  <Icon className="w-5 h-5" style={{ color: GOLD }} />
                </div>
                <h4 className="font-semibold text-sm mb-2" style={{ color: NAVY, fontFamily: "Poppins, sans-serif" }}>{title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{desc}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* ── 4. WHY DIGITAL CREDIBILITY MATTERS ── */}
        <section>
          <div
            className="rounded-2xl overflow-hidden"
            style={{ backgroundColor: NAVY }}
          >
            <div className="p-8 md:p-12">
              <SectionLabel text="04 — Why This Matters" />
              <h2
                className="text-3xl md:text-4xl font-bold text-white mb-6"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Why Digital Credibility Changes<br />
                <span style={{ color: GOLD }}>Everything in Civil Construction</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Building2,
                    title: "Tenders Are Won Before the Meeting",
                    desc: "Procurement managers and safety officers research compliance consultants online before making contact. An outdated or absent web presence is a trust signal — the wrong kind. A professional website with clear credentials, case studies, and service scope gives you a head start before a single word is spoken.",
                  },
                  {
                    icon: Users,
                    title: "Your Clients Are Searching Right Now",
                    desc: "Civil contractors actively search for 'WHS consultant Queensland', 'ISO 45001 compliance civil', and 'safety management systems civil construction'. If KLB isn't visible in those results, your competitors are. SEO isn't a bonus — it's how inbound leads become predictable.",
                  },
                  {
                    icon: Globe,
                    title: "Digital Trust = Commercial Trust",
                    desc: "The civil construction industry is relationship-driven — but those relationships now start online. A premium digital presence signals that KLB operates at the same standard you demand from your clients: professionally, systematically, and with attention to detail.",
                  },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title}>
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${GOLD}20` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: GOLD }} />
                    </div>
                    <h4
                      className="font-semibold text-white mb-3"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {title}
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. RECOMMENDED STRATEGY ── */}
        <section>
          <SectionLabel text="05 — Recommended Digital Strategy" />
          <SectionHeading>A Business Growth Tool,<br />Not an Online Brochure</SectionHeading>
          <p className="text-slate-600 mb-8 max-w-2xl leading-relaxed">
            Most agency proposals deliver a website. We&apos;re recommending a digital growth system —
            one where every component serves a measurable business outcome.
          </p>
          <div className="space-y-4">
            {[
              {
                num: "1",
                icon: Globe,
                title: "Professional Website — Authority First",
                details: [
                  "Designed to communicate expertise immediately, not just describe services",
                  "Built around the decision criteria of civil contractors evaluating compliance partners",
                  "Showcases credentials, methodology, and track record in a format tender committees trust",
                  "Mobile-optimised and fast-loading — critical for on-site access by project managers",
                ],
              },
              {
                num: "2",
                icon: Search,
                title: "SEO Foundations — Long-Term Visibility",
                details: [
                  "Keyword research targeting high-intent terms used by civil construction companies",
                  "On-page SEO across all core pages, structured data, and metadata",
                  "Google Business Profile setup and optimisation",
                  "Google Search Console and Analytics configured from day one",
                ],
              },
              {
                num: "3",
                icon: Megaphone,
                title: "Lead Generation Architecture",
                details: [
                  "Strategic call-to-action placement throughout the site",
                  "Enquiry forms designed to capture qualified leads, not just contact details",
                  "Capability statement download as a lead magnet for tender-stage contacts",
                  "Clear conversion paths from awareness to enquiry",
                ],
              },
              {
                num: "4",
                icon: Layers,
                title: "Professional Positioning",
                details: [
                  "Consistent brand presentation across all digital touchpoints",
                  "Capability statement page positioned for both web visitors and document submissions",
                  "Team and expertise section that humanises the business and builds trust",
                  "Industry-specific language that resonates with civil contractors",
                ],
              },
            ].map(({ num, icon: Icon, title, details }) => (
              <Card key={num} className="group">
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: NAVY }}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className="text-xs font-bold px-2 py-0.5 rounded-full"
                        style={{ backgroundColor: `${GOLD}20`, color: GOLD }}
                      >
                        Step {num}
                      </span>
                      <h4 className="font-semibold" style={{ color: NAVY, fontFamily: "Poppins, sans-serif" }}>{title}</h4>
                    </div>
                    <ul className="space-y-1.5">
                      {details.map((d) => (
                        <li key={d} className="text-sm text-slate-600 flex items-start gap-2">
                          <ArrowRight className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: GOLD }} />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* ── 6. WEBSITE SCOPE ── */}
        <section>
          <SectionLabel text="06 — Website Scope" />
          <SectionHeading>What&apos;s Being Built</SectionHeading>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <h3 className="font-semibold mb-4" style={{ color: NAVY, fontFamily: "Poppins, sans-serif" }}>Core Features</h3>
              <ul className="space-y-2.5">
                {[
                  "Modern responsive design — mobile, tablet, and desktop",
                  "Fast performance with optimised images and Core Web Vitals compliance",
                  "SEO foundations built in from the start — not added after",
                  "Enquiry and contact forms with email notifications",
                  "Services pages with clear scope, methodology, and outcomes",
                  "Capability showcase with case study framework",
                  "About/team section that builds trust and credibility",
                  "Professional calls-to-action throughout",
                  "Google indexing and sitemap submission",
                  "Google Analytics 4 and Search Console integration",
                ].map((f) => (
                  <CheckItem key={f} text={f} />
                ))}
              </ul>
            </Card>
            <div className="space-y-6">
              <Card>
                <h3 className="font-semibold mb-4" style={{ color: NAVY, fontFamily: "Poppins, sans-serif" }}>Technical Standards</h3>
                <ul className="space-y-2.5">
                  {[
                    "Built on Next.js — fast, scalable, and SEO-optimised",
                    "Deployed on enterprise-grade hosting with SSL",
                    "Mobile-first development approach",
                    "Clean code structure for easy future updates",
                    "Structured data markup for Google rich results",
                  ].map((f) => (
                    <CheckItem key={f} text={f} />
                  ))}
                </ul>
              </Card>
              <div
                className="rounded-xl p-5"
                style={{ backgroundColor: `${GOLD}10`, border: `1px solid ${GOLD}30` }}
              >
                <p className="text-sm font-semibold mb-1" style={{ color: NAVY }}>Built to Scale</p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  The site architecture supports future additions — blog, additional service pages,
                  Victoria market landing pages, and team growth — without starting over.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 7. SITEMAP ── */}
        <section>
          <SectionLabel text="07 — Suggested Sitemap" />
          <SectionHeading>Proposed Website Structure</SectionHeading>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { num: "1", title: "Home", purpose: "First impression, authority signal, lead conversion hub" },
              { num: "2", title: "About KLB", purpose: "Team credentials, company story, values, and approach" },
              { num: "3", title: "Services", purpose: "WHS, ISO, auditing, inspections, embedded consultancy" },
              { num: "4", title: "Industries", purpose: "Civil construction focus, target market alignment" },
              { num: "5", title: "Capability Statement", purpose: "Downloadable PDF for tender submissions, formal credentials" },
              { num: "6", title: "Projects / Experience", purpose: "Case studies, outcomes, industry experience showcase" },
              { num: "7", title: "Contact", purpose: "Enquiry form, phone, email, location, maps" },
              { num: "+", title: "Blog (Phase 2)", purpose: "Thought leadership content to drive ongoing SEO" },
            ].map((page) => (
              <PageCard key={page.num} {...page} />
            ))}
          </div>
        </section>

        {/* ── 8. SEO STRATEGY ── */}
        <section>
          <SectionLabel text="08 — SEO & Google Visibility" />
          <SectionHeading>Getting Found When It Matters</SectionHeading>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <p className="text-slate-700 leading-relaxed">
                Search engine optimisation isn&apos;t magic — it&apos;s structure. We build every page to rank,
                not just to look good. Here&apos;s the foundational strategy included in your website build:
              </p>
              <Card>
                <h4 className="font-semibold mb-3" style={{ color: NAVY, fontFamily: "Poppins, sans-serif" }}>Included in Website Build</h4>
                <ul className="space-y-2.5">
                  {[
                    "Keyword research for Queensland civil construction compliance terms",
                    "On-page SEO: title tags, meta descriptions, heading hierarchy",
                    "Structured data markup (LocalBusiness, Service schema)",
                    "XML sitemap and robots.txt configuration",
                    "Google Business Profile setup and optimisation",
                    "Google Search Console and Analytics 4 integration",
                    "Page speed optimisation and Core Web Vitals compliance",
                    "Internal linking structure for authority distribution",
                  ].map((f) => (
                    <CheckItem key={f} text={f} />
                  ))}
                </ul>
              </Card>
            </div>
            <div className="space-y-4">
              <Card>
                <h4 className="font-semibold mb-3" style={{ color: NAVY, fontFamily: "Poppins, sans-serif" }}>Target Search Terms</h4>
                <div className="space-y-2">
                  {[
                    { term: "WHS consultant Queensland", intent: "High intent" },
                    { term: "ISO 45001 accreditation civil construction", intent: "High intent" },
                    { term: "safety management system Queensland", intent: "High intent" },
                    { term: "WHS audit civil contractor", intent: "High intent" },
                    { term: "compliance consultant construction QLD", intent: "Medium intent" },
                    { term: "embedded safety consultant Brisbane", intent: "Local intent" },
                  ].map(({ term, intent }) => (
                    <div key={term} className="flex items-center justify-between py-2 border-b last:border-b-0" style={{ borderColor: "#F1F5F9" }}>
                      <span className="text-sm text-slate-700">{term}</span>
                      <span
                        className="text-xs px-2 py-0.5 rounded-full font-medium"
                        style={{
                          backgroundColor: intent === "High intent" ? "#DCFCE7" : intent === "Local intent" ? "#DBEAFE" : "#FEF9C3",
                          color: intent === "High intent" ? "#166534" : intent === "Local intent" ? "#1E40AF" : "#854D0E",
                        }}
                      >
                        {intent}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
              <div
                className="p-4 rounded-xl text-sm text-slate-700 leading-relaxed"
                style={{ backgroundColor: "#F0FDF4", border: "1px solid #BBF7D0" }}
              >
                <p className="font-semibold text-green-800 mb-1">Long-Term Compounding Value</p>
                SEO traffic is free and grows over time. Unlike paid ads, a well-optimised site continues
                generating leads without ongoing spend — building a genuine business asset.
              </div>
            </div>
          </div>
        </section>

        {/* ── 9. LEAD GENERATION ── */}
        <section>
          <SectionLabel text="09 — Lead Generation Strategy" />
          <SectionHeading>Turning Visitors into Enquiries</SectionHeading>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: Target,
                title: "Strategic CTAs",
                desc: "Every page has a clear, contextually relevant call-to-action designed to move visitors toward contact — not just inform them.",
              },
              {
                icon: FileText,
                title: "Capability Statement Download",
                desc: "A downloadable capability statement positioned as both a tender tool and a lead magnet — captures contact details of high-intent visitors.",
              },
              {
                icon: Phone,
                title: "Frictionless Contact",
                desc: "Multiple contact methods (form, phone, email) with mobile-friendly tap-to-call, making it easy to connect from any device.",
              },
              {
                icon: BookOpen,
                title: "Services as Sales Pages",
                desc: "Each service page is written and structured to address specific client concerns, demonstrate expertise, and prompt enquiry.",
              },
              {
                icon: LineChart,
                title: "Analytics & Tracking",
                desc: "Google Analytics 4 configured to track form submissions, phone clicks, and PDF downloads — so you can see what's working.",
              },
              {
                icon: Users,
                title: "BD Staff Support",
                desc: "The site works alongside your new BD hire — a professional reference point to share with prospects during outreach and follow-up.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <Card key={title}>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${GOLD}15` }}
                >
                  <Icon className="w-5 h-5" style={{ color: GOLD }} />
                </div>
                <h4 className="font-semibold text-sm mb-2" style={{ color: NAVY, fontFamily: "Poppins, sans-serif" }}>{title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{desc}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* ── 10. BRANDING ── */}
        <section>
          <SectionLabel text="10 — Branding & Professional Positioning" />
          <SectionHeading>Presenting KLB at<br />the Standard You Deserve</SectionHeading>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <p className="text-slate-700 leading-relaxed">
                Your brand is the first impression — and in the civil construction industry, first impressions
                determine whether a prospect picks up the phone or moves on to the next result.
              </p>
              <Card>
                <h4 className="font-semibold mb-3" style={{ color: NAVY, fontFamily: "Poppins, sans-serif" }}>What We&apos;ll Deliver</h4>
                <ul className="space-y-2.5">
                  {[
                    "Consistent visual identity applied across all website pages",
                    "Professional colour palette and typography system",
                    "Brand guidelines document for future consistency",
                    "Favicon, social preview images, and email signature assets",
                    "Photography and imagery direction (or sourcing of appropriate stock)",
                    "Tone of voice that's professional, direct, and industry-appropriate",
                  ].map((f) => (
                    <CheckItem key={f} text={f} />
                  ))}
                </ul>
              </Card>
            </div>
            <Card>
              <h4 className="font-semibold mb-4" style={{ color: NAVY, fontFamily: "Poppins, sans-serif" }}>Positioning Statement</h4>
              <div
                className="p-4 rounded-xl mb-4"
                style={{ backgroundColor: NAVY, color: "white" }}
              >
                <p className="text-sm italic leading-relaxed">
                  &ldquo;KLB Consulting Group is Queensland&apos;s trusted partner for WHS compliance and ISO accreditation in civil construction.
                  We embed ourselves in your business so compliance becomes a competitive advantage — not a burden.&rdquo;
                </p>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                This positioning underpins all website copy, CTAs, and service descriptions — articulating the value you deliver
                in language that resonates with civil contractors evaluating compliance partners.
              </p>
              <div className="mt-4 pt-4 border-t" style={{ borderColor: "#F1F5F9" }}>
                <p className="text-xs font-semibold mb-2" style={{ color: NAVY }}>Tone of Voice</p>
                <div className="flex flex-wrap gap-2">
                  {["Authoritative", "Practical", "Direct", "Trustworthy", "Industry-native"].map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full font-medium"
                      style={{ backgroundColor: `${GOLD}15`, color: GOLD }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* ── 11. DELIVERABLES ── */}
        <section>
          <SectionLabel text="11 — Deliverables" />
          <SectionHeading>Everything Included</SectionHeading>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <h4 className="font-semibold mb-2" style={{ color: NAVY, fontFamily: "Poppins, sans-serif" }}>Website & Digital Infrastructure</h4>
              <DeliverableRow icon={Globe} title="Complete Website Build (7 pages)" description="Home, About, Services, Industries, Capability Statement, Projects, and Contact — fully designed, developed, and deployed." />
              <DeliverableRow icon={Search} title="SEO Foundations Package" description="Keyword research, on-page optimisation, structured data, sitemap, Google Search Console, and Analytics integration." />
              <DeliverableRow icon={BarChart3} title="Analytics Dashboard Setup" description="Google Analytics 4 configured with conversion tracking for forms, phone clicks, and document downloads." />
              <DeliverableRow icon={Shield} title="Google Business Profile" description="Setup, optimisation, and verification — maximising local search visibility in Queensland." />
            </Card>
            <Card>
              <h4 className="font-semibold mb-2" style={{ color: NAVY, fontFamily: "Poppins, sans-serif" }}>Content & Brand Assets</h4>
              <DeliverableRow icon={FileText} title="Professional Website Copy" description="All pages written in industry-appropriate language, optimised for both readers and search engines." />
              <DeliverableRow icon={Award} title="Digital Capability Statement" description="A formatted, downloadable capability statement page — ready for tender submission and client outreach." />
              <DeliverableRow icon={Star} title="Brand Asset Package" description="Favicon, social preview images, email signature template, and brand colour/typography guide." />
              <DeliverableRow icon={BookOpen} title="Handover & Training" description="Full handover documentation plus a 1-hour walkthrough so your team can manage the site independently." />
            </Card>
          </div>
        </section>

        {/* ── 12. TIMELINE ── */}
        <section>
          <SectionLabel text="12 — Timeline" />
          <SectionHeading>Two-Week Delivery Plan</SectionHeading>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <TimelineItem
                week="1"
                title="Week 1 — Discovery, Design & Content"
                items={[
                  "Kickoff session: brand, goals, content review",
                  "Keyword research and SEO brief",
                  "Design mockups: home page and key pages",
                  "Copy drafting: all 7 pages",
                  "Design review and feedback round",
                ]}
              />
              <TimelineItem
                week="2"
                title="Week 2 — Build, Review & Launch"
                items={[
                  "Full website development",
                  "Mobile optimisation and performance testing",
                  "SEO implementation across all pages",
                  "Analytics and Search Console setup",
                  "Client review and amends",
                  "Launch, Google submission, and handover",
                ]}
                last
              />
            </div>
            <div className="space-y-4">
              <Card>
                <h4 className="font-semibold mb-3" style={{ color: NAVY, fontFamily: "Poppins, sans-serif" }}>What We Need From You</h4>
                <ul className="space-y-2.5">
                  {[
                    "1 x 60-minute kickoff call",
                    "Logo files (or confirmation if new branding is needed)",
                    "Any existing case studies, project references, or credentials",
                    "Team photos or bio information",
                    "Review feedback within 48 hours of each draft",
                  ].map((f) => (
                    <CheckItem key={f} text={f} />
                  ))}
                </ul>
              </Card>
              <div
                className="p-4 rounded-xl"
                style={{ backgroundColor: `${GOLD}10`, border: `1px solid ${GOLD}30` }}
              >
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: GOLD }} />
                  <div>
                    <p className="font-semibold text-sm" style={{ color: NAVY }}>Fast Turnaround Commitment</p>
                    <p className="text-sm text-slate-600 leading-relaxed mt-1">
                      The two-week timeline is achievable with prompt feedback during the review stages.
                      We manage the project proactively so you don&apos;t have to chase anything.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 13. FUTURE GROWTH ── */}
        <section>
          <SectionLabel text="13 — Future Growth Opportunities" />
          <SectionHeading>Where We Can Take<br />This Next</SectionHeading>
          <p className="text-slate-600 mb-6 max-w-2xl leading-relaxed">
            The foundation we build now sets you up for everything below. None of these are required upfront —
            but the site architecture is designed to accommodate each without a rebuild.
          </p>
          <div className="space-y-3">
            {[
              {
                title: "Content Marketing & SEO Growth (Blog)",
                description: "A regular blog targeting industry-specific questions (ISO implementation guides, WHS checklist templates, tender compliance tips) drives compounding search traffic and positions KLB consultants as genuine thought leaders. Each article builds domain authority — making every future piece rank faster.",
              },
              {
                title: "Victoria Market Expansion (Dedicated Landing Pages)",
                description: "When KLB expands into Victoria, dedicated location landing pages targeting Victorian civil contractors are added to the existing site — preserving Queensland rankings while capturing new state-level traffic with geo-targeted content and localised SEO.",
              },
              {
                title: "Paid Advertising (Google Ads / LinkedIn)",
                description: "Once the site converts organically, paid advertising can accelerate lead volume significantly. Google Ads targeting high-intent compliance search terms, or LinkedIn campaigns targeting safety managers and project directors at mid-sized civil contractors, can be layered on top of your organic foundation.",
              },
              {
                title: "Email Marketing & Lead Nurture",
                description: "A capability statement download or resource guide creates an email list of prospects in the evaluation phase. An automated email sequence keeping KLB top-of-mind until they're ready to engage converts more leads without additional outreach effort from your BD team.",
              },
              {
                title: "CRM Integration & Pipeline Tracking",
                description: "As lead volume grows, integrating the website with a CRM (HubSpot, Pipedrive, or similar) creates a full view of the pipeline — from first visit to signed contract. Your BD hire can manage all leads in one place without spreadsheets.",
              },
            ].map((item) => (
              <FutureItem key={item.title} {...item} />
            ))}
          </div>
        </section>

        {/* ── 14. ONGOING SUPPORT ── */}
        <section>
          <div
            className="rounded-2xl p-8 md:p-12"
            style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #1E293B 100%)` }}
          >
            <SectionLabel text="14 — Optional Ongoing Support" />
            <h2
              className="text-3xl font-bold text-white mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Stay Ahead After Launch
            </h2>
            <p className="text-slate-300 mb-8 max-w-2xl leading-relaxed">
              A website at launch is a starting point, not the destination. Optional ongoing support keeps
              your digital presence performing and improving as your business grows.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  icon: BarChart3,
                  title: "Monthly SEO Reporting",
                  desc: "Keyword rankings, traffic trends, and lead conversion data — with plain-English commentary on what's working and what to do next.",
                },
                {
                  icon: Globe,
                  title: "Website Maintenance",
                  desc: "Regular updates, security monitoring, performance checks, and content updates as your services or team evolve.",
                },
                {
                  icon: TrendingUp,
                  title: "Growth Marketing",
                  desc: "Content creation, Google Ads management, LinkedIn outreach strategy, or email marketing — added as your goals grow.",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${GOLD}20` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: GOLD }} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-1" style={{ fontFamily: "Poppins, sans-serif" }}>{title}</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── NEXT STEPS / CTA ── */}
        <section className="pb-8">
          <SectionLabel text="Next Steps" />
          <SectionHeading>Ready to Move Forward?</SectionHeading>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-slate-700 leading-relaxed mb-6">
                We&apos;re ready to start as soon as you are. The two-week timeline begins from kickoff — and given
                your new BD team is onboarding now, earlier is better.
              </p>
              <div className="space-y-3">
                {[
                  { num: "1", text: "Review this proposal and confirm you'd like to proceed" },
                  { num: "2", text: "Sign off on scope and timeline" },
                  { num: "3", text: "Schedule a 60-minute kickoff call" },
                  { num: "4", text: "We handle everything from there" },
                ].map(({ num, text }) => (
                  <div key={num} className="flex items-center gap-4">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold"
                      style={{ backgroundColor: GOLD }}
                    >
                      {num}
                    </div>
                    <p className="text-slate-700 text-sm">{text}</p>
                  </div>
                ))}
              </div>
            </div>
            <Card>
              <h4 className="font-semibold mb-4" style={{ color: NAVY, fontFamily: "Poppins, sans-serif" }}>Contact Dynamic Code</h4>
              <div className="space-y-3">
                {[
                  { icon: Mail, text: "tyler@dynamiccode.com.au" },
                  { icon: Phone, text: "+61 (0) — [your number]" },
                  { icon: Globe, text: "dynamiccode.com.au" },
                  { icon: MapPin, text: "Brisbane, Queensland, Australia" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3">
                    <Icon className="w-4 h-4 flex-shrink-0" style={{ color: GOLD }} />
                    <span className="text-sm text-slate-700">{text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t" style={{ borderColor: "#F1F5F9" }}>
                <p className="text-xs text-slate-500 leading-relaxed">
                  This proposal is valid for 30 days from the date of issue. Pricing and timeline
                  are subject to confirmation upon scope review.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer
          className="border-t py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm text-slate-400"
          style={{ borderColor: "#E2E8F0" }}
        >
          <div>
            <p className="font-semibold" style={{ color: NAVY }}>Dynamic Code</p>
            <p>Technology & Digital Growth Partners · Brisbane, AU</p>
          </div>
          <div className="text-left md:text-right">
            <p>Prepared for KLB Consulting Group · May 2026</p>
            <p>Confidential — Not for distribution</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
