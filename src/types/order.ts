import { Product } from './product';
import { Document } from 'mongoose';

interface ProductOrder {
  products: Product;
  quantity: number;
}

export interface Order extends Document {
  owner: string;
  totalPrice: number;
  products: ProductOrder[];
  created: Date;
}
