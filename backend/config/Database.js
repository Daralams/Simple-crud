import {Sequelize} from "sequelize"
const db = new Sequelize('warung', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
})

export default db