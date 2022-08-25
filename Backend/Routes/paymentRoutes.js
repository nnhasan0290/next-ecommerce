import express from "express";
import { createOrder, paymentProcess } from "../Controllers/paymentController.js";
const router = express.Router();

router.route("/payment/process").post(paymentProcess);
router.route("/order/create").post(createOrder);

export default router;