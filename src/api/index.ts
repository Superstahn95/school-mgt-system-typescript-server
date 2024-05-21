import express from "express";
import healthCheckRoute from "../routes/healthCheck.route";

const router = express.Router();

router.use("healthcheck", healthCheckRoute);

export default router;
