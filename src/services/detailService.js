import { detailDao } from '../models';

const getDetail = async (req) => {
  await detailDao.getDetail();
};

export default { getDetail };
