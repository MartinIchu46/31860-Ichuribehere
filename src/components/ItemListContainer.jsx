import { useEffect, useState } from "react";
import {cars as carsData} from "../data/item";
import itemList from "./itemList";

const ItemListContainer = ({greeting}) => {

  const [cars, setCars] = useState([])

  useEffect(() => {
    console.log(carsData);
    
    const getCars = new Promise( (resolve, reject)=>{
        setTimeout(() =>{
            resolve(carsData)
        },2000)

        
    })

    getCars.then( (result) => {
        console.log("se completo la promesa", result)
        setCars(result)
    })
        
  }, [])

  return (
    <div>{greeting}, Bienvenido a este Ecommerce sobre el Hobby del coleccionismo de Autos a Escala
      {cars.map( car => <itemList key={car.id} carData={car}/> )} 
    </div>
    
      
    
  )
}

export default ItemListContainer