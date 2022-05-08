
import { useEffect, useState } from "react";
import {dogs as dogsData} from "../data/dogs";
import DogCard from "./DogCard";

const DogsContainer = () => {

  const [dogs, setDogs] = useState([])

  useEffect(() => {
    console.log(dogsData);
    
    const getDogs = new Promise( (resolve, reject)=>{
        setTimeout(() =>{
            resolve(dogsData)
        },2000)

        
    })

    getDogs.then( (result) => {
        console.log("se completo la promesa", result)
        setDogs(result)
    })
        
  }, [])
  
  
  return (
    <div>
        {dogs.map( dog => <DogCard key={dog.id} dogData={dog}/> )}
    </div>
  )
}

export default DogsContainer