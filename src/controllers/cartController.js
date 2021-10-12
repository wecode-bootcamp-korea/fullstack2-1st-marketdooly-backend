import { cartService } from '../services';

const getCart = async (req, res) => {
  try {
    const getCart = await cartService.getCart();
    res.status(200).json(getCart);
  } catch (err) {
    console.log(err);
  }
};

const updateItemQuantity = async (req, res) => {
  const { quantity } = req.body;
  try {
    const itemQuantity = await cartService.updateItemQuantity(quantity);
    res.status(200).json({ message: 'QUANTITY_CHANGED', itemQuantity });
  } catch (err) {
    console.log(err);
  }
};

const deleteItem = async (req, res) => {
  const { cartId } = req.body;
  try {
    const deleteItem = await cartService.deleteItem(cartId);
    res.status(200).json({ message: 'ITEM_DELETED', deleteItem });
  } catch (err) {
    console.log(err);
  }
};

const addToCart = async (req, res) => {
  const { cartData } = req.body;
  try {
    const addToCart = await cartService.addToCart(cartData);
    res.status(200).json({ message: 'ADDED_TO_CART', addToCart });
  } catch (err) {
    console.log(err);
  }
};

export default { getCart, updateItemQuantity, deleteItem, addToCart };
