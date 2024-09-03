import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ApplicationUserModuleBase } from "./base/applicationUser.module.base";
import { ApplicationUserService } from "./applicationUser.service";
import { ApplicationUserController } from "./applicationUser.controller";
import { ApplicationUserResolver } from "./applicationUser.resolver";

@Module({
  imports: [ApplicationUserModuleBase, forwardRef(() => AuthModule)],
  controllers: [ApplicationUserController],
  providers: [ApplicationUserService, ApplicationUserResolver],
  exports: [ApplicationUserService],
})
export class ApplicationUserModule {}
