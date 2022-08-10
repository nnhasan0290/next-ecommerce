export default (err, req, res, nex) => {
  console.log("This errorhandler is running");
  res.json({
    success: false,
    error: err,
  });
};
