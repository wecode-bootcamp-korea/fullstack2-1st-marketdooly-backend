import prisma from '../../prisma';

const addToCart = async (user_id, product_id, quantity) => {
  return await prisma.$queryRaw`
  INSERT INTO carts (user_id, product_id, quantity)
  VALUES (
    ${user_id},
    ${product_id},
    ${quantity}
  )
  `;
};

const getCart = async user_id => {
  return await prisma.$queryRaw`
     SELECT c.quantity, p.name, p.sales_price, p.original_price, p.earn_points,
            i.thumbnail_image, s.storage_type
       FROM carts c, products p, images i, storage_temperature s
      WHERE user_id = ${user_id}
  `;
};

const updateItemQuantity = async (cartId, quantity) => {
  return await prisma.$queryRaw`
  UPDATE carts
     SET quantity=${quantity}
   WHERE id=${cartId}
  `;
};

const deleteItem = async cart_id => {
  return await prisma.$queryRaw`
  DELETE FROM carts
   WHERE id=${cart_id}
  `;
};

export default {
  addToCart,
  getCart,
  updateItemQuantity,
  deleteItem,
};
