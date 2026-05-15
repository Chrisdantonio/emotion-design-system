const releases = [
  {
    version: 'v0.2.0',
    date: '2026-05-15',
    tag: 'Routing · Components · Fixes',
    summary: 'Adds multi-page routing, the ImageCard molecule with four layout variants, logo integration across all surfaces, and alignment fixes for both navigation organisms.',
    sections: [
      {
        heading: 'New',
        items: [
          'ImageCard molecule — four layout variants: Vertical (3/4), Horizontal (image-left), Square (1/1), Overlay (text gradient on image)',
          'React Router — three-page site: Components, Documentation, Releases',
          'Documentation page — full API reference with props tables, usage snippets, and design notes for all 9 components',
          'Global nav bar — sticky top bar with Components / Documentation / Releases links and active-link highlight',
        ],
      },
      {
        heading: 'Improved',
        items: [
          'Logo — Artboard 2.png applied to sidebar, TopNav, and TopNavigation replacing the "ED" text badge',
          'TopNavigation — all hardcoded values replaced with design tokens; class renamed from .top-nav to .top-navigation to eliminate style collision with TopNav',
          'TopNavigation alignment — SearchForm hint line hidden and align-items corrected in nav context so button and input sit on the same baseline',
          'Sidebar anchor links — replaced href="#id" with scrollIntoView() to fix broken section navigation under HashRouter',
          'FeatureCard — added onClick prop for programmatic scroll actions',
        ],
      },
      {
        heading: 'Infrastructure',
        items: [
          'HashRouter — prevents GitHub Pages 404s on direct route navigation',
          '.claude/ added to .gitignore across all branches — keeps local Claude Code config out of source control',
        ],
      },
    ],
  },
  {
    version: 'v0.1.0',
    date: '2025-05-15',
    tag: 'Initial Release',
    summary: 'First public release of the Emotion Design System. Establishes the atomic design foundation, token architecture, and component library baseline.',
    sections: [
      {
        heading: 'Atoms',
        items: [
          'PrimaryButton — three variants (primary, ghost, destructive) with disabled state',
          'IconToggle — binary on/off toggle with aria-pressed support',
          'TextInput — labeled input with error state and inline validation',
          'DownloadButton — programmatic file download via Fetch API and blob URL',
        ],
      },
      {
        heading: 'Molecules',
        items: [
          'SearchForm — async search with loading state and no-results feedback',
          'SearchBar — lightweight stateless inline search for navigation contexts',
          'FeatureCard — content card with optional media and polymorphic CTA',
        ],
      },
      {
        heading: 'Organisms',
        items: [
          'TopNav — full-width navigation bar with brand lockup and integrated SearchBar',
          'TopNavigation — feature-rich nav with collapsible search, notification badge, and sign-in CTA',
        ],
      },
      {
        heading: 'Foundations',
        items: [
          '28 design tokens across color, typography, spacing, border, and shadow scales',
          'BEM naming convention enforced across all components',
          '100% token coverage — no hardcoded values in component stylesheets',
        ],
      },
    ],
  },
]

export default function ReleasesPage() {
  return (
    <main className="main releases-main">
      <header className="page-hero">
        <div className="page-hero__meta">
          <span className="badge badge--outline">Changelog</span>
          <span className="badge badge--solid">{releases.length} Release{releases.length !== 1 ? 's' : ''}</span>
        </div>
        <h1 className="page-hero__title">
          Releases
        </h1>
        <p className="page-hero__desc">
          Version history for the Emotion Design System. Each release documents new components, breaking changes, and token updates.
        </p>
      </header>

      <div className="releases-list">
        {releases.map((release) => (
          <article key={release.version} className="release-entry">
            <div className="release-entry__header">
              <div className="release-entry__meta">
                <span className="badge badge--solid">{release.version}</span>
                <span className="badge badge--outline">{release.tag}</span>
              </div>
              <time className="release-entry__date" dateTime={release.date}>
                {new Date(release.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
            </div>

            <p className="release-entry__summary">{release.summary}</p>

            <div className="release-entry__sections">
              {release.sections.map((section) => (
                <div key={section.heading} className="release-section">
                  <h3 className="release-section__heading">{section.heading}</h3>
                  <ul className="release-section__list">
                    {section.items.map((item) => (
                      <li key={item} className="release-section__item">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}
