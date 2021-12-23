import { gql } from 'graphql-request'

const GET_EPISODES_BY_ID = gql`
  query GET_EPISODES_BY_ID($ids: [ID!]!) {
    episodesByIds(ids: $ids) {
      id
      name
      episode
      air_date
      characters {
        name
      }
    }
  }
`
export default GET_EPISODES_BY_ID
