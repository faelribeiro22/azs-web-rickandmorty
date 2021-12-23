import * as S from './styles'
import { Favorite, Eye } from '../Icons'
import { useEffect, useState } from 'react'

export type Character = {
  name: string
}

export type CardEpisodeProps = {
  id: number
  name: string
  episode: string
  air_date: string
  characters: Array<Character>
}

const CardEpisode = ({
  id,
  name,
  episode,
  air_date,
  characters
}: CardEpisodeProps) => {
  const [favorited, setFavorited] = useState(false)
  const quantityCharacters = () => characters.length
  const formatAirDate = () => {
    const date = new Date(air_date)
    return new Intl.DateTimeFormat('pt-br').format(date)
  }

  const favoriteEpisode = () => {
    console.log('favoriteEpisode', id)
    const favorites = localStorage.getItem('favorites')
      ? JSON.parse(localStorage.getItem('favorites') || '')
      : []
    if (favorites.includes(id)) {
      favorites.splice(favorites.indexOf(id), 1)
      setFavorited(false)
    } else {
      favorites.push(id)
      setFavorited(true)
    }
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }

  const isFavorite = () => {
    const favorites = localStorage.getItem('favorites')
      ? JSON.parse(localStorage.getItem('favorites') || '')
      : []
    setFavorited(favorites.includes(id))
  }

  useEffect(() => {
    isFavorite()
  }, [])

  return (
    <S.Wrapper>
      <span>Episode: {episode}</span>
      <br />
      Data que foi ao ar: <span>{formatAirDate()}</span>
      <h2>{name}</h2>
      <span>Número de personagens: {quantityCharacters()}</span>
      <S.ActionItems>
        <Eye color="#000" size="20" title="Já assisti esse episódio" />
        <Favorite
          color={favorited ? 'red' : '#000'}
          size="20"
          click={() => favoriteEpisode()}
        />
      </S.ActionItems>
    </S.Wrapper>
  )
}

export default CardEpisode
