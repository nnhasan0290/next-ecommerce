import { catchAsyncError } from "../middlewars/catchAsyncErrors.js";

export const createProduct = catchAsyncError((req, res, nex) => {
  res.send({ name: "hasan" });
});
