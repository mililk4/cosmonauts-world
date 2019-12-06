/* eslint-disable react/button-has-type */
import React from 'react';

const cleanUrl = (item) => item
  .toLowerCase()
  .split(' ')
  .join('-');

const showTags = (projectCategories, setCategory, displayCategory) => projectCategories.map((category) => (
  <button
    key={category}
    className={`block mr-2 tags ${cleanUrl(category)} ${category === displayCategory ? 'selected' : ''}`}
    onClick={() => setCategory(category)}
  >
    {category}

    <style jsx scoped>
      {`
        button:focus {
          outline: 0;
        }

        .tags {
          border-radius: 0.3rem;
          padding: 0.5rem;
          line-height: 1.3;
          display: inline-block;
        }

        .selected {
          color: #0070f3;
          background: rgba(58,139,187,0.15);
          transition: all .3s ease-in-out;
        }
      `}
    </style>
  </button>
));

export default showTags;