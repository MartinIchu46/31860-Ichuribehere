import { useState } from "react"

const Contador = () => {
    
   const [suma, setSuma] = useState(0)

   const onClickHandler = ()=> {console.log('click')
   setSuma( suma + 1)
}


  return (
    <div>
        <button onClick={onClickHandler} className="btn btn-active btn-primary">Click aqui!</button>
        {suma}
    </div>
  )
}

export default Contador