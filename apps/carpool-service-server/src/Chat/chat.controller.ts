import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ChatService } from "./chat.service";
import { SendMessageInput } from "../chat/SendMessageInput";
import { MessageDto } from "../chat/MessageDto";

@swagger.ApiTags("chats")
@common.Controller("chats")
export class ChatController {
  constructor(protected readonly service: ChatService) {}

  @common.Get("/chat/messages")
  @swagger.ApiOkResponse({
    type: MessageDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ReceiveMessages(
    @common.Body()
    body: SendMessageInput
  ): Promise<MessageDto[]> {
        return this.service.ReceiveMessages(body);
      }

  @common.Post("/chat/send")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SendMessage(
    @common.Body()
    body: SendMessageInput
  ): Promise<string> {
        return this.service.SendMessage(body);
      }
}
