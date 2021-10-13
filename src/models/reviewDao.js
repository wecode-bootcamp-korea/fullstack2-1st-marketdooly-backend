import prisma from '../../prisma';

const createReview = async (title, text, userId) => {
  await prisma.$queryRaw`
    INSERT INTO reviews (title, text, user_id, created_at)
    VALUES (${title}, ${text}, ${userId}, ${new Date()})
  ;`;
};

const getReviewList = async (offset, limit) => {
  return await prisma.$queryRaw`
    SELECT id
         , title
         , text
         , user_id
         , created_at
         , updated_at
      FROM reviews
     WHERE id > ${offset}
     LIMIT ${limit}
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

export default { createReview, getReviewList, updateReview, deleteReview };
