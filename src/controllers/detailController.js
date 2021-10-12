import { detailService } from '../services';

const getProductDetail = async (req, res) => {
  try {
    const getProductDetail = await detailService.getDetail();
    res.status(200).json(getProductDetail);
  } catch (err) {}
};


export default { getProductDetail };