import { Pdf } from "../models/Pdfs";
import { Request, Response } from "express";

export const getPdfs = async (req: Request, res: Response) => {
  try {
    const pdfs = await Pdf.findAll();
    res.status(200).json(pdfs);
  } catch (error: any) {
    res.status(404).json({ error: error.message });
  }
};

export const createPdfs = async (req: Request, res: Response) => {
  try {
    const { name, pdf } = req.body;
    if (!name || !pdf) throw new Error("Bad request.");

    const newPdf = await Pdf.create({
      name,
      pdf,
    });

    res.status(201).json(newPdf);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getPdf = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const findedPdf = await Pdf.findByPk(id);
    if (!findedPdf) throw new Error("Bad request.");
    res.status(200).json(findedPdf);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const deletePdf = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedPdf = await Pdf.findByPk(id);
    if (!deletedPdf) throw new Error("Bad request.");
    await deletedPdf.destroy();
    res.status(202).json({ msg: "accepted." });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
