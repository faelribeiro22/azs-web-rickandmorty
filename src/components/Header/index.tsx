import * as S from './styles'
import Search from '../Search'

export type HeaderProps = {
  search: (search: string) => void
  clear: () => void
  getFavoritesEpisodes: (episodes: Array<number>) => void
}

const Header = ({ search, getFavoritesEpisodes, clear }: HeaderProps) => {
  const getFavoritesLocalStorage = () => {
    const favorites = localStorage.getItem('favorites')
      ? JSON.parse(localStorage.getItem('favorites') || '')
      : []
    return favorites
  }

  const sendFavoriteEpisodes = () => {
    const favorites = getFavoritesLocalStorage()
    getFavoritesEpisodes(favorites)
  }

  return (
    <S.Wrapper>
      <Search sendSearch={(text) => search(text)} />
      <S.Favorites onClick={() => sendFavoriteEpisodes()}>
        Favoritos
      </S.Favorites>
      <S.Clear onClick={() => clear()}>Inicio</S.Clear>
    </S.Wrapper>
  )
}

export default Header
