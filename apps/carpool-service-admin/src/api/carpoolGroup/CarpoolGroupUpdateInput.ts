import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";

export type CarpoolGroupUpdateInput = {
  groupName?: string | null;
  account?: AccountWhereUniqueInput | null;
};
