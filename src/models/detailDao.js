import prisma from '../../prisma';

const getDetail = async () => {
  console.log('무사히 디테일다오까지!!!!!!!!!')
  return await prisma.$queryRaw`
  SELECT * FROM products
  `;
};

export default { getDetail };