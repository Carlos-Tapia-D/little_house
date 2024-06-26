import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from './config';
@Injectable()
export class AppService {
  constructor(
    @Inject(config.KEY) private configService:ConfigType<typeof config>,
    @Inject('TASKS') private tasks: any[]) { }
  getHello() {
    return {
      message: "HEllO WORLD",
      apiKey: this.configService.apiKey,
      tasks: this.tasks,
      dbName:this.configService.database.name
    };
  }
}
