import React from 'react'
import './DownloadButton.css'

export type DownloadButtonProps = {
  href?: string
  filename?: string
  variant?: 'primary' | 'secondary'
  children?: React.ReactNode
  className?: string
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  href,
  filename,
  variant = 'primary',
  children = 'Download',
  className = '',
}) => {
  const handleClick = async () => {
    if (!href) return
    try {
      const res = await fetch(href)
      if (!res.ok) throw new Error('Network error')
      const blob = await res.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = filename || href.split('/').pop() || 'download'
      document.body.appendChild(a)
      a.click()
      a.remove()
      window.URL.revokeObjectURL(url)
    } catch (err) {
      // Keep failure visible in console; caller can wrap component if needed
      // No inline UI error handling per atom responsibilities
      // eslint-disable-next-line no-console
      console.error('Download failed', err)
    }
  }

  return (
    <button
      type="button"
      className={`download-button download-button--${variant} ${className}`.trim()}
      onClick={handleClick}
      aria-label={typeof children === 'string' ? children : 'Download file'}
    >
      {children}
    </button>
  )
}

export default DownloadButton
