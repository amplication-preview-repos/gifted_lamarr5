import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CarpoolGroupServiceBase } from "./base/carpoolGroup.service.base";

@Injectable()
export class CarpoolGroupService extends CarpoolGroupServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
