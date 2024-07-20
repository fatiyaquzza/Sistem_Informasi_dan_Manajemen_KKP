import Lawyer from "../models/lawyer.js";
import path from "path";
import fs from "fs";

export const getLawyers = async (req, res) => {
  try {
    const lawyers = await Lawyer.findAll();
    res.json(lawyers);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createLawyer = async (req, res) => {
  if (req.files === null)
    return res.status(400).json({ msg: "No File Uploaded" });
  const { name, position, about, description } = req.body;
  const file = req.files.file;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const fileName = file.md5 + ext;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
  const allowedType = [".png", ".jpg", ".jpeg"];

  if (!allowedType.includes(ext.toLowerCase()))
    return res.status(422).json({ msg: "Invalid Images" });
  if (fileSize > 5000000)
    return res.status(422).json({ msg: "Image must be less than 5 MB" });

  const dir = "./public/images";

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  file.mv(`${dir}/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ msg: err.message });
    try {
      await Lawyer.create({
        name: name,
        position: position,
        about: about,
        description: description,
        image: fileName,
        url: url,
      });
      res.status(201).json({ msg: "Lawyer Created Successfully" });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ msg: "Failed to create lawyer" });
    }
  });
};

export const getLawyerById = async (req, res) => {
  try {
    const lawyer = await Lawyer.findByPk(req.params.id);
    if (lawyer) {
      res.status(200).json(lawyer);
    } else {
      res.status(404).json({ message: "Lawyer not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateLawyer = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, position, about, description } = req.body;

    const lawyer = await Lawyer.findByPk(id);
    if (!lawyer) return res.status(404).json({ message: "Lawyer not found" });

    if (req.files && req.files.file) {
      const file = req.files.file;
      const fileSize = file.data.length;
      const ext = path.extname(file.name);
      const fileName = file.md5 + ext;
      const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
      const allowedType = [".png", ".jpg", ".jpeg"];

      if (!allowedType.includes(ext.toLowerCase()))
        return res.status(422).json({ msg: "Invalid Images" });
      if (fileSize > 5000000)
        return res.status(422).json({ msg: "Image must be less than 5 MB" });

      const dir = "./public/images";

      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      if (lawyer.image) {
        fs.unlinkSync(path.join(dir, lawyer.image));
      }

      file.mv(`${dir}/${fileName}`, async (err) => {
        if (err) return res.status(500).json({ msg: err.message });
      });

      lawyer.image = fileName;
      lawyer.url = url;
    }

    lawyer.name = name;
    lawyer.position = position;
    lawyer.about = about;
    lawyer.description = description;
    await lawyer.save();

    res.status(200).json({ msg: "Lawyer updated successfully", lawyer });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteLawyer = async (req, res) => {
  try {
    const lawyer = await Lawyer.findByPk(req.params.id);
    if (lawyer) {
      await lawyer.destroy();
      res.status(200).json({ message: "Lawyer deleted" });
    } else {
      res.status(404).json({ message: "Lawyer not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};