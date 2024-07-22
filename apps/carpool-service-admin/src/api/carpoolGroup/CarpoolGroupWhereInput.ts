import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";

export type CarpoolGroupWhereInput = {
  id?: StringFilter;
  groupName?: StringNullableFilter;
  account?: AccountWhereUniqueInput;
};
