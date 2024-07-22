import { Injectable } from "@nestjs/common";
import { SendMessageInput } from "../chat/SendMessageInput";
import { CarpoolGroupDto } from "../adminPortal/CarpoolGroupDto";

@Injectable()
export class AdminPortalService {
  constructor() {}
  async ManageCarpools(args: SendMessageInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async ViewCarpools(args: string): Promise<CarpoolGroupDto[]> {
    throw new Error("Not implemented");
  }
}
