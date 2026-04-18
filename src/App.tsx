import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import DownloadButton from './components/atoms/DownloadButton/DownloadButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="app">
      <header className="app__header">
        <img src={viteLogo} className="app__logo" alt="Vite logo" />
        <img src={reactLogo} className="app__logo" alt="React logo" />
      </header>

      <section className="app__content">
        <h1 className="app__title">Emotion Design System — Demo</h1>
        <DownloadButton href="/sample.pdf" filename="sample.pdf">Download Sample PDF</DownloadButton>
      </section>
    </main>
  )
}

export default App
