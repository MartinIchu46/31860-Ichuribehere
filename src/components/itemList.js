import React from 'react'

const itemList = (carData) => {
  return (
    <div style={{ border: 'solid green 5px', margin: '10px', padding: '5px' }}>
        <strong>{carData.name}</strong>
        <div>{carData.breed}</div>
    </div>
  )
}

export default itemList