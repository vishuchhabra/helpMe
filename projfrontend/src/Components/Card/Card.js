import React from "react";
import "./Card.css";
import ImageHelper from "../image/imageHelper";

const  Card  =({product})=> {
  return (
    <div className="card">

      <ImageHelper  product={product}/>
      <p className="card__heading"><strong> Name</strong>: {product.name}</p>
      
      <p className="card__heading"><strong> Category</strong>: {product.category.name} </p> 
      <p className="card__description">
          {product.description}
      </p> 

      <p className="card__donation">
        <p className="donation__heading"> Amount Donated: </p> ${product.amountDonated} </p>

      {/* Add Donate Here Button and Date of the post */}
      <button className="btn  donate__here" type="submit">
        Donate Here
      </button>

      <p className="card__address">
        <span className="address__heading">Address: </span> {product.address}
      </p>

      <p className="post__date">
        <span className="post__date__heading">Last Edited On: </span>{product.updatedAt.substring(0,10)}
      </p>
    </div>
  );
}

export default Card;
