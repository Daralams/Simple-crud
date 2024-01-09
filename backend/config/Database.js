import {Sequelize} from "sequelize"
const db = new Sequelize('warung', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})

export default db
