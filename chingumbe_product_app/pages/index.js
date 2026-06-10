import { useState } from "react";
import styles from "../styles/Home.module.css";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 89.99,
    rating: 4.5,
    image: "🎧",
    description: "Premium sound quality with noise cancellation and 30hr battery life.",
  },
  {
    id: 2,
    name: "Running Sneakers",
    category: "Footwear",
    price: 64.99,
    rating: 4.2,
    image: "👟",
    description: "Lightweight and breathable, perfect for long-distance runs.",
  },
  {
    id: 3,
    name: "Leather Wallet",
    category: "Accessories",
    price: 34.99,
    rating: 4.7,
    image: "👜",
    description: "Slim genuine leather wallet with RFID blocking technology.",
  },
  {
    id: 4,
    name: "Coffee Maker",
    category: "Kitchen",
    price: 49.99,
    rating: 4.3,
    image: "☕",
    description: "Brew a perfect cup in under 5 minutes with adjustable strength.",
  },
  {
    id: 5,
    name: "Yoga Mat",
    category: "Sports",
    price: 29.99,
    rating: 4.6,
    image: "🧘",
    description: "Non-slip, eco-friendly mat with alignment lines for all skill levels.",
  },
  {
    id: 6,
    name: "Desk Lamp",
    category: "Home",
    price: 39.99,
    rating: 4.4,
    image: "💡",
    description: "Adjustable LED lamp with 3 brightness levels and USB charging port.",
  },
  {
    id: 7,
    name: "Sunglasses",
    category: "Accessories",
    price: 54.99,
    rating: 4.1,
    image: "🕶️",
    description: "UV400 polarized lenses with a durable lightweight frame.",
  },
  {
    id: 8,
    name: "Backpack",
    category: "Accessories",
    price: 74.99,
    rating: 4.8,
    image: "🎒",
    description: "Water-resistant 30L backpack with padded laptop compartment.",
  },
];

const categories = ["All", ...new Set(products.map((p) => p.category))];

function StarRating({ rating }) {
  return (
    <div className={styles.stars}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={star <= Math.round(rating) ? styles.starFilled : styles.starEmpty}
        >
          ★
        </span>
      ))}
      <span className={styles.ratingNumber}>{rating}</span>
    </div>
  );
}

function ProductCard({ product, onAddToCart }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>{product.image}</div>
      <div className={styles.cardBody}>
        <span className={styles.badge}>{product.category}</span>
        <h3 className={styles.productName}>{product.name}</h3>
        <p className={styles.productDesc}>{product.description}</p>
        <StarRating rating={product.rating} />
        <div className={styles.cardFooter}>
          <span className={styles.price}>${product.price.toFixed(2)}</span>
          <button className={styles.addBtn} onClick={() => onAddToCart(product)}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const filteredProducts = products.filter((p) => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  function addToCart(product) {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  }

  function removeFromCart(id) {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.logo}>🛍️ ShopEase</div>
          <button className={styles.cartBtn} onClick={() => setCartOpen(!cartOpen)}>
            Cart
            {cartCount > 0 && <span className={styles.cartBadge}>{cartCount}</span>}
          </button>
        </div>
      </header>

      {cartOpen && (
        <div className={styles.cartDrawer}>
          <div className={styles.cartHeader}>
            <h2>Your Cart</h2>
            <button className={styles.closeBtn} onClick={() => setCartOpen(false)}>✕</button>
          </div>
          {cart.length === 0 ? (
            <p className={styles.emptyCart}>Your cart is empty.</p>
          ) : (
            <>
              {cart.map((item) => (
                <div key={item.id} className={styles.cartItem}>
                  <span className={styles.cartEmoji}>{item.image}</span>
                  <div className={styles.cartItemInfo}>
                    <p className={styles.cartItemName}>{item.name}</p>
                    <p className={styles.cartItemMeta}>
                      {item.qty} × ${item.price.toFixed(2)}
                    </p>
                  </div>
                  <button className={styles.removeBtn} onClick={() => removeFromCart(item.id)}>
                    ✕
                  </button>
                </div>
              ))}
              <div className={styles.cartTotal}>
                Total: <strong>${cartTotal.toFixed(2)}</strong>
              </div>
              <button className={styles.checkoutBtn}>Checkout</button>
            </>
          )}
        </div>
      )}

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>Find what you love</h1>
          <p>Handpicked products across every category.</p>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </section>

        <div className={styles.filters}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterBtnActive : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {filteredProducts.length === 0 ? (
          <p className={styles.noResults}>No products found. Try a different search.</p>
        ) : (
          <div className={styles.grid}>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
            ))}
          </div>
        )}
      </main>

      <footer className={styles.footer}>
        <p>© 2026 ShopEase. Built with Next.js & React.</p>
      </footer>
    </div>
  );
}
