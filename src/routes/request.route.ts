import express, { Router } from "express";
import request from "../controllers/request";

const router = Router();

// routes

router.post("/", request);

export default router;
