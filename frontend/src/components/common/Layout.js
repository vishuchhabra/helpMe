import React,{useState,useEffect} from 'react'
import  PostCard  from './PostCard'
import  Navigation from './Navigation'
import {Link , Router} from 'react-router-dom'


// Styles
import '../../styles/app.css'

// Import the images
import twitter from '../../images/twitter.svg'
import facebook from '../../images/facebook.svg'
import avatar from '../../images/avatar.svg'
import rss from '../../images/rss.svg'
import logo from '../../images/logo.svg'
import cover from '../../images/blog-cover.jpg'
import image from '../../images/images.png'
import Jumbo from './Jumbo'
import Bottom from './Bottom'
import Header from './Header'



// Returning layout
const Layout = () => {


    // Returning Part
    return (
      
        <div>
            
            <header>
                <body className={"bodyClass"} />
            </header>
            <div className={"viewport"}>

                <Header/>
                <Jumbo/>
                <Bottom/>
            </div>
            </div>
    )
}




export default Layout