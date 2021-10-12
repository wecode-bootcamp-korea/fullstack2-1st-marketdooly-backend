import { mainService } from '../services'

const getProducts = async (req, res) => {
  try{
    const products = await mainService.getProducts();
    res.status(200).json(products);
  }
  catch(err) {
    console.error(err);
  };
};

const getCategories = async (req, res) => {
  try{
    const categories = await mainService.getCategories();
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
  getProducts,
  getCategories,
  getCarouselData,
  getMainBannerData,
  getSpecialPriceData
}