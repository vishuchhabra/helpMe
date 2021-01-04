import React,{useEffect,useState} from "react";
import { API } from "../backend";
import Card from "./Card/Card";


const getProducts = () =>{
    return fetch(`${API}/products`,{
        method:"GET"
    }).then (res =>{
          console.log(res)
          return res.json()
    }).catch(err => console.log(err))
}


export default function Home() {

  const [products ,setProducts] = useState([])
  const [error ,setError]= useState(false)

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

useEffect(()=>{
     loadAllProduct()
  },[])

    

  return (

      <div className="row text-center">
        <div className="col-12 text-center">
       </div>
       <div className="row">
         {products.map((product, index)=>{
             console.log(product)
           return(
             <div key={index} className="col-lg-4 mb-4 mt-4">
              <Card product={product}/>
             </div>
           )
         })}
       </div>
      </div>
  );
}
