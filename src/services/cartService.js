import { cartDao } from '../models';

const getCart = async () => {
  const getCart = await cartDao.getCart();
  return getCart;
};

const putItemQuantity = async quantity => {
  const itemQuantity = await cartDao.putItemQuantity(quantity);
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

export default { getCart, putItemQuantity, deleteItem, postCart };
