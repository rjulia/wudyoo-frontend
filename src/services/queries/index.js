import { gql } from 'apollo-boost';

export const GET_PAGES = gql`
  query getPages {
    pages{
      id
      _id
      published_at
      updatedAt
      slug
      content
      title
    }
  }
`;

