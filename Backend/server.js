import app from "./app.js";
import connectCloudinary from "./config/cloudinary.js";

connectCloudinary();

app.listen(process.env.PORT, () => {
  console.log("This server is running on the " + process.env.PORT);
});
