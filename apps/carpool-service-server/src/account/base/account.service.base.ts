/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Account as PrismaAccount,
  CarpoolGroup as PrismaCarpoolGroup,
} from "@prisma/client";

export class AccountServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.AccountCountArgs, "select">): Promise<number> {
    return this.prisma.account.count(args);
  }

  async accounts(args: Prisma.AccountFindManyArgs): Promise<PrismaAccount[]> {
    return this.prisma.account.findMany(args);
  }
  async account(
    args: Prisma.AccountFindUniqueArgs
  ): Promise<PrismaAccount | null> {
    return this.prisma.account.findUnique(args);
  }
  async createAccount(args: Prisma.AccountCreateArgs): Promise<PrismaAccount> {
    return this.prisma.account.create(args);
  }
  async updateAccount(args: Prisma.AccountUpdateArgs): Promise<PrismaAccount> {
    return this.prisma.account.update(args);
  }
  async deleteAccount(args: Prisma.AccountDeleteArgs): Promise<PrismaAccount> {
    return this.prisma.account.delete(args);
  }

  async findCarpoolGroups(
    parentId: string,
    args: Prisma.CarpoolGroupFindManyArgs
  ): Promise<PrismaCarpoolGroup[]> {
    return this.prisma.account
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .carpoolGroups(args);
  }
}
