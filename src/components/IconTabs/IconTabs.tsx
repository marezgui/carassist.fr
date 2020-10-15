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
  border-radius: 8px;
  width: fit-content;
  margin: auto;
  border: 2px solid #FFF;
  position: relative;
  padding: 2px;
`;

const StyledTabs = styled(Tabs)`
  .indicator {
    background-image: linear-gradient(72deg, #0033cc 0%, #005bff 100%);
    height: 6px;
    max-width: 50%;
    border-radius: 12px;
  }
`;

const StyledTab = styled(Tab).attrs({
  classes: {
    selected: "selected",
  },
})`
  border-radius: 8px;

  &.selected {
    svg {
      path {
        fill: #000;
      }
    }
  }

  z-index: 1;
`;

const ProgressBar = styled('div')`
    background: rgba(32, 34, 73, 0.1);
    border-radius: 12px;
    height: 3px;
    width: calc(100% - 5px);
    position: absolute;
    bottom: 4px;
    left: 3px;
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
    <StyledPaper elevation={2} square>
      <ProgressBar />
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
