import * as graphql from "@nestjs/graphql";
import { SendMessageInput } from "../chat/SendMessageInput";
import { PairingAlgorithmService } from "./pairingalgorithm.service";

export class PairingAlgorithmResolver {
  constructor(protected readonly service: PairingAlgorithmService) {}

  @graphql.Query(() => String)
  async GetTrafficData(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GetTrafficData(args);
  }

  @graphql.Mutation(() => [String])
  async PairUsers(
    @graphql.Args()
    args: SendMessageInput
  ): Promise<string[]> {
    return this.service.PairUsers(args);
  }
}
