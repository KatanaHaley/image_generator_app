import Head from 'next/head';
import Image from 'next/image';
import buildspaceLogo from '../assets/buildspace-logo.png';
import { useState } from 'react';
import SiteMarquee from '../components/SiteMarquee';
// import Instagram from '../components/Instagram';

const Home = () => {
  const [userInput, setUserInput] = useState('');

  const onUserChangedText = (event) => {
    // console.log(event.target.value);
    setUserInput(event.target.value);
  };

  const [apiOutput, setApiOutput] = useState('')
const [isGenerating, setIsGenerating] = useState(false)

const callGenerateEndpoint = async () => {
  setIsGenerating(true);
  
  console.log("Calling OpenAI...")
  const response = await fetch('/api/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userInput }),
  });

  const data = await response.json();
  // console.log(data)
  const { output } = data;
  // console.log("OpenAI replied...", output.text)

  setApiOutput(`${output.text}`);
  setIsGenerating(false);
}

  return (
    <div className="root">
      <div className="container">
      <SiteMarquee />
      {/* <Instagram /> */}

        <div className="header">
          <div className="header-title">
            <h1>Sail or Fly Anywhere in the World at the Lowest Cost</h1>
          </div>
          <div className="header-subtitle">
            <h2>Find your dream vacation destination with the lowest cost</h2>
          </div>
        </div>
        <div className="prompt-container">
        <textarea
          className="prompt-box"
          placeholder="Type your destination to see your dream trip info"
          value={userInput}
          onChange={onUserChangedText}
        />;
        <div className="prompt-buttons">
          <a    
           className={isGenerating ? 'generate-button loading' : 'generate-button'}
           onClick={callGenerateEndpoint}>
            <div className="generate">
            {isGenerating ? <span className="loader"></span> : <p>Generate</p>}
            </div>
          </a>
        </div>
        {apiOutput && (
        <div className="output">
          <div className="output-header-container">
            <div className="output-header">
              <h3>Your Dream Vacation Plans:</h3>
            </div>
          </div>
          <div className="output-content">
            <p>{userInput}{apiOutput}</p>
          </div>
        </div>
      )}
        </div>
      </div>
      {/* <Instagram /> */}

    </div>
  );
};

export default Home;