import prisma from '../../prisma';

const getProductDetail = async () => {
  return await prisma.$queryRaw`
  SELECT
    products.name, products.summary, products.sales_price, products.discount_rate, products.original_price, products.earn_points, products.special_features, products.sub_category_id, products.sales_unit, products.weight_or_capacity, products.delivery_type, products.origin_country, products.packaging, products.package_message, products.allergen_infomation, products.expiry_date, products.notice, images.product_image, images.description_image, images.labeling_image, images.template_image
  FROM
    products
  LEFT JOIN
    images
  ON
    products.id=images.product_id
  `;
};


const postProductDetail = async () => {
  return await prisma.$queryRaw`
  INSERT INTO products
    (name, summary, sales_price, discount_rate, original_price, earn_points, special_features, sub_category_id, sales_unit, weight_or_capacity, updated_at, delivery_type, origin_country, packaging, package_message, allergen_infomation, expiry_date, notice)
  VALUES
    ('친환경 당근 500g', '껍질째 먹을 수 있는 친환경 흙당근 (500g 내외)', 2474, 8, 2690, 124, NULL, 1, '1봉지', '500g(2~4개입)', NULL, '샛별배송/택배배송', '국내', '냉장/종이포장', '택배배송은 에코포장이 스티로폼으로 대체됩니다', NULL, NULL, '- 식품 특성상 중량은 5% 내외의 차이가 발생할 수 있습니다. - 해당 상품은 여러 협력업체에서 납품하고 있는 상품으로 수령 시, 상이한 협력업체의 상품을 받아보실 수 있습니다.')
    ('[우리밀] 참깨 꼬소봉', '길쭉한 스틱 과자에 국산 참깨가 콕콕 박힌', 2380, 20, 3000, 167, '+15%쿠폰', 58, '1박스', '100g', NULL, '상온/종이포장', '택배배송은 에코포장이 스티로폼으로 대체됩니다', '- 밀, 우유, 대두 함유 - 계란, 땅콩, 토마토, 호두, 쇠고기 와 같은 시설에서 생산', '상세정보 및 제품 별도라벨 표기', '해당상품은 '오징어 땅콩볼' 제품과 무관한 제조사에서 생산되고 있습니다. 제품 구매시 참고 부탁드립니다.')
  `;
};

export default { getProductDetail, postProductDetail };