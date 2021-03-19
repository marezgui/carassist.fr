import React from 'react'
import classes from './ImgFrontGarage.module.css'

const img = 'https://firebasestorage.googleapis.com/v0/b/car-assist-278209.appspot.com/o/garage%2Ffront-garage.jpeg?alt=media&token=be91538d-c3f7-4cb5-ba01-4988032c629d'

const imgFrontGarage = (props) => {
  return (
    <img src={img} alt='garage' className={classes.ImgFrontGarage} />
  )
}

export default imgFrontGarage
