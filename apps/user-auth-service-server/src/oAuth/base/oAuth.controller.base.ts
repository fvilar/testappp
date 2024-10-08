/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { OAuthService } from "../oAuth.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { OAuthCreateInput } from "./OAuthCreateInput";
import { OAuth } from "./OAuth";
import { OAuthFindManyArgs } from "./OAuthFindManyArgs";
import { OAuthWhereUniqueInput } from "./OAuthWhereUniqueInput";
import { OAuthUpdateInput } from "./OAuthUpdateInput";
import { ApplicationUserFindManyArgs } from "../../applicationUser/base/ApplicationUserFindManyArgs";
import { ApplicationUser } from "../../applicationUser/base/ApplicationUser";
import { ApplicationUserWhereUniqueInput } from "../../applicationUser/base/ApplicationUserWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class OAuthControllerBase {
  constructor(
    protected readonly service: OAuthService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: OAuth })
  @nestAccessControl.UseRoles({
    resource: "OAuth",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createOAuth(@common.Body() data: OAuthCreateInput): Promise<OAuth> {
    return await this.service.createOAuth({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [OAuth] })
  @ApiNestedQuery(OAuthFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "OAuth",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async oAuths(@common.Req() request: Request): Promise<OAuth[]> {
    const args = plainToClass(OAuthFindManyArgs, request.query);
    return this.service.oAuths({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: OAuth })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "OAuth",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async oAuth(
    @common.Param() params: OAuthWhereUniqueInput
  ): Promise<OAuth | null> {
    const result = await this.service.oAuth({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: OAuth })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "OAuth",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateOAuth(
    @common.Param() params: OAuthWhereUniqueInput,
    @common.Body() data: OAuthUpdateInput
  ): Promise<OAuth | null> {
    try {
      return await this.service.updateOAuth({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: OAuth })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "OAuth",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteOAuth(
    @common.Param() params: OAuthWhereUniqueInput
  ): Promise<OAuth | null> {
    try {
      return await this.service.deleteOAuth({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/applicationUsers")
  @ApiNestedQuery(ApplicationUserFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ApplicationUser",
    action: "read",
    possession: "any",
  })
  async findApplicationUsers(
    @common.Req() request: Request,
    @common.Param() params: OAuthWhereUniqueInput
  ): Promise<ApplicationUser[]> {
    const query = plainToClass(ApplicationUserFindManyArgs, request.query);
    const results = await this.service.findApplicationUsers(params.id, {
      ...query,
      select: {
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,

        oAuth: {
          select: {
            id: true,
          },
        },

        password: true,

        role: {
          select: {
            id: true,
          },
        },

        supertokensId: true,
        updatedAt: true,
        username: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/applicationUsers")
  @nestAccessControl.UseRoles({
    resource: "OAuth",
    action: "update",
    possession: "any",
  })
  async connectApplicationUsers(
    @common.Param() params: OAuthWhereUniqueInput,
    @common.Body() body: ApplicationUserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      applicationUsers: {
        connect: body,
      },
    };
    await this.service.updateOAuth({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/applicationUsers")
  @nestAccessControl.UseRoles({
    resource: "OAuth",
    action: "update",
    possession: "any",
  })
  async updateApplicationUsers(
    @common.Param() params: OAuthWhereUniqueInput,
    @common.Body() body: ApplicationUserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      applicationUsers: {
        set: body,
      },
    };
    await this.service.updateOAuth({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/applicationUsers")
  @nestAccessControl.UseRoles({
    resource: "OAuth",
    action: "update",
    possession: "any",
  })
  async disconnectApplicationUsers(
    @common.Param() params: OAuthWhereUniqueInput,
    @common.Body() body: ApplicationUserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      applicationUsers: {
        disconnect: body,
      },
    };
    await this.service.updateOAuth({
      where: params,
      data,
      select: { id: true },
    });
  }
}
