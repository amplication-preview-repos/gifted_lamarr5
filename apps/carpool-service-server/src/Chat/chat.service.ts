import { Injectable } from "@nestjs/common";
import { MessageDto } from "../chat/MessageDto";
import { SendMessageInput } from "../chat/SendMessageInput";

@Injectable()
export class ChatService {
  constructor() {}
  async ReceiveMessages(args: string): Promise<MessageDto[]> {
    throw new Error("Not implemented");
  }
  async SendMessage(args: SendMessageInput): Promise<string> {
    throw new Error("Not implemented");
  }
}
