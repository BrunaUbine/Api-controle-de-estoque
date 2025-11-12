import { DataTypes } from "sequelize";
import { Produto } from "./produto";
const {sequelize} = require("../config/database.js");

export const Entrada = require("Entrada", {
    id: {type: DataTypes.STRING, autoIncrement: true, primaykey: true},
    quantidade: {type: DataTypes.INTEGER, allownull: false},
    preco: DataTypes.DECIMAL,
    data_entrada: {type: DataTypes.DATE, allownull:false},
});

Produto.hasmany(Entrada, {foreignkey: "produto_id"});
Entrada.belongsTo(Produto, {foreignkey: "produto_is"});


