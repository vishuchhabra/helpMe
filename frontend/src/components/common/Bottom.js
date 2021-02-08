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


export default function Bottom() {
    return (
        <div>
            <div className="viewport-bottom">
                    {/* The footer at the very bottom of the screen */}
                    <footer className="site-foot">
                        <div className="site-foot-nav container">
                            <div className="site-foot-nav-left">
                                <Link to="/">helpMe</Link> © 2021 &mdash; Published By Vishu and Anshu
                            </div>
                            <div className="site-foot-nav-right">
                                <Navigation navClass="site-foot-nav-item" />
                            </div>
                        </div>
                    </footer>

                </div>
        </div>
    )
}
