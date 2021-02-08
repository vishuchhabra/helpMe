import React,{useState,useEffect} from 'react'
import  PostCard  from './PostCard'
import  Navigation from './Navigation'
import {Link , Router} from 'react-router-dom'
import {API} from '../../backend'


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
import Bottom from './Bottom'

function Jumbo() {

    // Products
    const [products ,setProducts] = useState([])
    const [error ,setError]= useState(false)
    // All Prodcuts
    const getProducts = () =>{
        return fetch(`${API}/products`,{
            method:"GET"
        }).then (res =>{
                console.log(res)
                return res.json()
        }).catch(err => console.log(err))
    }
    const loadAllProduct = ()=>{
        getProducts().then(
            data =>{
            if(data.error){
                setError(data.error)
    
            }
            else{
                setProducts(data)
            }
            }
        )
    }
    //  Use Effect
    useEffect(()=>{
            loadAllProduct()
    },[])
        

    return (
        <div>
                <main className="site-main">
                    <div className="container">
                        <section className="post-feed">
                            {products.map((post) => (
                                <PostCard key={post.id} post={post} />
                            ))}
                        </section>
                        
                    </div>
                        
                </main>
            
        </div>
    )
}

export default Jumbo


