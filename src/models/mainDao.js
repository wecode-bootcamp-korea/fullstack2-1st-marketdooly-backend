import prisma from '../../prisma';

const getCategories = async () => {
  return await prisma.$queryRaw`
    SELECT c.name categoryName
         , sc.name subCategoryName
      FROM categories c
         , sub_categories sc
     WHERE sc.category_id = c.id;
  `;
};

const getBanner = async group => {
  return await prisma.$queryRaw`
  SELECT  b.id
        , b.group
        , b.image
        , b.link
        , b.type
        , b.header
        , b.description
  FROM  banners b
  WHERE b.group = ${group};
  `;
};

const getEvent = async group => {
  return await prisma.$queryRaw`
  SELECT  p.id
        , i.product_image
        , p.name
        , p.sales_price
        , p.discount_rate
        , p.original_price
        , p.special_features
        , e.header
        , e.description
  FROM    events e
  JOIN    products p
    ON    p.id = e.product_id
  JOIN    images i
    ON    i.product_id = p.id
  WHERE e.group = ${group};
  `;
};

export default {
  getCategories,
  getBanner,
  getEvent,
};
