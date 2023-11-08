const { Router } = require("express");
const router = Router();

const get_item_api = require("../interactions/item/get_item_api");
const add_item_api = require("../interactions/item/add_item_api");
const update_item_api = require("../interactions/item/update_item_api");
const delete_item_api = require("../interactions/item/delete_item_api");


router.get("/api/item/getitem", get_item_api.getItem);
router.get("/api/item/getitem/boardid/:boardid", get_item_api.getItemByBoardId);
router.get("/api/item/getitem/columnid/:columnid", get_item_api.getItemByColumnId);
router.post("/api/item/additem" , add_item_api.addItem);
router.put("/api/item/updateitem" , update_item_api.updateItem);
router.delete("/api/item/deleteitem/:id", delete_item_api.deleteItem);


module.exports = router; 