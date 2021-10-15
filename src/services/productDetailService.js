import { productDetailDao } from '../models';

const getProductDetail = async productId => {
  return await productDetailDao.getProductDetail(productId);
};

export default { getProductDetail };
