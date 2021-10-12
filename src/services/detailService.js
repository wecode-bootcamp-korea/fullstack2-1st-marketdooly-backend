import { detailDao } from '../models';

const getProductDetail = async (req) => {
  await detailDao.getProductDetail();
};

export default { getProductDetail };
