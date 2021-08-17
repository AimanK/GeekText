import React from 'react';
import data from '../data';
import {Link} from 'react-router-dom';

function FantasyScreen(props) {
    return  <ul className = "products">
    {
        data.products.filter(product => product.genre === 'Fantasy').map(product =>
    
    <li>
        <div className = "product">
    <Link to = {'/product/' + product._id}>
        <img className = "product-image" src = {product.image} alt = "product"/></Link>
            <div className = "product-name">
                <Link to = {'/product/' + product._id}>{product.name}</Link>
            </div>
            <div className = "product-brand">{product.author}</div>
            <div className = "product-price">${product.price}</div>
        <div className = "product-rating">{product.rating} Stars, ({product.numReviews} Reviews)</div>
        </div>
    </li>
    )
    } 

</ul>
}

export default FantasyScreen;