import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ApplicationUserServiceBase } from "./base/applicationUser.service.base";

@Injectable()
export class ApplicationUserService extends ApplicationUserServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
