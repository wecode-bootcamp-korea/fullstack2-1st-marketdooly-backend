import prisma from '../../prisma';

const getCategories = async () => {
  return await prisma.$queryRaw`
  SELECT      c.name categoryName
            , c.id id
  FROM        categories c
  `;
};

const getAllCategories = async () => {
  return await prisma.$queryRaw`
  SELECT
        c.id categoryId
        , c.name categoryName
        , sc.id subCategoryId
        , sc.name subCategoryName
  FROM  categories c
  LEFT JOIN  sub_categories sc
  ON    c.id = sc.category_id;
  `;
};

const getMDsPick = async categoryId => {
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
  FROM    category_event t
  JOIN    products p
    ON    p.id = t.product_id
  JOIN    images i
    ON    i.product_id = p.id
  JOIN    events e
    ON    e.id = t.event_id
  WHERE   t.category_id = ${categoryId};
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
  getAllCategories,
  getBanner,
  getEvent,
  getMDsPick,
};
