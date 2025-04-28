import React from 'react'

const ServiceCard = ({ title, description }) => {
  return (
    <>
      <h1>Service title: {title}</h1>
      <p>Description: {description}</p>
    </>
  )
}

export default ServiceCard