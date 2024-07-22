import { CarpoolGroup } from "../carpoolGroup/CarpoolGroup";

export type Account = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  childName: string | null;
  address: string | null;
  name: string | null;
  carpoolGroups?: Array<CarpoolGroup>;
};
