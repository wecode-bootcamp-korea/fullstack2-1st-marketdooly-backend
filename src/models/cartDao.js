import prisma from '../../prisma';

const getCart = async id => {
  return await prisma.$queryRaw`
  SELECT  u.address,
          c.id,
          c.quantity,
          p.name_korean,
          p.thumb_url,
          p.original_price,
          p.sales_price,
          d.earn_point,
          d.storage_type
    FROM  users u,
          carts c,
          products p,
          products_details d
    WHERE u.id=${id}
      AND c.user_id=u.id
      AND c.product_id=p.id
      AND c.product_detail_id=d.id
  `;
};

const updateItemQuantity = async quantity => {
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

const addToCart = async cartData => {
  const { product_id, product_detail_id, quantity } = cartData;
  return await prisma.$queryRaw`
  INSERT INTO carts
    ( product_id, product_detail_id, quantity )
  VALUES (
    ${product_id},
    ${product_detail_id},
    ${quantity}
  )
  `;
};

export default { getCart, updateItemQuantity, deleteItem, addToCart };
