import React from 'react';
import Hero from '../../Hero/Hero';
import NavBar from '../../NavBar/NavBar';
import styled from 'styled-components';

const PageContent = styled.div`

`;

const Page = (props: any) => {
    const { children, pageTitle } = props;

    return (
      <>
        <NavBar />
        <Hero pageTitle={pageTitle}/>
        <PageContent>
          {children}
        </PageContent>
      </>
    );
};

export default Page;
