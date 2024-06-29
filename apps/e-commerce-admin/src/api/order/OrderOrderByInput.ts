import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  orderDate?: SortOrder;
  orderId?: SortOrder;
  totalAmount?: SortOrder;
  updatedAt?: SortOrder;
};
