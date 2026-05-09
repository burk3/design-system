const variants = {
  default: 'bg-parchment text-slate border-fog',
  signal:  'bg-signal-tint text-signal border-signal-border',
  moss:    'bg-moss-tint text-moss border-moss-border',
  oxide:   'bg-oxide-tint text-oxide border-oxide-border',
  mono:    'bg-transparent text-slate border-carbon font-mono tracking-wide',
}
export default function Badge({ children, variant='default', className='' }) {
  return <span className={`inline-flex items-center px-2.5 py-1 rounded text-xs font-medium border ${variants[variant]} ${className}`}>{children}</span>
}
