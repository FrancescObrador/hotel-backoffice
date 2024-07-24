import { Controller, Get, NotFoundException, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiExcludeController, ApiExcludeEndpoint, ApiHideProperty } from '@nestjs/swagger';

@ApiExcludeController()
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getStatus(){
    return this.appService.getStatus()
  }
}
