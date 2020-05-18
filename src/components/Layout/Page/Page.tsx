import React from 'react';
import Hero from '../../Hero/Hero';
import NavBar from '../../NavBar/NavBar';
import styled from 'styled-components';
import Fab from '../../Fab/Fab';

const PageContent = styled.div`

`;

const Page = (props: any) => {
    const { children, pageTitle } = props;

    return (
      <>
        <NavBar />
        <Hero pageTitle={pageTitle}/>
        <Fab />
        <PageContent>
          {children}
        </PageContent>
      </>
    );
};

export default Page;
