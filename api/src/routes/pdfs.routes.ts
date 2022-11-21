import { Router } from "express";
import {
  getPdfs,
  createPdfs,
  getPdf,
  deletePdf,
} from "../controllers/pdfs.controller";

const router = Router();

router.get("/pdfs", getPdfs);
router.post("/pdfs", createPdfs);
router.get("/pdfs/:id", getPdf);
router.delete("/pdfs/:id", deletePdf);

export default router;
