import { productDetailService } from '../services';

const getProductDetail = async (req, res) => {
  try {
    const getProductDetail = await productDetailService.getProductDetail();
    res.status(200).json(getProductDetail);
  } catch (err) {}
};

const postProductDetail = async (req, res) => {
  try {
    const postProductDetail = await productDetailService.postProductDetail();
    res.status(200).json(postProductDetail);
  } catch (err) {}
};


export default { getProductDetail, postProductDetail };