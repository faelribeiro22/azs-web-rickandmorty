import client from 'graphql/client'
import GET_EPISODE from 'graphql/queries/getEpisode'
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
      setEpisodeInfo(episode)
    }
  }

  useEffect(() => {
    getEpisode()
  }, [slug])
  return <Episode {...episodeInfo} />
}
