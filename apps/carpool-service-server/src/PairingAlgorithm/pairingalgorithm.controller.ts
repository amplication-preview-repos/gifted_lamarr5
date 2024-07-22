import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { PairingAlgorithmService } from "./pairingalgorithm.service";
import { SendMessageInput } from "../chat/SendMessageInput";

@swagger.ApiTags("pairingAlgorithms")
@common.Controller("pairingAlgorithms")
export class PairingAlgorithmController {
  constructor(protected readonly service: PairingAlgorithmService) {}

  @common.Get("/traffic")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetTrafficData(
    @common.Body()
    body: SendMessageInput
  ): Promise<string> {
        return this.service.GetTrafficData(body);
      }

  @common.Post("/pair")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async PairUsers(
    @common.Body()
    body: SendMessageInput
  ): Promise<string[]> {
        return this.service.PairUsers(body);
      }
}
