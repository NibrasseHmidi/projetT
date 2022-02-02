import { gql } from 'graphql-tag'
export const blogQuery = gql`
query blogQuery {
  blogs {
    data {
      attributes {
        title
        views
        content
        date
        id
      }
    }
  }
}
`
