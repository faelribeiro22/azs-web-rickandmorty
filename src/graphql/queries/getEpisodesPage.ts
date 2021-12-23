import { gql } from 'graphql-request'

const GET_EPISODES_PAGE = gql`
  query GET_EPISODES_PAGE($page: Int!) {
    episodes(page: $page) {
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
export default GET_EPISODES_PAGE
