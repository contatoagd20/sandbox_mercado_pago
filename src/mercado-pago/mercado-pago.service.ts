import { Injectable } from '@nestjs/common'
import mercadopago = require('mercadopago')

@Injectable()
export class MercadoPagoService {
  async postMercadoPago(payload) {
    const {
      token,
      description,
      transactionAmount,
      paymentMethodId,
      payer
    } = payload
    mercadopago.configure({
      sandbox: true,
      access_token: process.env.ACCESS_TOKEN,
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET
    })
    return mercadopago.payment
      .create({
        token,
        description,
        transaction_amount: transactionAmount,
        payment_method_id: paymentMethodId,
        payer
      })
      .then(mpResponse => {
        return mpResponse
      })
      .catch(mpError => {
        return mpError
      })
  }
}
