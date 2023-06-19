import { useEffect, useState } from "react";
import { getGifs } from "./GetGifs";

export const GifGrid = ( { category }) => {   
    
    const [images, setimages] = useState([]);

    const getImages = async() => {
        const newImages = await
        getGifs( category );
        setimages( newImages)
    }

    useEffect( () => {
        getImages();
    }, [ ])


    return (
        <>
            <h3>{ category }</h3>
            
            <ol>
            { 
                images.map( ({id,title}) => (                
                    <li key={id}>{title}</li>
                ))
            }
            </ol>
            
        </>
  )
}
