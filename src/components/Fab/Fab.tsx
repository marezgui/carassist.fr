import React from "react";
import { Button } from 'react-bootstrap';
import CallIcon from "@material-ui/icons/Call";
import styled from 'styled-components';
import { mediaBreakpointUpSm } from "../../theme/breakpoints";

const FabContainer = styled.div.attrs({
  className: "position-fixed fixed-bottom d-flex justify-content-start",
})``;

const SyledButton = styled(Button).attrs({
  className: "ml-md-4 mb-md-4 ml-3 mb-3 d-flex justify-content-center align-items-center shadow"
})`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-image: linear-gradient(72deg, #0033cc 0%, #005bff 100%);
  border: 2px solid white;
  color: #fff;

  ${mediaBreakpointUpSm`
    width: auto;
    border-radius: 20px;
    height: 40px;
    padding: 8px 12px;
  `}
`;

const PhoneNumber = styled.span`
  display: none;

  ${mediaBreakpointUpSm`
    display: block;
  `}
`;

const Fab = () => {
  return (
    <FabContainer>
      <SyledButton
        href="tel:+33766485866"
      >
        <CallIcon />
        <PhoneNumber> 07 66 48 58 66 </PhoneNumber>
      </SyledButton>
    </FabContainer>
  );
}

export default Fab;
