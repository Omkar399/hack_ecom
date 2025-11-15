import type { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({
  product,
  onAddToCart,
}: ProductCardProps) {
  return (
    <div className='product-card'>
      <div className='product-image'>
        <img src={product.image} alt={product.name} />
      </div>
      <div className='product-info'>
        <h3 className='product-name'>{product.name}</h3>
        <p className='product-description'>{product.description}</p>
        <div className='product-details'>
          <div className='product-sizes'>
            <span className='label'>Sizes:</span>
            <span className='values'>{product.sizes.join(', ')}</span>
          </div>
          <div className='product-colors'>
            <span className='label'>Colors:</span>
            <span className='values'>{product.colors.join(', ')}</span>
          </div>
        </div>
        <div className='product-footer'>
          <span className='product-price'>${product.price.toFixed(2)}</span>
          <button
            className='add-to-cart-btn'
            onClick={() => onAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
