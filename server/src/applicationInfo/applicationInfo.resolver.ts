import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ApplicationInfoResolverBase } from "./base/applicationInfo.resolver.base";
import { ApplicationInfo } from "./base/ApplicationInfo";
import { ApplicationInfoService } from "./applicationInfo.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ApplicationInfo)
export class ApplicationInfoResolver extends ApplicationInfoResolverBase {
  constructor(
    protected readonly service: ApplicationInfoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
