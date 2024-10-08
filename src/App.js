import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Content from './components/content';
import HushhButton from "hushh-button-sdk";

function App() {
    const [searchTerm, setSearchTerm] = useState("");

    const questionsArray = [
        {
            question: "What are your plans for today?",
            options: ["Our products", "Our team", "Get recruited at Hushh", "Partner with us"],
            answer: ""
        },
        // More questions...
    ];

    return (
        <div className="App">
            <Navbar onSearch={setSearchTerm} />
            <Content searchTerm={searchTerm} />
            <HushhButton questions={questionsArray} redirect_url={"http://localhost:3000/"} />
        </div>
    );
}

export default App;
