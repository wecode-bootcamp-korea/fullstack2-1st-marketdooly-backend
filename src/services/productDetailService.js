import { productDetailDao } from '../models';

const getProductDetail = async (req) => {
  await productDetailDao.getProductDetail();
};

export default { getProductDetail };
