import * as graphql from "@nestjs/graphql";
import { MessageDto } from "../chat/MessageDto";
import { SendMessageInput } from "../chat/SendMessageInput";
import { ChatService } from "./chat.service";

export class ChatResolver {
  constructor(protected readonly service: ChatService) {}

  @graphql.Query(() => [MessageDto])
  async ReceiveMessages(
    @graphql.Args()
    args: string
  ): Promise<MessageDto[]> {
    return this.service.ReceiveMessages(args);
  }

  @graphql.Mutation(() => String)
  async SendMessage(
    @graphql.Args()
    args: SendMessageInput
  ): Promise<string> {
    return this.service.SendMessage(args);
  }
}
