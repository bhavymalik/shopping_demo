import React, { useState, useEffect } from 'react';
import './card.css'

export default function Card(props) {
    const [imageIndex, setImageIndex] = useState(0);
    const [hovered, setHovered] = useState(false);

    let badgeText= `AVAILABLE`;

    const images = [props.obj.image, ...props.obj.additional_images];
    const imageUrl = images[imageIndex];

    const handleClick = () => {
        window.open(props.obj.product_url, '_blank');
    };


    useEffect(() => {
        let timer;
        if (hovered) {
            timer = setInterval(() => {
                setImageIndex(prevIndex => (prevIndex + 1) % images.length);
            }, 1000); // Change image every 1 second
        }
        return () => clearInterval(timer);
    }, [hovered, images.length]);

    return (
        <div 
            className="card" 
            onMouseEnter={() => setHovered(true)} 
            onMouseLeave={() => setHovered(false)}
        >
            <img src={imageUrl} alt="" className="card-photo" onClick={handleClick} />
            {badgeText && <button className="btn">{badgeText}</button>}
            {props.obj.price_available && <p className='card-price'><b>From {props.obj.currency} {props.obj.price}</b></p>}
            <i className="fa fa-shopping-cart" ></i>
            <p className='card-title'>{props.obj.product_title}</p>
            <p className='card-description'>{props.obj.description}</p>
        </div>
    );
}
