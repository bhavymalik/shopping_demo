import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Content from './components/content';
//import {HushhButton} from "hushh-button"
//import { getUserData, getAllUsers, HushhButton } from 'hushh-button-sdk';
import HushhButton from "hushh-button-sdk"


function App() {

  const questionsArray = [
    {
      question: "What are your plans for today?",
      options: ["Our products", "Our team", "Get recruited at Hushh", "Partner with us"],
      answer: ""
    },
    {
      question: "What explains you the best?",
      options: ["User", "Agent", "Brand representative", "Fellow Developer", "Applicant"],
      answer: ""
    },
    {
      question: "What product you want to explore first?",
      options: ["Hushh Button (This very thing :)", "Hushh Wallet App", "Hushh For Students", "Browser Companion", "Vibe Search", "Concierge App", "Valet Chat", "Hushh Developer APIs"],
      answer: ""
    }
  ]

  return (
    <div className="App">
      <Navbar/>
    <Content/>
    <HushhButton questions={questionsArray}/>
    </div>
  );
}

export default App;
