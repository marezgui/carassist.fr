import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Logo from '../Icons/Logo';
import Truck from "../Icons/Truck";
import styled from "styled-components";

interface Props {
  className?: string,
  onTabsChangeCallback: any
}

const StyledPaper = styled(Paper)`
  border-radius: 32px;
  width: fit-content;
  margin: auto;
  border: 2px solid #FFF;
`;

const StyledTabs = styled(Tabs)`
  .indicator {
    background-image: linear-gradient(72deg, #0033cc 0%, #005bff 100%);
    height: 100%;
    border-radius: 32px;
  }
`;

const StyledTab = styled(Tab).attrs({
  classes: {
    selected: "selected",
  },
})`
  border-radius: 32px;

  &.selected {
    svg {
      path {
        fill: #fff;
      }
    }
  }

  z-index: 1;
`;

export default function IconTabs(props: Props) {
  const { onTabsChangeCallback } = props;
  const defaultValue = 'car'
  const [value, setValue] = React.useState(defaultValue);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
    onTabsChangeCallback(newValue);
  };

  return (
    <StyledPaper elevation={8} square>
      <StyledTabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        aria-label="icon tabs example"
        classes={{ indicator: "indicator" }}
      >
        <StyledTab value='car' icon={<Logo />} aria-label="phone" />
        <StyledTab value='truck' icon={<Truck />} aria-label="favorite" />
      </StyledTabs>
    </StyledPaper>
  );
}
