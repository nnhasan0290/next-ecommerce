import { catchAsyncError } from "../middlewars/catchAsyncErrors.js";
import User from "../Models/userModel.js";

export const createUser = catchAsyncError(async(req, res, nex) => {
  console.log(req.body);
  const user = await  User.create(req.body);
  res.status(200).json({
    success: true,
    user,
  });
});
