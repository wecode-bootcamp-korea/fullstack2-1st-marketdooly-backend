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

const postCart = async (req, res) => {
  const { cartData } = req.body;
  try {
    const postCart = await cartDao.postCart(cartData);
    res.status(200).json({ message: 'POST_SUCCESS', postCart });
  } catch (err) {
    console.log(err);
  }
};

export default { getCart, updateItemQuantity, deleteItem, postCart };
