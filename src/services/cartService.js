import { cartDao } from '../models';

const addToCart = async cartData => {
  const addToCart = await cartDao.addToCart(cartData);
  return addToCart;
};

const getCart = async userId => {
  const getCart = await cartDao.getCart(userId);
  return getCart;
};

const updateItemQuantity = async (cartId, quantity) => {
  const itemQuantity = await cartDao.updateItemQuantity(cartId, quantity);
  return itemQuantity;
};

const deleteItem = async productId => {
  const deleteItem = await cartDao.deleteItem(productId);
  return deleteItem;
};

const cartToOrder = async cartId => {
  const cartToOrder = await cartDao.cartToOrder(cartId);
  return cartToOrder;
};

export default {
  addToCart,
  getCart,
  updateItemQuantity,
  deleteItem,
  cartToOrder,
};
