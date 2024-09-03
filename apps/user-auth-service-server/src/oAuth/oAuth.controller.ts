import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OAuthService } from "./oAuth.service";
import { OAuthControllerBase } from "./base/oAuth.controller.base";

@swagger.ApiTags("oAuths")
@common.Controller("oAuths")
export class OAuthController extends OAuthControllerBase {
  constructor(
    protected readonly service: OAuthService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
