import React from 'react'
import classes from './LogoSocialNetwork.module.css'

const logoSocialNetwork = (props) => {
  const classesLogoSocialNetwork = []
  classesLogoSocialNetwork.push(classes.LogoSocialNetwork)

  switch (props.socialNetwork) {
    case ('facebook'):
      classesLogoSocialNetwork.push(classes.Fb)
      break
    case ('instagram'):
      classesLogoSocialNetwork.push(classes.Insta)
      break
  }

  return (
    <a
      href={props.href}
      target='_blank'
      rel='noreferrer'
    >
      <img className={classesLogoSocialNetwork.join(' ')} src={props.src} alt={props.alt} />
    </a>
  )
}

export default logoSocialNetwork
