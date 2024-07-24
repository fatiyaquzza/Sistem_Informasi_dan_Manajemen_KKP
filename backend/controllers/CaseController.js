import Case from "../models/case.js";
import Lawyer from "../models/lawyer.js";


export const createCase = async (req, res) => {
  try {
    const { caseName, caseDate, caseAbout, caseAction, caseOutcome, teamMembers } = req.body;
    const newCase = await Case.create({
      caseName,
      caseDate,
      caseAbout,
      caseAction,
      caseOutcome,
      teamMembers // Menyimpan nama pengacara
    });
    res.status(201).json(newCase);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
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
      const { caseName, caseDate, caseAbout, caseAction, caseOutcome, caseMember1, caseMember2, caseMember3, caseMember4, caseMember5 } = req.body;
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
