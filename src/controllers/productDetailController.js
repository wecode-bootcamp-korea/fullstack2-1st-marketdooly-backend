import { productDetailService } from '../services';

const getProductDetail = async (req, res) => {
  try {
    const productId = req.params.id;
    const getProductDetail = await productDetailService.getProductDetail(
      productId
    );
    res.status(200).json(getProductDetail);
  } catch (err) {
    console.log(err);
  }
};

export default { getProductDetail };
