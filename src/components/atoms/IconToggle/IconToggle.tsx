import React from 'react'
import './IconToggle.css'

type Props = {
  checked?: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
  ariaLabel?: string
}

const IconToggle: React.FC<Props> = ({ checked = false, onChange, disabled = false, ariaLabel = 'Toggle' }) => {
  const className = `icon-toggle ${checked ? 'icon-toggle--on' : 'icon-toggle--off'} ${disabled ? 'icon-toggle--disabled' : ''}`.trim()

  return (
    <button
      className={className}
      onClick={() => !disabled && onChange && onChange(!checked)}
      aria-pressed={checked}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      <span className="icon-toggle__icon" aria-hidden>
        {checked ? '🔊' : '🔈'}
      </span>
    </button>
  )
}

export default IconToggle
