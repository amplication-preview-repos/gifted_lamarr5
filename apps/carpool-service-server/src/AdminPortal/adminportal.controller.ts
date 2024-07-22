import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AdminPortalService } from "./adminportal.service";
import { CarpoolGroupDto } from "../adminPortal/CarpoolGroupDto";

@swagger.ApiTags("adminPortals")
@common.Controller("adminPortals")
export class AdminPortalController {
  constructor(protected readonly service: AdminPortalService) {}

  @common.Post("/admin/carpools")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ManageCarpools(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.ManageCarpools(body);
      }

  @common.Get("/admin/carpools")
  @swagger.ApiOkResponse({
    type: CarpoolGroupDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ViewCarpools(
    @common.Body()
    body: string
  ): Promise<CarpoolGroupDto[]> {
        return this.service.ViewCarpools(body);
      }
}
