import prisma from '../../prisma';

const cartToOrder = async cart_id => {
  return await prisma.$queryRaw`
  INSERT INTO orders (cart_id)
  VALUES (${cart_id})
  `;
};

export default { cartToOrder };
