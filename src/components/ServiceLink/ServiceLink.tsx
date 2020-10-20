import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const StyledCard = styled(Link)`
    cursor: pointer;
    width: 230px;
    min-height: 90px;
    border-radius: 16px;
    border: 1px solid rgb(216, 216, 216);
    margin: 6px;
    :hover {
        background-color: rgba(32, 34, 73, 0.05);
        text-decoration: none;
        color: inherit;
    }
    transition: 0.2s ease;
    position: relative;
    display: flex;
    padding: 16px 24px 16px 14px;
    color: #253b56;
`;

const StyledIconContainer = styled("div")`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-right: 25px;
`;

const StyledText = styled("div")`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    & > h2 {
        font-size: 16px;
        font-weight: 900;
        margin-bottom: 8px;
    }
    & > p {
        font-size: 12px;
        overflow-wrap: break-word;
        margin-bottom: 0;
    }
`;

interface Props {
    link: string,
    icon: any,
    title: string,
    description: string
}

const ServiceLink = (props: Props) => {
    const {link, icon, title, description} = props;
    return (
        <StyledCard to={link}>
            <StyledIconContainer>
                {icon}
            </StyledIconContainer>
            <StyledText >
                <h2>{title}</h2>
                <p>{description}</p>
            </StyledText>
        </StyledCard>
    );
};

export default ServiceLink;
