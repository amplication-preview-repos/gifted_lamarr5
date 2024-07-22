import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CarpoolGroupService } from "./carpoolGroup.service";
import { CarpoolGroupControllerBase } from "./base/carpoolGroup.controller.base";

@swagger.ApiTags("carpoolGroups")
@common.Controller("carpoolGroups")
export class CarpoolGroupController extends CarpoolGroupControllerBase {
  constructor(
    protected readonly service: CarpoolGroupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
