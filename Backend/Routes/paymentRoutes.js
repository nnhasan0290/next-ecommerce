import express from "express";
import { createOrder, getAllOrder, paymentProcess } from "../Controllers/paymentController.js";
const router = express.Router();

router.route("/payment/process").post(paymentProcess);
router.route("/order/create").post(createOrder);
router.route("/order/get").get(getAllOrder)

export default router;