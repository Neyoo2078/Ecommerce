import { data } from '../data.js';
export const FetchProduct = async (req, res) => {
  try {
    res.json(data);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

export const ProductDeatils = async (req, res) => {
  const { id } = req.params;

  try {
    if (id) {
      const product = data.filter((items) => {
        if (items.id == id) {
          return items;
        }
      });
      res.status(200).json(product);
    } else {
      res.status(400).json({ msg: 'Product not found' });
    }
  } catch (error) {
    res.json(error);
  }
};
