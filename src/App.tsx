import './App.css'
import { useState } from 'react'
import { useActiveSection } from './hooks/useActiveSection'
import {
  PrimaryButton,
  IconToggle,
  TextInput,
  DownloadButton,
  SearchBar,
  SearchForm,
  FeatureCard,
  TopNav,
  TopNavigation,
} from './components'

const colorTokens = [
  { token: '--color-bg-primary', hex: '#ffffff', label: 'Background' },
  { token: '--color-surface', hex: '#ffffff', label: 'Surface' },
  { token: '--color-text-primary', hex: '#000000', label: 'Text' },
  { token: '--color-muted', hex: '#6b6b6b', label: 'Muted' },
  { token: '--color-border', hex: 'rgba(0,0,0,.12)', label: 'Border' },
  { token: '--color-primary', hex: '#000000', label: 'Primary' },
  { token: '--color-accent', hex: '#0066ff', label: 'Accent' },
  { token: '--color-success', hex: '#059669', label: 'Success' },
  { token: '--color-warning', hex: '#d97706', label: 'Warning' },
  { token: '--color-danger', hex: '#dc2626', label: 'Danger' },
]

const typeTokens = [
  { token: '--font-size-sm', size: '0.875rem', label: 'Small — Aa' },
  { token: '--font-size-base', size: '1rem', label: 'Base — Aa' },
  { token: '--font-size-lg', size: '1.125rem', label: 'Large — Aa' },
  { token: '--font-size-xl', size: '1.5rem', label: 'XL — Aa' },
  { token: '--font-size-2xl', size: '2rem', label: '2XL — Aa' },
  { token: '--font-size-display', size: '3.5rem', label: 'Display — Aa' },
]

const spacingTokens = [
  { token: '--spacing-xxs', px: '4px' },
  { token: '--spacing-xs', px: '8px' },
  { token: '--spacing-sm', px: '12px' },
  { token: '--spacing-md', px: '16px' },
  { token: '--spacing-lg', px: '24px' },
  { token: '--spacing-xl', px: '32px' },
  { token: '--spacing-2xl', px: '48px' },
  { token: '--spacing-3xl', px: '64px' },
]

export default function App() {
  const [btnVariant, setBtnVariant] = useState<'primary' | 'ghost' | 'destructive'>('primary')
  const [btnDisabled, setBtnDisabled] = useState(false)

  const [toggleOn, setToggleOn] = useState(false)
  const [toggleDisabled, setToggleDisabled] = useState(false)

  const [textValue, setTextValue] = useState('')
  const [textDisabled, setTextDisabled] = useState(false)

  const [searchMode, setSearchMode] = useState<'idle' | 'results' | 'none'>('idle')

  const [navCollapsed, setNavCollapsed] = useState(false)
  const [navNotify, setNavNotify] = useState(false)

  const sectionIds = ['foundations', 'atoms', 'molecules', 'organisms']
  const activeSection = useActiveSection(sectionIds)

  const onSearch = async (_q: string) => {
    void _q
    await new Promise((r) => setTimeout(r, 700))
    if (searchMode === 'results') return [{ id: 1 }]
    return []
  }

  return (
    <div className="app">

      {/* ── SIDEBAR ──────────────────────────────── */}
      <aside className="sidebar">
        <div className="sidebar__brand">
          <span className="sidebar__logo">ED</span>
          <div className="sidebar__brand-text">
            <span className="sidebar__name">EMOTION</span>
            <span className="sidebar__tagline">Design System</span>
          </div>
        </div>

        <nav className="sidebar__nav" aria-label="Design system sections">
          <span className="sidebar__nav-label">Sections</span>
          {sectionIds.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`sidebar__link${activeSection === id ? ' sidebar__link--active' : ''}`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </nav>

        <div className="sidebar__footer">
          <span className="sidebar__version">v0.1.0</span>
          <span className="sidebar__stack">React 19 · TypeScript 5.9</span>
        </div>
      </aside>

      {/* ── MAIN ─────────────────────────────────── */}
      <main className="main">

        {/* HERO */}
        <header className="page-hero">
          <div className="page-hero__meta">
            <span className="badge badge--outline">Design System</span>
            <span className="badge badge--solid">v0.1.0</span>
          </div>
          <h1 className="page-hero__title">
            Emotion<br />Design System
          </h1>
          <p className="page-hero__desc">
            A systematic collection of reusable components built on atomic design principles.
            Every component follows strict BEM conventions, token-driven styling, and accessibility standards.
          </p>
          <div className="page-hero__stats">
            <div className="stat">
              <span className="stat__number">9</span>
              <span className="stat__label">Components</span>
            </div>
            <div className="stat">
              <span className="stat__number">3</span>
              <span className="stat__label">Atomic Layers</span>
            </div>
            <div className="stat">
              <span className="stat__number">28</span>
              <span className="stat__label">Design Tokens</span>
            </div>
            <div className="stat">
              <span className="stat__number">100%</span>
              <span className="stat__label">Token Coverage</span>
            </div>
          </div>
        </header>

        {/* ── FOUNDATIONS ──────────────────────────── */}
        <section id="foundations" className="ds-section">
          <div className="ds-section__header">
            <div>
              <h2 className="ds-section__title">Foundations</h2>
              <p className="ds-section__desc">Design tokens are the single source of truth for all visual properties across every component.</p>
            </div>
            <span className="badge badge--outline">CSS Variables</span>
          </div>

          <div className="foundation-group">
            <h3 className="foundation-group__title">Color</h3>
            <div className="color-grid">
              {colorTokens.map(({ token, hex, label }) => (
                <div key={token} className="color-swatch">
                  <div className="color-swatch__chip" style={{ background: hex }} />
                  <span className="color-swatch__label">{label}</span>
                  <code className="color-swatch__token">{token}</code>
                  <span className="color-swatch__hex">{hex}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="foundation-group">
            <h3 className="foundation-group__title">Typography Scale</h3>
            <div className="type-scale">
              {typeTokens.map(({ token, size, label }) => (
                <div key={token} className="type-row">
                  <span className="type-row__meta">
                    <code className="type-row__token">{token}</code>
                    <span className="type-row__size">{size}</span>
                  </span>
                  <span className="type-row__sample" style={{ fontSize: size }}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="foundation-group">
            <h3 className="foundation-group__title">Spacing Scale</h3>
            <div className="spacing-scale">
              {spacingTokens.map(({ token, px }) => (
                <div key={token} className="spacing-row">
                  <code className="spacing-row__token">{token}</code>
                  <span className="spacing-row__px">{px}</span>
                  <div className="spacing-row__bar" style={{ width: px }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ATOMS ────────────────────────────────── */}
        <section id="atoms" className="ds-section">
          <div className="ds-section__header">
            <div>
              <h2 className="ds-section__title">Atoms</h2>
              <p className="ds-section__desc">The smallest indivisible building blocks. No external component dependencies.</p>
            </div>
            <span className="badge badge--solid">4 Components</span>
          </div>

          {/* PrimaryButton */}
          <div className="component-entry">
            <div className="component-entry__header">
              <span className="layer-badge">Atom</span>
              <h3 className="component-entry__name">PrimaryButton</h3>
              <p className="component-entry__desc">Core action element with three semantic variants and disabled state.</p>
            </div>
            <div className="component-entry__demo">
              <div className="demo-area">
                <PrimaryButton variant={btnVariant} disabled={btnDisabled}>
                  {btnDisabled ? 'Disabled' : btnVariant === 'primary' ? 'Primary Action' : btnVariant === 'ghost' ? 'Ghost Action' : 'Destructive Action'}
                </PrimaryButton>
              </div>
              <div className="variant-strip">
                <div className="variant-item">
                  <PrimaryButton variant="primary">Primary</PrimaryButton>
                  <span className="variant-label">Primary</span>
                </div>
                <div className="variant-item">
                  <PrimaryButton variant="ghost">Ghost</PrimaryButton>
                  <span className="variant-label">Ghost</span>
                </div>
                <div className="variant-item">
                  <PrimaryButton variant="destructive">Destructive</PrimaryButton>
                  <span className="variant-label">Destructive</span>
                </div>
                <div className="variant-item">
                  <PrimaryButton disabled>Disabled</PrimaryButton>
                  <span className="variant-label">Disabled</span>
                </div>
              </div>
            </div>
            <div className="control-strip">
              <span className="control-strip__label">Variant</span>
              <PrimaryButton variant="ghost" onClick={() => setBtnVariant('primary')}>Primary</PrimaryButton>
              <PrimaryButton variant="ghost" onClick={() => setBtnVariant('ghost')}>Ghost</PrimaryButton>
              <PrimaryButton variant="ghost" onClick={() => setBtnVariant('destructive')}>Destructive</PrimaryButton>
              <span className="control-strip__divider" />
              <PrimaryButton variant="ghost" onClick={() => setBtnDisabled((s) => !s)}>
                {btnDisabled ? 'Enable' : 'Disable'}
              </PrimaryButton>
            </div>
          </div>

          {/* IconToggle */}
          <div className="component-entry">
            <div className="component-entry__header">
              <span className="layer-badge">Atom</span>
              <h3 className="component-entry__name">IconToggle</h3>
              <p className="component-entry__desc">Icon-based toggle button for binary on/off states. Exposes aria-pressed for screen readers.</p>
            </div>
            <div className="component-entry__demo">
              <div className="demo-area">
                <IconToggle checked={toggleOn} onChange={setToggleOn} disabled={toggleDisabled} />
                <span className="demo-state">State: {toggleOn ? 'ON' : 'OFF'}</span>
              </div>
              <div className="variant-strip">
                <div className="variant-item">
                  <IconToggle checked={false} />
                  <span className="variant-label">Off</span>
                </div>
                <div className="variant-item">
                  <IconToggle checked={true} />
                  <span className="variant-label">On</span>
                </div>
                <div className="variant-item">
                  <IconToggle disabled />
                  <span className="variant-label">Disabled</span>
                </div>
              </div>
            </div>
            <div className="control-strip">
              <span className="control-strip__label">State</span>
              <PrimaryButton variant="ghost" onClick={() => setToggleOn(true)}>Set On</PrimaryButton>
              <PrimaryButton variant="ghost" onClick={() => setToggleOn(false)}>Set Off</PrimaryButton>
              <span className="control-strip__divider" />
              <PrimaryButton variant="ghost" onClick={() => setToggleDisabled((s) => !s)}>
                {toggleDisabled ? 'Enable' : 'Disable'}
              </PrimaryButton>
            </div>
          </div>

          {/* TextInput */}
          <div className="component-entry">
            <div className="component-entry__header">
              <span className="layer-badge">Atom</span>
              <h3 className="component-entry__name">TextInput</h3>
              <p className="component-entry__desc">Labeled text input with error state, inline validation, and full focus management.</p>
            </div>
            <div className="component-entry__demo">
              <div className="demo-area">
                <TextInput
                  id="showcase-text"
                  label="Label"
                  value={textValue}
                  onChange={setTextValue}
                  placeholder="Enter text..."
                  error={textValue.length > 10 ? 'Exceeds 10 characters' : null}
                  disabled={textDisabled}
                />
              </div>
              <div className="variant-strip">
                <div className="variant-item">
                  <TextInput id="ti-default" label="Default" placeholder="Placeholder" />
                  <span className="variant-label">Default</span>
                </div>
                <div className="variant-item">
                  <TextInput id="ti-error" label="Error" value="Bad value" error="Validation failed" onChange={() => {}} />
                  <span className="variant-label">Error</span>
                </div>
                <div className="variant-item">
                  <TextInput id="ti-disabled" label="Disabled" disabled placeholder="Read only" />
                  <span className="variant-label">Disabled</span>
                </div>
              </div>
            </div>
            <div className="control-strip">
              <span className="control-strip__label">Controls</span>
              <PrimaryButton variant="ghost" onClick={() => setTextValue('')}>Clear</PrimaryButton>
              <PrimaryButton variant="ghost" onClick={() => setTextValue('Hello world')}>Fill</PrimaryButton>
              <span className="control-strip__divider" />
              <PrimaryButton variant="ghost" onClick={() => setTextDisabled((s) => !s)}>
                {textDisabled ? 'Enable' : 'Disable'}
              </PrimaryButton>
            </div>
          </div>

          {/* DownloadButton */}
          <div className="component-entry">
            <div className="component-entry__header">
              <span className="layer-badge">Atom</span>
              <h3 className="component-entry__name">DownloadButton</h3>
              <p className="component-entry__desc">Programmatic file download via Fetch API and dynamic anchor injection. Handles blob creation and URL cleanup.</p>
            </div>
            <div className="component-entry__demo">
              <div className="demo-area">
                <DownloadButton
                  variant="primary"
                  href="/emotion-design-system/favicon.svg"
                  filename="emotion-favicon.svg"
                >
                  Download Asset
                </DownloadButton>
              </div>
              <div className="variant-strip">
                <div className="variant-item">
                  <DownloadButton variant="primary">Primary</DownloadButton>
                  <span className="variant-label">Primary</span>
                </div>
                <div className="variant-item">
                  <DownloadButton variant="secondary">Secondary</DownloadButton>
                  <span className="variant-label">Secondary</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── MOLECULES ────────────────────────────── */}
        <section id="molecules" className="ds-section">
          <div className="ds-section__header">
            <div>
              <h2 className="ds-section__title">Molecules</h2>
              <p className="ds-section__desc">Functional compositions of atoms. Each molecule solves a single interaction pattern.</p>
            </div>
            <span className="badge badge--solid">3 Components</span>
          </div>

          {/* SearchForm */}
          <div className="component-entry">
            <div className="component-entry__header">
              <span className="layer-badge">Molecule</span>
              <h3 className="component-entry__name">SearchForm</h3>
              <p className="component-entry__desc">Composes TextInput + PrimaryButton with async search handling, loading state, and no-results feedback.</p>
            </div>
            <div className="component-entry__demo">
              <div className="demo-area">
                <SearchForm onSearch={onSearch} />
              </div>
            </div>
            <div className="control-strip">
              <span className="control-strip__label">Simulate</span>
              <PrimaryButton variant="ghost" onClick={() => setSearchMode('results')}>With Results</PrimaryButton>
              <PrimaryButton variant="ghost" onClick={() => setSearchMode('none')}>No Results</PrimaryButton>
              <PrimaryButton variant="ghost" onClick={() => setSearchMode('idle')}>Reset</PrimaryButton>
            </div>
          </div>

          {/* SearchBar */}
          <div className="component-entry">
            <div className="component-entry__header">
              <span className="layer-badge">Molecule</span>
              <h3 className="component-entry__name">SearchBar</h3>
              <p className="component-entry__desc">Lightweight inline search molecule for navigation contexts. Simpler and stateless alternative to SearchForm.</p>
            </div>
            <div className="component-entry__demo">
              <div className="demo-area">
                <SearchBar placeholder="Search components..." onSearch={() => {}} />
              </div>
            </div>
          </div>

          {/* FeatureCard */}
          <div className="component-entry">
            <div className="component-entry__header">
              <span className="layer-badge">Molecule</span>
              <h3 className="component-entry__name">FeatureCard</h3>
              <p className="component-entry__desc">Content card with optional media, title, description, and a polymorphic CTA rendered as anchor or button.</p>
            </div>
            <div className="component-entry__demo">
              <div className="demo-area demo-area--cards">
                <FeatureCard
                  title="Token-Driven Design"
                  description="All visual properties are controlled through CSS custom properties defined in tokens.css."
                  ctaText="View tokens"
                  href="#foundations"
                />
                <FeatureCard
                  title="BEM Architecture"
                  description="Strict block-element-modifier naming keeps styles predictable and side-effect free."
                  ctaText="View components"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── ORGANISMS ────────────────────────────── */}
        <section id="organisms" className="ds-section">
          <div className="ds-section__header">
            <div>
              <h2 className="ds-section__title">Organisms</h2>
              <p className="ds-section__desc">Full page sections composed from molecules and atoms. Ready to drop into a layout.</p>
            </div>
            <span className="badge badge--solid">2 Components</span>
          </div>

          {/* TopNav */}
          <div className="component-entry">
            <div className="component-entry__header">
              <span className="layer-badge">Organism</span>
              <h3 className="component-entry__name">TopNav</h3>
              <p className="component-entry__desc">Full-width navigation bar with brand lockup, page links, and an integrated SearchBar. Baseline token-aligned implementation.</p>
            </div>
            <div className="component-entry__demo">
              <div className="demo-area demo-area--flush">
                <TopNav />
              </div>
            </div>
          </div>

          {/* TopNavigation */}
          <div className="component-entry">
            <div className="component-entry__header">
              <span className="layer-badge">Organism</span>
              <h3 className="component-entry__name">TopNavigation</h3>
              <p className="component-entry__desc">Feature-rich navigation with collapsible search, notification badge, sign-in CTA, and icon toggle integration.</p>
            </div>
            <div className="component-entry__demo">
              <div className="demo-area demo-area--flush">
                <TopNavigation collapsed={navCollapsed} showNotification={navNotify} />
              </div>
            </div>
            <div className="control-strip">
              <span className="control-strip__label">Props</span>
              <PrimaryButton variant="ghost" onClick={() => setNavCollapsed((s) => !s)}>
                {navCollapsed ? 'Expand Search' : 'Collapse Search'}
              </PrimaryButton>
              <PrimaryButton variant="ghost" onClick={() => setNavNotify((s) => !s)}>
                {navNotify ? 'Hide Badge' : 'Show Badge'}
              </PrimaryButton>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
