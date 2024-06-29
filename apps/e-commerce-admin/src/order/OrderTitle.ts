import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "orderId";

export const OrderTitle = (record: TOrder): string => {
  return record.orderId?.toString() || String(record.id);
};
