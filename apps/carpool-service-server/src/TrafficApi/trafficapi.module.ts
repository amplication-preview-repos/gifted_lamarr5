import { Module } from "@nestjs/common";
import { TrafficApiService } from "./trafficapi.service";
import { TrafficApiController } from "./trafficapi.controller";
import { TrafficApiResolver } from "./trafficapi.resolver";

@Module({
  controllers: [TrafficApiController],
  providers: [TrafficApiService, TrafficApiResolver],
  exports: [TrafficApiService],
})
export class TrafficApiModule {}
