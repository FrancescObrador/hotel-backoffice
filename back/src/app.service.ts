import { HttpCode, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  @HttpCode(HttpStatus.OK)
  getStatus() {
    return {
      status: 'OK',
    }
  }
}
