import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CarpoolGroupModuleBase } from "./base/carpoolGroup.module.base";
import { CarpoolGroupService } from "./carpoolGroup.service";
import { CarpoolGroupController } from "./carpoolGroup.controller";
import { CarpoolGroupResolver } from "./carpoolGroup.resolver";

@Module({
  imports: [CarpoolGroupModuleBase, forwardRef(() => AuthModule)],
  controllers: [CarpoolGroupController],
  providers: [CarpoolGroupService, CarpoolGroupResolver],
  exports: [CarpoolGroupService],
})
export class CarpoolGroupModule {}
