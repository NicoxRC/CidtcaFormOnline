import express from "express";
import pdfsRoutes from "./routes/pdfs.routes";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(pdfsRoutes);

export default app;
