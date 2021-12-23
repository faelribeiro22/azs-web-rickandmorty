import * as S from './styles'
import { useState } from 'react'

export type SearchProps = {
  sendSearch: (search: string) => void
}

const Search = ({ sendSearch }: SearchProps) => {
  const [search, setSearch] = useState('')

  return (
    <S.Wrapper
      onSubmit={(e) => {
        e.preventDefault()
        sendSearch(search)
      }}
    >
      <S.SearchText
        type="text"
        placeholder="Busque pelo nome do episódio"
        id="searchRickAndMortyEpisode"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </S.Wrapper>
  )
}

export default Search
