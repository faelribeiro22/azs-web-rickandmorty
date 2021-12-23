import { gql } from 'graphql-request'

const GET_EPISODES_BY_NAME = gql`
  query GET_EPISODES_BY_NAME($name: String!) {
    episodes(filter: { name: $name }) {
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
export default GET_EPISODES_BY_NAME
