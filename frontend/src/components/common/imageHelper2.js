import React from 'react'
import '../../styles/app.css'
import {API} from '../../backend'

// Fetching the Image
const ImageHelper = ({id}) =>{
    const imageurl = id ?  `${API}/product/photo/${id}`: `https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`
    
    return (
        <div >
            <img style={{marginLeft:"auto",marginRight:"auto",width:"50%",borderStyle:"solid",borderColor:"black",borderWidth:"1px"}}  src={imageurl} alt={"this"}/>
       </div>
    )
}

export default ImageHelper 