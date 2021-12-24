import * as S from './styles'
import EpisodeInfo from '../../components/EpisodeInfo'
import ListCharacter from 'components/ListCharacter'
import { CharacterCardProps } from 'components/CharacterCard'

export type EpisodeProps = {
  episode: number
  name: string
  air_date: string
  characters: CharacterCardProps[]
}

const Episode = ({ episode, name, air_date, characters }: EpisodeProps) => (
  <S.Wrapper>
    <S.Logo src="/img/rick-and-morty-logo.png" alt="Logo" />
    <EpisodeInfo episode={episode} name={name} air_date={air_date} />
    <S.SubTitle>Lista de personagens</S.SubTitle>
    <ListCharacter characters={characters} />
  </S.Wrapper>
)

export default Episode
