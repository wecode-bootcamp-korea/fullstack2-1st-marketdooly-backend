import { cartService } from '../services';

const addToCart = async (req, res) => {
  const { cartData } = req.body;
  try {
    const addToCart = await cartService.addToCart(cartData);
    res.status(200).json({ message: 'ADDED_TO_CART', addToCart });
  } catch (err) {
    console.log(err);
  }
};

const getCart = async (req, res) => {
  try {
    const getCart = await cartService.getCart();
    res.status(200).json(getCart);
  } catch (err) {
    console.log(err);
  }
};

const updateItemQuantity = async (req, res) => {
  const { cartId, quantity } = req.body;
  try {
    const itemQuantity = await cartService.updateItemQuantity(cartId, quantity);
    res.status(200).json({ message: 'QUANTITY_CHANGED', itemQuantity });
  } catch (err) {
    console.log(err);
  }
};

const deleteItem = async (req, res) => {
  const { productId } = req.body;
  try {
    const deleteItem = await cartService.deleteItem(productId);
    res.status(200).json({ message: 'ITEM_DELETED', deleteItem });
  } catch (err) {
    console.log(err);
  }
};

const cartToOrder = async (req, res) => {
  const { cartId } = req.body;
  try {
    const cartToOrder = await cartService.cartToOrder(cartId);
    res.status(200).json({ message: 'ITEM_DELETED', cartToOrder });
  } catch (err) {
    console.log(err);
  }
};

export default {
  addToCart,
  getCart,
  updateItemQuantity,
  deleteItem,
  cartToOrder,
};
