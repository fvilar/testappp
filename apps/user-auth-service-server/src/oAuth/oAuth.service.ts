import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OAuthServiceBase } from "./base/oAuth.service.base";

@Injectable()
export class OAuthService extends OAuthServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
