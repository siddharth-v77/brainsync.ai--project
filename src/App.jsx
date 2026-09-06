import { useState } from 'react'
import {
  ArrowRight, Check, ChevronDown, Code2, Command, Cpu, GitBranch,
  Layers3, Menu, MessageSquare, Play, Sparkles, WandSparkles, X, Zap
} from 'lucide-react'

const features = [
  {
    icon: Code2,
    eyebrow: 'GENERATE',
    title: 'From thought to production code.',
    body: 'Describe what you want in plain English. BrainSync turns intent into clean, composable code across your entire stack.',
    className: 'md:col-span-7 md:row-span-2',
    visual: 'editor',
  },
  {
    icon: GitBranch,
    eyebrow: 'UNDERSTAND',
    title: 'Knows your whole codebase.',
    body: 'Context-aware suggestions understand files, dependencies and conventions instead of guessing from one snippet.',
    className: 'md:col-span-5',
    visual: 'nodes',
  },
  {
    icon: Zap,
    eyebrow: 'ACCELERATE',
    title: 'Ship faster, without the chaos.',
    body: 'Automate repetitive work while keeping you in control of every change.',
    className: 'md:col-span-5',
    visual: 'stats',
  },
  {
    icon: Layers3,
    eyebrow: 'COLLABORATE',
    title: 'One AI layer for your team.',
    body: 'Shared prompts, project memory and team workflows keep everyone moving in the same direction.',
    className: 'md:col-span-4',
    visual: 'team',
  },
  {
    icon: Cpu,
    eyebrow: 'ADAPT',
    title: 'Works with your stack.',
    body: 'React, Node, Python, Go, TypeScript and the tools you already love.',
    className: 'md:col-span-8',
    visual: 'stack',
  },
]

function GlowOrb({ className = '' }) {
  return <div className={`pointer-events-none absolute rounded-full blur-3xl ${className}`} />
}

function Logo() {
  return (
    <a href="#" className="flex items-center gap-2.5 font-semibold tracking-tight">
      <span className="grid size-8 place-items-center rounded-lg border border-white/15 bg-white/8 shadow-[0_0_24px_rgba(139,92,246,0.25)]">
        <Sparkles size={16} className="text-violet-300" />
      </span>
      <span>BrainSync<span className="text-violet-300">.</span>ai</span>
    </a>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-4 max-w-6xl px-4 sm:px-6">
        <nav className="glass flex items-center justify-between rounded-2xl px-4 py-3 sm:px-5">
          <Logo />

          <div className="hidden items-center gap-7 text-sm text-zinc-400 md:flex">
            <a className="transition hover:text-white" href="#features">Features</a>
            <a className="transition hover:text-white" href="#workflow">Workflow</a>
            <a className="transition hover:text-white" href="#pricing">Pricing</a>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a href="#pricing" className="rounded-lg px-3 py-2 text-sm text-zinc-300 transition hover:bg-white/7 hover:text-white">Sign in</a>
            <a href="#pricing" className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:shadow-[0_0_22px_rgba(255,255,255,0.22)]">Start building</a>
          </div>

          <button
            aria-label="Toggle navigation"
            onClick={() => setOpen(!open)}
            className="rounded-lg border border-white/10 p-2 text-zinc-300 md:hidden"
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </nav>

        {open && (
          <div className="glass mt-2 rounded-2xl p-3 md:hidden">
            {['Features', 'Workflow', 'Pricing'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-3 text-sm text-zinc-300 hover:bg-white/6 hover:text-white"
              >
                {item}
              </a>
            ))}
            <a href="#pricing" className="mt-2 block rounded-xl bg-white px-3 py-3 text-center text-sm font-semibold text-black">Start building</a>
          </div>
        )}
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 sm:pt-44">
      <GlowOrb className="left-1/2 top-20 size-72 -translate-x-1/2 bg-violet-600/18 sm:size-[30rem]" />
      <GlowOrb className="right-[-10rem] top-80 size-80 bg-cyan-500/8" />

      <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-6">
        <div className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/7 px-3 py-1.5 text-xs font-medium text-violet-200 shadow-[0_0_25px_rgba(139,92,246,0.10)]">
          <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
          BrainSync 2.0 is live
          <ArrowRight size={12} />
        </div>

        <h1 className="text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-white sm:text-7xl lg:text-8xl">
          Build at the
          <span className="gradient-text block">speed of thought.</span>
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-pretty text-base leading-7 text-zinc-400 sm:text-lg">
          BrainSync is the AI development workspace that turns ideas into production-ready software — faster, cleaner, and with your entire codebase in context.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#pricing" className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black shadow-[0_0_30px_rgba(255,255,255,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(167,139,250,0.28)] sm:w-auto">
            Start building free
            <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
          </a>
          <a href="#workflow" className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-zinc-200 transition hover:border-white/20 hover:bg-white/8 sm:w-auto">
            <Play size={15} />
            See how it works
          </a>
        </div>

        <div className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-zinc-500">
          <span className="flex items-center gap-1.5"><Check size={13} className="text-emerald-400" /> No credit card</span>
          <span className="flex items-center gap-1.5"><Check size={13} className="text-emerald-400" /> 14-day Pro trial</span>
          <span className="flex items-center gap-1.5"><Check size={13} className="text-emerald-400" /> Cancel anytime</span>
        </div>

        <div className="relative mx-auto mt-16 max-w-4xl">
          <div className="absolute -inset-8 rounded-[3rem] bg-violet-500/10 blur-3xl" />
          <div className="glass relative overflow-hidden rounded-2xl p-2 shadow-[0_0_70px_rgba(139,92,246,0.14)]">
            <div className="rounded-xl border border-white/8 bg-[#080a10]">
              <div className="flex items-center gap-2 border-b border-white/8 px-4 py-3">
                <span className="size-2 rounded-full bg-red-400/70" />
                <span className="size-2 rounded-full bg-amber-400/70" />
                <span className="size-2 rounded-full bg-emerald-400/70" />
                <div className="mx-auto flex items-center gap-2 rounded-md border border-white/7 bg-white/4 px-3 py-1 text-[10px] text-zinc-500">
                  <Command size={10} /> brainsync / workspace
                </div>
              </div>
              <div className="grid min-h-64 grid-cols-[42px_1fr] text-left">
                <div className="border-r border-white/6 px-3 py-4 text-center font-mono text-[10px] leading-6 text-zinc-700">1<br/>2<br/>3<br/>4<br/>5<br/>6</div>
                <div className="p-5 font-mono text-xs leading-6 sm:p-7 sm:text-sm">
                  <div><span className="text-violet-300">const</span> <span className="text-cyan-200">buildProduct</span> = <span className="text-zinc-500">async</span> (idea) =&gt; {'{'}</div>
                  <div className="pl-5 text-zinc-500">// BrainSync is thinking...</div>
                  <div className="pl-5"><span className="text-violet-300">const</span> plan = <span className="text-cyan-300">await</span> <span className="text-pink-300">ai</span>.architect(idea)</div>
                  <div className="pl-5"><span className="text-violet-300">return</span> plan.<span className="text-emerald-300">generate</span>()</div>
                  <div>{'}'}</div>
                  <div className="mt-4 flex items-center gap-2 text-emerald-300"><span className="size-1.5 animate-pulse rounded-full bg-emerald-300" /> Generated 48 files in 1.8s</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureVisual({ type }) {
  if (type === 'editor') return (
    <div className="mt-7 rounded-xl border border-white/8 bg-black/25 p-3 font-mono text-[10px] leading-5 text-zinc-500">
      <div className="flex gap-2 pb-2"><span className="text-violet-300">AI</span><span>create a responsive pricing section</span></div>
      <div className="rounded-lg bg-white/4 p-3">
        <span className="text-pink-300">export default</span> <span className="text-cyan-300">function</span> <span className="text-violet-200">Pricing</span>() {'{'}<br/>
        <span className="pl-3 text-zinc-400">return <span className="text-emerald-300">&lt;section&gt;</span>...<span className="text-emerald-300">&lt;/section&gt;</span></span><br/>
        {'}'}
      </div>
    </div>
  )
  if (type === 'nodes') return (
    <div className="relative mt-7 h-28 overflow-hidden rounded-xl border border-white/8 bg-black/20">
      <div className="absolute left-6 top-10 size-8 rounded-lg border border-violet-400/30 bg-violet-400/10 shadow-[0_0_18px_rgba(139,92,246,0.25)]" />
      <div className="absolute left-1/2 top-5 size-8 -translate-x-1/2 rounded-lg border border-cyan-400/30 bg-cyan-400/10" />
      <div className="absolute right-7 top-14 size-8 rounded-lg border border-pink-400/30 bg-pink-400/10" />
      <div className="absolute left-12 top-13 h-px w-1/3 rotate-[-14deg] bg-gradient-to-r from-violet-400/40 to-cyan-400/40" />
      <div className="absolute right-12 top-14 h-px w-1/3 rotate-[17deg] bg-gradient-to-r from-cyan-400/40 to-pink-400/40" />
    </div>
  )
  if (type === 'stats') return (
    <div className="mt-7 flex items-end gap-2 rounded-xl border border-white/8 bg-black/20 p-4">
      {[34, 52, 44, 72, 61, 92, 78, 100].map((h, i) => <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-violet-500/20 to-cyan-300/80" style={{height: `${h/1.4}px`}} />)}
    </div>
  )
  if (type === 'team') return (
    <div className="mt-7 flex -space-x-2">
      {['AK','SM','JD','+8'].map((x, i) => <div key={i} className="grid size-9 place-items-center rounded-full border-2 border-[#0b0d13] bg-white/10 text-[9px] text-zinc-300">{x}</div>)}
    </div>
  )
  return (
    <div className="mt-7 flex flex-wrap gap-2">
      {['React','TypeScript','Node','Python','Go','Next.js'].map(x => <span key={x} className="rounded-lg border border-white/8 bg-white/4 px-2.5 py-1.5 text-[10px] text-zinc-400">{x}</span>)}
    </div>
  )
}

function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-6xl px-5 py-28 sm:px-6 sm:py-36">
      <div className="mb-12 max-w-2xl">
        <p className="mb-3 text-xs font-semibold tracking-[0.22em] text-violet-300">THE AI WORKSPACE</p>
        <h2 className="text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">Less prompting. More shipping.</h2>
        <p className="mt-4 text-sm leading-6 text-zinc-500 sm:text-base">Everything you need to go from a rough idea to a polished product without leaving your flow.</p>
      </div>

      <div className="grid auto-rows-[minmax(230px,auto)] gap-4 md:grid-cols-12">
        {features.map(({ icon: Icon, eyebrow, title, body, className, visual }) => (
          <article key={title} className={`glass group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-300/20 hover:shadow-[0_18px_50px_rgba(139,92,246,0.10)] ${className}`}>
            <div className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-violet-300 transition duration-300 group-hover:scale-105 group-hover:shadow-[0_0_22px_rgba(139,92,246,0.18)]">
              <Icon size={18} />
            </div>
            <p className="mt-6 text-[10px] font-semibold tracking-[0.2em] text-zinc-600">{eyebrow}</p>
            <h3 className="mt-2 max-w-lg text-xl font-medium tracking-tight text-white">{title}</h3>
            <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-500">{body}</p>
            <FeatureVisual type={visual} />
          </article>
        ))}
      </div>
    </section>
  )
}

function Workflow() {
  const steps = [
    ['01', 'Describe', 'Tell BrainSync what you want in plain English.'],
    ['02', 'Generate', 'Get a plan, architecture and production-ready code.'],
    ['03', 'Ship', 'Review the diff, run your tests and deploy.'],
  ]

  return (
    <section id="workflow" className="border-y border-white/6 bg-white/[0.015]">
      <div className="mx-auto max-w-6xl px-5 py-28 sm:px-6 sm:py-36">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="mb-3 text-xs font-semibold tracking-[0.22em] text-cyan-300">YOUR NEW WORKFLOW</p>
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">Your cursor is the interface.</h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-zinc-500 sm:text-base">Stop switching between docs, Stack Overflow, and five browser tabs. Keep your context where the work happens.</p>
          </div>
          <div className="space-y-3">
            {steps.map(([num, title, body]) => (
              <div key={num} className="group glass flex items-center gap-5 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/20">
                <span className="font-mono text-xs text-zinc-700">{num}</span>
                <div className="flex-1">
                  <h3 className="text-base font-medium text-white">{title}</h3>
                  <p className="mt-1 text-sm text-zinc-500">{body}</p>
                </div>
                <ArrowRight size={16} className="text-zinc-700 transition group-hover:translate-x-1 group-hover:text-cyan-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  return (
    <section id="pricing" className="relative mx-auto max-w-6xl px-5 py-28 sm:px-6 sm:py-36">
      <GlowOrb className="left-1/2 top-1/2 size-72 -translate-x-1/2 -translate-y-1/2 bg-violet-600/8" />
      <div className="relative glass mx-auto max-w-4xl overflow-hidden rounded-3xl p-7 sm:p-10">
        <div className="absolute right-[-6rem] top-[-6rem] size-48 rounded-full bg-violet-500/15 blur-3xl" />
        <div className="relative grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/4 px-3 py-1.5 text-[10px] text-zinc-400">
              <WandSparkles size={12} className="text-violet-300" /> BUILT FOR DEVELOPERS
            </div>
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">Start building for free.</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-500">Get 100 AI generations every month. Upgrade when your team is ready.</p>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-zinc-500">
              <span className="flex items-center gap-1.5"><Check size={13} className="text-emerald-400" /> 100 generations</span>
              <span className="flex items-center gap-1.5"><Check size={13} className="text-emerald-400" /> Git integration</span>
              <span className="flex items-center gap-1.5"><Check size={13} className="text-emerald-400" /> Team memory</span>
            </div>
          </div>
          <a href="mailto:hello@brainsync.ai?subject=BrainSync%20AI%20Early%20Access" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:-translate-y-1 hover:shadow-[0_0_28px_rgba(167,139,250,0.3)]">
            Get early access <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/6">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-8 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <Logo />
        <div className="flex items-center gap-5">
          <a href="#features" className="hover:text-zinc-300">Features</a>
          <a href="#workflow" className="hover:text-zinc-300">Workflow</a>
          <a href="#pricing" className="hover:text-zinc-300">Pricing</a>
        </div>
        <span>© 2026 BrainSync AI. Concept project.</span>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#05060a] text-zinc-100 selection:bg-violet-400/30">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Workflow />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}