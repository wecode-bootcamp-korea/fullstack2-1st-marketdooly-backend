import prisma from '../../prisma';

const addToCart = async cartData => {
  const { user_id, product_id, quantity } = cartData;
  return await prisma.$queryRaw`
  INSERT INTO carts
    ( user_id, product_id, quantity )
  VALUES (
    ${user_id},
    ${product_id},
    ${quantity}
  )
  `;
};

const getCart = async userId => {
  return await prisma.$queryRaw`
     SELECT u.address, c.quantity, p.name, p.sales_price, p.original_price, p.earn_points,
            i.thumbnail_image, s.storage_type
       FROM carts c
  LEFT JOIN users u
         ON carts.user_id = users.id
  LEFT JOIN products p
         ON carts.product_id = products.id
  LEFT JOIN images i
         ON product.id = images.product_id
  LEFT JOIN storage_temperature s
         ON product.id =storage_temperature.product_id
      WHERE cart.user_id=${userId}
  `;
};

const updateItemQuantity = async (cartId, quantity) => {
  return await prisma.$queryRaw`
  UPDATE carts
     SET quantity=${quantity}
   WHERE id=${cartId}
  `;
};

const deleteItem = async productId => {
  return await prisma.$queryRaw`
  DELETE FROM carts
   WHERE cart.product_id=${productId}
  `;
};

const cartToOrder = async cartId => {
  return await prisma.$queryRaw`
  INSERT INTO orders (cart_id)
  VALUES (${cartId})
  `;
};

export default {
  addToCart,
  getCart,
  updateItemQuantity,
  deleteItem,
  cartToOrder,
};
