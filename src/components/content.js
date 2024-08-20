import React, { useState, useEffect } from "react";
import Card from './card';
import './content.css';
import './card.css';
import data from './data_Armani';
import watch from './data_watches';
import jewel from './data_chanel';
import cream from './data_skin_care';
import bag from './data_prada';
import furniture from './data_IKEA';

export default function Content({ searchTerm }) {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const allProducts = [...data, ...watch, ...jewel, ...cream, ...bag, ...furniture];

    const filteredProducts = allProducts.filter(product => {
        const titleWords = product.product_title.toLowerCase().split(/\s+/); // Split title into words
        const descriptionWords = product.description.toLowerCase().split(/\s+/); // Split description into words
        const searchLower = searchTerm.toLowerCase();

        // Check if any word in title or description is a substring of the search term or vice versa
        const matchesSearch = 
            titleWords.some(word => searchLower.includes(word)) ||
            descriptionWords.some(word => searchLower.includes(word)) ||
            titleWords.some(word => word.includes(searchLower)) ||
            descriptionWords.some(word => word.includes(searchLower));

        // Filter by selected category
        const matchesCategory = selectedCategory === "All" || 
            (selectedCategory === "Watches" && watch.includes(product)) ||
            (selectedCategory === "Shirts" && data.includes(product)) ||
            (selectedCategory === "Jewellery" && jewel.includes(product)) ||
            (selectedCategory === "Skin Care" && cream.includes(product)) ||
            (selectedCategory === "Bags" && bag.includes(product)) ||
            (selectedCategory === "Housing" && furniture.includes(product));

        return matchesSearch && matchesCategory;
    });

    useEffect(() => {
        if (searchTerm.trim() === "") {
            setSelectedCategory("All");
            return;
        }

        // Automatically select category if search term matches any product in a specific category
        const matchingProduct = allProducts.find(product =>
            product.product_title.toLowerCase().split(/\s+/).some(word => searchTerm.toLowerCase().includes(word)) || 
            product.description.toLowerCase().split(/\s+/).some(word => searchTerm.toLowerCase().includes(word)) || 
            searchTerm.toLowerCase().split(/\s+/).some(word => product.product_title.toLowerCase().includes(word)) ||
            searchTerm.toLowerCase().split(/\s+/).some(word => product.description.toLowerCase().includes(word))
        );

        if (matchingProduct) {
            if (watch.includes(matchingProduct)) setSelectedCategory("Watches");
            else if (data.includes(matchingProduct)) setSelectedCategory("Shirts");
            else if (jewel.includes(matchingProduct)) setSelectedCategory("Jewellery");
            else if (cream.includes(matchingProduct)) setSelectedCategory("Skin Care");
            else if (bag.includes(matchingProduct)) setSelectedCategory("Bags");
            else if (furniture.includes(matchingProduct)) setSelectedCategory("Housing");
        }
    }, [searchTerm]);

    const renderCards = () => {
        return filteredProducts.map((obj, index) => (
            <Card key={index} obj={obj} />
        ));
    };

    const categories = ["All", "Watches", "Shirts", "Jewellery", "Skin Care", "Bags", "Housing"];

    return (
        <div className="content-div">
            <div className="category-buttons">
                {categories.map(category => (
                    <button 
                        key={category} 
                        className={selectedCategory === category ? 'active' : ''}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="card-grid">
                {renderCards()}
            </div>
        </div>
    );
}
