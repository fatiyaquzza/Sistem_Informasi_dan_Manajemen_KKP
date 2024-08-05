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
    pdf: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
}, {
    freezeTableName: true
});


export default Case;
