import * as graphql from "@nestjs/graphql";
import { TrafficApiService } from "./trafficapi.service";

export class TrafficApiResolver {
  constructor(protected readonly service: TrafficApiService) {}
}
