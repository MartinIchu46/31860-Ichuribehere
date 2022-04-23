const ConHijos = (props) => {
  return (
    <>
    <div style={{border: 'solid red 2px', margin: '20px'}}>
      <div>Inicia componente con children</div>
      {props.children}
      <div>Termina componente con children</div>
      
    </div>
      
    </>
    
  )
}

export default ConHijos