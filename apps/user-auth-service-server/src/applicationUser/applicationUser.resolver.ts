import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ApplicationUserResolverBase } from "./base/applicationUser.resolver.base";
import { ApplicationUser } from "./base/ApplicationUser";
import { ApplicationUserService } from "./applicationUser.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ApplicationUser)
export class ApplicationUserResolver extends ApplicationUserResolverBase {
  constructor(
    protected readonly service: ApplicationUserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
