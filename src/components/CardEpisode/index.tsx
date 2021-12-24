import * as S from './styles'
import { Favorite, Eye } from '../Icons'
import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'

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
  const [watched, setWatched] = useState(false)
  const quantityCharacters = () => characters.length

  const formatAirDate = () => {
    const date = new Date(air_date)
    return new Intl.DateTimeFormat('pt-br').format(date)
  }

  const favoriteEpisode = () => {
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

  const watchedEpisode = () => {
    const watched = localStorage.getItem('watched')
      ? JSON.parse(localStorage.getItem('watched') || '')
      : []
    if (watched.includes(id)) {
      watched.splice(watched.indexOf(id), 1)
      setWatched(false)
    } else {
      watched.push(id)
      setWatched(true)
    }
    localStorage.setItem('watched', JSON.stringify(watched))
  }

  const isWatched = useCallback(() => {
    const watched = localStorage.getItem('watched')
      ? JSON.parse(localStorage.getItem('watched') || '')
      : []
    setWatched(watched.includes(id))
    return watched.includes(id)
  }, [id])

  const isFavorite = useCallback(() => {
    const favorites = localStorage.getItem('favorites')
      ? JSON.parse(localStorage.getItem('favorites') || '')
      : []
    setFavorited(favorites.includes(id))
  }, [id])

  useEffect(() => {
    isFavorite()
    isWatched()
  }, [isFavorite, isWatched])

  return (
    <S.Wrapper>
      <span>Episode: {episode}</span>
      <br />
      Data que foi ao ar: <span>{formatAirDate()}</span>
      <Link href={`/${id}`} passHref>
        <S.TextSpace title={name}>{name}</S.TextSpace>
      </Link>
      <span>Número de personagens: {quantityCharacters()}</span>
      <S.ActionItems>
        <Eye
          color={watched ? '#1a73e8' : '#000'}
          size="20"
          title={
            watched
              ? 'Remover dos episódios assistidos'
              : 'Adicionar aos episódios assistidos'
          }
          click={() => watchedEpisode()}
        />
        <Favorite
          color={favorited ? 'red' : '#000'}
          size="20"
          title={
            favorited ? 'Remover dos favoritos' : 'Adicionar aos favoritos'
          }
          click={() => favoriteEpisode()}
        />
      </S.ActionItems>
    </S.Wrapper>
  )
}

export default CardEpisode
