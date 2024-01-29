import express from "express"
import { createUser, getUser } from "../controllers/userController.js"

const router = express.Router()

router.get("/user", getUser)
router.post("/register", createUser)

export default router