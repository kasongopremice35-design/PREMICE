const http = require("http");

const PORT = process.env.PORT || 3000;

const html = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PREMICE - Lubumbashi</title>
  <style>
    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: #f5f7fb;
      color: #172033;
    }

    header {
      background: #0b5cff;
      color: white;
      padding: 18px 20px;
    }

    .nav {
      max-width: 1100px;
      margin: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      font-size: 26px;
      font-weight: bold;
    }

    .hero {
      max-width: 1100px;
      margin: 35px auto;
      padding: 45px 25px;
      background: white;
      border-radius: 20px;
      text-align: center;
      box-shadow: 0 5px 20px rgba(0,0,0,0.08);
    }

    .hero h1 {
      font-size: 38px;
      margin-bottom: 12px;
    }

    .hero p {
      font-size: 18px;
      color: #596579;
      line-height: 1.6;
    }

    button {
      border: 0;
      padding: 13px 22px;
      border-radius: 10px;
      cursor: pointer;
      font-weight: bold;
      margin: 5px;
      font-size: 15px;
    }

    .primary {
      background: #0b5cff;
      color: white;
    }

    .secondary {
      background: #e9efff;
      color: #0b5cff;
    }

    .section {
      max-width: 1100px;
      margin: 30px auto;
      padding: 0 20px;
    }

    .section h2 {
      text-align: center;
      margin-bottom: 20px;
    }

    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 18px;
    }

    .card {
      background: white;
      padding: 25px;
      border-radius: 16px;
      text-align: center;
      box-shadow: 0 4px 15px rgba(0,0,0,0.06);
    }

    .icon {
      font-size: 40px;
    }

    footer {
      margin-top: 50px;
      background: #172033;
      color: white;
      text-align: center;
      padding: 25px;
      text-align: center;
    }
  </style>
</head>

<body>

<header>
  <div class="nav">
    <div class="logo">PREMICE</div>
    <div>Lubumbashi 🇨🇩</div>
  </div>
</header>

<section class="hero">
  <h1>Achetez et vendez facilement à Lubumbashi</h1>

  <p>
    PREMICE est une plateforme locale qui met en relation
    acheteurs et vendeurs à Lubumbashi.
  </p>

  <div>
    <button class="primary"
      onclick="alert('La boutique sera bientôt disponible.')">
      🛍️ Acheter
    </button>

    <button class="secondary"
      onclick="alert('La publication des annonces sera bientôt disponible.')">
      📦 Vendre
    </button>
  </div>
</section>

<section class="section">
  <h2>Catégories populaires</h2>

  <div class="cards">

    <div class="card">
      <div class="icon">📱</div>
      <h3>Téléphones</h3>
      <p>Smartphones et accessoires</p>
    </div>

    <div class="card">
      <div class="icon">💻</div>
      <h3>Informatique</h3>
      <p>Ordinateurs et accessoires</p>
    </div>

    <div class="card">
      <div class="icon">👕</div>
      <h3>Mode</h3>
      <p>Vêtements et chaussures</p>
    </div>

    <div class="card">
      <div class="icon">🏠</div>
      <h3>Maison</h3>
      <p>Produits pour la maison</p>
    </div>

  </div>
</section>

<section class="section">
  <h2>Pourquoi PREMICE ?</h2>

  <div class="cards">

    <div class="card">
      <div class="icon">🇨🇩</div>
      <h3>Local</h3>
      <p>Une plateforme pensée pour Lubumbashi.</p>
    </div>

    <div class="card">
      <div class="icon">🔒</div>
      <h3>Simple</h3>
      <p>Une expérience facile à utiliser.</p>
    </div>

    <div class="card">
      <div class="icon">🤝</div>
      <h3>Communauté</h3>
      <p>Acheteurs et vendeurs réunis au même endroit.</p>
    </div>

  </div>
</section>

<footer>
  <p>© 2026 PREMICE — Plateforme d'achat et de vente à Lubumbashi</p>
</footer>

</body>
</html>`;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8"
  });

  res.end(html);
});

server.listen(PORT, "0.0.0.0", () => {
  console.log("PREMICE fonctionne sur le port " + PORT);
});
