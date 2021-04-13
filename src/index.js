import React, { createFactory } from 'react'
import reactDom from 'react-dom'
import './index.css'

// stateless functional component
//always returns jsx

// function Greeting(){
    //   return <h1>Hello react developers</h1>
    
    // }

const firstBook = {
    img: "https://images.pexels.com/photos/7175547/pexels-photo-7175547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    author: "Anthony Doerr",
    title: "All the Light We Cannot See",
    }

    // const title = "All the Light We Cannot See";
    // const author = "Anthony Doerr";
    // const img = "https://images.pexels.com/photos/7175547/pexels-photo-7175547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
    
    function BookList () {
        return <section className="booklist" >
            <Book job="developer" img={firstBook.img} author={firstBook.author} titile={firstBook.title}/>
            <Book titile="Random title" price={12} />
</section>
    
}

const Book = (props) => {
    console.log(props);
    return <article className="book">
         <img src={props.img} width="200px" height="200px" alt="" />
        {/* <img src={img} width="200px" height="200px" alt="" /> */}
        <h4>{props.author}</h4>
        <p>{props.job}</p>
        <p>{props.titile} {props.price}</p>
        {/* {console.log(props)} */}
    </article>;
};

reactDom.render(<BookList/>, document.getElementById('root'));