import * as graphql from "@nestjs/graphql";
import { SendMessageInput } from "../chat/SendMessageInput";
import { CarpoolGroupDto } from "../adminPortal/CarpoolGroupDto";
import { AdminPortalService } from "./adminportal.service";

export class AdminPortalResolver {
  constructor(protected readonly service: AdminPortalService) {}

  @graphql.Mutation(() => String)
  async ManageCarpools(
    @graphql.Args()
    args: SendMessageInput
  ): Promise<string> {
    return this.service.ManageCarpools(args);
  }

  @graphql.Query(() => [CarpoolGroupDto])
  async ViewCarpools(
    @graphql.Args()
    args: string
  ): Promise<CarpoolGroupDto[]> {
    return this.service.ViewCarpools(args);
  }
}
