import prisma from '../../prisma';
import { Prisma } from '@prisma/client';

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

const updateItemQuantity = async (cartId, quantity) => {
  return await prisma.$queryRaw`
  UPDATE carts
    SET quantity=${quantity}
  WHERE id=${cartId}
  `;
};

const searchCartDuplicate = async (user_id, product_id) => {
  return await prisma.$queryRaw`
  SELECT
    carts.id,
    carts.quantity quantityInDB
  FROM
    carts
  WHERE
    carts.user_id = ${user_id}
  AND
    carts.product_id = ${product_id}
  `;
};

const getCart = async userId => {
  const cartDataList = await prisma.$queryRaw`
  SELECT
    carts.product_id productId,
    carts.quantity,
    (SELECT u.address FROM users u WHERE u.id = ${userId}) address
  FROM
    carts
  WHERE
    user_id = ${userId}
  `;

  const result = await prisma.$queryRaw`
  SELECT 
    p.id product_id
  , p.name
  , p.sales_price
  , p.original_price
  , p.earn_points
  , p.storage_temperature_id storage_temperature
  , (SELECT i.thumbnail_image FROM images i WHERE i.product_id = p.id) thumbnail_image
  , (SELECT c.quantity FROM carts c WHERE c.product_id = p.id AND c.user_id = ${userId}) quantity
  , (SELECT c.id FROM carts c WHERE c.product_id = p.id AND c.user_id = ${userId}) id
  FROM
    products p
  WHERE
    p.id in (${Prisma.join(cartDataList.map(product => product.productId))})
  `;

  result.unshift(cartDataList[0].address);
  return result;
};

const deleteItem = async cartId => {
  return await prisma.$queryRaw`
  DELETE FROM carts
  WHERE id=${cartId}
  `;
};

const deleteItems = async cartIds => {
  return await prisma.$queryRaw`
  DELETE FROM
    carts
  WHERE
    id IN (${Prisma.join(cartIds)})
  `;
};

export default {
  addToCart,
  getCart,
  updateItemQuantity,
  deleteItem,
  searchCartDuplicate,
  deleteItems,
};
