import { cartService } from '../services';

const addToCart = async (req, res) => {
  try {
    const { user_id, product_id, quantity } = req.body;
    console.log(user_id, product_id, quantity);
    const result = await cartService.addToCart(user_id, product_id, quantity);
    res.status(200).json({ result });
  } catch (err) {
    console.log(err);
  }
};

const getCart = async (req, res) => {
  try {
    const { id } = req.headers.payload.info;
    const getCart = await cartService.getCart(id);
    res.status(200).json(getCart);
  } catch (err) {
    console.log(err);
  }
};

const updateItemQuantity = async (req, res) => {
  try {
    const { cart_id, quantity } = req.body;
    await cartService.updateItemQuantity(cart_id, quantity);
    res.status(201).json({ message: 'QUANTITY_CHANGED', cart_id, quantity });
  } catch (err) {
    console.log(err);
  }
};

const deleteItem = async (req, res) => {
  try {
    const { cart_id } = req.body;
    await cartService.deleteItem(cart_id);
    res.status(204).json({ deleteItem });
  } catch (err) {
    console.log(err);
  }
};

const deleteItems = async (req, res) => {
  try {
    const { deleteList } = req.body;
    await cartService.deleteItems(deleteList);
    res.status(204).json({
      message: '장바구니에서 상품을 성공적으로 삭제했습니다!',
    });
  } catch (err) {
    console.log(err);
  }
};

export default {
  addToCart,
  getCart,
  updateItemQuantity,
  deleteItem,
  deleteItems,
};
