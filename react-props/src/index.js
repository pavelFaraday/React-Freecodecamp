import React from 'react'
import ReactDom from 'react-dom'
import './index.css'


// ----------------------  SECOND WAY ------------------------ //
const books = [
  {
    id: 1,
    img: 'https://images.pexels.com/photos/1289845/pexels-photo-1289845.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    altText: 'Eliphant',
    title: 'The Picture of Eliphant',
    author: 'Emilie Robertson'
  }, 
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
    altText: 'Photo',
    title: 'Take Photo',
    author: 'John Doe'
  }
]

function BookList () {
  return (
    <section className='bookList'>
      {books.map(book => {                                    
        return (
          <Book key={book.id} {...book}/>
        )
      })}
    </section>
  ) 
}

const Book = (props) => {
  const {img, altText, title, author} = props
  return (
    <article className='book'>
        <img 
          src={img}
          alt={altText}
         />
        <h3>{title}</h3>
        <h6>{author}</h6>
    </article>
  )
}


ReactDom.render(
  <BookList />, document.getElementById('root')
)
