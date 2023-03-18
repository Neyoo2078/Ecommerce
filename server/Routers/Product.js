import express from 'express';

import { FetchProduct, ProductDeatils } from '../Actions/product.js';

export const ProductRouter = express.Router();

ProductRouter.get('/', FetchProduct);

ProductRouter.get('/:id', ProductDeatils);
