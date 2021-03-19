import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import InfoGarage from "../../components/InfoGarage/InfoGarage";
import Hero from "../../components/Hero/Hero";
import Fab from "../../atoms/Fab/Fab";
import ImgFrontGarage from '../../components/ImgFrontGarage/ImgFrontGarage';
import classes from "./Garage.module.css";
import FbLogo from '../../components/LogoSocialNetwork/facebook.svg';
import LogoSocialNetwork from '../../components/LogoSocialNetwork/LogoSocialNetwork';
import { fbURL,instaURL } from '../../components/LogoSocialNetwork/URLs';
import InstaLogo from '../../components/LogoSocialNetwork/instagram.svg';
import CardServiceSlider from '../../components/CardServiceSlider/CardServiceSlider';

const garage = () => {
  return (
    <div style={{ height: "100%" }}>
        <NavBar />
        <Hero pageTitle="Garage" />
        <Fab />
        <LogoSocialNetwork src={FbLogo} alt='Fb Logo' href={fbURL} socialNetwork={'facebook'}/>
        <LogoSocialNetwork src={InstaLogo} alt='Insta Logo' href={instaURL} socialNetwork={'instagram'}/>

        <div className={classes.InfoFrontImg}>
            <InfoGarage />
            <ImgFrontGarage />
        </div>

        <CardServiceSlider />
    </div>
  );
};

export default garage;
