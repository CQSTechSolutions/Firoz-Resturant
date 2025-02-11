import React from 'react';
import products from '../data/products.json';
import Card from '../components/Card';

const Menu = () => {
    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Menu Header */}
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-bold text-[#7b1315] mb-2">OUR MENU</h2>
                    <p className="text-xl text-gray-600">Discover our delicious range of traditional farsan</p>
                </div>
                
                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {products.map(product => (
                        <Card key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Menu;