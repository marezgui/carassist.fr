import React from 'react';
import styled from 'styled-components';
import PageLayout from '../../components/Layout/Page/Page';
import { Paper } from '@material-ui/core';
import { Container, Row, Col } from 'react-bootstrap';
import Maps from '../../components/Map/Map';

const Location = styled(Container)`
  margin-top: 24px;
`;

const StyledPaper = styled(Paper)`
  height: 10rem
`;

const Address = styled.div``;

const Home = () => {
    return (
      <PageLayout pageTitle="Accueil">
        <Location>
          <Row md="2" xs="1">
            <Col>
              <StyledPaper>
                <Maps />
              </StyledPaper>
            </Col>

            <Col>
              <Address>
                <h2> Adresse </h2>
                <p style={{ display: "flex", flexDirection: "column" }}>
                  <span> 49 RUE DE PONTHIEU </span>
                  <span> 75008 Paris </span>
                </p>
              </Address>
            </Col>
          </Row>
        </Location>
      </PageLayout>
    );
};

export default Home;
