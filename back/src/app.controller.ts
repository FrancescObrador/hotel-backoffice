import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiExcludeController, ApiExcludeEndpoint, ApiHideProperty } from '@nestjs/swagger';

@ApiExcludeController()
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): {status: string} {
    return this.appService.getHello();
  }
}
