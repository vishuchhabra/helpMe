import React from 'react'
import PropTypes from 'prop-types'
import {Link,Router} from 'react-router-dom'

// Define the component
const Navigation = () => (
    <>
        <Link className={"site-nav-item"} to="/" >Home</Link>    
        <a className={"site-nav-item"} href={"https://forms.gle/4RnBU1SfmVkMmRg86"} target={"_blank"}  >Contact Us</a>
    </>
)



export default  Navigation
