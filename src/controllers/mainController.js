import { mainService } from '../services';

const getCategories = async (req, res) => {
  try {
    const getCategories = await mainService.getCategories();
    res.status(200).json(getCategories);
  } catch (err) {
    console.error(err);
  }
};

const getAllCategories = async (req, res) => {
  try {
    const getAllCategories = await mainService.getAllCategories();
    res.status(200).json(getAllCategories);
  } catch (err) {
    console.error(err);
  }
};

const getBanner = async (req, res) => {
  try {
    const group = req.params.group;
    const getBanner = await mainService.getBanner(group);
    res.status(200).json(getBanner);
  } catch (err) {
    console.error(err);
  }
};

const getEvent = async (req, res) => {
  try {
    const group = req.params.group;
    const getEvent = await mainService.getEvent(group);
    res.status(200).json(getEvent);
  } catch (err) {
    console.error(err);
  }
};

const getMDsPick = async (req, res) => {
  try {
    const category = req.params.category;
    const result = await mainService.getMDsPick(category);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
};

export default {
  getCategories,
  getAllCategories,
  getBanner,
  getEvent,
  getMDsPick,
};
