import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { MercadoPagoService } from './mercado-pago/mercado-pago.service'

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, MercadoPagoService]
})
export class AppModule {}
