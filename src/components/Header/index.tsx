import * as S from './styles'
import Search from '../Search'
import { useEffect, useState } from 'react'

export type HeaderProps = {
  search: (search: string) => void
  getFavoritesEpisodes: (episodes: Array<number>) => void
}

const Header = ({ search, getFavoritesEpisodes }: HeaderProps) => {
  const [favoriteEpisodes, setFavoriteEpisodes] = useState<Array<number>>([])

  useEffect(() => {
    const favorites = localStorage.getItem('favorites')
      ? JSON.parse(localStorage.getItem('favorites') || '')
      : []
    setFavoriteEpisodes(favorites)
  }, [])

  return (
    <S.Wrapper>
      <Search sendSearch={(text) => search(text)} />
      <S.Favorites onClick={() => getFavoritesEpisodes(favoriteEpisodes)}>
        Favoritos
      </S.Favorites>
    </S.Wrapper>
  )
}

export default Header
