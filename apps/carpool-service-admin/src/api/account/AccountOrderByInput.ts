import { SortOrder } from "../../util/SortOrder";

export type AccountOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  childName?: SortOrder;
  address?: SortOrder;
  name?: SortOrder;
};