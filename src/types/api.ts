import { CardEpisodeProps } from 'components/CardEpisode'
import { PaginationProps } from 'components/Pagination'

export type EpisodesApiProps = {
  episodes: Array<CardEpisodeProps>
  info: PaginationProps
}
