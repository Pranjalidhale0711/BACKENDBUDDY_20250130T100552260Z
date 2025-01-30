const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const routes = require("./routes/route");
    
dotenv.config();
const PORT = process.env.PORT || 8000;
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Database connected")
    })
// Using middlewares
app.use(express.json());
app.use("/api/v1", routes);
app.use(cors());
    
//Starting server
app.listen(PORT, () => {
 console.log(`Server running at port ${PORT}.`);
});