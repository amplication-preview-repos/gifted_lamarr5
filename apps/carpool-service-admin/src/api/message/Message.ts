export type Message = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  timestamp: Date | null;
  fromField: string | null;
  to: string | null;
  content: string | null;
};
