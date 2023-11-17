import React, {useEffect, useState} from 'react'
import './conkers.css';
import Chestnut from './Chestnut.png';
import LoserChestnut from './Loser-chestnut.png';

const Conkers = () => {

    const [isFlipping, setIsFlipping] = useState(false);
    const [result, setResult] = useState('');
    const [player1Name, setPlayer1Name] = useState('');
    const [player2Name, setPlayer2Name] = useState('');
    const [isRotating, setIsRotating] = useState(false);

    const phrases = [
      "Bloody Hell, that was a close one!",
      "You’ve conked a clanger",
      "That’s a cheeky conk",
      "This conk really takes the Biscuit",
      "Blimey Guvn’a",
      "What a jolly good show",
      "That was just tickity-boo",
      "Poppycock!",
      "Please Mind the Gap",
      "I say!",
      "Keep Calm and Carry on",
      "Hi-Ho, ol chap!"];

    useEffect(() => {
      let animationTimeout;
  
      if (isFlipping) {
        // Simulate a coin flip with a timeout
        animationTimeout = setTimeout(() => {
          const randomResult = Math.random() < 0.5 ? player1Name : player2Name;
          setResult(randomResult);
          setIsRotating(false);
          setIsFlipping(false);
        }, 2000); // Adjust the duration as needed
      }
  
      return () => clearTimeout(animationTimeout);
    }, [isFlipping, player1Name, player2Name, isRotating]);
  
    const handleFlipClick = () => {
        setIsRotating(true);
        setIsFlipping(true);
    };
  
    return (
      <div className="coin-flip-container">
        <div className="left-side">
        <h1 className="title">LETS PLAY COOOOONKKKKEERRRSSS</h1>
        <h2>Enter Contestants</h2>
        <div className="name-inputs">
            <label className='name-label'>
            Conktestant 1:
            <input
            type="text"
            value={player1Name}
            onChange={(e) => setPlayer1Name(e.target.value)}
            />
            <p>Welcome, {player1Name}</p>
            </label>
            <img className={`chestnut-image ${isRotating ? 'rotateLeft' : ''}`} src={result === player1Name || result === '' ? Chestnut : LoserChestnut} alt='conker'/>
            <img className={`chestnut-image ${isRotating ? 'rotateRight' : ''}`} src={result === player2Name || result === '' ? Chestnut : LoserChestnut} alt='conker'/>
            <label className='name-label'>
                Conktestant 2:
                <input
                type="text"
                value={player2Name}
                onChange={(e) => setPlayer2Name(e.target.value)}
                />
            </label>
        </div>
        <button className='flip-button' onClick={handleFlipClick} disabled={isFlipping}>
          {isFlipping ? 'Conkering...' : "LET'S CONK"}
        </button>

        </div>
        <div className="right-side">
          {result && (
            <div className='result-container'>
              <h2 className="result">Result:</h2>
              <p className="result">{!isRotating && result}</p>
            </div>
          )}
          <div className="phrases">{!isRotating && result && phrases[(Math.floor(Math.random() * phrases.length))]}</div>
        </div>
      </div>
    );
  };
  
  //https://www.youtube.com/watch?v=XEAMLWKY9ck
  export default Conkers;
  
  
  