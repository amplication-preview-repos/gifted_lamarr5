import { CarpoolGroupCreateNestedManyWithoutAccountsInput } from "./CarpoolGroupCreateNestedManyWithoutAccountsInput";

export type AccountCreateInput = {
  childName?: string | null;
  address?: string | null;
  name?: string | null;
  carpoolGroups?: CarpoolGroupCreateNestedManyWithoutAccountsInput;
};
