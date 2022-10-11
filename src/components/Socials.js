import React from 'react'

const Socials = ({ socialsData }) => {
  return (
    <a href={socialsData.link}>
        <i className={socialsData.icon}></i>
    </a>
  )
}

export default Socials