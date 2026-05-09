import { useState } from 'react'
import Button from './components/Button.jsx'
import Badge from './components/Badge.jsx'
import Card from './components/Card.jsx'
import Input from './components/Input.jsx'
import { colors, typography, texturePatterns } from './tokens.js'

function Section({ title, children }) {
  return (
    <div className="mb-12">
      <p className="label-mono mb-4 pb-2 border-b border-fog">{title}</p>
      {children}
    </div>
  )
}

function TokensTab() {
  const base = Object.entries(colors).slice(0, 6)
  const accent = Object.entries(colors).slice(6)
  return (
    <>
      <Section title="Base palette">
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
          {base.map(([name, token]) => (
            <div key={name} className="flex flex-col gap-1.5">
              <div className="h-12 rounded border" style={{ background: token.hex, borderColor: 'rgba(0,0,0,0.08)' }} />
              <p className="text-xs font-medium text-charcoal">{name}</p>
              <p className="font-mono text-2xs text-slate">{token.hex}</p>
              <p className="text-2xs text-slate">{token.use}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section title="Texture accents — use sparingly">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {accent.map(([name, token]) => (
            <div key={name} className="flex flex-col gap-1.5">
              <div className="h-12 rounded border" style={{ background: token.hex, borderColor: 'rgba(0,0,0,0.08)' }} />
              <p className="text-xs font-medium text-charcoal">{name}</p>
              <p className="font-mono text-2xs text-slate">{token.hex}</p>
              <p className="text-2xs text-slate">{token.use}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section title="Tailwind config (excerpt)">
        <pre className="bg-void text-bone font-mono text-xs leading-relaxed p-5 overflow-x-auto">{`colors: {
  bone:      '#F9F8F4',  // bg
  parchment: '#F0EFE9',  // surface
  fog:       '#E4E3DD',  // border
  carbon:    '#C9C8C2',  // border-strong
  slate:     '#6E6E6A',  // text-muted
  charcoal:  '#1C1C1A',  // text

  signal:    '#1A1AE8',  // primary
  moss:      '#455A34',  // natural
  oxide:     '#7A3B1E',  // rust
  void:      '#0A0A0A',  // brutal
}`}</pre>
      </Section>
    </>
  )
}

function TypographyTab() {
  return (
    <Section title="Type scale">
      <div className="flex flex-col gap-5">
        {typography.scale.map((t) => (
          <div key={t.name} className="flex items-baseline gap-4">
            <p className="flex-1" style={{ fontSize: t.size, fontWeight: t.weight, letterSpacing: t.tracking, fontFamily: t.mono ? 'ui-monospace, monospace' : 'inherit', color: '#1C1C1A', lineHeight: t.name === 'body' ? '1.6' : '1.2' }}>
              {t.name === 'label'
                ? 'LABEL — SECTION MARKER'
                : t.name === 'body'
                ? 'Body text reads at a comfortable size, with generous line-height for long-form content.'
                : t.name.charAt(0).toUpperCase() + t.name.slice(1) + ' text sample'}
            </p>
            <span className="font-mono text-2xs text-slate whitespace-nowrap shrink-0">
              {t.size} / {t.weight}{t.mono ? ' / mono' : ''}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-6 font-mono text-2xs text-slate border-l-[3px] border-signal pl-3">
        Rule: two weights only — 400 and 500. Never 600 or 700.
      </p>
    </Section>
  )
}

function ComponentsTab() {
  const [inputVal, setInputVal] = useState('')
  return (
    <>
      <Section title="Buttons">
        <div className="flex flex-wrap gap-3 items-center mb-4">
          <Button variant="default">Default</Button>
          <Button variant="primary">Primary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="moss">Moss</Button>
          <Button variant="mono">$ mono</Button>
          <Button variant="brutal">Brutal</Button>
          <Button variant="default" disabled>Disabled</Button>
        </div>
        <div className="flex flex-wrap gap-3 items-center">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </Section>
      <Section title="Badges">
        <div className="flex flex-wrap gap-2">
          <Badge variant="default">neutral</Badge>
          <Badge variant="signal">signal</Badge>
          <Badge variant="moss">natural</Badge>
          <Badge variant="oxide">oxide</Badge>
          <Badge variant="mono">v0.1.0</Badge>
        </div>
      </Section>
      <Section title="Inputs">
        <div className="flex flex-col gap-5 max-w-sm">
          <Input label="Standard input" placeholder="placeholder text" value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
          <Input variant="mono" label="mono label / texture input" monoLabel placeholder="_ type something" />
        </div>
      </Section>
      <Section title="Cards">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card variant="clean" label="clean card">
            <p className="text-sm text-slate leading-relaxed">Soft border, rounded corners. Default surface for most content.</p>
          </Card>
          <Card variant="texture" label="texture card">
            <p className="text-sm text-slate leading-relaxed">Hard 1.5px border, no radius. Raw and editorial.</p>
          </Card>
          <Card variant="moss" label="moss card">
            <p className="text-sm leading-relaxed">Earthy tinted surface. Natural or success context.</p>
          </Card>
          <Card variant="ruled" label="ruled (borderless)">
            <p className="text-sm text-slate leading-relaxed">Top rule only. Feels like a document or field note.</p>
          </Card>
        </div>
      </Section>
    </>
  )
}

function TextureExample({ pattern }) {
  if (pattern.name === 'Signal callout') return (
    <div className="border-l-[3px] border-signal pl-4">
      <p className="text-base text-charcoal leading-relaxed">Important notice or editorial aside rendered with a signal blue left rule.</p>
    </div>
  )
  if (pattern.name === 'Moss field note') return (
    <div className="border-l-[3px] border-moss pl-4">
      <p className="font-mono text-sm text-moss leading-relaxed">$ moss.note — natural / earthy callout. system messages, field notes.</p>
    </div>
  )
  if (pattern.name === 'Void block') return (
    <div className="bg-void p-5">
      <p className="font-mono text-2xs uppercase tracking-widest text-bone leading-loose">void block — full near-black with mono uppercase. use sparingly.</p>
    </div>
  )
  if (pattern.name === '1px gap grid') return (
    <div className="grid grid-cols-2 gap-px bg-carbon">
      {['raw', 'grid', 'layout', 'pattern'].map((l) => (
        <div key={l} className="bg-bone p-4 font-mono text-2xs uppercase tracking-widest text-slate">{l}</div>
      ))}
    </div>
  )
  return null
}

function TextureTab() {
  return (
    <>
      <Section title="Texture patterns — contrast interruptions">
        <p className="text-sm text-slate leading-relaxed mb-6">
          These work because the base is disciplined. Budget: one or two texture moments per page.
        </p>
        <div className="flex flex-col gap-6">
          {texturePatterns.map((p) => (
            <div key={p.name}>
              <p className="label-mono mb-2">{p.name}</p>
              <TextureExample pattern={p} />
              <p className="text-xs text-slate mt-2">{p.description}</p>
              <p className="font-mono text-2xs text-carbon mt-1">{p.classes}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section title="When to reach for each">
        <div className="flex flex-col gap-3">
          {[
            ['mono labels',  'Section markers, metadata, version numbers, technical values'],
            ['signal blue',  'Primary actions, callout rules, focus states — the only interactive color'],
            ['moss green',   'Natural context, success states, environmental notes, field data'],
            ['oxide rust',   'Warnings, aged/industrial moments, destructive actions (with caution)'],
            ['void black',   'Hero sections, brutal emphasis, terminal blocks — use rarely'],
          ].map(([token, use]) => (
            <div key={token} className="flex gap-4 items-baseline">
              <span className="font-mono text-xs text-signal shrink-0 w-28">{token}</span>
              <span className="text-sm text-slate">{use}</span>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}

const TABS = [
  { id: 'tokens',     label: 'Tokens' },
  { id: 'type',       label: 'Typography' },
  { id: 'components', label: 'Components' },
  { id: 'texture',    label: 'Texture' },
]

export default function StyleGuide() {
  const [tab, setTab] = useState('tokens')
  return (
    <div className="min-h-screen bg-bone px-6 py-10 max-w-3xl mx-auto">
      <div className="mb-8">
        <p className="label-mono mb-2">design system v0.1</p>
        <h1 className="text-4xl text-charcoal mb-1">Clean/Texture</h1>
        <p className="text-base text-slate leading-relaxed">
          Minimal whitespace base, interrupted by techy and natural texture moments.
        </p>
      </div>
      <div className="flex gap-px border-b border-fog mb-8">
        {TABS.map((t) => (
          <button key={t.id} onClick={() => setTab(t.id)}
            className={`px-4 py-2 text-sm cursor-pointer bg-transparent border-0 border-b-2 -mb-px transition-colors ${tab === t.id ? 'border-signal text-signal font-medium' : 'border-transparent text-slate hover:text-charcoal'}`}>
            {t.label}
          </button>
        ))}
      </div>
      {tab === 'tokens'     && <TokensTab />}
      {tab === 'type'       && <TypographyTab />}
      {tab === 'components' && <ComponentsTab />}
      {tab === 'texture'    && <TextureTab />}
    </div>
  )
}

