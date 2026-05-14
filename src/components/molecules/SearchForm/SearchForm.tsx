import React, { useState } from 'react'
import '../../atoms/TextInput/TextInput'
import '../../atoms/PrimaryButton/PrimaryButton'
import TextInput from '../../atoms/TextInput/TextInput'
import PrimaryButton from '../../atoms/PrimaryButton/PrimaryButton'
import './SearchForm.css'

type Props = {
  onSearch?: (query: string) => Promise<unknown>
  formId?: string
}

const SearchForm: React.FC<Props> = ({ onSearch, formId }) => {
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [noResults, setNoResults] = useState(false)

  const submit = async (e?: React.FormEvent) => {
    e?.preventDefault()
    setNoResults(false)
    if (!onSearch) return
    setLoading(true)
    try {
      const res = await onSearch(query)
      const empty = Array.isArray(res) ? res.length === 0 : !res
      setNoResults(empty)
    } catch (error) {
      void error
      setNoResults(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form id={formId} className={`search-form ${loading ? 'search-form--loading' : ''} ${noResults ? 'search-form--no-results' : ''}`} onSubmit={submit} role="search">
      <TextInput
        id="search-input"
        label={undefined}
        value={query}
        onChange={setQuery}
        placeholder="Search"
      />
      <PrimaryButton onClick={() => submit()} disabled={loading}>
        {loading ? 'Searching…' : 'Search'}
      </PrimaryButton>
      {noResults && <p className="search-form__no-results">No results</p>}
    </form>
  )
}

export default SearchForm
