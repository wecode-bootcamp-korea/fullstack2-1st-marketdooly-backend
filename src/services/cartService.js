import { cartDao } from '../models';

const getCart = async () => {
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

const postCart = async cartData => {
  const postCart = await cartDao.postCart(cartData);
  return postCart;
};

export default { getCart, updateItemQuantity, deleteItem, postCart };
