import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const articleData = [
  {
    /* ---------- Nausnice ---------- */
  },
  {
    name: "divinica 1",
    photoName: "nausnica.jpg",
    price: "6$",
    category: "nausnice",
    about: "Elegantne naušnice sa modernim dizajnom.",
  },
  {
    name: "divinica 11",
    photoName: "nausnica.jpg",
    price: "6$",
    category: "nausnice",
    about: "Elegantne naušnice sa modernim dizajnom.",
  },
  {
    name: "divinica 2",
    photoName: "nausnica.jpg",
    price: "7$",
    category: "nausnice",
    about: "Elegantne naušnice sa modernim dizajnom.",
  },
  {
    /* ---------- Narukvice ---------- */
  },
  {
    name: "DIVINICA 3",
    photoName: "narukvica.jpg",
    price: "8$",
    category: "narukvice",
    about: "Elegantne naušnice sa modernim dizajnom.",
  },
  {
    name: "divinica 33",
    photoName: "narukvica.jpg",
    price: "8$",
    category: "narukvice",
    about: "Elegantne naušnice sa modernim dizajnom.",
  },
  {
    name: "divinica 4",
    photoName: "narukvica.jpg",
    price: "6$",
    category: "narukvice",
    about: "Elegantne naušnice sa modernim dizajnom.",
  },
  {
    /* ---------- Ogrlice ---------- */
  },
  {
    name: "divinica 5",
    photoName: "ogrlica.jpg",
    price: "6$",
    category: "ogrlice",
    about: "Elegantne naušnice sa modernim dizajnom.",
  },
  {
    name: "divinica 10",
    photoName: "ogrlica.jpg",
    price: "6$",
    category: "ogrlice",
    about: "Elegantne naušnice sa modernim dizajnom.",
  },
  {
    name: "divinica 6",
    photoName: "ogrlica.jpg",
    price: "22$",
    category: "ogrlice",
    about: "Elegantne naušnice sa modernim dizajnom.",
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Narudzbe />
      <List />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Divina jewelry</h1>
    </header>
  );
}

function Narudzbe() {
  return (
    <div className="narudzbe">
      <p>Sve narudžbe možete napraviti putem DM-a na instagramu profilu:</p>
      <p className="centered">@divinajewelry__</p>
    </div>
  );
}

function List() {
  const categories = ["narukvice", "nausnice", "ogrlice"];

  return (
    <main className="category-section">
      {categories.map((category) => (
        <CategorySection
          key={category}
          title={category}
          items={articleData.filter((item) => item.category === category)}
        />
      ))}
    </main>
  );
}

function CategorySection({ title, items }) {
  return (
    <div>
      <h2>{title.charAt(0).toUpperCase() + title.slice(1)}</h2>
      <ul className="articles">
        {items.map((article) => (
          <Article articleObj={article} key={article.name} />
        ))}
      </ul>
    </div>
  );
}

function Article({ articleObj }) {
  const [zoomed, setZoomed] = useState(false);
  return (
    <li className="article">
      <img
        src={process.env.PUBLIC_URL + "/images/" + articleObj.photoName}
        alt={articleObj.name}
        onClick={() => setZoomed(true)}
        style={{ cursor: "zoom-in" }}
      />
      <div>
        <h3>{articleObj.name}</h3>
        <p className="about">{articleObj.about}</p>
        <p>{articleObj.price}</p>
      </div>
      {zoomed && (
        <ZoomModal
          src={process.env.PUBLIC_URL + "/images/" + articleObj.photoName}
          alt={articleObj.name}
          onClose={() => setZoomed(false)}
        />
      )}
    </li>
  );
}

function ZoomModal({ src, alt, onClose }) {
  return (
    <div className="zoom-modal" onClick={onClose}>
      <div className="zoom-modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={src} alt={alt} className="zoom-img" />
        <button className="close-btn" onClick={onClose} aria-label="Close">
          &times;
        </button>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
