import { Category } from "../category/Category";
import { Review } from "../review/Review";

export type Product = {
  category?: Category | null;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  price: number | null;
  reviews?: Array<Review>;
  stock: number | null;
  updatedAt: Date;
};
