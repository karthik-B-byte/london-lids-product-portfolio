const productIndex = [
  { name: "Plastic Lids", link: "plastic.html" },
  { name: "Paper Cups", link: "paper.html" },
  { name: "Foil Containers", link: "foil.html" },
  { name: "Bagasse Plates", link: "bagasse.html" },
  { name: "Napkins", link: "napkins.html" },
  { name: "Aluminium Trays", link: "aluminium.html" },
  { name: "Catering Supplies", link: "catering.html" },
  { name: "Liners", link: "liners.html" },
  { name: "Bags", link: "bags.html" },
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
