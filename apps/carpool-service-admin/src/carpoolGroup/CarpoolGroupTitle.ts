import { CarpoolGroup as TCarpoolGroup } from "../api/carpoolGroup/CarpoolGroup";

export const CARPOOLGROUP_TITLE_FIELD = "groupName";

export const CarpoolGroupTitle = (record: TCarpoolGroup): string => {
  return record.groupName?.toString() || String(record.id);
};
