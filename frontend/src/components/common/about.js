import React from 'react'
import '../../styles/app.css'
import Navigation from './Navigation'
import Layout from './Layout'
import Header from './Header'
import Bottom from './Bottom'

// Import the images
import twitter from '../../images/twitter.svg'
import facebook from '../../images/facebook.svg'
import avatar from '../../images/avatar.svg'
import rss from '../../images/rss.svg'
import logo from '../../images/logo.svg'
import cover from '../../images/blog-cover.jpg'
import image from '../../images/images.png'
import { Link } from 'react-router-dom'

export default function about() {
    return (
      <div className={"viewport"}>
                           
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
                                    <p className={"site-banner-desc"}> <i>&mdash; About Us </i> </p>
                                </div> :
                                null}
                            <nav className={"site-nav"}>
                                <div className={"site-nav-left"}>
                                    <Navigation  navClass="site-nav-item" />
                                </div>
                                {/* <div className={"site-nav-right"}>
                                    <Link className="site-nav-button" to="/about">About</Link>
                                </div> */}
                            </nav>
                        </div>
            </header>
                    <div className="container">
                        <article className="content">

                            {/* The main page content */}
                            <section
                                className="content-body load-external-scripts"
                                style={{"text-align":"justify" ,paddingBottom:"px" ,paddingTop:"40px"}}
                                
                            >We are collecting data from the persons who are in an immediate need of help which can be created due to any reason and will help them financially. 
                            We are collecting personal data related to their problem which includes their name, description, age, image regarding problem, bank ifsc code, account holder name, 
                            account number, guardian's name, contact number, alternative contact number and will create a post regarding that and publish that on our website: helpMe and visitors of our website 
                            will read about them and can donate to the needy as much as they want. They can donate from ₹1 to any amount they desire and we will credit that amount to the needy's account.
                            The total amount donated till now to the needy will be shown on our website and will be constantly updated as soon as payment is completed by the user/visitor of our website.</section>
                            <section  className="content-body load-external-scripts" style={{"textAlign":"right"}}>&mdash;helpMe</section>
                        </article>
                    </div>

            <Bottom/>
      </div>
      
    )
}
