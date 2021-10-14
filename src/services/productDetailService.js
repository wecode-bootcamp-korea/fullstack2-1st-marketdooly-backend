import { productDetailDao } from '../models';

const getProductDetail = async req => {
  return await productDetailDao.getProductDetail();
};

export default { getProductDetail };
