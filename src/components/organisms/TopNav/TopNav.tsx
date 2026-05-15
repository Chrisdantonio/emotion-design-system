import './TopNav.css'
import SearchBar from '../../molecules/SearchBar/SearchBar'

export default function TopNav() {
  return (
    <nav className="top-nav" aria-label="Main navigation">
      <div className="top-nav__brand">
        <img src="/emotion-design-system/logo.png" alt="Emotion Design System" className="top-nav__logo" />
        <span className="top-nav__name">Emotion</span>
      </div>

      <ul className="top-nav__links">
        <li className="top-nav__item"><a className="top-nav__link" href="#">Home</a></li>
        <li className="top-nav__item"><a className="top-nav__link" href="#">Features</a></li>
        <li className="top-nav__item"><a className="top-nav__link" href="#">Docs</a></li>
      </ul>

      <div className="top-nav__search">
        <SearchBar />
      </div>
    </nav>
  )
}
