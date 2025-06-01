import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const articleData = [
  {/* ---------- Nausnice ---------- */},
  {
    name: "divinica 1",
    photoName: "nausnica.jpg",
    price: "6$",
    category: "nausnice"
  },
  {
    name: "divinica 11",
    photoName: "nausnica.jpg",
    price: "6$",
    category: "nausnice"
  },
  {
    name: "divinica 2",
    photoName: "nausnica.jpg",
    price: "7$",
    category: "nausnice"
  },
  {/* ---------- Narukvice ---------- */},
  {
    name: "divinica 3",
    photoName: "narukvica.jpg",
    price: "8$",
    category: "narukvice"
  },
  {
    name: "divinica 33",
    photoName: "narukvica.jpg",
    price: "8$",
    category: "narukvice"
  },
  {
    name: "divinica 4",
    photoName: "narukvica.jpg",
    price: "6$",
    category: "narukvice"
  },
  {/* ---------- Ogrlice ---------- */},
  {
    name: "divinica 5",
    photoName: "ogrlica.jpg",
    price: "6$",
    category: "ogrlice"
  },
  {
    name: "divinica 10",
    photoName: "ogrlica.jpg",
    price: "6$",
    category: "ogrlice"
  },
  {
    name: "divinica 6",
    photoName: "ogrlica.jpg",
    price: "22$",
    category: "ogrlice"
  }
];

function App() {
  return (
    <div className="container">
      <Header />
      <List />
      <Footer />
    </div>
  );
}

function Header() {
  return <header className='header'><h1>Divina Jewelry</h1></header>
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

function Article({articleObj}) {
  return(
    <li className='article'>
      <img src={process.env.PUBLIC_URL + "/images/" + articleObj.photoName} alt={articleObj.name} />
      <div>
        <h3>{articleObj.name}</h3>
        <p>{articleObj.price}</p>
      </div>
    </li>
  )
}

function Footer() {
  return <footer className='footer'>
            <p>Instagram</p>
          </footer>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

