import { mainDao } from '../models';

const getCategories = async () => {
  return await mainDao.getCategories();
};

const getAllCategories = async () => {
  const categories = await mainDao.getCategories();
  for (const category of categories) {
    const subCategories = await mainDao.getSubCategories(category.id);
    category.list = subCategories;
  }
  return categories;
};

const getBanner = async group => {
  return await mainDao.getBanner(group);
};

const getEvent = async group => {
  return await mainDao.getEvent(group);
};

const getMDsPick = async categoryId => {
  return await mainDao.getMDsPick(categoryId);
};

export default {
  getCategories,
  getAllCategories,
  getBanner,
  getEvent,
  getMDsPick,
};
