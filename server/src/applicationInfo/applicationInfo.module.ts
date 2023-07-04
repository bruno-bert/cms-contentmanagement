import { Module } from "@nestjs/common";
import { ApplicationInfoModuleBase } from "./base/applicationInfo.module.base";
import { ApplicationInfoService } from "./applicationInfo.service";
import { ApplicationInfoController } from "./applicationInfo.controller";
import { ApplicationInfoResolver } from "./applicationInfo.resolver";

@Module({
  imports: [ApplicationInfoModuleBase],
  controllers: [ApplicationInfoController],
  providers: [ApplicationInfoService, ApplicationInfoResolver],
  exports: [ApplicationInfoService],
})
export class ApplicationInfoModule {}
