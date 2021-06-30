import React from 'react'
import ReactDom from 'react-dom'
import './index.css'


// ----------------------  SECOND WAY ------------------------ //

// const firstBook = {
//   img: 'https://images.pexels.com/photos/1289845/pexels-photo-1289845.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//   altText: 'Eliphant',
//   title: 'The Picture of Eliphant',
//   author: 'Emilie Robertson'
// }

// const secondBook = {
//   img: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
//   altText: 'Photo',
//   title: 'Take Photo',
//   author: 'John Doe'
// }


// function BookList () {
//   return (
//     <section className='bookList'>
//       <Book 
//         img={firstBook.img} 
//         altText={firstBook.altText}
//         title={firstBook.title}
//         author={firstBook.author}
//       />
        
//       <Book 
//         img={secondBook.img} 
//         altText={secondBook.altText}
//         title={secondBook.title}
//         author={secondBook.author}
//       />
//     </section>
//   ) 
// }



// const Book = (props) => {
//   const {img, altText, title, author} = props
//   return (
//     <article className='book'>
//         <img 
//           src={img}
//           alt={altText}
//          />
//         <h3>{title}</h3>
//         <h6>{author}</h6>
//     </article>
//   )
// }
// --------------------------  SECOND WAY -------------------------- //


function BookList () {
  return (
    <section className='bookList'>
      <Book 
        img='https://images.pexels.com/photos/1289845/pexels-photo-1289845.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        altText = 'Eliphant'
        title = 'The Picture of Eliphant'
        author = 'Emilie Robertson'
      > 
      {/* Children Props */}
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero molestias quo commodi. Optio doloremque, ad esse minus veniam laborum dicta?</p>
      
      </Book> // we need close
        
      <Book 
        img='https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'
        altText = 'Photo'
        title = 'Take Photo'
        author = 'John Doe'
      />
    </section>
  ) 
}

const Book = (props) => {
  const { img, altText, title, author } = props
  return (
    <article className='book'>
        <img 
          src={props.img}
          alt={props.altText}
         />
        <h3>{props.title}</h3>
        <h6>{props.author}</h6>
        {props.children} // children props
    </article>
  )
}

ReactDom.render(
  <BookList />, document.getElementById('root')
)
