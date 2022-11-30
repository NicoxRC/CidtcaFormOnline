import { Router } from "express";
import { createForm } from "../controllers/form.controller";

const router = Router();

// router.get("/pdfs", getPdfs);
router.post("/forms", createForm);
// router.get("/pdfs/:id", getPdf);
// router.delete("/pdfs/:id", deletePdf);

export default router;
