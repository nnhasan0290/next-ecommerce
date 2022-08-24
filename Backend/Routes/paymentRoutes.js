import express from "express";
import { paymentProcess } from "../Controllers/paymentController.js";
const router = express.Router();

router.route("/payment/process").post(paymentProcess)

export default router;