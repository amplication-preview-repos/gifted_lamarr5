import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  timestamp?: SortOrder;
  fromField?: SortOrder;
  to?: SortOrder;
  content?: SortOrder;
};
