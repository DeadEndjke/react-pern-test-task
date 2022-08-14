import sequelize from "../db.js";
import { DataTypes } from "sequelize";

export const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
})

export const Contact = sequelize.define('contact', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true },
    name: { type: DataTypes.STRING },
})

User.hasOne(Contact);
Contact.belongsTo(User);


