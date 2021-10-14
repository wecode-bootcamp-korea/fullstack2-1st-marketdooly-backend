import { cartDao } from '../models';

const addToCart = async (user_id, product_id, quantity) => {
  const [cartId] = await cartDao.searchCartDuplicate(user_id, product_id);
  if (cartId) {
    const { id, quantityInDB } = cartId;
    await cartDao.updateItemQuantity(id, quantityInDB + quantity);
    return {
      message: '중복된 품목이 있어서 수량만 추가했습니다.',
      productId: product_id,
      cartId: id,
      updatedQuantity: quantityInDB + quantity,
    };
  }
  await cartDao.addToCart(user_id, product_id, quantity);
  return {
    message: '중복된 품목이 없어서 품목을 새로 추가했습니다.',
    productId: product_id,
    updatedQuantity: quantity,
  };
};

const searchByCartId = async cart_id => {
  const result = await cartDao.searchByCartId(cart_id);
  return result;
};

const getCart = async user_id => {
  const getCart = await cartDao.getCart(user_id);
  return getCart;
};

const updateItemQuantity = async (cart_id, quantity) => {
  const itemQuantity = await cartDao.updateItemQuantity(cart_id, quantity);
  return itemQuantity;
};

const deleteItem = async cart_id => {
  const deleteItem = await cartDao.deleteItem(cart_id);
  return deleteItem;
};

const deleteItems = async cartIds => {
  const deleteItems = await cartDao.deleteItems(cartIds);
  return deleteItems;
};

export default {
  addToCart,
  getCart,
  updateItemQuantity,
  deleteItem,
  deleteItems,
  searchByCartId,
};
