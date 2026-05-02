import './TopNav.css'
import SearchBar from '../../molecules/SearchBar/SearchBar'

export default function TopNav() {
  return (
    <nav className="top-nav" aria-label="Main navigation">
      <div className="top-nav__brand">
        <span className="top-nav__logo">ED</span>
        <span className="top-nav__name">Emotion</span>
      </div>

      <ul className="top-nav__links">
        <li className="top-nav__item"><a className="top-nav__link" href="#">Home</a></li>
        <li className="top-nav__item"><a className="top-nav__link" href="#features">Features</a></li>
        <li className="top-nav__item"><a className="top-nav__link" href="#docs">Docs</a></li>
      </ul>

      <div className="top-nav__search">
        <SearchBar />
      </div>
    </nav>
  )
}
