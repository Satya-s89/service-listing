import React from 'react'

const ServiceCard = (data) => {
  return (
    <>
    <h1>Service title: {data.title}</h1>
    <p>Description: {data.description}</p>
    </>
  )
}

export default ServiceCard