import { productDetailService } from '../services';

const getProductDetail = async (req, res) => {
  try {
    const getProductDetail = await productDetailService.getProductDetail();
    res.status(200).json(getProductDetail);
  } catch (err) {
    console.log(err)
  }
};

const postProductDetail = async (req, res) => {
  try {
    const postProductDetail = await productDetailService.postProductDetail();
    res.status(200).json(postProductDetail);
  } catch (err) {
    console.log(err)
  }
};


export default { getProductDetail, postProductDetail };