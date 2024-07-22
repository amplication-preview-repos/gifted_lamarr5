import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";

export type CarpoolGroupCreateInput = {
  groupName?: string | null;
  account?: AccountWhereUniqueInput | null;
};
