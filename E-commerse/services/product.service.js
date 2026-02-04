const store = require("../data/store");

exports.addProduct = (req, res) => {
  const {
    title,
    description = "",
    price,
    mrp = price,
    rating = 0,
    unitsSold = 0,
    stock = 0,
    metadata = {},
  } = req.body;

  if (!title || typeof price === "undefined") {
    return res.status(400).json({
      message: "title and price are required",
    });
  }

  const product = {
    productId: store.getNextId(),
    title,
    description,
    price,
    mrp,
    rating,
    unitsSold,
    stock,
    metadata,
  };

  store.products.push(product);

  res.status(201).json(product);
};

exports.updateMetadata = (req, res) => {
  const { productId, Metadata } = req.body;

  if (!productId || !Metadata) {
    return res.status(400).json({
      message: "productId and Metadata are required",
    });
  }

  const product = store.products.find((p) => p.productId === productId);

  if (!product) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  product.metadata = {
    ...product.metadata,
    ...Metadata,
  };

  res.json({
    productId: product.productId,
    Metadata: product.metadata,
  });
};
