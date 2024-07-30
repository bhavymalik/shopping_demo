import React from "react";
import { useNavigate } from "react-router-dom";
import './content.css';

// Import images
import diamondIcon from '../photos/diamond.png';

export default function Content() {
    const navigate = useNavigate();

    let items = [
        { name: 'Watches', color: '#211B6D', icon: diamondIcon },
        { name: 'Shirts', color: '#6B216F', icon: diamondIcon },
        { name: 'Jewellery', color: '#710543', icon: diamondIcon },
        { name: 'Skin Care', color: '#211B6D', icon: diamondIcon },
        { name: 'Bags', color: '#6B216F', icon: diamondIcon },
        { name: 'Housing', color: '#710543', icon: diamondIcon }
    ];

    const divitems = items.map(item => {
        return (
            <div 
                className="items" 
                key={item.name} 
                style={{ backgroundColor: item.color }}
                onClick={() => navigate(`/catalog/${item.name}`)}
            >
                <h1>{item.name}</h1>
            </div>
        );
    });

    return (
        <div className="content-div">
            <div className="items-grid">
                {divitems}
            </div>
        </div>
    );
}
