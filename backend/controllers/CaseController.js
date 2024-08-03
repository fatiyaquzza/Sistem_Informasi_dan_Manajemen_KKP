import Case from "../models/case.js";
import path from "path";
import fs from "fs";

export const createCase = async (req, res) => {
  if (req.files === null)
    return res.status(400).json({ msg: "No File Uploaded" });
  const { caseName, caseDate, caseAbout, caseAction } = req.body;
  const file = req.files.file;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const fileName = file.md5 + ext;
  const url = `${req.protocol}://${req.get("host")}/files/${fileName}`;
  const allowedType = [".pdf"];

  if (!allowedType.includes(ext.toLowerCase()))
    return res.status(422).json({ msg: "Invalid files" });
  if (fileSize > 20000000)
    return res.status(422).json({ msg: "Image must be less than 20 MB" });

  const dir = "./public/files";

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  file.mv(`${dir}/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ msg: err.message });
    try {
      await Case.create({
        caseName: caseName,
        caseDate: caseDate,
        caseAbout: caseAbout,
        caseAction: caseAction,
        pdf: fileName,
        url: url,
      });
      res.status(201).json({ msg: "Case Created Successfully" });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ msg: "Failed to create Case" });
    }
  });
  // try {
  //   const { caseName, caseDate, caseAbout, caseAction, caseOutcome, teamMembers } = req.body;
  //   const newCase = await Case.create({
  //     caseName,
  //     caseDate,
  //     caseAbout,
  //     caseAction,
  //     caseOutcome,
  //     teamMembers // Menyimpan nama pengacara
  //   });
  //   res.status(201).json(newCase);
  // } catch (error) {
  //   res.status(500).json({ message: error.message });
  // }
};

// Get all cases with team members
export const getCases = async (req, res) => {
  try {
    const cases = await Case.findAll();
    res.status(200).json(cases);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getCaseById = async (req, res) => {
  try {
    const casee = await Case.findByPk(req.params.id);
    if (casee) {
      res.status(200).json(casee);
    } else {
      res.status(404).json({ message: "Case not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateCase = async (req, res) => {
  try {
    const {
      caseName,
      caseDate,
      caseAbout,
      caseAction,
      caseOutcome,
      caseMember1,
      caseMember2,
      caseMember3,
      caseMember4,
      caseMember5,
    } = req.body;
    const casee = await Case.findByPk(req.params.id);
    if (casee) {
      casee.caseName = caseName;
      casee.caseDate = caseDate;
      casee.caseAbout = caseAbout;
      casee.caseAction = caseAction;
      casee.caseOutcome = caseOutcome;
      casee.caseMember1 = caseMember1;
      casee.caseMember2 = caseMember2;
      casee.caseMember3 = caseMember3;
      casee.caseMember4 = caseMember4;
      casee.caseMember5 = caseMember5;

      await casee.save();
      res.status(200).json(casee);
    } else {
      res.status(404).json({ message: "Case not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteCase = async (req, res) => {
  try {
    const casee = await Case.findByPk(req.params.id);
    if (casee) {
      await casee.destroy();
      res.status(200).json({ message: "Case deleted" });
    } else {
      res.status(404).json({ message: "Case not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
