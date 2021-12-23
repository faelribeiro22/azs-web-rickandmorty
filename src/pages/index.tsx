import Main from 'components/Main'
import Episodes from 'template/Episodes'
import GET_EPISODES from 'graphql/queries/getRickAndMorry'
import GET_EPISODES_PAGE from 'graphql/queries/getEpisodesPage'
import GET_EPISODES_BY_NAME from 'graphql/queries/getEpisodeByName'
import { useEffect, useState } from 'react'
import { GetStaticPaths } from 'next'
import { EpisodesApiProps } from 'types/api'
import client from 'graphql/client'
import { CardEpisodeProps } from 'components/CardEpisode'
import { PaginationProps } from 'components/Pagination'
import GET_EPISODES_BY_ID from 'graphql/queries/getEpisodeById'

export default function Home({ episodes, info }: EpisodesApiProps) {
  const [loading, setLoading] = useState(false)
  const [episodesList, setEpisodesList] = useState<Array<CardEpisodeProps>>([])
  const [infoPagination, setInfoPagination] = useState<PaginationProps>({})

  useEffect(() => {
    if (episodes?.length === 0) {
      setLoading(true)
    } else {
      setEpisodesList(episodes)
      setInfoPagination(info)
    }
  }, [episodes, info])

  const changePage = async (page: number) => {
    setLoading(true)
    const { episodes } = await client.request(GET_EPISODES_PAGE, { page })
    setEpisodesList(episodes.results)
    setInfoPagination(episodes.info)
    setLoading(false)
  }

  const searchEpisode = async (name: string) => {
    if (name.length === 0) {
      changePage(1)
    }
    setLoading(true)
    const { episodes } = await client.request(GET_EPISODES_BY_NAME, { name })
    setEpisodesList(episodes.results)
    setInfoPagination(episodes.info)
    setLoading(false)
  }

  const getFavoritesEpisodes = async (episodesFavorites: Array<number>) => {
    setLoading(true)
    console.log('desgraçaaaaaa', episodesFavorites)
    const { episodesByIds } = await client.request(GET_EPISODES_BY_ID, {
      ids: episodesFavorites
    })
    console.log('episodesssss', episodesByIds)
    setEpisodesList(episodesByIds)
    setInfoPagination({})
    setLoading(false)
  }

  return (
    <Episodes
      loading={loading}
      episodes={episodesList}
      info={infoPagination}
      nextPage={changePage}
      prevPage={changePage}
      search={searchEpisode}
      getFavoritesEpisodes={getFavoritesEpisodes}
    />
  )
}

export const getStaticProps: GetStaticPaths = async () => {
  const { episodes } = await client.request(GET_EPISODES)
  return {
    props: {
      episodes: episodes.results,
      info: episodes.info
    }
  }
}
