import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { OAuthModuleBase } from "./base/oAuth.module.base";
import { OAuthService } from "./oAuth.service";
import { OAuthController } from "./oAuth.controller";
import { OAuthResolver } from "./oAuth.resolver";

@Module({
  imports: [OAuthModuleBase, forwardRef(() => AuthModule)],
  controllers: [OAuthController],
  providers: [OAuthService, OAuthResolver],
  exports: [OAuthService],
})
export class OAuthModule {}
