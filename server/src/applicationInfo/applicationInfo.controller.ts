import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ApplicationInfoService } from "./applicationInfo.service";
import { ApplicationInfoControllerBase } from "./base/applicationInfo.controller.base";

@swagger.ApiTags("applicationInfos")
@common.Controller("applicationInfos")
export class ApplicationInfoController extends ApplicationInfoControllerBase {
  constructor(
    protected readonly service: ApplicationInfoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
