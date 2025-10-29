import { Product } from "../models/product";

export const ProductsData: Product[] = [
    // Electronics Category
    {
        id: '1',
        name: 'Wireless Bluetooth Headphones',
        description: 'Premium noise-cancelling headphones with 30-hour battery life and superior sound quality.',
        price: 199.99,
        imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
        rating: 4.5,
        reviewCount: 324,
        inStock: true,
        category: 'Electronics'
    },
    {
        id: '2',
        name: 'Smart Watch Pro',
        description: 'Advanced fitness tracking smartwatch with heart rate monitor and GPS functionality.',
        price: 349.99,
        imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
        rating: 4.7,
        reviewCount: 189,
        inStock: true,
        category: 'Electronics'
    },
    {
        id: '3',
        name: 'Portable Power Bank',
        description: '20000mAh fast-charging power bank with USB-C and wireless charging capabilities.',
        price: 49.99,
        imageUrl: 'https://images.unsplash.com/photo-1609091838251-7b8c0e9030e9?w=400&h=400&fit=crop',
        rating: 4.3,
        reviewCount: 567,
        inStock: true,
        category: 'Electronics'
    },
    {
        id: '4',
        name: 'Wireless Mouse',
        description: 'Ergonomic wireless mouse with precision tracking and long battery life.',
        price: 29.99,
        imageUrl: 'https://images.unsplash.com/photo-1615663245857-ac93cc7bc866?w=400&h=400&fit=crop',
        rating: 4.4,
        reviewCount: 892,
        inStock: true,
        category: 'Electronics'
    },
    // Clothing Category
    {
        id: '5',
        name: 'Classic Denim Jacket',
        description: 'Vintage-style denim jacket made from premium cotton denim with a relaxed fit.',
        price: 79.99,
        imageUrl: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop',
        rating: 4.6,
        reviewCount: 203,
        inStock: true,
        category: 'Clothing'
    },
    {
        id: '6',
        name: 'Cotton T-Shirt Pack',
        description: 'Pack of 3 premium cotton t-shirts in assorted colors, perfect for everyday wear.',
        price: 39.99,
        imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
        rating: 4.5,
        reviewCount: 445,
        inStock: true,
        category: 'Clothing'
    },
    {
        id: '7',
        name: 'Running Sneakers',
        description: 'Lightweight running shoes with cushioned sole and breathable mesh upper.',
        price: 119.99,
        imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
        rating: 4.7,
        reviewCount: 678,
        inStock: true,
        category: 'Clothing'
    },
    {
        id: '8',
        name: 'Wool Winter Scarf',
        description: 'Soft and warm wool scarf perfect for cold weather, available in multiple colors.',
        price: 24.99,
        imageUrl: 'https://images.unsplash.com/photo-1591047134859-66d855d2c86a?w=400&h=400&fit=crop',
        rating: 4.4,
        reviewCount: 156,
        inStock: false,
        category: 'Clothing'
    },
    // Books Category
    {
        id: '9',
        name: 'The Art of Programming',
        description: 'Comprehensive guide to software development and programming best practices.',
        price: 49.99,
        imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop',
        rating: 4.8,
        reviewCount: 312,
        inStock: true,
        category: 'Books'
    },
    {
        id: '10',
        name: 'Mystery Novel Collection',
        description: 'Bestselling mystery thriller series with three gripping novels in one volume.',
        price: 34.99,
        imageUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=400&fit=crop',
        rating: 4.6,
        reviewCount: 289,
        inStock: true,
        category: 'Books'
    },
    {
        id: '11',
        name: 'Science Fiction Classics',
        description: 'Collection of timeless science fiction stories from acclaimed authors.',
        price: 29.99,
        imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=400&fit=crop',
        rating: 4.7,
        reviewCount: 423,
        inStock: true,
        category: 'Books'
    },
    {
        id: '12',
        name: 'Cookbook: Italian Cuisine',
        description: 'Authentic Italian recipes with beautiful photography and step-by-step instructions.',
        price: 39.99,
        imageUrl: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=400&fit=crop',
        rating: 4.5,
        reviewCount: 198,
        inStock: true,
        category: 'Books'
    },
    // Home & Garden Category
    {
        id: '13',
        name: 'Indoor Plant Set',
        description: 'Set of 3 low-maintenance indoor plants perfect for home decoration.',
        price: 59.99,
        imageUrl: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop',
        rating: 4.6,
        reviewCount: 267,
        inStock: true,
        category: 'Home & Garden'
    },
    {
        id: '14',
        name: 'Ceramic Coffee Mug Set',
        description: 'Set of 4 handcrafted ceramic mugs with elegant design, dishwasher safe.',
        price: 34.99,
        imageUrl: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=400&fit=crop',
        rating: 4.4,
        reviewCount: 512,
        inStock: true,
        category: 'Home & Garden'
    },
    {
        id: '15',
        name: 'LED Desk Lamp',
        description: 'Adjustable LED desk lamp with multiple brightness levels and color temperature control.',
        price: 45.99,
        imageUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop',
        rating: 4.5,
        reviewCount: 389,
        inStock: true,
        category: 'Home & Garden'
    },
    {
        id: '16',
        name: 'Decorative Throw Pillows',
        description: 'Set of 2 premium decorative throw pillows with removable covers for easy cleaning.',
        price: 29.99,
        imageUrl: 'https://images.unsplash.com/photo-1584100936595-294468e74c90?w=400&h=400&fit=crop',
        rating: 4.3,
        reviewCount: 234,
        inStock: true,
        category: 'Home & Garden'
    }
]