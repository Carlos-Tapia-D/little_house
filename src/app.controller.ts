import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }
/**orden de rutas
 * Rutas estaticas
 * Rutas dimanicas
 * Esto para que no choquen
 */
  //rutas staticas

  @Get()
  getHello() {
    return this.appService.getHello()
  }

  @Get("nuevo")
  getNew(): string {
    return "Hola soy el nuevo"
  }

  @Get("/ruta/")
  getNewruta(): string {
    return "Hola soy una nueva ruta"
  }

  //rutas dinamicas


}
