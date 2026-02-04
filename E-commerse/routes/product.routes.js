const express = require("express");
const router = express.Router();

const { addProduct, updateMetadata } = require("../services/product.service");

router.post("/", addProduct);
router.put("/meta-data", updateMetadata);

module.exports = router;
