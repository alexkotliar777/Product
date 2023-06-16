import React, { useEffect, useState } from 'react'
import css from './Product.module.css'
import Loader from '../Loader/Loader';

export default function Product() {
    const [product,setProduct] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const BASE_URL = "https://api.escuelajs.co";
    useEffect(()=> {
        const fetchDate = async () => {
            try{
                setLoading(true)
                const date = await fetch(`${BASE_URL}/api/v1/products/34`);
                const response = await date.json()
                setLoading(false)
                setProduct(response)
            }catch(err){
                setLoading(false)
                setError("Ничего не пришло")
            }
        };
        fetchDate();
    },[])

    const { title , price, description, images } = product;

  return (
    <>
    {loading === true ?( <Loader/> ): (error ? <div>Error</div> : <div>
        <h2>{title}</h2>
        <img src={images} alt={title} />
        <p>Price: {price}</p>
        <p>{description}</p>
    </div>)}
    </>
  )
}
