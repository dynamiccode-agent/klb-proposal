"use client";

import { useState } from "react";
import {
  FileText, Target, Globe, TrendingUp, CheckCircle, ArrowRight,
  Shield, Search, Layers, BarChart3, Megaphone, Clock, Building2,
  ChevronDown, ChevronUp, Printer, Mail, Phone, MapPin, Award,
  Zap, LineChart, BookOpen, Briefcase,
} from "lucide-react";

const A = "#FF0056"; // DC accent
const K = "#09090B"; // near-black
const W = "#FFFFFF";

/* ─── DC Logo SVG ────────────────────────────────────────── */
function DCLogo({ light = false, className = "" }: { light?: boolean; className?: string }) {
  const textColor = light ? "#E3E8F3" : K;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1983 709"
      className={className}
      aria-label="Dynamic Code"
    >
      <path d="M0.164062 226.37C0.164062 302.823 47.513 351.475 107.025 351.475C142.645 351.475 168.274 335.403 181.74 313.249V348H256.022V26.5488H181.74V139.057C166.971 116.903 139.17 102.133 107.025 102.133C47.513 102.133 0.164062 149.917 0.164062 226.37ZM181.74 226.804C181.74 265.465 156.98 286.751 128.744 286.751C100.943 286.751 75.7486 265.031 75.7486 226.37C75.7486 187.709 100.943 166.858 128.744 166.858C156.98 166.858 181.74 188.143 181.74 226.804ZM421.4 257.212L365.363 105.608H282.394L381.001 339.747L325.399 463.114H405.327L557.365 105.608H477.002L421.4 257.212ZM751.468 348H825.315V206.388C825.315 141.229 787.957 103.002 731.92 103.002C699.34 103.002 673.277 117.337 658.508 137.754V105.608H584.226V348H658.508V216.379C658.508 183.365 676.752 165.12 704.988 165.12C733.223 165.12 751.468 183.365 751.468 216.379V348ZM862.163 226.37C862.163 302.823 909.512 351.475 968.59 351.475C1004.64 351.475 1030.27 334.968 1043.74 313.683V348H1118.02V105.608H1043.74V139.926C1030.71 118.64 1005.08 102.133 969.024 102.133C909.512 102.133 862.163 149.917 862.163 226.37ZM1043.74 226.804C1043.74 265.465 1018.98 286.751 990.741 286.751C962.943 286.751 937.748 265.031 937.748 226.37C937.748 187.709 962.943 166.858 990.741 166.858C1018.98 166.858 1043.74 188.143 1043.74 226.804ZM1505.81 348H1579.65V206.388C1579.65 141.229 1540.99 103.002 1481.05 103.002C1445.86 103.002 1415.45 122.55 1399.38 148.179C1382.87 119.075 1353.34 103.002 1316.85 103.002C1285.14 103.002 1260.38 116.468 1246.04 136.016V105.608H1171.76V348H1246.04V216.379C1246.04 184.668 1264.29 167.292 1292.52 167.292C1320.76 167.292 1339 184.668 1339 216.379V348H1412.85V216.379C1412.85 184.668 1431.09 167.292 1459.33 167.292C1487.56 167.292 1505.81 184.668 1505.81 216.379V348ZM1631.61 348H1705.89V105.608H1631.61V348ZM1668.96 80.4138C1695.03 80.4138 1712.84 62.6038 1712.84 40.4488C1712.84 17.8608 1695.03 0.0507812 1668.96 0.0507812C1642.47 0.0507812 1624.66 17.8608 1624.66 40.4488C1624.66 62.6038 1642.47 80.4138 1668.96 80.4138ZM1744.95 226.804C1744.95 303.692 1795.34 351.475 1866.58 351.475C1927.39 351.475 1970.4 316.289 1983 260.253H1903.94C1897.42 278.063 1885.69 288.054 1865.28 288.054C1838.78 288.054 1820.53 267.203 1820.53 226.804C1820.53 186.406 1838.78 165.555 1865.28 165.555C1885.69 165.555 1897.85 176.415 1903.94 193.356H1983C1970.4 135.582 1927.39 102.133 1866.58 102.133C1795.34 102.133 1744.95 150.351 1744.95 226.804Z" fill={textColor} />
      <path d="M451.027 584.13C451.027 661.018 501.417 708.801 572.657 708.801C633.473 708.801 676.477 673.615 689.075 617.579H610.015C603.499 635.389 591.771 645.38 571.354 645.38C544.856 645.38 526.612 624.529 526.612 584.13C526.612 543.732 544.856 522.881 571.354 522.881C591.771 522.881 603.934 533.741 610.015 550.682H689.075C676.477 492.908 633.473 459.46 572.657 459.46C501.417 459.46 451.027 507.677 451.027 584.13ZM965.987 584.13C965.987 507.243 911.253 459.46 840.013 459.46C769.207 459.46 714.039 507.243 714.039 584.13C714.039 661.018 767.904 708.801 839.144 708.801C910.385 708.801 965.987 661.018 965.987 584.13ZM789.623 584.13C789.623 542.863 813.081 523.75 840.013 523.75C866.077 523.75 890.403 542.863 890.403 584.13C890.403 624.963 865.642 644.511 839.144 644.511C812.212 644.511 789.623 624.963 789.623 584.13ZM990.621 583.696C990.621 660.149 1037.97 708.801 1097.49 708.801C1133.11 708.801 1158.73 692.729 1172.2 670.575V705.326H1246.48V383.875H1172.2V496.383C1157.43 474.229 1129.63 459.46 1097.49 459.46C1037.97 459.46 990.621 507.243 990.621 583.696ZM1172.2 584.13C1172.2 622.791 1147.44 644.077 1119.2 644.077C1091.4 644.077 1066.21 622.357 1066.21 583.696C1066.21 545.035 1091.4 524.184 1119.2 524.184C1147.44 524.184 1172.2 545.469 1172.2 584.13ZM1407.08 518.971C1431.84 518.971 1452.69 534.175 1452.69 560.673H1359.73C1364.08 533.741 1382.76 518.971 1407.08 518.971ZM1523.07 624.963H1444.01C1437.92 637.995 1426.2 648.421 1405.34 648.421C1381.45 648.421 1361.91 633.651 1359.3 601.941H1527.41C1528.28 594.556 1528.71 587.171 1528.71 580.221C1528.71 506.374 1478.76 459.46 1407.95 459.46C1335.84 459.46 1285.45 507.243 1285.45 584.13C1285.45 661.018 1336.71 708.801 1407.95 708.801C1468.33 708.801 1511.34 672.312 1523.07 624.963Z" fill={textColor} />
      <circle cx="1593.48" cy="667.476" r="37.475" fill={A} />
    </svg>
  );
}

/* ─── Shared primitives ───────────────────────────────────── */
function PDFButton() {
  return (
    <button
      onClick={() => window.print()}
      className="no-print fixed top-5 right-5 z-50 flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold cursor-pointer transition-all duration-150 hover:opacity-90 active:scale-95 shadow-lg"
      style={{ backgroundColor: K, color: W }}
      aria-label="Export as PDF"
    >
      <Printer className="w-3.5 h-3.5" />
      Export PDF
    </button>
  );
}

function Label({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2.5 mb-5">
      <span className="w-5 h-px" style={{ backgroundColor: A }} />
      <span className="text-[10px] font-bold tracking-[0.18em] uppercase" style={{ color: A }}>
        {text}
      </span>
    </div>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl md:text-[2.6rem] font-bold leading-[1.1] tracking-[-0.03em] mb-6" style={{ color: K }}>
      {children}
    </h2>
  );
}

function Check({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3 text-sm text-zinc-600 leading-relaxed">
      <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: A }} />
      {text}
    </li>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-white rounded-2xl border border-zinc-200 p-6 ${className}`}>
      {children}
    </div>
  );
}

function Divider() {
  return <div className="h-px w-full bg-zinc-100 my-16" />;
}

function TimelineItem({ week, title, items, last = false }: {
  week: string; title: string; items: string[]; last?: boolean;
}) {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col items-center">
        <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 text-white text-xs font-bold" style={{ backgroundColor: A }}>
          {week}
        </div>
        {!last && <div className="w-px flex-1 mt-2 bg-zinc-200" />}
      </div>
      <div className="pb-8">
        <h4 className="font-semibold text-sm mb-2" style={{ color: K }}>{title}</h4>
        <ul className="space-y-1.5">
          {items.map((t) => (
            <li key={t} className="text-sm text-zinc-500 flex gap-2 items-start">
              <span className="shrink-0 mt-[3px] text-[10px]" style={{ color: A }}>▸</span>{t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Deliverable({ icon: Icon, title, desc }: { icon: React.ElementType; title: string; desc: string }) {
  return (
    <div className="flex gap-4 py-4 border-b border-zinc-100 last:border-0">
      <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 bg-zinc-50 border border-zinc-100">
        <Icon className="w-4 h-4" style={{ color: A }} />
      </div>
      <div>
        <p className="font-semibold text-sm mb-0.5" style={{ color: K }}>{title}</p>
        <p className="text-xs text-zinc-500 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function PageCard({ num, title, purpose }: { num: string; title: string; purpose: string }) {
  return (
    <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-zinc-200 hover:border-zinc-300 transition-colors duration-150">
      <span className="text-[10px] font-bold w-5 h-5 rounded flex items-center justify-center shrink-0 text-white" style={{ backgroundColor: K }}>{num}</span>
      <div>
        <p className="font-semibold text-sm" style={{ color: K }}>{title}</p>
        <p className="text-xs text-zinc-500 mt-0.5 leading-relaxed">{purpose}</p>
      </div>
    </div>
  );
}

function Accordion({ title, description }: { title: string; description: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-zinc-200 rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-zinc-50 transition-colors duration-150 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-sm" style={{ color: K }}>{title}</span>
        {open ? <ChevronUp className="w-4 h-4 text-zinc-400" /> : <ChevronDown className="w-4 h-4 text-zinc-400" />}
      </button>
      {open && (
        <div className="px-4 pb-4 pt-0 bg-white border-t border-zinc-100">
          <p className="text-sm text-zinc-600 leading-relaxed pt-3">{description}</p>
        </div>
      )}
    </div>
  );
}

/* ─── Main Page ───────────────────────────────────────────── */
export default function ProposalPage() {
  return (
    <div className="min-h-screen bg-white">
      <PDFButton />

      {/* ── COVER ──────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col" style={{ backgroundColor: K }}>
        {/* Subtle noise / grain overlay */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }}
        />
        {/* Accent dot glow */}
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] opacity-10 pointer-events-none"
          style={{ background: `radial-gradient(circle at 0% 100%, ${A} 0%, transparent 60%)` }}
        />

        {/* Nav bar */}
        <div className="relative z-10 flex items-center justify-between px-8 md:px-14 pt-10 pb-0">
          <DCLogo light className="h-6 w-auto" />
          <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-zinc-600">
            Confidential Proposal, May 2026
          </span>
        </div>

        {/* Hero content */}
        <div className="relative z-10 flex-1 flex flex-col justify-center px-8 md:px-14 py-20 max-w-5xl mx-auto w-full">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase mb-10 w-fit border"
            style={{ borderColor: `${A}40`, color: A, backgroundColor: `${A}12` }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: A }} />
            Digital Growth Proposal
          </div>

          <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-zinc-500 mb-4">
            Prepared for
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-3 tracking-[-0.04em] leading-[1.05]">
            KLB Consulting
          </h1>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-[-0.04em] leading-[1.05] mb-10" style={{ color: A }}>
            Group.
          </h1>

          <p className="text-zinc-400 max-w-xl leading-relaxed text-base mb-14">
            A strategic digital presence and lead generation system,designed to establish authority,
            win tenders, and grow your consultancy across Queensland and beyond.
          </p>

          <div className="flex flex-wrap gap-x-12 gap-y-6">
            {[
              { v: "2 Weeks", l: "Delivery" },
              { v: "7 Pages", l: "Core Website" },
              { v: "100%", l: "Custom Build" },
              { v: "Full SEO", l: "Foundations" },
            ].map(({ v, l }) => (
              <div key={l}>
                <p className="text-2xl font-bold text-white tracking-tight">{v}</p>
                <p className="text-[11px] text-zinc-500 mt-0.5 tracking-wider uppercase">{l}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cover footer */}
        <div className="relative z-10 px-8 md:px-14 py-8 border-t border-white/5">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs text-zinc-600 max-w-5xl mx-auto w-full">
            <span>KLB Consulting Group, WHS & ISO Compliance, Queensland</span>
            <span>dynamiccode.com.au</span>
          </div>
        </div>
      </section>

      {/* ── BODY ───────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-12 py-20 space-y-20">

        {/* ── 01 EXECUTIVE SUMMARY ───────────────────────── */}
        <section>
          <Label text="01" />
          <H2>Building a Digital Foundation<br />That Works as Hard as You Do</H2>
          <div className="grid md:grid-cols-5 gap-10">
            <div className="md:col-span-3 space-y-4">
              <p className="text-zinc-600 leading-relaxed text-[15px]">
                KLB Consulting Group is an established WHS and ISO compliance consultancy with real expertise,
                recurring client relationships, and a strong service offering. The gap isn&apos;t the work —
                it&apos;s the <strong className="text-zinc-900 font-semibold">digital presence that reflects it.</strong>
              </p>
              <p className="text-zinc-600 leading-relaxed text-[15px]">
                Civil construction companies researching compliance partners go online first. Tender committees
                vet suppliers digitally before a single phone call. Right now, KLB&apos;s online presence
                doesn&apos;t match the quality of the work delivered on the ground.
              </p>
              <p className="text-zinc-600 leading-relaxed text-[15px]">
                This proposal outlines a strategic digital engagement,not a brochure website,designed to
                establish authority, generate inbound enquiries, support your new business development staff,
                and position KLB as the premium compliance partner for civil contractors across Queensland.
              </p>
              <div className="mt-6 p-5 rounded-xl border-l-[3px] bg-zinc-50 border-zinc-200" style={{ borderLeftColor: A }}>
                <p className="text-sm font-semibold text-zinc-900 mb-1">Our recommendation</p>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  A professionally designed, SEO-optimised website with structured lead capture, a clear capability
                  statement, and digital infrastructure that supports growth,delivered within two weeks.
                </p>
              </div>
            </div>
            <div className="md:col-span-2 space-y-5">
              {[
                { icon: Shield, l: "Authority & Trust", d: "Position KLB as the go-to compliance partner in civil construction" },
                { icon: TrendingUp, l: "Lead Generation", d: "A system that brings inbound enquiries, not just a static presence" },
                { icon: Search, l: "Google Visibility", d: "SEO foundations that compound in value over time" },
                { icon: FileText, l: "Tender Ready", d: "Digital credibility that wins contracts before you walk in the room" },
              ].map(({ icon: Icon, l, d }) => (
                <div key={l} className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-zinc-50 border border-zinc-200">
                    <Icon className="w-4 h-4" style={{ color: A }} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-zinc-900">{l}</p>
                    <p className="text-xs text-zinc-500 leading-relaxed mt-0.5">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Divider />

        {/* ── 02 UNDERSTANDING YOUR BUSINESS ─────────────── */}
        <section>
          <Label text="02" />
          <H2>Where KLB Consulting<br />Sits in the Market</H2>
          <div className="grid md:grid-cols-2 gap-5">
            <Card>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center">
                  <Briefcase className="w-4 h-4" style={{ color: A }} />
                </div>
                <h3 className="font-semibold text-zinc-900">Your Services</h3>
              </div>
              <ul className="space-y-2.5">
                {["WHS (Work Health & Safety) Compliance", "ISO Accreditation Support & Management", "Lead Auditing for Civil Projects", "Site Inspections & Compliance Reporting", "Embedded Consultancy Support (On-Site)"].map(t => <Check key={t} text={t} />)}
              </ul>
            </Card>
            <Card>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center">
                  <Target className="w-4 h-4" style={{ color: A }} />
                </div>
                <h3 className="font-semibold text-zinc-900">Your Target Market</h3>
              </div>
              <ul className="space-y-2.5">
                {["Civil construction companies in Queensland", "10–50 employees, $2M–$50M turnover", "Companies requiring ISO accreditation for tenders", "Contractors needing embedded WHS support", "Future expansion: Victoria market"].map(t => <Check key={t} text={t} />)}
              </ul>
            </Card>
          </div>
        </section>

        {/* ── 03 OBJECTIVES ──────────────────────────────── */}
        <section>
          <Label text="03" />
          <H2>What We&apos;re Building Towards</H2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { n: "01", icon: Award, t: "Establish Authority", d: "Position KLB as the credible, experienced compliance partner civil contractors choose with confidence." },
              { n: "02", icon: TrendingUp, t: "Generate Inbound Leads", d: "Create a digital system that attracts and converts enquiries from companies actively searching for support." },
              { n: "03", icon: Search, t: "Improve Google Visibility", d: "Rank for the search terms your clients use, driving consistent, high-intent traffic over time." },
              { n: "04", icon: FileText, t: "Win Better Tenders", d: "Professional credibility that gives tender committees confidence before you step in the room." },
            ].map(({ n, icon: Icon, t, d }) => (
              <div key={n} className="relative bg-white border border-zinc-200 rounded-2xl p-5 overflow-hidden">
                <span className="absolute top-4 right-4 text-5xl font-black tracking-tight" style={{ color: "#F4F4F5", fontFamily: "Poppins, sans-serif" }}>{n}</span>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-4 bg-zinc-50 border border-zinc-100">
                  <Icon className="w-4 h-4" style={{ color: A }} />
                </div>
                <h4 className="font-semibold text-sm text-zinc-900 mb-1.5">{t}</h4>
                <p className="text-xs text-zinc-500 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 04 WHY DIGITAL CREDIBILITY MATTERS ─────────── */}
        <section>
          <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: K }}>
            <div className="p-8 md:p-12">
              <Label text="04" />
              <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] text-white mb-8 leading-[1.1]">
                Why Digital Credibility Changes<br />
                <span style={{ color: A }}>Everything in Civil Construction</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { icon: Building2, t: "Tenders Are Won Before the Meeting", d: "Procurement managers and safety officers research compliance consultants online before making contact. An outdated or absent web presence is a trust signal,the wrong kind. A professional website with clear credentials gives you a head start before a single word is spoken." },
                  { icon: Globe, t: "Your Clients Are Searching Right Now", d: "Civil contractors actively search for 'WHS consultant Queensland', 'ISO 45001 compliance civil', and 'safety management systems'. If KLB isn't visible in those results, your competitors are. SEO isn't a bonus,it's how inbound leads become predictable." },
                  { icon: Award, t: "Digital Trust = Commercial Trust", d: "The civil construction industry is relationship-driven,but those relationships now start online. A premium digital presence signals that KLB operates at the same standard you demand from your clients: professionally, systematically, with attention to detail." },
                ].map(({ icon: Icon, t, d }) => (
                  <div key={t}>
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-4 border" style={{ borderColor: `${A}30`, backgroundColor: `${A}15` }}>
                      <Icon className="w-4 h-4" style={{ color: A }} />
                    </div>
                    <h4 className="font-semibold text-white text-sm mb-2 leading-snug">{t}</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 05 STRATEGY ────────────────────────────────── */}
        <section>
          <Label text="05" />
          <H2>A Business Growth Tool,<br />Not an Online Brochure</H2>
          <p className="text-zinc-500 text-[15px] mb-8 max-w-2xl leading-relaxed">
            Most proposals deliver a website. We&apos;re recommending a digital growth system,where every component serves a measurable business outcome.
          </p>
          <div className="space-y-3">
            {[
              { n: "1", icon: Globe, t: "Professional Website,Authority First", items: ["Designed to communicate expertise immediately, not just describe services", "Built around the decision criteria of civil contractors evaluating compliance partners", "Showcases credentials, methodology, and track record in a format tender committees trust", "Mobile-optimised and fast-loading,critical for on-site access by project managers"] },
              { n: "2", icon: Search, t: "SEO Foundations,Long-Term Visibility", items: ["Keyword research targeting high-intent terms used by civil construction companies", "On-page SEO across all core pages, structured data, and metadata", "Google Business Profile setup and optimisation", "Google Search Console and Analytics configured from day one"] },
              { n: "3", icon: Megaphone, t: "Lead Generation Architecture", items: ["Strategic call-to-action placement throughout the site", "Enquiry forms designed to capture qualified leads, not just contact details", "Capability statement download as a lead magnet for tender-stage contacts", "Clear conversion paths from awareness to enquiry"] },
              { n: "4", icon: Layers, t: "Professional Positioning", items: ["Consistent brand presentation across all digital touchpoints", "Capability statement page positioned for both web visitors and document submissions", "Team and expertise section that humanises the business and builds trust", "Industry-specific language that resonates with civil contractors"] },
            ].map(({ n, icon: Icon, t, items }) => (
              <Card key={n}>
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: K }}>
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2.5 mb-3">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wider" style={{ backgroundColor: `${A}15`, color: A }}>Step {n}</span>
                      <h4 className="font-semibold text-sm text-zinc-900">{t}</h4>
                    </div>
                    <ul className="space-y-1.5">
                      {items.map(d => (
                        <li key={d} className="text-sm text-zinc-500 flex gap-2 items-start">
                          <ArrowRight className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: A }} />{d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* ── 06 WEBSITE SCOPE ───────────────────────────── */}
        <section>
          <Label text="06" />
          <H2>What&apos;s Being Built</H2>
          <div className="grid md:grid-cols-2 gap-5 mb-6">
            <Card>
              <h3 className="font-semibold text-zinc-900 mb-4">Core Features</h3>
              <ul className="space-y-2.5">
                {["Modern responsive design,mobile, tablet, and desktop", "Fast performance and Core Web Vitals compliance", "SEO foundations built in from the start,not added after", "Enquiry and contact forms with email notifications", "Services pages with clear scope, methodology, and outcomes", "Capability showcase with case study framework", "About/team section that builds trust and credibility", "Google Analytics 4 and Search Console integration"].map(t => <Check key={t} text={t} />)}
              </ul>
            </Card>
            <div className="space-y-5">
              <Card>
                <h3 className="font-semibold text-zinc-900 mb-4">Technical Standards</h3>
                <ul className="space-y-2.5">
                  {["Built on Next.js,fast, scalable, and SEO-optimised", "Deployed on enterprise-grade hosting with SSL", "Mobile-first development approach", "Structured data markup for Google rich results", "Clean code structure for easy future updates"].map(t => <Check key={t} text={t} />)}
                </ul>
              </Card>
              <div className="p-4 rounded-xl border border-zinc-200 bg-zinc-50">
                <p className="text-sm font-semibold text-zinc-900 mb-1">Built to Scale</p>
                <p className="text-sm text-zinc-500 leading-relaxed">The site architecture supports blog, additional service pages, Victoria market landing pages, and team growth,without starting over.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 07 SITEMAP ─────────────────────────────────── */}
        <section>
          <Label text="07" />
          <H2>Proposed Website Structure</H2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { n: "1", t: "Home", p: "First impression, authority signal, lead conversion hub" },
              { n: "2", t: "About KLB", p: "Team credentials, company story, values, and approach" },
              { n: "3", t: "Services", p: "WHS, ISO, auditing, inspections, embedded consultancy" },
              { n: "4", t: "Industries", p: "Civil construction focus, target market alignment" },
              { n: "5", t: "Capability Statement", p: "Downloadable for tender submissions, formal credentials" },
              { n: "6", t: "Projects / Experience", p: "Case studies, outcomes, industry experience showcase" },
              { n: "7", t: "Contact", p: "Enquiry form, phone, email, location, maps" },
              { n: "+", t: "Blog (Phase 2)", p: "Thought leadership content to drive ongoing SEO" },
            ].map(({ n, t, p }) => <PageCard key={n} num={n} title={t} purpose={p} />)}
          </div>
        </section>

        {/* ── 08 SEO ─────────────────────────────────────── */}
        <section>
          <Label text="08" />
          <H2>Getting Found When It Matters</H2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <p className="text-zinc-600 leading-relaxed text-[15px]">SEO isn&apos;t magic,it&apos;s structure. We build every page to rank, not just to look good. Here&apos;s the foundational strategy included in your build:</p>
              <Card>
                <h4 className="font-semibold text-zinc-900 mb-4">Included in Website Build</h4>
                <ul className="space-y-2.5">
                  {["Keyword research for Queensland civil construction compliance terms", "On-page SEO: title tags, meta descriptions, heading hierarchy", "Structured data markup (LocalBusiness, Service schema)", "XML sitemap and robots.txt configuration", "Google Business Profile setup and optimisation", "Google Search Console and Analytics 4 integration", "Page speed optimisation and Core Web Vitals compliance", "Internal linking structure for authority distribution"].map(t => <Check key={t} text={t} />)}
                </ul>
              </Card>
            </div>
            <div className="space-y-4">
              <Card>
                <h4 className="font-semibold text-zinc-900 mb-4">Target Search Terms</h4>
                <div className="space-y-0">
                  {[
                    { t: "WHS consultant Queensland", badge: "High intent", c: "#16A34A", bg: "#DCFCE7" },
                    { t: "ISO 45001 accreditation civil construction", badge: "High intent", c: "#16A34A", bg: "#DCFCE7" },
                    { t: "safety management system Queensland", badge: "High intent", c: "#16A34A", bg: "#DCFCE7" },
                    { t: "WHS audit civil contractor", badge: "High intent", c: "#16A34A", bg: "#DCFCE7" },
                    { t: "compliance consultant construction QLD", badge: "Medium", c: "#D97706", bg: "#FEF9C3" },
                    { t: "embedded safety consultant Brisbane", badge: "Local", c: "#2563EB", bg: "#DBEAFE" },
                  ].map(({ t, badge, c, bg }) => (
                    <div key={t} className="flex items-center justify-between py-2.5 border-b last:border-0 border-zinc-100">
                      <span className="text-sm text-zinc-600">{t}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold shrink-0 ml-3" style={{ color: c, backgroundColor: bg }}>{badge}</span>
                    </div>
                  ))}
                </div>
              </Card>
              <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800">
                <p className="text-sm font-semibold text-white mb-1">Long-Term Compounding Value</p>
                <p className="text-sm text-zinc-400 leading-relaxed">SEO traffic is free and grows over time. A well-optimised site continues generating leads without ongoing spend,building a genuine business asset.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 09 LEAD GEN ────────────────────────────────── */}
        <section>
          <Label text="09" />
          <H2>Turning Visitors into Enquiries</H2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Target, t: "Strategic CTAs", d: "Every page has a clear, contextually relevant call-to-action designed to move visitors toward contact,not just inform them." },
              { icon: FileText, t: "Capability Statement Download", d: "A downloadable capability statement positioned as both a tender tool and a lead magnet,captures contact details of high-intent visitors." },
              { icon: Phone, t: "Frictionless Contact", d: "Multiple contact methods with mobile-friendly tap-to-call, making it easy to connect from any device." },
              { icon: BookOpen, t: "Services as Sales Pages", d: "Each service page is structured to address specific client concerns, demonstrate expertise, and prompt enquiry." },
              { icon: LineChart, t: "Analytics & Tracking", d: "Google Analytics 4 configured to track form submissions, phone clicks, and document downloads." },
              { icon: Globe, t: "BD Staff Support", d: "The site works alongside your new BD hire,a professional reference point to share during outreach and follow-up." },
            ].map(({ icon: Icon, t, d }) => (
              <Card key={t}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-4 bg-zinc-50 border border-zinc-100">
                  <Icon className="w-4 h-4" style={{ color: A }} />
                </div>
                <h4 className="font-semibold text-sm text-zinc-900 mb-1.5">{t}</h4>
                <p className="text-xs text-zinc-500 leading-relaxed">{d}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* ── 10 BRANDING ────────────────────────────────── */}
        <section>
          <Label text="10" />
          <H2>Presenting KLB at the Standard You Deserve</H2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <p className="text-zinc-600 leading-relaxed text-[15px]">Your brand is the first impression,and in civil construction, first impressions determine whether a prospect picks up the phone or moves on.</p>
              <Card>
                <h4 className="font-semibold text-zinc-900 mb-4">What We&apos;ll Deliver</h4>
                <ul className="space-y-2.5">
                  {["Consistent visual identity across all website pages", "Professional colour palette and typography system", "Brand guidelines document for future consistency", "Favicon, social preview images, and email signature assets", "Photography direction or appropriate stock imagery sourcing", "Tone of voice that&apos;s professional, direct, and industry-appropriate"].map(t => <Check key={t} text={t} />)}
                </ul>
              </Card>
            </div>
            <Card>
              <h4 className="font-semibold text-zinc-900 mb-4">Positioning Statement</h4>
              <div className="p-5 rounded-xl mb-4" style={{ backgroundColor: K }}>
                <p className="text-sm italic leading-relaxed text-zinc-300">
                  &ldquo;KLB Consulting Group is Queensland&apos;s trusted partner for WHS compliance and ISO accreditation in civil construction. We embed ourselves in your business so compliance becomes a competitive advantage,not a burden.&rdquo;
                </p>
              </div>
              <div className="pt-3 border-t border-zinc-100">
                <p className="text-xs font-semibold text-zinc-900 mb-2">Tone of Voice</p>
                <div className="flex flex-wrap gap-2">
                  {["Authoritative", "Practical", "Direct", "Trustworthy", "Industry-native"].map(t => (
                    <span key={t} className="text-[11px] px-2.5 py-1 rounded-full font-medium" style={{ backgroundColor: `${A}12`, color: A }}>{t}</span>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* ── 11 DELIVERABLES ────────────────────────────── */}
        <section>
          <Label text="11" />
          <H2>Everything Included</H2>
          <div className="grid md:grid-cols-2 gap-5">
            <Card>
              <h4 className="font-semibold text-zinc-900 mb-1">Website & Digital Infrastructure</h4>
              <Deliverable icon={Globe} title="Complete Website Build (7 pages)" desc="Home, About, Services, Industries, Capability Statement, Projects, and Contact,fully designed, developed, and deployed." />
              <Deliverable icon={Search} title="SEO Foundations Package" desc="Keyword research, on-page optimisation, structured data, sitemap, Google Search Console, and Analytics integration." />
              <Deliverable icon={BarChart3} title="Analytics Dashboard Setup" desc="Google Analytics 4 configured with conversion tracking for forms, phone clicks, and document downloads." />
              <Deliverable icon={Shield} title="Google Business Profile" desc="Setup, optimisation, and verification,maximising local search visibility in Queensland." />
            </Card>
            <Card>
              <h4 className="font-semibold text-zinc-900 mb-1">Content & Brand Assets</h4>
              <Deliverable icon={FileText} title="Professional Website Copy" desc="All pages written in industry-appropriate language, optimised for both readers and search engines." />
              <Deliverable icon={Award} title="Digital Capability Statement" desc="A formatted, downloadable capability statement page,ready for tender submission and client outreach." />
              <Deliverable icon={Globe} title="Brand Asset Package" desc="Favicon, social preview images, email signature template, and brand colour/typography guide." />
              <Deliverable icon={BookOpen} title="Handover & Training" desc="Full handover documentation plus a 1-hour walkthrough so your team can manage the site independently." />
            </Card>
          </div>
        </section>

        {/* ── 12 TIMELINE ────────────────────────────────── */}
        <section>
          <Label text="12" />
          <H2>Two-Week Delivery Plan</H2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <TimelineItem week="1" title="Week 1,Discovery, Design & Content"
                items={["Kickoff session: brand, goals, content review", "Keyword research and SEO brief", "Design mockups: home page and key pages", "Copy drafting: all 7 pages", "Design review and feedback round"]} />
              <TimelineItem week="2" title="Week 2,Build, Review & Launch" last
                items={["Full website development", "Mobile optimisation and performance testing", "SEO implementation across all pages", "Analytics and Search Console setup", "Client review and amends", "Launch, Google submission, and handover"]} />
            </div>
            <div className="space-y-4">
              <Card>
                <h4 className="font-semibold text-zinc-900 mb-4">What We Need From You</h4>
                <ul className="space-y-2.5">
                  {["1 x 60-minute kickoff call", "Logo files (or confirmation if new branding is needed)", "Any existing case studies, project references, or credentials", "Team photos or bio information", "Review feedback within 48 hours of each draft"].map(t => <Check key={t} text={t} />)}
                </ul>
              </Card>
              <div className="p-4 rounded-xl border border-zinc-200">
                <div className="flex gap-3 items-start">
                  <Clock className="w-4 h-4 shrink-0 mt-0.5" style={{ color: A }} />
                  <div>
                    <p className="font-semibold text-sm text-zinc-900">Fast Turnaround Commitment</p>
                    <p className="text-sm text-zinc-500 leading-relaxed mt-1">The two-week timeline is achievable with prompt feedback. We manage the project proactively so you don&apos;t have to chase anything.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 13 FUTURE GROWTH ───────────────────────────── */}
        <section>
          <Label text="13" />
          <H2>Where We Can Take This Next</H2>
          <p className="text-zinc-500 mb-6 max-w-2xl leading-relaxed text-[15px]">The foundation we build now sets you up for everything below. None are required upfront,the architecture is designed to accommodate each without a rebuild.</p>
          <div className="space-y-2.5">
            {[
              { t: "Content Marketing & SEO Growth (Blog)", d: "A regular blog targeting industry-specific questions drives compounding search traffic and positions KLB consultants as genuine thought leaders. Each article builds domain authority,making every future piece rank faster." },
              { t: "Victoria Market Expansion (Dedicated Landing Pages)", d: "When KLB expands into Victoria, dedicated location landing pages targeting Victorian civil contractors are added to the existing site,preserving Queensland rankings while capturing new state-level traffic." },
              { t: "Paid Advertising (Google Ads / LinkedIn)", d: "Once the site converts organically, paid advertising can accelerate lead volume significantly. Google Ads targeting high-intent compliance search terms, or LinkedIn campaigns targeting safety managers at mid-sized civil contractors." },
              { t: "Email Marketing & Lead Nurture", d: "A capability statement download creates an email list of prospects in the evaluation phase. An automated email sequence keeping KLB top-of-mind converts more leads without additional outreach effort from your BD team." },
              { t: "CRM Integration & Pipeline Tracking", d: "As lead volume grows, integrating the website with a CRM creates a full view of the pipeline,from first visit to signed contract. Your BD hire can manage all leads in one place without spreadsheets." },
            ].map(item => <Accordion key={item.t} title={item.t} description={item.d} />)}
          </div>
        </section>

        {/* ── 14 ONGOING SUPPORT ─────────────────────────── */}
        <section>
          <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: K }}>
            <div className="p-8 md:p-12">
              <Label text="14" />
              <h2 className="text-3xl font-bold tracking-[-0.03em] text-white mb-4">Stay Ahead After Launch</h2>
              <p className="text-zinc-400 mb-10 max-w-xl leading-relaxed text-[15px]">A website at launch is a starting point. Optional ongoing support keeps your digital presence performing and improving as your business grows.</p>
              <div className="grid sm:grid-cols-3 gap-8">
                {[
                  { icon: BarChart3, t: "Monthly SEO Reporting", d: "Keyword rankings, traffic trends, and lead conversion data,with plain-English commentary on what to do next." },
                  { icon: Globe, t: "Website Maintenance", d: "Regular updates, security monitoring, performance checks, and content updates as your services or team evolve." },
                  { icon: TrendingUp, t: "Growth Marketing", d: "Content creation, Google Ads management, LinkedIn strategy, or email marketing,added as your goals grow." },
                ].map(({ icon: Icon, t, d }) => (
                  <div key={t} className="flex gap-4">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border" style={{ borderColor: `${A}30`, backgroundColor: `${A}15` }}>
                      <Icon className="w-4 h-4" style={{ color: A }} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm mb-1">{t}</h4>
                      <p className="text-zinc-400 text-xs leading-relaxed">{d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── NEXT STEPS ─────────────────────────────────── */}
        <section className="pb-4">
          <Label text="Next Steps" />
          <H2>Ready to Move Forward?</H2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-zinc-600 leading-relaxed text-[15px] mb-8">We&apos;re ready to start as soon as you are. The two-week timeline begins from kickoff,and given your new BD team is onboarding now, earlier is better.</p>
              <div className="space-y-4">
                {[
                  { n: "1", t: "Review this proposal and confirm you'd like to proceed" },
                  { n: "2", t: "Sign off on scope and timeline" },
                  { n: "3", t: "Schedule a 60-minute kickoff call" },
                  { n: "4", t: "We handle everything from there" },
                ].map(({ n, t }) => (
                  <div key={n} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-white text-xs font-bold" style={{ backgroundColor: A }}>{n}</div>
                    <p className="text-zinc-600 text-sm">{t}</p>
                  </div>
                ))}
              </div>
            </div>
            <Card>
              <h4 className="font-semibold text-zinc-900 mb-5">Contact Dynamic Code</h4>
              <div className="space-y-3.5">
                {[
                  { icon: Mail, t: "tyler@dynamiccode.com.au" },
                  { icon: Globe, t: "dynamiccode.com.au" },
                  { icon: MapPin, t: "Brisbane, Queensland, Australia" },
                ].map(({ icon: Icon, t }) => (
                  <div key={t} className="flex items-center gap-3">
                    <Icon className="w-4 h-4 shrink-0" style={{ color: A }} />
                    <span className="text-sm text-zinc-600">{t}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-zinc-100">
                <p className="text-xs text-zinc-400 leading-relaxed">This proposal is valid for 30 days from the date of issue. Pricing and timeline are subject to confirmation upon scope review.</p>
              </div>
            </Card>
          </div>
        </section>

        {/* ── INDUSTRY EXPERIENCE ────────────────────────── */}
        <section>
          <Divider />
          <div className="text-center mb-14">
            <Label text="Industry Experience" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] mb-4" style={{ color: K }}>
              Trusted Across Australia
            </h2>
            <p className="text-zinc-500 max-w-xl mx-auto text-[15px] leading-relaxed">
              Dynamic Code works with operational businesses, hospitality groups, scalable startups, and
              enterprise-focused brands across Australia,delivering custom technology, digital presence,
              and growth systems built for commercial outcomes.
            </p>
          </div>

          {/* Logo grid */}
          <div className="border border-zinc-200 rounded-2xl overflow-hidden mb-6">
            {[
              ["LMCT+", "Circl Group", "ChekkU", "Cunnies Gummies"],
              ["EBT", "Flipside", "XXXX Gold", "Star Hotels"],
              ["Lion", "Value Liquor Group", "Liquor Legends", "Starlink"],
            ].map((row, ri) => (
              <div key={ri} className={`grid grid-cols-2 sm:grid-cols-4 ${ri < 2 ? "border-b border-zinc-200" : ""}`}>
                {row.map((name, ci) => {
                  const isStarlink = name === "Starlink";
                  return (
                    <div
                      key={name}
                      className={`group flex flex-col items-center justify-center py-8 px-4 bg-white hover:bg-zinc-50 transition-colors duration-150 ${ci < row.length - 1 ? "border-r border-zinc-200" : ""}`}
                    >
                      <span
                        className="font-semibold text-sm sm:text-base tracking-tight text-center transition-colors duration-150 group-hover:text-zinc-900"
                        style={{ color: "#D4D4D8" }}
                      >
                        {name}
                        {isStarlink && (
                          <span className="block text-[9px] font-normal tracking-wider uppercase text-zinc-400 mt-1">Integration Partner</span>
                        )}
                      </span>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
          <p className="text-center text-[11px] text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Starlink: integrated booking and workflow systems connected with Starlink order flows.
            Not all engagements represent a direct client relationship,some reflect integration and build partnerships.
          </p>

          {/* Metrics strip */}
          <div className="rounded-2xl mt-10 overflow-hidden" style={{ backgroundColor: K }}>
            <div className="grid grid-cols-2 md:grid-cols-4">
              {[
                { v: "20+", l: "Custom Systems & Integrations" },
                { v: "8+", l: "Industries Across Australia" },
                { v: "100%", l: "Australia-Wide Delivery" },
                { v: "∞", l: "Scalable Web & Software" },
              ].map(({ v, l }, i) => (
                <div key={l} className={`py-10 px-8 text-center ${i < 3 ? "border-r border-white/5" : ""}`}>
                  <p className="text-3xl font-bold tracking-tight mb-2" style={{ color: A }}>{v}</p>
                  <p className="text-xs text-zinc-500 leading-snug">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY DYNAMIC CODE ───────────────────────────── */}
        <section>
          <Divider />
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <Label text="Why Us" />
              <h3 className="text-2xl md:text-3xl font-bold tracking-[-0.03em] mb-4" style={{ color: K }}>
                Why Businesses Work With Dynamic Code
              </h3>
              <p className="text-zinc-500 text-[15px] leading-relaxed">
                We sit at the intersection of technology, marketing, and operations. The systems we build
                don&apos;t just look good,they generate pipeline, reduce manual work, and compound in value over time.
              </p>
            </div>
            <div className="space-y-2">
              {[
                { t: "Custom Operational Systems", d: "Purpose-built software and integrations aligned to how your business actually runs,not generic tools bolted together." },
                { t: "Scalable Technology Thinking", d: "Architecture designed to grow with you. We build foundations, not one-offs." },
                { t: "Fast Development & Rollout", d: "Two-week delivery timelines for structured engagements. Speed without sacrificing quality." },
                { t: "Marketing + Technology Combined", d: "Strategy, copy, design, and build under one roof. No agency handoffs, no misaligned outputs." },
                { t: "SEO & Lead Generation Expertise", d: "We build websites that rank and convert,not just websites that exist." },
                { t: "Workflow Automation & Integrations", d: "From booking systems to CRM pipelines,we connect your tools and eliminate manual process." },
                { t: "Cross-Industry Operational Experience", d: "Hospitality, retail, construction, tech, beverage,we understand how operational businesses work." },
              ].map(({ t, d }) => (
                <div key={t} className="flex gap-3 p-3.5 rounded-xl hover:bg-zinc-50 transition-colors duration-150">
                  <span className="w-1 h-1 rounded-full mt-2 shrink-0" style={{ backgroundColor: A }} />
                  <div>
                    <p className="font-semibold text-sm text-zinc-900">{t}</p>
                    <p className="text-xs text-zinc-500 leading-relaxed mt-0.5">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-zinc-100 py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <DCLogo className="h-5 w-auto" />
          <div className="text-right">
            <p className="text-xs text-zinc-400">Prepared for KLB Consulting Group, May 2026</p>
            <p className="text-xs text-zinc-300 mt-0.5">Confidential,Not for distribution</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
