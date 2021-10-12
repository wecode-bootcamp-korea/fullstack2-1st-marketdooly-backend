import { mainService } from '../services'

const getProducts = async (req, res) => {
  try{
    const products = await mainService.getProducts();
    res.json(products);
  }
  catch(err) {
    console.error(err);
  };
};

const getCategories = async (req, res) => {
  try{
    const categories = await mainService.getCategories();
    res.json(categories);
  }
  catch(err) {
    console.log(err);
  };
};

const getCarouselData = async (req, res) => {
  try{
    const id = req.params.id;
    const carouselData = await mainService.getCarouselData(id);
    res.json(carouselData);
  }
  catch(err) {
    console.log(err);
  };
};

const getMainBannerData = async (req, res) => {
  try{
    const mainBannerData = await mainService.getMainBannerData();
    res.json(mainBannerData);
  }
  catch(err) {
    console.log(err);
  }
}

const getSpecialPriceData = async (req, res) => {
  try{
    const specialPriceData = await mainService.getSpecialPriceData();
    res.json(specialPriceData);
  }
  catch(err) {
    console.log(err);
  };
};

export default {
  getProducts,
  getCategories,
  getCarouselData,
  getMainBannerData,
  getSpecialPriceData
}