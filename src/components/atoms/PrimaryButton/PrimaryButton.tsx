import React from 'react'
import './PrimaryButton.css'

type Props = {
  onClick?: () => void
  disabled?: boolean
  variant?: 'primary' | 'ghost' | 'destructive'
  children?: React.ReactNode
}

const PrimaryButton: React.FC<Props> = ({ onClick, disabled = false, variant = 'primary', children }) => {
  const className = `primary-button primary-button--${variant} ${disabled ? 'primary-button--disabled' : ''}`.trim()

  return (
    <button className={className} onClick={onClick} disabled={disabled} aria-disabled={disabled}>
      <span className="primary-button__label">{children ?? 'Button'}</span>
    </button>
  )
}

export default PrimaryButton
