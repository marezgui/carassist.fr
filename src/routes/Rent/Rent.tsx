import React from "react";
import styled from 'styled-components';
import PageLayout from "../../components/templates/Page/Page";
import IconTabs from '../../components/IconTabs/IconTabs';
import CardList from '../../components/CardList/CardList';
import { cars } from './data';

const Main = styled.div`
  position: relative;
  top: -26px;
  z-index: 1;
`;

const Filters = styled.div`
`;

const { car, truck } = cars;

const Cars = () => {
  const defaultValue = 'car';
  const [type, setType] = React.useState(defaultValue);

  const onTabsChange = (newValue: string) => {
    setType(newValue);
  };

  return (
    <PageLayout pageTitle="Nos Véhicules">
      <Main>
        <Filters>
          <IconTabs onTabsChangeCallback={onTabsChange} />
        </Filters>

        <CardList data={type === 'car' ? car : truck} />
      </Main>
    </PageLayout>
  );
};

export default Cars;
