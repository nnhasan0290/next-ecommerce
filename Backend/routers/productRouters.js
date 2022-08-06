import express  from "express";
const router = express.Router();
router.get("/product", (req,res,nex) => {
    res.send("These are the product routers")
})
export default router;