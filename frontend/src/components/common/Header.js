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



function Header() {
    return (
        <div>
             <div className={"viewport-top"}>
                    {/* The main header section on top of the screen */}
                    <header className={"site-head"} style={{ backgroundImage: `url(${cover})` } }>
                        <div className={"container"}>
                            <div className={"site-mast"}>
                                
                                <div className={"site-mast-left"}>
                                 
                                    <img className={"site-logo"} src={image} />
                                </div>
                              
                                <div className={"site-mast-right"}>
                                    {  <a href={"https://twitter.com/vishuchhabra10"} className={"site-nav-item"} target="_blank" rel="noopener noreferrer"><img src={twitter} className={"site-nav-icon"}  alt="Twitter" /></a>}
                                    { <a href={"https://www.facebook.com/vishu.chhabra.543/"} className={"site-nav-item"} target="_blank" rel="noopener noreferrer"><img className={"site-nav-icon"} src={facebook} alt="Facebook" /></a>}
                                    <a className={"site-nav-item"} href={"https://vishuchhabra.github.io/"} target="_blank" rel="noopener noreferrer"><img className={"site-nav-icon"} src={rss}alt="RSS Feed" /></a>
                                </div>
                            </div>
                            { true ?
                                <div className={"site-banner"}>
                                    <h1 className={"site-banner-title"}>helpMe</h1>
                                    <p className={"site-banner-desc"}> <i>&mdash; We Are Serving For Society </i> </p>
                                </div> :
                                null}
                            <nav className={"site-nav"}>
                                <div className={"site-nav-left"}>
                                    <Navigation  navClass="site-nav-item" />
                                </div>
                                <div className={"site-nav-right"}>
                                    <Link className="site-nav-button" to="/about">About</Link>
                                </div>
                            </nav>
                        </div>
                    </header>

                  



                </div>
            
        </div>
    )
}

export default Header
