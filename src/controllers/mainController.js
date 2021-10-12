import { mainService } from '../services'

const getCategoriesById = async (req, res) => {
  try{
    const categories = await mainService.getCategoriesById();
    res.status(200).json(categories);
  }
  catch(err) {
    console.error(err);
  };
};

const getCarouselData = async (req, res) => {
  try{
    const id = req.params.id;
    const carouselData = await mainService.getCarouselData(id);
    res.status(200).json(carouselData);
  }
  catch(err) {
    console.error(err);
  };
};

const getMainBannerData = async (req, res) => {
  try{
    const mainBannerData = await mainService.getMainBannerData();
    res.status(200).json(mainBannerData);
  }
  catch(err) {
    console.error(err);
  }
}

const getSpecialPriceData = async (req, res) => {
  try{
    const specialPriceData = await mainService.getSpecialPriceData();
    res.status(200).json(specialPriceData);
  }
  catch(err) {
    console.error(err);
  };
};

export default {
  getCategories,
  getCarouselDataById,
  getMainBannerData,
  getSpecialPriceData
}