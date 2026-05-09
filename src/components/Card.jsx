const variants = {
  clean:   'bg-white border border-fog rounded-lg p-5',
  texture: 'bg-white border-[1.5px] border-charcoal rounded-none p-5',
  moss:    'bg-moss-tint border border-moss-border rounded-lg p-5 text-moss',
  ruled:   'border-t-[1.5px] border-charcoal rounded-none pt-4 pb-0 px-0',
}
export default function Card({ children, variant='clean', label, className='' }) {
  return (
    <div className={`${variants[variant]} ${className}`}>
      {label && <p className="label-mono mb-3">{label}</p>}
      {children}
    </div>
  )
}
