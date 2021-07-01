import React from 'react';

const Book = (props) => {
    const {img, altText, title, author} = props
  
    const onclickHandler = () => {
      alert('I am Event');
    }
  
    const example = (author) => {
      console.log(author);
    } 
  
    return (
      <article 
        className='book' 
        onMouseOver={() => {
          console.log(title)
      }}>
          <img 
            src={img}
            alt={altText}
           />
          <h3>{title}</h3>
          <h6>{author}</h6>
          <button type='button' onClick={onclickHandler}>ClickMe</button>
          <button type='button' onClick={() => example(author)}>clickToo</button>
      </article>
    )
  }

  export default Book
  