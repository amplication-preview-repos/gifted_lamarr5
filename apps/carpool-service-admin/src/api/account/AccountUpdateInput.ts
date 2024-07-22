import { CarpoolGroupUpdateManyWithoutAccountsInput } from "./CarpoolGroupUpdateManyWithoutAccountsInput";

export type AccountUpdateInput = {
  childName?: string | null;
  address?: string | null;
  name?: string | null;
  carpoolGroups?: CarpoolGroupUpdateManyWithoutAccountsInput;
};
