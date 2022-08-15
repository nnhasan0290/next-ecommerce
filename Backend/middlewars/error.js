export default (err, req, res, nex) => {
  console.log(err);
  res.status(err.statusCode).json({
    success: false,
    error: err.message,
  });
  return;
};
