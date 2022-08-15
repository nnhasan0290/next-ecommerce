import { catchAsyncError } from "../middlewars/catchAsyncErrors.js";
import { v2 as cloudinary } from "cloudinary";
import User from "../Models/userModel.js";

export const createUser = catchAsyncError(async (req, res, nex) => {
  const upload_img = await cloudinary.uploader.upload(req.body.image, {
    folder: "Users",
  });
  const avatar = {
    public_id : upload_img.public_id,
    url: upload_img.secure_url
  };
  req.body.image = avatar;
  const user = await User.create(req.body);
  res.status(200).json({
    success: true,
    user,
  });
});
