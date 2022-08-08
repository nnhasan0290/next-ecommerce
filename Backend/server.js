import app from "./app.js";

app.listen(process.env.PORT, () => {
  console.log("This server is running on the " + process.env.PORT);
});
