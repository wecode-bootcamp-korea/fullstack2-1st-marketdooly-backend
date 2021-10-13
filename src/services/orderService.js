import { orderDao } from '../models';

const cartToOrder = async cart_id => {
  const cartToOrder = await orderDao.cartToOrder(cart_id);
  return cartToOrder;
};

export default { cartToOrder };
