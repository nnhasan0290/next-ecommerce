export const catchAsyncError = (theFunc) => (req, res, nex) => {
  try {
    theFunc(req, res, nex);
  } catch (error) {
    nex(error.message);
  }
};
