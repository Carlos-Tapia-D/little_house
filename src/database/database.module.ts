import { Global, Module } from '@nestjs/common';

const API_KEY_EXAMPLE = "secreto"
const API_KEY_EXAMPLE_PROD = "secretoprod"
@Global()
@Module({
    providers:[{
        provide: 'API_KEY',
        useValue: process.env.NODE_ENV === "prod" ? API_KEY_EXAMPLE_PROD : API_KEY_EXAMPLE
      }],
      exports:['API_KEY']
})
export class DatabaseModule {
}
