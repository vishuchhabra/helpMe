import React,{useState,useEffect} from 'react'
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
import {API} from '../../backend'
import ImageHelper2 from './imageHelper2'
import Loader from 'react-loader-spinner'


export default function Page({match}) {

    // make the dyanamic products
    const [product, setProduct] = useState({});

    const [loading,setLoading] = useState(false)

    // hit the api
    const getProduct = () =>{
        return fetch(`${API}/product/${match.params.id}`,{
            method:"GET"
        }).then (res =>{
                console.log(res)
                return res.json()
        }).catch(err => console.log(err))
    } 
    const preload = (productId) => {
        getProduct().then(data => {
            data.createdAt = data.createdAt.slice(0,10)
            data.categoryName = data.category.name
            setLoading(true)
            setProduct(data)
            
          }
        );
    }

    // assign values to data
    useEffect(() => {
        preload(match.params.productId);
    }, []);


    return (
        
      <div>
          { !loading ?
          <div style={{textAlign:"center",marginTop:"300px"}} >
              <Loader color="black"/>
          </div> :
            <div className={"viewport1"}>
            <header  className={"site-head"}  >
                        <div className={"container"}>
                            <div className={"site-mast"}>
                                <div className={"site-mast-left"}>
                                 <Link to="/">
                                    <img className={"site-logo"} src={image} />
                                    </Link>
                                </div>
                                <div className={"site-mast-right"}>
                                    {  <a href={"https://twitter.com/vishuchhabra10"} className={"site-nav-item"} target="_blank" rel="noopener noreferrer"><img src={twitter} className={"site-nav-icon"}  alt="Twitter" /></a>}
                                    { <a href={"https://www.facebook.com/vishu.chhabra.543/"} className={"site-nav-item"} target="_blank" rel="noopener noreferrer"><img className={"site-nav-icon"} src={facebook} alt="Facebook" /></a>}
                                    <a className={"site-nav-item"} href={"https://vishuchhabra.github.io/"} target="_blank" rel="noopener noreferrer"><img className={"site-nav-icon"} src={rss}alt="RSS Feed" /></a>
                                </div>
                            </div>
                       
             
                        </div>
            </header>
    
    
    
            {/* Lower Part  */}
                    <div className="container" style={{"marginTop":"0px"}}>
                        <article className="content">
    
                            <section
                                className="content-body load-external-scripts"
                                style={{"text-align":"center" ,paddingBottom:"0px" ,paddingTop:"40px",fontSize:"30px"}}
                                
                            > <b> Hola peeps, This is {product.name}</b></section>
                            
                                <br/><br/>
                                <div style={{"textAlign":"center"}}>
                               <ImageHelper2 id={match.params.id}/>
                               
                                </div>
                            
                            
                            <section
                                className="content-body load-external-scripts"
                                style={{"text-align":"justify" ,paddingBottom:"0px" ,paddingTop:"40px"}}
                                
                            ><b>Description:</b>  {product.description} </section>
                            <br/>
                            <section  className="content-body load-external-scripts" > <b> Address:</b>  {product.address} </section>
                            <br/>
                            <section  className="content-body load-external-scripts" ><b> Category: </b> {product.categoryName} </section>
                            <br/>
                            <section  className="content-body load-external-scripts" ><b>Amount Donated Till Now: </b>  ₹{product.amountDonated}/- </section>
                            <br/>
                            <section  className="content-body load-external-scripts" ><b> Post Created At:</b> {product.createdAt} </section>
                            <br/>
                            <section  className="content-body load-external-scripts" ><b> Donate Here:</b> </section>
                            <br/>
                            <input type="number" name="" id="" placeholder="Enter Amount"/>
                            <br/>
                            <br/>
                            <button style={{"color":"white",backgroundColor:"black" ,display: "inline-block", padding: "10px 20px"}}>Donate</button>
                            <section  className="content-body load-external-scripts" style={{"textAlign":"right"}}>&mdash;helpMe</section>
                        </article>
                    </div>
    
              <Bottom/>
      </div>
          
          }
      </div>
    )
}
