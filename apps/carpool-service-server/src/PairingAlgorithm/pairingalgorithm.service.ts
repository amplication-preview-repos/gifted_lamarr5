import { Injectable } from "@nestjs/common";
import { SendMessageInput } from "../chat/SendMessageInput";

@Injectable()
export class PairingAlgorithmService {
  constructor() {}
  async GetTrafficData(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async PairUsers(args: SendMessageInput): Promise<string[]> {
    throw new Error("Not implemented");
  }
}
