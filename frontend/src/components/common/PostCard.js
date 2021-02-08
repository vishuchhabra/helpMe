import React from 'react'
import ImageHelper from './imageHelper'
import image from '../../images/images.png'
import {Link,Router} from 'react-router-dom'


// Define the component
const PostCard = ( {post} ) => {

    
    return (
    
        <div style={{"borderStyle":"solid","borderColor":"black","borderWidth":"1px",borderRadius:"20px" ,padding:"20px"}}>
            <Link to={`/${post._id}`} className={"post-card"}>
                <header className={"post-card-header"}>
                <ImageHelper  product={post}/>
                    {post.tags && <div className="post-card-tags"></div>}
                    {post.featured && <span>Featured</span>}
                    <h2 className="post-card-title">{post.name}</h2>
                </header>
                <section className={"post-card-excerpt"} style={{"textAlign":"justify"}}>{post.description}</section>
                <footer className={"post-card-footer"}>
                    <div className={"post-card-footer-left"}>
                        <div className={"post-card-avatar"}>
                            
                            <img className={"default-avatar"} src={image} alt={"this"}/>
                            
                        </div>
                        <span>helpMe</span>
                    </div>
                    <div className={"post-card-footer-right"}>
                        <div>Read more....</div>
                    </div>
                </footer> 
            </Link>
        </div>
    )
}

// Exporting the component
export default PostCard
