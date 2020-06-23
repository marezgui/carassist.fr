import React from 'react';
import Hero from '../../Hero/Hero';
import NavBar from '../../NavBar/NavBar';
import styled from 'styled-components';
import Fab from '../../Fab/Fab';
import { Container } from '@material-ui/core'

const PageContent = styled(Container)`
  max-width: 984px;
`;

const Page = (props: any) => {
    const { children, pageTitle } = props;

    return (
      <>
        <NavBar />
        <Hero pageTitle={pageTitle}/>
        <Fab />
        <PageContent disableGutters>
          {children}
        </PageContent>
      </>
    );
};

export default Page;
