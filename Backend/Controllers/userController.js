import { catchAsyncError } from "../middlewars/catchAsyncErrors.js";
import { v2 as cloudinary } from "cloudinary";
import User from "../Models/userModel.js";
import jwt from "jsonwebtoken";

export const createUser = catchAsyncError(async (req, res, nex) => {
  const upload_img = await cloudinary.uploader.upload(req.body.image, {
    folder: "Users",
  });
  const avatar = {
    public_id: upload_img.public_id,
    url: upload_img.secure_url,
  };
  req.body.image = avatar;
  const user = await User.create(req.body);
  res.status(200).json({
    success: true,
    user,
  });
});

// Login user
export const loginUser = catchAsyncError(async (req, res, nex) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw { message: "user not found", statusCode: 400 };
  }
  if (password !== user.password) {
    throw { message: "wrong user or password", statusCode: 400 };
  }
  const token = jwt.sign({ id: user._id }, "sssecret");
  const options = {
    expires: new Date(
      Date.now() + 1 * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  res.status(200).cookie("token", token,options).json({
    success: true,
    user,
    token,
  });
});

//Load user controller
export const loadUser = catchAsyncError(async (req, res, nex) => {
  console.log(req.cookies);
  res.send("load user is working now");
});
