const { Router } = require("express");
const router = Router();

require("../db/intiDb");

const get_board_api = require("../interactions/board/get_board_api");
const add_board_api = require("../interactions/board/add_board_api");
const update_board_api = require("../interactions/board/update_board_api");
const delete_board_api = require("../interactions/board/delete_board_api");


router.get("/api/board/getboard", get_board_api.getBoard);
router.get("/api/board/getboard/:id", get_board_api.getBoardById);
router.post("/api/board/addboard" , add_board_api.addBoard);
router.put("/api/board/updateboard" , update_board_api.updateBoard);
router.delete("/api/board/deleteboard/:id", delete_board_api.deleteBoard);


module.exports = router;