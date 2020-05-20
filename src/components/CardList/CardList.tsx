import React from 'react';
import styled from 'styled-components';
import Card from '../Card/Card';

interface Props {
    data?: object[] 
}

const Wrapper = styled.div`
  border: 1px red;
  margin-top: 24px;
  border: 1px solid;
`;

const isNotEmpty = (data: object[]) => {
    let obj = data[0];
    return Object.keys(obj).length !== 0;
};

const CardList = (props: Props) => {
    const { data } = props;

    return (
        <Wrapper>
            {data && isNotEmpty(data) && data?.map((vehicule: any) => {
                const { id, title, description, src } = vehicule;

                return <Card key={id} src={src} title={title} description={description} />;
            })}
        </Wrapper>
    );
};

export default CardList;
