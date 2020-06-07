import React from "react";
import CallIcon from "@material-ui/icons/Call";
import { Button } from "baseui/button";
import { styled } from "baseui";

const PhoneNumber = styled("span", ({ $theme }) => ({
  display: 'none',
  [$theme.mediaQuery.medium]: {
    display: 'block'
  }
}));

const Fab = () => {
  return (
    <Button
      $as="a"
      href="tel:+33766485866"
      $style={{ position: 'fixed', bottom: '4px', left: '4px', zIndex: 3 }}
    >
      <CallIcon />
      <PhoneNumber> 07 66 48 58 66 </PhoneNumber>
    </Button>
  );
}

export default Fab;
