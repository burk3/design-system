export default function Input({ variant='clean', label, monoLabel=false, placeholder, value, onChange, type='text', className='' }) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && <label className={monoLabel ? 'label-mono' : 'text-sm text-slate'}>{label}</label>}
      <input type={type} value={value} onChange={onChange} placeholder={placeholder}
        className={`${variant === 'mono' ? 'input-mono' : 'input-clean'} ${className}`} />
    </div>
  )
}
