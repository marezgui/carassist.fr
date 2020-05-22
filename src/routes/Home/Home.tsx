import React from 'react';
import styled from 'styled-components';
import PageLayout from '../../components/Layout/Page/Page';
import LeafletMap from '../../components/LeafletMap/LeafletMap';
import { Paper } from '@material-ui/core';
import { Container, Row, Col } from 'react-bootstrap';

const StyledPaper = styled(Paper)`
  margin: auto;
`;

const Location = styled(Container)`
  margin-top: 24px;
`;

const Adress = styled.div`

`;

const Home = () => {
    return (
      <PageLayout pageTitle="Accueil">
          <Location>
            <Row md="2" xs="1">
              <Col>
                <Paper>
                  <LeafletMap />
                </Paper>
              </Col>

              <Col>
                <Adress>
                  <h2> Adresse </h2>
                  <p style={{ display: "flex", flexDirection: "column" }}>
                    <span> 49 RUE DE PONTHIEU </span>
                    <span> 75008 Paris </span>
                  </p>
                </Adress>
              </Col>
            </Row>
          </Location>
      </PageLayout>
    );
};

export default Home;
