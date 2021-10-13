import { cartService } from '../services';

const addToCart = async (req, res) => {
  try {
    const { user_id, product_id, quantity } = req.body;
    await cartService.addToCart(user_id, product_id, quantity);
    res.status(200).json({ message: 'ADDED_TO_CART', addToCart });
  } catch (err) {
    console.log(err);
  }
};

const getCart = async (req, res) => {
  try {
    const { user_id = 3 } = req.body;
    const getCart = await cartService.getCart(user_id);
    res.status(200).json(getCart);
  } catch (err) {
    console.log(err);
  }
};

const updateItemQuantity = async (req, res) => {
  try {
    const { cart_id, quantity } = req.body;
    await cartService.updateItemQuantity(cart_id, quantity);
    res.status(200).json({ message: 'QUANTITY_CHANGED', cart_id, quantity });
  } catch (err) {
    console.log(err);
  }
};

const deleteItem = async (req, res) => {
  try {
    const { cart_id } = req.body;
    await cartService.deleteItem(cart_id);
    res.status(200).json({ message: 'ITEM_DELETED', cart_id });
  } catch (err) {
    console.log(err);
  }
};

export default {
  addToCart,
  getCart,
  updateItemQuantity,
  deleteItem,
};
