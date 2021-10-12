import prisma from '../../prisma';

const getProductDetail = async () => {
  console.log('무사히 디테일다오까지!!!!!!!!!')
  return await prisma.$queryRaw`
  SELECT categories.name, products.korean_name, products.english_name, allergies.name
  FROM products 
  LEFT JOIN categories
  ON categories.id = products.category_id
  LEFT JOIN product_allergies
  ON product_allergies.product_id = products.id
  LEFT JOIN allergies
  ON allergies.id = product_allergies.allergy_id
  WHERE categories.id = 2;
  `;
};

export default { getProductDetail };