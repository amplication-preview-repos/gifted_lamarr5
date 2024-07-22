import { Account } from "../account/Account";

export type CarpoolGroup = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  groupName: string | null;
  account?: Account | null;
};
