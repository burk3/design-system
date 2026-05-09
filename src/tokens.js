export const colors = {
  bone:      { hex: '#F9F8F4', use: 'Page background' },
  parchment: { hex: '#F0EFE9', use: 'Card / surface background' },
  fog:       { hex: '#E4E3DD', use: 'Default border — barely visible' },
  carbon:    { hex: '#C9C8C2', use: 'Strong border / hover / divider' },
  slate:     { hex: '#6E6E6A', use: 'Muted text, labels, placeholders' },
  charcoal:  { hex: '#1C1C1A', use: 'Primary text, headings' },
  signal:    { hex: '#1A1AE8', use: 'Primary CTA, callout rules, focus rings. The only interactive color.' },
  moss:      { hex: '#455A34', use: 'Natural / earthy. Success states, field notes.' },
  oxide:     { hex: '#7A3B1E', use: 'Rust / industrial. Warnings, destructive actions.' },
  void:      { hex: '#0A0A0A', use: 'Brutal emphasis — void blocks, hero sections. Use rarely.' },
}

export const typography = {
  scale: [
    { name: 'display', size: '36px', weight: '400', tracking: '-0.02em', use: 'Hero / page title' },
    { name: 'title',   size: '24px', weight: '500', tracking: '-0.01em', use: 'Section heading' },
    { name: 'heading', size: '18px', weight: '400', tracking: '0',       use: 'Subsection heading' },
    { name: 'body',    size: '15px', weight: '400', tracking: '0',       use: 'Body copy, lh 1.6' },
    { name: 'small',   size: '13px', weight: '400', tracking: '0',       use: 'Secondary text, captions' },
    { name: 'mono',    size: '13px', weight: '400', tracking: '0.02em',  use: 'Metadata, labels, code', mono: true },
    { name: 'label',   size: '11px', weight: '400', tracking: '0.12em',  use: 'Section markers — always uppercase', mono: true },
  ],
}

export const texturePatterns = [
  { name: 'Signal callout',  description: 'Left border rule in signal blue. Important notices, editorial asides.',         classes: 'border-l-[3px] border-signal pl-4' },
  { name: 'Moss field note', description: 'Mono text in moss green with left border. System messages, field notes.',        classes: 'border-l-[3px] border-moss pl-4 font-mono text-sm text-moss' },
  { name: 'Void block',      description: 'Full-width near-black block, mono uppercase white text. Maximum emphasis.',      classes: 'bg-void text-bone font-mono text-2xs uppercase tracking-widest leading-loose p-5' },
  { name: '1px gap grid',    description: 'Grid with 1px gaps via bg color on wrapper. No border radius. Zine layout.',    classes: 'grid grid-cols-2 gap-px bg-carbon [&>*]:bg-bone' },
]
