import express from 'express'
import { signup,login,logout,updateProfile, checkAuth } from '../controllers/auth.controller.js';
import { protectRoute } from '../middlewares/auth.middleware.js';

const router = express.Router()

// router.get("/signup", (req, res) => {
//     res.send("signup route")
// })

// router.get("/login", (req, res) => {
//     res.send("login route")
// })

// router.get("/logout", (req, res) => {
//     res.send("logout route")
// })

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.put("/update-profile", protectRoute, updateProfile)

router.get("/check",protectRoute, checkAuth)

export default router