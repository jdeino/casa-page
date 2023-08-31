import React, { useState } from 'react';
import './app.css';
import Header from './components/header';
import Feed from './components/feed';
import Body from './components/body';
import Footer from './components/footer';
import SearchBar from './components/searchbar';
import PostPrompt from './components/postprompt'; 

function App() {
  const [isPromptOpen, setIsPromptOpen] = useState(false);

  const openPrompt = () => {
    console.log('Opening prompt'); 
    setIsPromptOpen(true);
  };

  const closePrompt = () => {
    console.log('Closing prompt'); 
    setIsPromptOpen(false);
  };

  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Feed />
      <Body />
      <Footer />

      {/* Button to open the Create New Post prompt */}
      <button onClick={openPrompt}>Create New Post</button>

      {/* Conditionally render the CreatePostPrompt */}
      {isPromptOpen && <PostPrompt onClose={closePrompt} />}
    </div>
  );
}

export default App;
