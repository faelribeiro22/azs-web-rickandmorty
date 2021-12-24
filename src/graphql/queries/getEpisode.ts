import { gql } from 'graphql-request'

const GET_EPISODE = gql`
  query GET_EPISODE($id: ID!) {
    episode(id: $id) {
      id
      name
      air_date
      episode
      characters {
        id
        name
        status
        species
        image
      }
    }
  }
`
export default GET_EPISODE
