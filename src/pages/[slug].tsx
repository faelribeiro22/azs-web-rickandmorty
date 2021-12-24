import client from 'graphql/client'
import GET_EPISODE from 'graphql/queries/getEpisode'
import GET_EPISODES_PAGE from 'graphql/queries/getEpisodesPage'
import GET_EPISODES from 'graphql/queries/getRickAndMorry'
import { GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Episode from 'template/Episode'

export default function Index() {
  const router = useRouter()
  const { slug } = router.query
  const [episodeInfo, setEpisodeInfo] = useState<any>({})

  const getEpisode = async () => {
    if (slug) {
      const { episode } = await client.request(GET_EPISODE, { id: slug })
      console.log('Episode', episode)
      setEpisodeInfo(episode)
    }
  }

  useEffect(() => {
    console.log('Episode', slug)
    getEpisode()
  }, [slug])
  return <Episode {...episodeInfo} />
}
