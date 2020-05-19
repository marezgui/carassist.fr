import React from "react";
import styled from 'styled-components';
import PageLayout from "../../components/Layout/Page/Page";
import IconTabs from '../../components/IconTabs/IconTabs';

const Main = styled.div`
  position: relative;
  top: -26px;
  z-index: 1;
`;

const Filters = styled.div`
`;

const Cars = () => {
  return (
    <PageLayout pageTitle="Nos Véhicules">
      <Main>
        <Filters>
          <IconTabs />
        </Filters>
      </Main>
    </PageLayout>
  );
};

export default Cars;
