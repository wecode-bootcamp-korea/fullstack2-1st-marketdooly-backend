import prisma from "../../prisma";

const getCategories = async () => {
  return await prisma.$queryRaw`
  SELECT  c.name
        , s_c.name
  FROM  categories c
      , sub_categories s_c;
  `;
};

const getCarouselData = async (id) => {
  return await prisma.$queryRaw`
  SELECT  i.img_url
        , p.id
        , p.name as product_name
        , p.price
        , p.discount
        , p.discount_rate
        , p.cost
  FROM    images i
        , products p
  WHERE p.id = ${id}
  `
}

const getMainBannerData = async () => {
  return await prisma.$queryRaw`
  SELECT i.mainbanner_image_url
  FROM images i
  `
}

const getSpecialPriceData = async () => {
  return await prisma.$queryRaw`
  SELECT i.special_price_image_url
  FROM images i
  `
}

export default {
  getCategories,
  getCarouselData,
  getMainBannerData,
  getSpecialPriceData
}