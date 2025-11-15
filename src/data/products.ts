export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  sizes: string[];
  colors: string[];
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Classic White T-Shirt',
    price: 19.99,
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    description: 'Comfortable cotton t-shirt perfect for everyday wear',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Gray'],
    category: 'Basic',
  },
  {
    id: 2,
    name: 'Vintage Band Tee',
    price: 24.99,
    image:
      'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&h=400&fit=crop',
    description: 'Retro-inspired band t-shirt with vintage graphics',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Navy', 'Red'],
    category: 'Vintage',
  },
  {
    id: 3,
    name: 'Striped Polo Shirt',
    price: 34.99,
    image:
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop',
    description: 'Classic striped polo for a smart casual look',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Navy', 'White', 'Red'],
    category: 'Polo',
  },
  {
    id: 4,
    name: 'Graphic Print Tee',
    price: 22.99,
    image:
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop',
    description: 'Modern graphic print t-shirt with artistic design',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Gray'],
    category: 'Graphic',
  },
  {
    id: 5,
    name: 'Henley Long Sleeve',
    price: 29.99,
    image:
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a5af?w=400&h=400&fit=crop',
    description: 'Comfortable henley with button placket',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Gray', 'Navy', 'White'],
    category: 'Long Sleeve',
  },
  {
    id: 6,
    name: 'Oversized Hoodie',
    price: 49.99,
    image:
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop',
    description: 'Cozy oversized hoodie for ultimate comfort',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Gray', 'Navy'],
    category: 'Hoodie',
  },
  {
    id: 7,
    name: 'Tie-Dye T-Shirt',
    price: 26.99,
    image:
      'https://images.unsplash.com/photo-1583743814966-8936f37f0a7d?w=400&h=400&fit=crop',
    description: 'Colorful tie-dye pattern t-shirt',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Multi', 'Blue', 'Pink'],
    category: 'Tie-Dye',
  },
  {
    id: 8,
    name: 'Athletic Performance Tee',
    price: 32.99,
    image:
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
    description: 'Moisture-wicking athletic t-shirt',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Red'],
    category: 'Athletic',
  },
  {
    id: 9,
    name: 'V-Neck Sweater',
    price: 39.99,
    image:
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop',
    description: 'Classic v-neck sweater for layering',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Gray', 'Navy', 'Cream'],
    category: 'Sweater',
  },
  {
    id: 10,
    name: 'Crop Top Tee',
    price: 18.99,
    image:
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop',
    description: 'Trendy crop top t-shirt',
    sizes: ['S', 'M', 'L'],
    colors: ['White', 'Black', 'Pink'],
    category: 'Crop Top',
  },
  {
    id: 11,
    name: 'Flannel Shirt',
    price: 44.99,
    image:
      'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&h=400&fit=crop',
    description: 'Classic flannel shirt for casual wear',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Red', 'Blue', 'Green'],
    category: 'Flannel',
  },
  {
    id: 12,
    name: 'Tank Top',
    price: 16.99,
    image:
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop',
    description: 'Comfortable cotton tank top',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Gray'],
    category: 'Tank',
  },
  {
    id: 13,
    name: 'Baseball Tee',
    price: 23.99,
    image:
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a5af?w=400&h=400&fit=crop',
    description: 'Classic baseball-style t-shirt',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Navy', 'Red'],
    category: 'Baseball',
  },
  {
    id: 14,
    name: 'Oversized T-Shirt',
    price: 21.99,
    image:
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop',
    description: 'Comfortable oversized fit t-shirt',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Gray'],
    category: 'Oversized',
  },
  {
    id: 15,
    name: 'Long Sleeve Graphic Tee',
    price: 28.99,
    image:
      'https://images.unsplash.com/photo-1583743814966-8936f37f0a7d?w=400&h=400&fit=crop',
    description: 'Long sleeve t-shirt with graphic print',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Navy'],
    category: 'Long Sleeve',
  },
  {
    id: 16,
    name: 'Ribbed Tank Top',
    price: 19.99,
    image:
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
    description: 'Stylish ribbed tank top',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Beige'],
    category: 'Tank',
  },
  {
    id: 17,
    name: 'Pocket Tee',
    price: 20.99,
    image:
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop',
    description: 'Classic t-shirt with chest pocket',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Navy', 'Gray'],
    category: 'Basic',
  },
  {
    id: 18,
    name: 'Muscle Tee',
    price: 17.99,
    image:
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop',
    description: 'Sleeveless muscle tee for workouts',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Gray'],
    category: 'Muscle',
  },
  {
    id: 19,
    name: 'Distressed Tee',
    price: 25.99,
    image:
      'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&h=400&fit=crop',
    description: 'Vintage-style distressed t-shirt',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Gray', 'White'],
    category: 'Distressed',
  },
  {
    id: 20,
    name: 'High Neck Tank',
    price: 18.99,
    image:
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop',
    description: 'Elegant high neck tank top',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Navy'],
    category: 'Tank',
  },
  {
    id: 21,
    name: 'Rugby Shirt',
    price: 42.99,
    image:
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a5af?w=400&h=400&fit=crop',
    description: 'Classic rugby shirt with collar',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Navy', 'Red', 'Green'],
    category: 'Rugby',
  },
  {
    id: 22,
    name: 'Crew Neck Sweater',
    price: 45.99,
    image:
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop',
    description: 'Warm crew neck sweater',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Gray', 'Navy', 'Cream'],
    category: 'Sweater',
  },
  {
    id: 23,
    name: 'Sleeveless Hoodie',
    price: 35.99,
    image:
      'https://images.unsplash.com/photo-1583743814966-8936f37f0a7d?w=400&h=400&fit=crop',
    description: 'Sleeveless hoodie for layering',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Gray', 'Navy'],
    category: 'Hoodie',
  },
  {
    id: 24,
    name: 'Mock Neck Tee',
    price: 24.99,
    image:
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
    description: 'Stylish mock neck t-shirt',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Navy'],
    category: 'Mock Neck',
  },
  {
    id: 25,
    name: 'Off-Shoulder Tee',
    price: 22.99,
    image:
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop',
    description: 'Trendy off-shoulder t-shirt',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Pink'],
    category: 'Off-Shoulder',
  },
  {
    id: 26,
    name: 'Thermal Long Sleeve',
    price: 31.99,
    image:
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop',
    description: 'Warm thermal long sleeve shirt',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Gray', 'Navy', 'White'],
    category: 'Thermal',
  },
  {
    id: 27,
    name: 'Racerback Tank',
    price: 17.99,
    image:
      'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&h=400&fit=crop',
    description: 'Athletic racerback tank top',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Gray'],
    category: 'Tank',
  },
  {
    id: 28,
    name: 'Boat Neck Tee',
    price: 23.99,
    image:
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop',
    description: 'Elegant boat neck t-shirt',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Navy'],
    category: 'Boat Neck',
  },
  {
    id: 29,
    name: 'Cropped Hoodie',
    price: 38.99,
    image:
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a5af?w=400&h=400&fit=crop',
    description: 'Trendy cropped hoodie',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Gray', 'Pink'],
    category: 'Hoodie',
  },
  {
    id: 30,
    name: 'Wrap Top',
    price: 27.99,
    image:
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop',
    description: 'Stylish wrap-style top',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Navy'],
    category: 'Wrap',
  },
];
