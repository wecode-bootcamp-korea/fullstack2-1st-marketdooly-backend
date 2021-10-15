import prisma from '../../prisma';

const getProductDetail = async productId => {
  return await prisma.$queryRaw`
  SELECT
    products.id, products.name, products.summary, products.sales_price, products.discount_rate, products.original_price, products.earn_points, products.special_features, products.sub_category_id, products.sales_unit, products.weight_or_capacity, products.delivery_type, products.origin_country, products.packaging, products.package_message, products.allergen_information, products.expiry_date, products.notice, images.product_image, images.description_image, images.labeling_image, images.template_image
  FROM
    products
  LEFT JOIN
    images
  ON
    products.id=images.product_id
  WHERE
    products.id = ${productId}
  `;
};

export default { getProductDetail };
