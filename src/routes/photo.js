import { Router } from "express";
import PhotoController from "../controller/PhotoController.js";
import upload from "../config/multer.js";

const router = new Router();

router.post("/photo", upload.single("file"), PhotoController.create);
router.get("/photos", PhotoController.findAll);

export default router;
