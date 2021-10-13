import { mainDao } from '../models'

const getCategories = async () => {
  return await mainDao.getCategories();
}

const getCarouselData = async (id) => {
  return await mainDao.getCarouselData(id);
}

const getMainBannerData = async () => {
  return await mainDao.getMainBannerData();
}

const getSpecialPriceData = async () => {
  return await mainDao.getSpecialPriceData();
}

export default {
  getCategories,
  getCarouselData,
  getMainBannerData,
  getSpecialPriceData
}