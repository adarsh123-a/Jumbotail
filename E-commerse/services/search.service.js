const { products } = require("../data/store");

function normalize(text) {
  return text.toLowerCase();
}

exports.searchProducts = (req, res) => {
  const query = normalize(req.query.query || "");

  let results = products.map((product) => {
    let score = 0;
    const title = normalize(product.title);
    const description = normalize(product.description || "");

    if (title.includes(query)) score += 50;
    if (description.includes(query)) score += 20;

    score += product.rating * 5;

    if (query.includes("sasta") || query.includes("cheap")) {
      score += product.price < 50000 ? 20 : 0;
    }

    if (product.stock === 0) score -= 30;

    score += product.unitsSold / 50;

    return { ...product, score };
  });

  results.sort((a, b) => b.score - a.score);

  res.json({
    data: results.map((p) => ({
      productId: p.productId,
      title: p.title,
      description: p.description,
      mrp: p.mrp,
      Sellingprice: p.price,
      Metadata: p.metadata,
      stock: p.stock,
    })),
  });
};
