import prisma from '../../prisma';

const getCart = async () => {
  return await prisma.$queryRaw`
  SELECT * FROM carts
  `;
};

const putItemQuantity = async quantity => {
  return await prisma.$queryRaw`
  UPDATE carts
  SET quantity=${quantity}
  WHERE id=${id}
  `;
};

const deleteItem = async () => {
  return await prisma.$queryRaw`
  DELETE FROM carts
  WHERE id=${id}
  `;
};

const postCart = async cartData => {
  const {
    address,
    name_kor,
    sales_price,
    original_price,
    earn_point,
    storage_temp,
    thumb_url,
    quantity,
  } = cartData;
  return await prisma.$queryRaw`
  INSERT INTO orders
    ( address, name_kor, sales_price, original_price, earn_point, storage_temp, thumb_url, quantity )
  VALUES (
    ${address},
    ${name_kor},
    ${sales_price},
    ${original_price},
    ${earn_point},
    ${storage_temp},
    ${thumb_url},
    ${quantity}
  )
  `;
};

export default { getCart, putItemQuantity, deleteItem, postCart };
