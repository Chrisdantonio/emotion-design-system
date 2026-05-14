import React, { useState } from 'react'
import './TextInput.css'

type Props = {
  id?: string
  label?: string
  value?: string
  onChange?: (v: string) => void
  placeholder?: string
  error?: string | null
  disabled?: boolean
}

const TextInput: React.FC<Props> = ({ id, label, value = '', onChange, placeholder, error = null, disabled = false }) => {
  const [focused, setFocused] = useState(false)
  const block = 'text-input'
  const className = `${block} ${focused ? `${block}--focused` : ''} ${error ? `${block}--error` : ''} ${disabled ? `${block}--disabled` : ''}`.trim()

  return (
    <div className={className}>
      {label && (
        <label className="text-input__label" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        id={id}
        className="text-input__control"
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
        disabled={disabled}
        aria-invalid={!!error}
      />
      {error ? <p className="text-input__error">{error}</p> : <p className="text-input__hint">&nbsp;</p>}
    </div>
  )
}

export default TextInput
