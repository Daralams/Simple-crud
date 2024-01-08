import {Sequelize} from "sequelize"
import db from "../config/Database.js"

const {DataTypes} = Sequelize

const Menu = db.define('menu', {
  nama: {
    type: DataTypes.STRING,
    allowNull: false
  },
  kategori: {
    type: DataTypes.ENUM("makanan", "minuman", "lain-lain")
  },
  harga: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  stok: {
    type: DataTypes.ENUM("tersedia", "habis"),
    defaultValue: "habis"
  }
}, {
  freezeTableName: true
})

export default Menu

try {
  await db.authenticate()
  console.log('Connection success...')
  await db.sync()
} catch (error) {
  console.error(error.message)
}