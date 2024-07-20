import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const casee = db.define('Cases', {
    caseName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    caseDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    caseAbout: {
        type: DataTypes.TEXT
    },
    caseAction: {
        type: DataTypes.TEXT
    },
    caseOutcome: {
        type: DataTypes.TEXT
    },
    caseMember1: {
        type: DataTypes.STRING
    },
    caseMember2: {
        type: DataTypes.STRING
    },
    caseMember3: {
        type: DataTypes.STRING
    },
    caseMember4: {
        type: DataTypes.STRING
    },

}, {
    freezeTableName: true
});

export default casee;
