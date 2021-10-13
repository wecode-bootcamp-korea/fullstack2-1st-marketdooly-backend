import { productDetailService } from '../services';

const getProductDetail = async (req, res) => {
  try {
    const getProductDetail = await productDetailService.getProductDetail();
    res.status(200).json(getProductDetail);
  } catch (err) {
    console.log(err)
  }
};

export default { getProductDetail };