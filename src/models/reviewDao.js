import prisma from '../../prisma';

const createReview = async (title, text, userId) => {
  await prisma.$queryRaw`
    INSERT INTO reviews (title, text, user_id, created_at)
    VALUES (${title}, ${text}, ${userId}, ${new Date()})
  ;`;
};

const getTotalReviewCount = async productId => {
  const [totalCountObj] = await prisma.$queryRaw`
    SELECT COUNT(1) as totalCount
      FROM reviews
     WHERE product_id = ${productId}
  ;`;
  return totalCountObj;
};

const getReviewList = async query => {
  const { productId, offset, limit } = query;
  return await prisma.$queryRaw`
    SELECT r.id
         , r.title
         , r.text
         , r.product_id as productId
         , p.name as productName
         , c.name as categoryName
         , sc.name as categorySubName
         , r.user_id as userId
         , (SELECT u.name FROM users u WHERE u.id = r.user_id) as userName
         , r.created_at as createdAt
         , r.updated_at as updatedAt
      FROM reviews r
         , products p
         , categories c
         , sub_categories sc
     WHERE r.product_id = ${productId}
       AND p.id = r.product_id
       and sc.id = p.sub_category_id
       and c.id = sc.category_id
     ORDER BY r.id DESC
     LIMIT ${limit}
    OFFSET ${offset}
  ;`;
};

const updateReview = async (reviewId, title, text) => {
  await prisma.$queryRaw`
    UPDATE reviews 
       SET title = ${title},
           text = ${text}
     WHERE id = ${reviewId}
  ;`;
};

const deleteReview = async reviewId => {
  await prisma.$queryRaw`
    DELETE FROM reviews 
     WHERE id = ${reviewId}
  ;`;
};

export default {
  createReview,
  getTotalReviewCount,
  getReviewList,
  updateReview,
  deleteReview,
};
