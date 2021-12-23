import { gql } from 'graphql-request'

const GET_EPISODES = gql`
  query GET_EPISODES {
    episodes {
      results {
        id
        name
        episode
        air_date
        characters {
          name
        }
      }
      info {
        next
        prev
      }
    }
  }
`
export default GET_EPISODES
