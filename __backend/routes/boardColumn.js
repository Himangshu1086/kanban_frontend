const { Router } = require("express");
const router = Router();

const get_column_api = require("../interactions/column/get_column_api");
const add_column_api = require("../interactions/column/add_column_api");
const update_column_api = require("../interactions/column/update_column_api");
const delete_column_api = require("../interactions/column/delete_column_api");


router.get("/api/column/getcolumn", get_column_api.getColumn);
router.get("/api/column/getcolumn/:boardid", get_column_api.getColumnByBoardId);
router.post("/api/column/addcolumn" , add_column_api.addColumn);
router.put("/api/column/updatecolumn" , update_column_api.updateColumn);
router.delete("/api/column/deletecolumn/:id", delete_column_api.deleteColumn);


module.exports = router;