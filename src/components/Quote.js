import React from 'react';

const Quote = ({ text, author }) => {
  return (
    <div id="text">
      <blockquote>
        <p>{text}</p>
      </blockquote>
      <div id="author">- {author}</div>
    </div>
  );
};

export default Quote;
