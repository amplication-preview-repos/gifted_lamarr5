import { Module } from "@nestjs/common";
import { AdminPortalService } from "./adminportal.service";
import { AdminPortalController } from "./adminportal.controller";
import { AdminPortalResolver } from "./adminportal.resolver";

@Module({
  controllers: [AdminPortalController],
  providers: [AdminPortalService, AdminPortalResolver],
  exports: [AdminPortalService],
})
export class AdminPortalModule {}
