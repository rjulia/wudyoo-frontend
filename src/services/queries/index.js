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
      title_en
      title_zh
      title_hk
    }
  }
`;

export const GET_PAGE = gql`
  query PageBySlug($slug: String!) {
    pageBySlug(slug: $slug){
      id
      published_at
      updatedAt
      slug
      content
      title_en
      title_zh
      title_hk
    }
  }
`;

export const GET_CATEGORIES = gql`
  query getCategories {
    categories{
      id
      category
      picture{
        id
        width
        previewUrl
        url
        alternativeText
        hash
        height
        formats
      }
      title_en
      title_zh
      title_hk
      subcategories{
        id
        title_en
      }
    }
  }
`

