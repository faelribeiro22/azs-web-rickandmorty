import * as S from './styles'
import Loading from '../Loading'
import { CardEpisodeProps } from '../CardEpisode'
import CardEpisode from '../CardEpisode'
import EmptyState from '../EmptyState'

export type ListEpisodesProps = {
  episodes: Array<CardEpisodeProps>
  loading: boolean
}

const ListEpisodes = ({ episodes, loading }: ListEpisodesProps) => (
  <S.Container>
    {loading && episodes.length !== 0 ? (
      <Loading />
    ) : episodes.length === 0 ? (
      <EmptyState />
    ) : (
      episodes.map((episode) => <CardEpisode key={episode.id} {...episode} />)
    )}
  </S.Container>
)

export default ListEpisodes
