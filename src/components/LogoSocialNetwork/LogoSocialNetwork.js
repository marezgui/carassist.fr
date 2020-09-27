import React from 'react';
import classes from './LogoSocialNetwork.module.css';

const logoSocialNetwork = (props) => {
    let classesLogoSocialNetwork = [];
    classesLogoSocialNetwork.push(classes.LogoSocialNetwork);

    switch(props.socialNetwork){
        case('facebook'):
            classesLogoSocialNetwork.push(classes.Fb);
            break;
        case('instagram'):
            classesLogoSocialNetwork.push(classes.Insta);
            break;
    }

    return (
        <a  href={props.href}
            target="_blank">
            <img className={classesLogoSocialNetwork.join(' ')} src={props.src} alt={props.alt} />
        </a>
    );
};

export default logoSocialNetwork;
