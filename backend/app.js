import express from "express"
import cors from "cors"
import router from "./routes/MenuRoutes.js"
const port = 3000
const app = express()
app.use(cors())
app.use(express.json())
app.use(router)

app.listen(port, () => console.log('server running on port 3000'))