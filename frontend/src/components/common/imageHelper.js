import React from 'react'
import '../../styles/app.css'
import {API} from '../../backend'

// Fetching the Image
const ImageHelper = ({product}) =>{
    const imageurl = product ?  `http://localhost:4001/api/product/photo/${product._id}`: `https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`
    
    return (
        <div >
            {imageurl &&
            <div className="post-card-image" 
            >
            <img src={imageurl} alt="" style={{"width":"100%",height:"100%"}}/>    
            </div>}
       </div>
    )
}

export default ImageHelper 