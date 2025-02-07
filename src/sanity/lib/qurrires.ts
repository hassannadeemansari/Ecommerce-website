export const allProducts = `
  *[_type == "product"]{
    _id,
    title,
    "slug": slug.current, // Ensure slug is fetched properly
    productImage,
    price
  }
`;
