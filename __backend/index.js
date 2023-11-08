const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const PORT = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors())
require("./db/intiDb");


app.use(express.json());
app.use(express.urlencoded({ 
  extended: true
})) 

//routers
const kanbanBoard = require("./routes/kanbanBoard");
const boardItem = require("./routes/boardItem");
const columnItem = require("./routes/boardColumn");

app.use(kanbanBoard);
app.use(boardItem);
app.use(columnItem);



app.listen(PORT, () => {
  console.log(`server connected IN PORT ${PORT}`);
});
 