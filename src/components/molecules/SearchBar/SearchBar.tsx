import React, { useState } from 'react'
import './SearchBar.css'

type Props = {
  placeholder?: string
  onSearch?: (value: string) => void
}

export default function SearchBar({ placeholder = 'Search...', onSearch }: Props) {
  const [value, setValue] = useState('')

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (onSearch) onSearch(value)
  }

  return (
    <form className="search-bar" role="search" onSubmit={submit}>
      <label htmlFor="search-input" className="search-bar__label visually-hidden">Search</label>
      <input
        id="search-input"
        className="search-bar__input"
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        aria-label="Search"
      />
      <button type="submit" className="search-bar__button">Search</button>
    </form>
  )
}
