import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Card from './card';
import Navbar from './navbar'
import data from './data_Armani';
import watch from './data_watches'
import jewel from './data_chanel'
import cream from './data_skin_care'
import bag from './data_prada'
import furniture from './data_IKEA'


export default function Catalog() {
    const [cards, setCards] = useState([]);
    const [watches, setWatches] = useState([]);
    const [jewellery, setJewellery] = useState([]);
    const [creams, setCreams] = useState([]);
    const [bags, setBags] = useState([]);
    const [furnitures, setFurnitures] = useState([]);



    const { itemName } = useParams();



    useEffect(() => {
        setCards(data.map(obj => <Card key={obj.id} obj={obj} setCards={setCards} />));
        setWatches(watch.map(obj => <Card key={obj.id} obj={obj} setCards={setCards} />));
        setJewellery(jewel.map(obj => <Card key={obj.id} obj={obj} setCards={setCards} />));
        setCreams(cream.map(obj => <Card key={obj.id} obj={obj} setCards={setCards} />));
        setBags(bag.map(obj => <Card key={obj.id} obj={obj} setCards={setCards} />));
        setFurnitures(furniture.map(obj => <Card key={obj.id} obj={obj} setCards={setCards} />));
    }, []); // Empty dependency array ensures this runs once on mount

    const renderCards = () => {
        switch (itemName) {
            case "Watches":
                return watches;
            case "Shirts":
                return cards;
            case "Jewellery":
                return jewellery;
            case "Skin Care":
                return creams;
            case "Bags":
                return bags;
            case "Housing":
                return furnitures;
            default:
                return cards;
        }
    };

    // name: 'Watches', color: '#211B6D' },
    // { name: 'Shirts', color: '#6B216F' },
    // { name: 'footWear', color: '#710543' },
    // { name: 'Trousers', color: '#211B6D' },
    // { name: 'Purse', color: '#6B216F' },
    // { name: 'Cologne

    return (
        <div>
        <Navbar/>
        <div className="card-grid">
        {renderCards()} 
        </div>
        </div>
    );
}
