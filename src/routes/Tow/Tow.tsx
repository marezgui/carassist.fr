import React, { useState } from "react";
import PageLayout from "../../components/templates/Page/Page";
import styled from 'styled-components';
import SearchBox from '../../components/SearchBox/SearchBox'
import { Paper, Button } from "@material-ui/core";
import { Container } from 'react-bootstrap';

const Main = styled('div')`
  margin-top: 24px
`;

const Tow = () => {
  return (
    <PageLayout pageTitle="Dépannage Auto">
      <Main>
        <Container>
            <Paper style={{ padding: '24px'}}>
              <SearchBox />
            </Paper>
        </Container>
      </Main>
    </PageLayout>
  );
};

export default Tow;