import { Test, TestingModule } from '@nestjs/testing'
import * as dotenv from 'dotenv'
import { MercadoPagoService } from './mercado-pago.service'
dotenv.config()

describe('MercadoPagoService', () => {
  let service: MercadoPagoService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MercadoPagoService]
    }).compile()

    service = module.get<MercadoPagoService>(MercadoPagoService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  it('should create a payment', async () => {
    const payload = {
      token: 'ff8080814c11e237014c1ff593b57b4d',
      description: 'Buying a PS4',
      transactionAmount: 10500,
      paymentMethodId: 'visa',
      payer: {
        email: 'test_user_3931694@testuser.com',
        identification: {
          type: 'DNI',
          number: '34123123'
        }
      }
    }
    expect(await service.postMercadoPago(payload)).toBe('')
  })
})
