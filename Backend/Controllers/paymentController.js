import stripe from "../utils/stripe.js";
import {catchAsyncError} from "../middlewars/catchAsyncErrors.js"

export const paymentProcess = catchAsyncError(async(req,res,nex)=>{

    const paymentIntent = await stripe.paymentIntents.create({
        amount: req.body,
        currency: "usd",
        automatic_payment_methods: {
          enabled: true,
        },
      });

      res.status(200).json({
        success: true,
        clientSecret: paymentIntent.client_secret
      })
})