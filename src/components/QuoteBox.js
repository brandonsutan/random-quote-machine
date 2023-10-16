import React, { useState, useEffect } from 'react';

function QuoteBox() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  // Function to fetch a random quote
  const fetchRandomQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  // Fetch a random quote when the component mounts
  useEffect(() => {
    fetchRandomQuote();
  }, []);

  return (
    <div id="quote-box">
      <div id="text">{quote}</div>
      <div id="author">- {author}</div>
      <button id="new-quote" onClick={fetchRandomQuote}>
        New Quote
      </button>
      <a
        id="tweet-quote"
        href={`https://twitter.com/intent/tweet?text="${quote}" - ${author}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Tweet Quote
      </a>
    </div>
  );
}

export default QuoteBox;
