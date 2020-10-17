import React from 'react';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';
import ServiceLink from '../ServiceLink/ServiceLink';

import rentIcon from './rentIcon.svg';
import towIcon from './towIcon.svg';
import garageIcon from './garageIcon.svg';


const StyledPaper = styled(Paper)`
    margin: auto;
    max-width: 984px;
    min-height: 200px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 32px;
    border-radius: 16px;
    margin-top: -60px;
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 8px 24px;
`;

const Wrapper = styled('div')`
    padding-left: 32px;
    padding-right: 32px;
`;

const LinksContainer = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 820px) {
        flex-direction: column;
    }
    padding-top: 12px;
    padding-bottom: 20px;
`; 

const StyledTitle = styled("div")`
    & > h1 {
        text-align: center;
        padding: 8px 1px;
        font-size: 18px;
        color: rgb(0, 70, 234);
        text-transform: uppercase;
        font-weight: 900;
    }
`;

const ProgressBar = styled('div')`
    background: rgba(32, 34, 73, 0.1);
    border-radius: 12px;
    height: 3px;
    position: relative;
    width: 230px;
    & > span {
        background-image: linear-gradient(72deg, #0033cc 0%, #005bff 100%);
        width: 150px;
        height: 6px;
        left: 40px;
        border-radius: 12px;
        position: absolute;
        top: -2px;
    }
`;

const servicesLinks = () => {
    return (
        <Wrapper>
            <StyledPaper>
                <StyledTitle>
                    <h1>Services</h1>
                    <ProgressBar>
                        <span />
                    </ProgressBar>
                </StyledTitle>

                <LinksContainer>
                    <ServiceLink
                        icon={rentIcon}
                        link="/location"
                        alt="icon de location"
                        title="Location"
                        description="Louez des véhicules de prestige ou des utilitaires."
                    />

                    <ServiceLink
                        icon={towIcon}
                        link="/depannage"
                        alt="icon de depannage"
                        title="Dépannage"
                        description="Estimer le coût de votre remorquage grâce à notre outils en ligne."
                    />

                    <ServiceLink
                        icon={garageIcon}
                        link="/garage"
                        alt="icon de garage"
                        title="Garage"
                        description="Découvrez notre garage et nos prestations."
                    />
                </LinksContainer>
            </StyledPaper>
        </Wrapper>
    );
};

export default servicesLinks;
