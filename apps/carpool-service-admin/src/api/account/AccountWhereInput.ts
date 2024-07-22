import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CarpoolGroupListRelationFilter } from "../carpoolGroup/CarpoolGroupListRelationFilter";

export type AccountWhereInput = {
  id?: StringFilter;
  childName?: StringNullableFilter;
  address?: StringNullableFilter;
  name?: StringNullableFilter;
  carpoolGroups?: CarpoolGroupListRelationFilter;
};
