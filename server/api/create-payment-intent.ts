// server/api/create-payment-intent.js
import Stripe from 'stripe';
import axios from "axios";
import { H3Event } from "h3";

const config = useRuntimeConfig();
const stripe = new Stripe(config.STRIPE_PRIVATE_KEY)
console.log(config.STRIPE_PRIVATE_KEY)

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  try {
    const intent = await stripe.paymentIntents.create({
      amount: body.amount, // amount in cents
      currency: 'usd',
      metadata: { user_id: body.user_id }
    });

    console.log(body.user_id)
    return {
      clientSecret: intent.client_secret
    };
  } catch (error: any) {
    event.res.statusCode = 403;
    return {
      error: error.message
    };
  }
});
