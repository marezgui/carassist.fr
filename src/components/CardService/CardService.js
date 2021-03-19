import React from 'react'
import classes from './CardService.module.css'

const cardService = (props) => {
  return (
    <div className={classes.CardService}>
      <div className={classes.Photo} style={{ backgroundImage: `url(${props.srcPhoto})` }}>
        <svg className={classes.TriangleLeft} height='50' width='150'>
          <polygon points='0,10 0,50 150,50 70,40 25,25' fill='white' />
        </svg>
        <svg className={classes.TriangleRight} height='50' width='150'>
          <polygon points='150,10 125,25 80,40 0,50 150,50' fill='white' />
        </svg>
      </div>
      <p style={{ fontWeight: 'bold', fontSize: '1.3em', color: 'black', textAlign: 'center', margin: '0' }}>
        {props.service}
      </p>
      <p style={{ fontSize: '1em', color: 'black', textAlign: 'center', marginTop: '5px', marginBottom: '8px' }}>
        {props.description}
      </p>
      <p className={classes.TextCircle}>
        {props.price + '€'}
      </p>
    </div>
  )
}

export default cardService
