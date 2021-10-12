import { cartDao } from '../models';

const getCart = async userId => {
  const getCart = await cartDao.getCart(userId);
  return getCart;
};

const updateItemQuantity = async quantity => {
  const itemQuantity = await cartDao.updateItemQuantity(quantity);
  return itemQuantity;
};

const deleteItem = async cartId => {
  const deleteItem = await cartDao.deleteItem(cartId);
  return deleteItem;
};

const addToCart = async cartData => {
  const addToCart = await cartDao.addToCart(cartData);
  return addToCart;
};

export default { getCart, updateItemQuantity, deleteItem, addToCart };
