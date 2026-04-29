import React from 'react'
import './App.css'
import './styles/tokens.css'
import DownloadButton from './components/atoms/DownloadButton/DownloadButton'
import TopNav from './components/organisms/TopNav/TopNav'
import FeatureCard from './components/molecules/FeatureCard/FeatureCard'

export default function App() {
  return (
    <div className="app">
      <TopNav />

      <main className="app__main">
        <section className="app__hero app__content">
          <h1 className="app__title">Emotion — Product</h1>
          <p className="app__lead">A modern brutalist design system with high-contrast tokens.</p>
          <DownloadButton href="/sample.pdf" filename="sample.pdf">Download PDF</DownloadButton>
        </section>

        <section id="features" className="app__features">
          <h2 className="app__section-title">Features</h2>
          <div className="feature-grid">
            <FeatureCard title="Fast" description="Lightning-fast performance." />
            <FeatureCard title="Accessible" description="Built with semantic HTML and strong contrast." />
            <FeatureCard title="Composable" description="Small atoms compose into powerful organisms." />
          </div>
        </section>
      </main>
    </div>
  )
}
