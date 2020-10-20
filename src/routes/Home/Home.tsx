import React from 'react';
import styled from 'styled-components';
import PageLayout from '../../components/Layout/Page/Page';
import { Paper, Grid } from '@material-ui/core';
import Maps from '../../components/Map/Map';
import ServicesLinks from '../../components/ServicesLinks/ServicesLinks';


const Location = styled(Grid)`
  margin-top: 24px;
  margin-bottom: 34px;
`;

const StyledPaper = styled(Paper)`
  height: 10rem
`;

const Address = styled.div``;

const Home = () => {
    return (
      <PageLayout pageTitle="Accueil">
        <ServicesLinks />
        <div style={{ padding: '8px' }}>
          <Location container spacing={2}>
              <Grid item xs={12} sm={6}>
                <StyledPaper>
                  <Maps />
                </StyledPaper>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Address>
                  <h2> Adresse </h2>
                  <p style={{ display: "flex", flexDirection: "column" }}>
                    <span> 10 Rue Jean-Dominique Fauré </span>
                    <span> 60160 Montataire </span>
                  </p>
                </Address>
              </Grid>
          </Location>
        </div>
      </PageLayout>
    );
};

export default Home;
