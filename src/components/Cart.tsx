import type { Product } from '../data/products';

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartProps {
  items: CartItem[];
  onRemoveItem: (productId: number) => void;
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onClearCart: () => void;
}

export default function Cart({
  items,
  onRemoveItem,
  onUpdateQuantity,
  onClearCart,
}: CartProps) {
  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div className='cart'>
      <div className='cart-header'>
        <h2>Shopping Cart</h2>
        {items.length > 0 && (
          <button className='clear-cart-btn' onClick={onClearCart}>
            Clear Cart
          </button>
        )}
      </div>

      {items.length === 0 ? (
        <p className='empty-cart'>Your cart is empty</p>
      ) : (
        <>
          <div className='cart-items'>
            {items.map((item) => (
              <div key={item.product.id} className='cart-item'>
                <div className='cart-item-image'>
                  <img src={item.product.image} alt={item.product.name} />
                </div>
                <div className='cart-item-details'>
                  <h4>{item.product.name}</h4>
                  <p>${item.product.price.toFixed(2)} each</p>
                  <div className='quantity-controls'>
                    <button
                      onClick={() =>
                        onUpdateQuantity(item.product.id, item.quantity - 1)
                      }
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        onUpdateQuantity(item.product.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className='cart-item-total'>
                  <span>
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </span>
                  <button
                    className='remove-item-btn'
                    onClick={() => onRemoveItem(item.product.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className='cart-footer'>
            <div className='cart-total'>
              <strong>Total: ${total.toFixed(2)}</strong>
            </div>
            <button className='checkout-btn'>Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}
