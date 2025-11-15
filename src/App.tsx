import { useState } from 'react';
import { products, type Product } from './data/products';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

interface CartItem {
  product: Product;
  quantity: number;
}

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const addToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.product.id === product.id
      );
      if (existingItem) {
        return prevItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.product.id !== productId)
    );
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Filter products based on search query
  const filteredProducts = products.filter((product) => {
    const query = searchQuery.toLowerCase();
    return (
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
    );
  });

  return (
    <div className='app'>
      <header className='app-header'>
        <h1>Shirt Store</h1>
        <div className='search-bar-container'>
          <input
            type='text'
            className='search-bar'
            placeholder='Search products, categories...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              className='clear-search-btn'
              onClick={() => setSearchQuery('')}
              aria-label='Clear search'
            >
              ✕
            </button>
          )}
        </div>
        <button className='cart-toggle' onClick={() => setShowCart(!showCart)}>
          Cart ({cartItemCount})
        </button>
      </header>

      <main className='app-main'>
        {showCart ? (
          <Cart
            items={cartItems}
            onRemoveItem={removeFromCart}
            onUpdateQuantity={updateQuantity}
            onClearCart={clearCart}
          />
        ) : (
          <>
            {searchQuery && (
              <div className='search-results-info'>
                Found {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
                {searchQuery && ` for "${searchQuery}"`}
              </div>
            )}
            <ProductList products={filteredProducts} onAddToCart={addToCart} />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
