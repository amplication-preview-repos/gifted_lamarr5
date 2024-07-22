import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CarpoolGroupResolverBase } from "./base/carpoolGroup.resolver.base";
import { CarpoolGroup } from "./base/CarpoolGroup";
import { CarpoolGroupService } from "./carpoolGroup.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CarpoolGroup)
export class CarpoolGroupResolver extends CarpoolGroupResolverBase {
  constructor(
    protected readonly service: CarpoolGroupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
