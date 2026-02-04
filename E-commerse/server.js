const express = require("express");
const app = express();

app.use(express.json());

const productRoutes = require("./routes/product.routes");
const searchRoutes = require("./routes/search.routes");

app.use("/api/v1/product", productRoutes);
app.use("/api/v1/search", searchRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
