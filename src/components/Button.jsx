const base = 'inline-flex items-center gap-1.5 border transition-all duration-150 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed'
const variants = {
  default: 'bg-white border-carbon text-charcoal hover:bg-parchment',
  primary: 'bg-signal border-signal text-white hover:opacity-90',
  ghost:   'bg-transparent border-transparent text-charcoal hover:bg-parchment',
  moss:    'bg-transparent border-moss text-moss hover:bg-moss-tint',
  mono:    'bg-transparent border-carbon text-charcoal font-mono tracking-wide hover:bg-parchment',
  brutal:  'bg-void border-void text-bone font-mono uppercase tracking-widest text-2xs hover:opacity-90',
}
const sizes = {
  sm: 'px-3 py-1.5 text-xs rounded',
  md: 'px-4 py-2 text-sm rounded',
  lg: 'px-5 py-3 text-base rounded',
}
export default function Button({ children, variant='default', size='md', disabled=false, onClick, type='button', className='' }) {
  return <button type={type} disabled={disabled} onClick={onClick} className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}>{children}</button>
}
