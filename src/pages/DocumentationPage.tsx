const docs = [
  {
    name: 'PrimaryButton',
    layer: 'Atom',
    description: 'Core action element. Supports three semantic variants and a disabled state. Renders a native <button> element with full keyboard and focus support.',
    usage: `<PrimaryButton variant="primary" onClick={handleClick}>
  Label
</PrimaryButton>`,
    props: [
      { name: 'variant', type: `'primary' | 'ghost' | 'destructive'`, default: `'primary'`, description: 'Visual and semantic style of the button.' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Prevents interaction and applies muted styles.' },
      { name: 'onClick', type: '() => void', default: '—', description: 'Click handler. Not called when disabled.' },
      { name: 'children', type: 'React.ReactNode', default: '—', description: 'Button label content.' },
    ],
    notes: 'Never use destructive variant for reversible actions. Ghost is suited for secondary actions within a control strip alongside a primary.',
  },
  {
    name: 'IconToggle',
    layer: 'Atom',
    description: 'Icon-based toggle for binary on/off state. Exposes aria-pressed so screen readers announce the current state.',
    usage: `<IconToggle
  checked={isOn}
  onChange={setIsOn}
  disabled={false}
/>`,
    props: [
      { name: 'checked', type: 'boolean', default: 'false', description: 'Current on/off state of the toggle.' },
      { name: 'onChange', type: '(value: boolean) => void', default: '—', description: 'Called with the new state on each interaction.' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Prevents interaction and applies muted styles.' },
    ],
    notes: 'Always provide an accessible label via aria-label if the toggle lacks visible text context.',
  },
  {
    name: 'TextInput',
    layer: 'Atom',
    description: 'Labeled text input with built-in error state, inline validation message, and full focus ring management.',
    usage: `<TextInput
  id="email"
  label="Email"
  value={value}
  onChange={setValue}
  placeholder="you@example.com"
  error={error}
/>`,
    props: [
      { name: 'id', type: 'string', default: '—', description: 'Links the <label> and <input> via htmlFor. Required.' },
      { name: 'label', type: 'string', default: '—', description: 'Visible label text rendered above the input.' },
      { name: 'value', type: 'string', default: '—', description: 'Controlled value of the input.' },
      { name: 'onChange', type: '(value: string) => void', default: '—', description: 'Called on every keystroke with the new value.' },
      { name: 'placeholder', type: 'string', default: '—', description: 'Placeholder text shown when the input is empty.' },
      { name: 'error', type: 'string | null', default: 'null', description: 'Error message displayed below the input. Null hides it.' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Makes the input read-only and visually muted.' },
    ],
    notes: 'The id prop is required for accessibility — omitting it breaks the label association.',
  },
  {
    name: 'DownloadButton',
    layer: 'Atom',
    description: 'Triggers a programmatic file download via the Fetch API. Creates a blob URL, injects a temporary anchor, clicks it, then cleans up — no page navigation occurs.',
    usage: `<DownloadButton
  variant="primary"
  href="/assets/report.pdf"
  filename="report.pdf"
>
  Download Report
</DownloadButton>`,
    props: [
      { name: 'variant', type: `'primary' | 'secondary'`, default: `'primary'`, description: 'Visual style of the button.' },
      { name: 'href', type: 'string', default: '—', description: 'URL of the resource to download.' },
      { name: 'filename', type: 'string', default: '—', description: 'Name given to the downloaded file.' },
      { name: 'children', type: 'React.ReactNode', default: '—', description: 'Button label content.' },
    ],
    notes: 'The href must be same-origin or CORS-enabled. Cross-origin URLs without CORS headers will fail silently — errors are logged to the console.',
  },
  {
    name: 'SearchForm',
    layer: 'Molecule',
    description: 'Async search form composing TextInput and PrimaryButton. Shows a loading state during the async call and renders a no-results message when the result set is empty.',
    usage: `<SearchForm
  onSearch={async (query) => {
    const results = await api.search(query)
    return results
  }}
/>`,
    props: [
      { name: 'onSearch', type: '(query: string) => Promise<unknown[]>', default: '—', description: 'Async function called on submit. Return an empty array to trigger the no-results state.' },
    ],
    notes: 'onSearch receives the raw query string. Debouncing or trimming must be handled in the callback.',
  },
  {
    name: 'SearchBar',
    layer: 'Molecule',
    description: 'Lightweight stateless inline search for navigation contexts. Simpler than SearchForm — no loading state or results handling.',
    usage: `<SearchBar
  placeholder="Search components..."
  onSearch={(query) => navigate(\`/search?q=\${query}\`)}
/>`,
    props: [
      { name: 'placeholder', type: 'string', default: '—', description: 'Placeholder text shown in the search field.' },
      { name: 'onSearch', type: '(query: string) => void', default: '—', description: 'Called synchronously on submit with the current query.' },
    ],
    notes: 'Use SearchForm when you need async feedback. Use SearchBar when you only need to capture and route a query.',
  },
  {
    name: 'FeatureCard',
    layer: 'Molecule',
    description: 'Content card with optional media, title, description, and a polymorphic CTA. Renders the CTA as an <a> when href is provided, otherwise as a <button>.',
    usage: `<FeatureCard
  title="Token-Driven Design"
  description="All visual properties are CSS custom properties."
  ctaText="Learn more"
  href="/docs/tokens"
/>`,
    props: [
      { name: 'title', type: 'string', default: '—', description: 'Card heading.' },
      { name: 'description', type: 'string', default: '—', description: 'Supporting body text.' },
      { name: 'ctaText', type: 'string', default: '—', description: 'Label for the call-to-action.' },
      { name: 'href', type: 'string', default: '—', description: 'If provided, the CTA renders as an anchor tag.' },
    ],
    notes: 'Provide href for external/page links and omit it for in-page actions — the polymorphic CTA ensures correct semantics in both cases.',
  },
  {
    name: 'ImageCard',
    layer: 'Molecule',
    description: 'Media card with a fixed aspect-ratio image, optional photographer credit overlay, title, and description. Renders as an <article> by default or an <a> when href is provided.',
    usage: `<ImageCard
  src="https://images.unsplash.com/photo-..."
  alt="Field of yellow and white tulips"
  title="Spring Tulip Field"
  description="Shallow depth-of-field shot in soft morning light."
  credit="Squids Z"
  aspectRatio="16/9"
/>`,
    props: [
      { name: 'src', type: 'string', default: '—', description: 'Image source URL. Required.' },
      { name: 'alt', type: 'string', default: '—', description: 'Alt text for the image. Required for accessibility.' },
      { name: 'title', type: 'string', default: '—', description: 'Card heading rendered below the image.' },
      { name: 'description', type: 'string', default: '—', description: 'Supporting body text rendered below the title.' },
      { name: 'credit', type: 'string', default: '—', description: 'Photographer name shown as an overlay on the image.' },
      { name: 'aspectRatio', type: `'16/9' | '4/3' | '1/1' | '3/4'`, default: `'16/9'`, description: 'Constrains the image container to a fixed ratio.' },
      { name: 'href', type: 'string', default: '—', description: 'If provided, the entire card renders as an anchor tag.' },
    ],
    notes: 'Always provide a meaningful alt value — empty string is only valid when the image is purely decorative and context is provided elsewhere.',
  },
  {
    name: 'TopNav',
    layer: 'Organism',
    description: 'Full-width navigation bar with brand lockup, page links, and an integrated SearchBar. Baseline token-aligned implementation with no external prop dependencies.',
    usage: `<TopNav />`,
    props: [],
    notes: 'TopNav is a self-contained display component. Extend via composition rather than forking — add wrapping context or replace SearchBar at the organism level.',
  },
  {
    name: 'TopNavigation',
    layer: 'Organism',
    description: 'Feature-rich navigation bar with collapsible search, notification badge, sign-in CTA, and an integrated IconToggle. Designed for authenticated product surfaces.',
    usage: `<TopNavigation
  collapsed={isSearchCollapsed}
  showNotification={hasUnread}
/>`,
    props: [
      { name: 'collapsed', type: 'boolean', default: 'false', description: 'Collapses the inline SearchBar to save horizontal space.' },
      { name: 'showNotification', type: 'boolean', default: 'false', description: 'Renders a notification badge on the bell icon.' },
    ],
    notes: 'Use TopNavigation for authenticated shells. Use TopNav for simpler marketing or documentation surfaces.',
  },
]

const layerColors: Record<string, string> = {
  Atom: 'badge--outline',
  Molecule: 'badge--solid',
  Organism: 'badge--accent',
}

export default function DocumentationPage() {
  return (
    <main className="main releases-main">
      <header className="page-hero">
        <div className="page-hero__meta">
          <span className="badge badge--outline">API Reference</span>
          <span className="badge badge--solid">{docs.length} Components</span>
        </div>
        <h1 className="page-hero__title">
          Documentation
        </h1>
        <p className="page-hero__desc">
          Props, usage examples, and design guidelines for every component in the system. For interactive demos, see the Components page.
        </p>
      </header>

      <div className="releases-list">
        {docs.map((doc) => (
          <article key={doc.name} className="doc-entry">
            <div className="release-entry__header">
              <div className="release-entry__meta">
                <span className={`badge ${layerColors[doc.layer]}`}>{doc.layer}</span>
                <h2 className="doc-entry__name">{doc.name}</h2>
              </div>
            </div>

            <p className="release-entry__summary">{doc.description}</p>

            <div className="doc-entry__body">
              <div className="doc-section">
                <h3 className="release-section__heading">Usage</h3>
                <pre className="doc-code"><code>{doc.usage}</code></pre>
              </div>

              {doc.props.length > 0 && (
                <div className="doc-section">
                  <h3 className="release-section__heading">Props</h3>
                  <div className="doc-props">
                    <div className="doc-props__row doc-props__row--header">
                      <span>Prop</span>
                      <span>Type</span>
                      <span>Default</span>
                      <span>Description</span>
                    </div>
                    {doc.props.map((prop) => (
                      <div key={prop.name} className="doc-props__row">
                        <code className="doc-props__name">{prop.name}</code>
                        <code className="doc-props__type">{prop.type}</code>
                        <code className="doc-props__default">{prop.default}</code>
                        <span className="doc-props__desc">{prop.description}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="doc-section doc-section--note">
                <h3 className="release-section__heading">Design Notes</h3>
                <p className="doc-note">{doc.notes}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}
