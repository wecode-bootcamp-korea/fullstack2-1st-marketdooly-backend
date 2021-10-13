import { orderService } from '../services';

const cartToOrder = async (req, res) => {
  const { cart_id } = req.body;
  try {
    await orderService.cartToOrder(cart_id);
    res.status(200).json({ message: 'ITEM_DELETED', cart_id });
  } catch (err) {
    console.log(err);
  }
};

export default { cartToOrder };
