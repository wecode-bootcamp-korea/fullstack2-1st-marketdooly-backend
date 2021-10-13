import { mainDao } from '../models'

const getCategories = async () => {
  return await mainDao.getCategories();
}

const getBanner = async (group) => {
  return await mainDao.getBanner(group);
}

const getEvent = async (group) => {
  return await mainDao.getEvent(group);
}

export default {
  getCategories,
  getBanner,
  getEvent
}