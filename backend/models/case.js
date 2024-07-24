import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Case = db.define('Cases', {
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
    teamMembers: {
        type: DataTypes.JSON, // You can also use DataTypes.STRING to store a comma-separated list of IDs
        allowNull: false
    }
}, {
    freezeTableName: true
});


export default Case;
