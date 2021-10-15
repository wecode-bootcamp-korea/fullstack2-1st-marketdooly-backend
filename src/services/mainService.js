import { mainDao } from '../models';

const getCategories = async () => {
  return await mainDao.getCategories();
};

const getAllCategories = async () => {
  return await mainDao.getAllCategories();
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
