const productIndex = [
  // ALUMINIUM
  { name: "Foil Container No. 2 - Silver Brand", link: "foil.html" },
  { name: "Foil Container No. 6A - Silver Brand", link: "foil.html" },
  { name: "Foil Container No. 1 - Gold Brand", link: "foil.html" },
  { name: "Foil Container No. 2 - Gold Brand", link: "foil.html" },
  { name: "Foil Container No. 6 - Gold Brand", link: "foil.html" },
  { name: "Foil Container No. 12 - Gold Brand", link: "foil.html" },
  { name: "Foil Container 9x9x1.5 (Shallow)", link: "foil.html" },
  { name: "Foil Container 9x9x2 (Deep)", link: "foil.html" },
  { name: "Half Gastro Foil Container", link: "foil.html" },
  { name: "Full Gastro Foil Container", link: "foil.html" },
  { name: "Aluminium Hood Lid", link: "foil.html" },

  // LIDS
  { name: "Lid No. 1 Standard", link: "lids.html" },
  { name: "Lid No. 2 Standard", link: "lids.html" },
  { name: "Lid No. 6A Standard", link: "lids.html" },
  { name: "Lid No. 1 Heavy Poly", link: "lids.html" },
  { name: "Lid No. 2 Heavy Poly", link: "lids.html" },
  { name: "Lid No. 6A Heavy Poly", link: "lids.html" },
  { name: "Lid 9x9 Heavy Poly", link: "lids.html" },
  { name: "Lid No. 6 Heavy Poly", link: "lids.html" },
  { name: "Lid No. 12 Heavy Poly", link: "lids.html" },
  { name: "9\" Round Lid Heavy Poly", link: "lids.html" },

  // PLASTIC CONTAINERS
  { name: "Microwave Container 500ml", link: "plastic.html" },
  { name: "Microwave Container 650ml", link: "plastic.html" },
  { name: "Microwave Container 750ml", link: "plastic.html" },
  { name: "Microwave Container 1000ml", link: "plastic.html" },
  { name: "Black Base Rectangle 16oz", link: "plastic.html" },
  { name: "Black Base Rectangle 24oz", link: "plastic.html" },
  { name: "Black Base Rectangle 28oz", link: "plastic.html" },
  { name: "Black Base Rectangle 32oz", link: "plastic.html" },
  { name: "Black Base Rectangle 38oz", link: "plastic.html" },
  { name: "Black Base Rectangle 32oz (2 Compartment)", link: "plastic.html" },
  { name: "Black Base Round 12oz", link: "plastic.html" },
  { name: "Black Base Round 16oz", link: "plastic.html" },
  { name: "Black Base Round 24oz", link: "plastic.html" },
  { name: "Black Base Round 28oz", link: "plastic.html" },
  { name: "Black Base Round 32oz", link: "plastic.html" },
  { name: "Black Base Round 48oz", link: "plastic.html" },

  // SAUCE CUPS
  { name: "Sauce Cup 1oz Hinge Lid", link: "plastic.html" },
  { name: "Sauce Cup 2oz Hinge Lid", link: "plastic.html" },
  { name: "Sauce Cup 4oz Hinge Lid", link: "plastic.html" },
  { name: "Sauce Cup 6oz Hinge Lid", link: "plastic.html" },
  { name: "Sauce Cup 2oz Separate Lid", link: "plastic.html" },
  { name: "Sauce Cup 4oz Separate Lid", link: "plastic.html" },

  // SALAD CONTAINERS
  { name: "Salad Container 250ml", link: "plastic.html" },
  { name: "Salad Container 375ml", link: "plastic.html" },
  { name: "Salad Container 500ml", link: "plastic.html" },
  { name: "Salad Container 750ml", link: "plastic.html" },
  { name: "Salad Container 1000ml", link: "plastic.html" },
  { name: "Salad Container 1250ml", link: "plastic.html" },
  { name: "Salad Container 2000ml", link: "plastic.html" },

  // DELI POTS
  { name: "Deli Pot 8oz", link: "plastic.html" },
  { name: "Deli Pot 10oz", link: "plastic.html" },
  { name: "Deli Pot 12oz", link: "plastic.html" },
  { name: "Deli Pot 16oz", link: "plastic.html" },
  { name: "Deli Pot 24oz", link: "plastic.html" },
  { name: "Deli Pot 30oz", link: "plastic.html" },

  // PAPER
  { name: "8oz Ripple Paper Cup", link: "paper.html" },
  { name: "12oz Ripple Paper Cup", link: "paper.html" },
  { name: "8oz Paper Cup Lid", link: "paper.html" },
  { name: "12oz Paper Cup Lid", link: "paper.html" },

  // NAPKINS
  { name: "Single Ply Serviettes", link: "napkins.html" },
  { name: "Wipe-Up Serviettes 33x33", link: "napkins.html" },
  { name: "Wipe-Up Serviettes 40x40 (8-fold)", link: "napkins.html" },
  { name: "Centerfeed Rolls (Heavy Duty)", link: "napkins.html" },
  { name: "Centerfeed Rolls (Economy)", link: "napkins.html" },

  // CATERING
  { name: "Catering Foil 450mm x 75m", link: "catering.html" },
  { name: "Catering Foil 300mm x 75m", link: "catering.html" },
  { name: "Cling Film 450mm x 300m", link: "catering.html" },
  { name: "Cling Film 300mm x 300m", link: "catering.html" },

  // BAGS
  { name: "Kraft Bags Small", link: "bags.html" },
  { name: "Kraft Bags Medium", link: "bags.html" },
  { name: "Kraft Bags Large", link: "bags.html" },
  { name: "Plastic SOS Bags Small", link: "bags.html" },
  { name: "Plastic SOS Bags Medium", link: "bags.html" },
  { name: "Plastic SOS Bags Large", link: "bags.html" },
  { name: "Plastic SOS Bags Extra Large", link: "bags.html" },

  // LINERS
  { name: "Greaseproof Liner 7x7", link: "liners.html" },
  { name: "Greaseproof Liner 9x9", link: "liners.html" },
  { name: "Greaseproof Liner 10x10", link: "liners.html" },
  { name: "Greaseproof Liner 12x12", link: "liners.html" },
  { name: "Greaseproof Liner 14x14", link: "liners.html" },
  { name: "Greaseproof Liner 15x15", link: "liners.html" },
  { name: "Greaseproof Liner 16x16", link: "liners.html" },
  { name: "Greaseproof Liner 18x18", link: "liners.html" },
  { name: "Greaseproof Liner 14x18", link: "liners.html" },
  { name: "Greaseproof Liner 18x28", link: "liners.html" },
  { name: "Foil Bag 7x9x12", link: "liners.html" },

  // BAGASSE
  { name: "Bagasse 8oz Bowl", link: "bagasse.html" },
  { name: "Bagasse 9\" Round Plate", link: "bagasse.html" },
  { name: "Bagasse 10\" Round Plate", link: "bagasse.html" },
  { name: "Bagasse 12oz Plate", link: "bagasse.html" },
  { name: "Bagasse 12\" 4-Compartment Plate", link: "bagasse.html" },
  { name: "Bagasse 7-Compartment Plate", link: "bagasse.html" },
  { name: "Bagasse 6-Compartment Plate", link: "bagasse.html" },
  { name: "Bagasse Burger Box 6x6", link: "bagasse.html" },
  { name: "Bagasse Burger Box 7x5", link: "bagasse.html" },
  { name: "Bagasse Burger Box 9x6", link: "bagasse.html" },
  { name: "Straws 6mm", link: "bagasse.html" },
  { name: "Straws 8mm", link: "bagasse.html" },
  { name: "Straws 10mm", link: "bagasse.html" },

  // Generic Pages
  { name: "All Products", link: "products.html" },
  { name: "About Us", link: "about.html" },
  { name: "Contact", link: "contact.html" }
];

function handleSearch(query) {
  const container = document.getElementById("search-results");
  container.innerHTML = "";
  if (!query) return;

  const results = productIndex.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  if (results.length === 0) {
    container.innerHTML = "<p>No results found.</p>";
    return;
  }

  results.forEach(product => {
    const link = document.createElement("a");
    link.href = product.link;
    link.textContent = product.name;
    container.appendChild(link);
  });
}
