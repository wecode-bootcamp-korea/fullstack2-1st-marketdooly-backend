import { productDetailDao } from '../models';

const getProductDetail = async (req) => {
  await productDetailDao.getProductDetail();
};

const postProductDetail = async (req) => {
  await productDetailDao.postProductDetail();
};

export default { getProductDetail, postProductDetail };
