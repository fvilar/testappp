import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ApplicationUserService } from "./applicationUser.service";
import { ApplicationUserControllerBase } from "./base/applicationUser.controller.base";

@swagger.ApiTags("applicationUsers")
@common.Controller("applicationUsers")
export class ApplicationUserController extends ApplicationUserControllerBase {
  constructor(
    protected readonly service: ApplicationUserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
