import { mainDao } from '../models'

const getCategories = async () => {
  return await mainDao.getCategories();
}

const getCarouselDataById = async (id) => {
  return await mainDao.getCarouselDataById(id);
}

const getMainBannerData = async () => {
  return await mainDao.getMainBannerData();
}

const getSpecialPriceData = async () => {
  return await mainDao.getSpecialPriceData();
}

export default {
  getCategories,
  getCarouselDataById,
  getMainBannerData,
  getSpecialPriceData
}