import React from 'react';
import {Link} from 'react-router-dom';
import data from '../data';

function AuthorDetails(props) {
    console.log(props.match.params.id);
    const product = data.products.find(x => x._id === props.match.params.id);
    return <div> 

<div className = "back-to-home">
         <Link to = "/">Back to Home</Link>
        </div>
    
        <div className = "author-name">
        <h1>{product.author}</h1>
        </div>

        <div className = "author-bio">
           <h2> Author's bio: </h2>
        <p>
        {product.author} {product.authordescript} 
        </p>
        </div>

       <div className = "author-list">
       <h2>Similar books</h2>
         {/* 
        <h2>Other books by {product.author}</h2>
         */} 
       </div>
        <div className = "book-list" />
        
        
        <ul>

        
        {data.products.filter(product => product.author).map(filteredProduct => (
            <li>
            <h3>{filteredProduct.name}</h3>
            </li>
        ))}
        

        
        </ul>
         
        
        
       
        
    </div>
}

export default AuthorDetails;