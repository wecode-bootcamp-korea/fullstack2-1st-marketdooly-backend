import { cartDao } from '../models';

const addToCart = async (user_id, product_id, quantity) => {
  const addToCart = await cartDao.addToCart(user_id, product_id, quantity);
  return addToCart;
};

const getCart = async user_id => {
  const getCart = await cartDao.getCart(user_id);
  return getCart;
};

const updateItemQuantity = async (cartId, quantity) => {
  const itemQuantity = await cartDao.updateItemQuantity(cartId, quantity);
  return itemQuantity;
};

const deleteItem = async cart_id => {
  const deleteItem = await cartDao.deleteItem(cart_id);
  return deleteItem;
};

export default {
  addToCart,
  getCart,
  updateItemQuantity,
  deleteItem,
};
