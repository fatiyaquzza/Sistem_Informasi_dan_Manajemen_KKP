import Lawyer from "../models/lawyer.js";

export const getLawyers = async (req, res) => {
    try {
        const lawyers = await Lawyer.findAll();
        res.json(lawyers);
    } catch (error) {
        res.json({ message: error.message });
    }
};

export const createLawyer = async (req, res) => {
    try {
        await Lawyer.create(req.body);
        res.json({ "message": "Lawyer Created" });
    } catch (error) {
        res.json({ message: error.message });
    }
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
      const { name, position, about, description } = req.body;
      const lawyer = await Lawyer.findByPk(req.params.id);
      if (lawyer) {
        lawyer.name = name;
        lawyer.position = position;
        lawyer.about = about;
        lawyer.description = description;
        await lawyer.save();
        res.status(200).json(lawyer);
      } else {
        res.status(404).json({ message: "Lawyer not found" });
      }
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
