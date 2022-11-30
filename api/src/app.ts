import express from "express";
import pdfsRoutes from "./routes/pdfs.routes";
import formRoutes from "./routes/form.routes";
import cors from "cors";
import morgan from "morgan";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(pdfsRoutes);
app.use(formRoutes);
app.use(morgan("dev"));

export default app;
