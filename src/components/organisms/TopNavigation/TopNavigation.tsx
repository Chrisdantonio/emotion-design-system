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
    <nav
      className={`top-navigation${collapsed ? ' top-navigation--collapsed' : ''}`}
      aria-label="Main navigation"
    >
      <div className="top-navigation__brand">
        <img src="/emotion-design-system/logo.png" alt="Emotion Design System" className="top-navigation__logo" />
        <span className="top-navigation__name">Emotion</span>
      </div>

      <div className="top-navigation__search">
        <SearchForm onSearch={async () => []} />
      </div>

      <div className="top-navigation__actions">
        <div className="top-navigation__notification-wrap">
          <IconToggle ariaLabel="Toggle sound" />
          {showNotification && (
            <span className="top-navigation__badge" aria-label="3 notifications">3</span>
          )}
        </div>
        <PrimaryButton>Sign In</PrimaryButton>
      </div>
    </nav>
  )
}

export default TopNavigation
