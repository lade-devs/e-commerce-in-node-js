import { Order } from "../order/Order";
import { Review } from "../review/Review";

export type Customer = {
  address: string | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  orders?: Array<Order>;
  reviews?: Array<Review>;
  updatedAt: Date;
};
