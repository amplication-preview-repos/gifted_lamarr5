import { Message as TMessage } from "../api/message/Message";

export const MESSAGE_TITLE_FIELD = "fromField";

export const MessageTitle = (record: TMessage): string => {
  return record.fromField?.toString() || String(record.id);
};
