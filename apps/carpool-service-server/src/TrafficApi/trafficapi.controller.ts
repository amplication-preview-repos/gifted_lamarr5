import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { TrafficApiService } from "./trafficapi.service";

@swagger.ApiTags("trafficApis")
@common.Controller("trafficApis")
export class TrafficApiController {
  constructor(protected readonly service: TrafficApiService) {}
}
