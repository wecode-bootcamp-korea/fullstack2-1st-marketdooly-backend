import prisma from '../../prisma';

const getProductDetail = async () => {
  return [{'dd': 'ddd'}];
};

// const getProductDetail = async () => {
//   return await prisma.$queryRaw`
  //   SELECT categories.name, products.korean_name, products.english_name, allergies.name
  //   FROM products 
  //   LEFT JOIN categories
  //   ON categories.id = products.category_id
  //   LEFT JOIN product_allergies
  //   ON product_allergies.product_id = products.id
  //   LEFT JOIN allergies
  //   ON allergies.id = product_allergies.allergy_id
  //   WHERE categories.id = 2;
//   `;
// };

//데이터넣어야함
const postProductDetail = async () => {
  return await prisma.$queryRaw`
    INSERT INTO products
    (name, summary, sales_price, discount_rate, origianl_price, earn_point, sub_category_id, sales_unit, weight_or_capacity, delivery_type, origin_country, packaging, package_message, allergen_information, expiry_date, notice)
    VALUES
    ('친환경 당근 500g', '껍질째 먹을 수 있는 친환경 흙당근 (500g 내외)', 2474, 8, 2690, 124, 2, '1봉지', '500g(2~4개입)', '샛별배송/택배배송', '국내', '냉장/종이포장', '택배배송은 에코포장이 스티로폼으로 대체됩니다', '', '', '- 식품 특성상 중량은 5% 내외의 차이가 발생할 수 있습니다. - 해당 상품은 여러 협력업체에서 납품하고 있는 상품으로 수령 시, 상이한 협력업체의 상품을 받아보실 수 있습니다.')
  `;
};

export default { getProductDetail, postProductDetail };
