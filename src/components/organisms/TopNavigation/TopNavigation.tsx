import React from 'react'
import SearchForm from '../../molecules/SearchForm/SearchForm'
import IconToggle from '../../atoms/IconToggle/IconToggle'
import PrimaryButton from '../../atoms/PrimaryButton/PrimaryButton'
import './TopNavigation.css'

type Props = {
  collapsed?: boolean
  showNotification?: boolean
}

const TopNavigation: React.FC<Props> = ({ collapsed = false, showNotification = false }) => {
  return (
    <nav className={`top-nav ${collapsed ? 'top-nav--collapsed' : 'top-nav--expanded'} ${showNotification ? 'top-nav--with-notification' : ''}`} aria-label="Main navigation">
      <div className="top-nav__brand">
        <a href="#" className="top-nav__logo">Emotion</a>
      </div>

      <div className="top-nav__search">
        <SearchForm onSearch={async () => []} />
      </div>

      <div className="top-nav__actions">
        <IconToggle ariaLabel="Toggle sound" />
        <PrimaryButton>Sign In</PrimaryButton>
        {showNotification && <span className="top-nav__badge" aria-hidden>3</span>}
      </div>
    </nav>
  )
}

export default TopNavigation
