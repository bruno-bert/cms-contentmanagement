import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ApplicationInfoServiceBase } from "./base/applicationInfo.service.base";

@Injectable()
export class ApplicationInfoService extends ApplicationInfoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
