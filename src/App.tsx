import './App.css'
import { Routes, Route, NavLink } from 'react-router-dom'
import ComponentsPage from './pages/ComponentsPage'
import DocumentationPage from './pages/DocumentationPage'
import ReleasesPage from './pages/ReleasesPage'

export default function App() {
  return (
    <div className="app-shell">
      <nav className="global-nav" aria-label="Site navigation">
        <div className="global-nav__links">
          <NavLink to="/" end className="global-nav__link">Components</NavLink>
          <NavLink to="/documentation" className="global-nav__link">Documentation</NavLink>
          <NavLink to="/releases" className="global-nav__link">Releases</NavLink>
        </div>
        <span className="global-nav__title">Emotion Design System</span>
      </nav>

      <Routes>
        <Route path="/" element={<ComponentsPage />} />
        <Route path="/documentation" element={<DocumentationPage />} />
        <Route path="/releases" element={<ReleasesPage />} />
      </Routes>
    </div>
  )
}
