import React from 'react'
import classes from './InfoGarage.module.css'
import TextGarage from './TextGarage/TextGarage'

const infoGarage = (props) => {
  return (
    <div className={classes.InfoGarage}>
      <TextGarage
        fontWeight='bold'
        fontSize='1.6em'
      >
        Garage CAR ASSIST
      </TextGarage>

      <TextGarage
        fontWeight='default'
        fontSize='1.2em'
      >
        Entretien-Réparation<br />
        Centre Pneumatique<br />
        Géométrie-Parallèlisme
      </TextGarage>

      <TextGarage
        fontWeight='bold'
        fontSize='1.3em'
      >
        10 Rue Jean-Dominique Fauré, 60160 Montataire
      </TextGarage>

      <TextGarage
        fontWeight='default'
        fontSize='1.1em'
      >
        Lundi-Samedi : 9h30-12h30,<br />
        14h-18h30
      </TextGarage>
    </div>
  )
}

export default infoGarage
