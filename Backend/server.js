import app from "./app.js";

app.listen(process.env.PORT, () => {
  console.log("application is listening to port " + process.env.PORT);
});
