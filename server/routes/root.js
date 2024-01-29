import express from "express";

const router = express.Router();

router.get("/", () => console.log("the user requested for the home route"));

export default router