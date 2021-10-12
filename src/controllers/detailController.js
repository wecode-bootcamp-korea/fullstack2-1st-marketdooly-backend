import { detailService } from '../services';

const getDetail = async (req, res) => {
  try {
    const getDetail = await detailService.getDetail();
    res.status(200).json(getDetail);
  } catch (err) {}
};


export default { getDetail };