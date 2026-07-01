export const ALL_POSTS_QUERY = `
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    author->{
      name,
      image
    },
    categories[]->{
      _id,
      title
    }
  }
`;

export const POST_DETAIL_QUERY = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    body,
    author->{
      name,
      image,
      bio
    },
    categories[]->{
      _id,
      title
    }
  }
`;

export const ALL_SLUGS_QUERY = `
  *[_type == "post" && defined(slug.current)][].slug.current
`;
