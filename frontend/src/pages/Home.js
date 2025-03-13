import React, { useEffect } from 'react';
import '../styles/Home.css';
import ProductCard from '../components/ProductCard';

function Home() {
  useEffect(() => {
    // Add animation classes after component mounts
    const hero = document.querySelector('.hero');
    hero.classList.add('animate');
  }, []);

  const featuredProducts = [
    {
      id: 1,
      name: "Rainbow Lollipops",
      price: "$2.99",
      image: "/images/lollipop.png"
    },
    {
      id: 2,
      name: "Chocolate Truffles",
      price: "$4.99",
      image: "/images/truffle.png"
    },
    {
      id: 3,
      name: "Cotton Candy",
      price: "$3.99",
      image: "/images/cotton-candy.png"
    }
  ];

  return (
    <div className="home">
      <section className="hero" id="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Sweet Delights</h1>
          <p className="hero-subtitle">Discover a World of Sweetness and Joy!</p>
          <div className="hero-cta">
            <button className="cta-button">Explore Our Treats</button>
          </div>
        </div>
        <div className="floating-candies">
          {[...Array(5)].map((_, i) => (
            <div key={i} className={`candy candy-${i + 1}`}></div>
          ))}
        </div>
      </section>

      <section className="featured-products" id="products">
        <h2>Our Popular Treats</h2>
        <div className="products-grid">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <h2>Sweet Moments, Sweet Memories</h2>
        <p>Bringing smiles with our handcrafted candies since 2010</p>
      </section>
    </div>
  );
}

export default Home; 