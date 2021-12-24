import { CharacterCardProps } from 'components/CharacterCard'
import Link from 'next/link'

import * as S from './styles'

export type EpisodeInfoProps = {
  episode: number
  name: string
  air_date: string
}

const EpisodeInfo = ({ episode, name, air_date }: EpisodeInfoProps) => {
  const formatAirDate = () => {
    if (air_date) {
      const date = new Date(air_date)
      return new Intl.DateTimeFormat('pt-br').format(date)
    }
  }

  return (
    <S.Wrapper>
      <h1>{name}</h1>
      <S.TextLabel>Episódio: </S.TextLabel>
      {episode}
      <br />
      <S.TextLabel>Data que foi ao ar: </S.TextLabel>
      {formatAirDate()}
      <br />
      <S.LinkWrapper href="/">Voltar a todos episódios</S.LinkWrapper>
    </S.Wrapper>
  )
}

export default EpisodeInfo
