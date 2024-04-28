import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(
    @Inject('API_KEY') private apiKey: string, 
    @Inject('TASKS') private tasks: any[]) { }
  getHello() {
    return {
      message: "HEllO WORLD",
      apiKey: this.apiKey,
      tasks: this.tasks

    };
  }
}
