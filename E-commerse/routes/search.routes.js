const express = require("express");
const router = express.Router();
const { searchProducts } = require("../services/search.service");

router.get("/product", searchProducts);

module.exports = router;
