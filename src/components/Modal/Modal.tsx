import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { makeStyles } from '@material-ui/core/styles';
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CallIcon from "@material-ui/icons/Call";
import styled from 'styled-components';

const StyledButton = styled(Button)`
  width: auto;
  border-radius: 20px;
  height: 40px;
  padding: 8px 12px;
  background-image: linear-gradient(72deg, #0033cc 0%, #005bff 100%);
  color: #fff;
  &:hover {
    color: #fff;
  }
`;

const useStyles = makeStyles({
  paper: {
    // minWidth: '500px'
  }
});

const ScrollDialog = ({ open, onClose, title, children }: any) => {
  const classes = useStyles();
  const descriptionElementRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      classes={{ paper: classes.paper }}
      scroll="paper"
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <DialogTitle id="scroll-dialog-title" disableTypography>
        <h1 style={{ textAlign: 'center' }}> {title} </h1>
      </DialogTitle>
      <DialogContent>
        <DialogContentText
          id="scroll-dialog-description"
          ref={descriptionElementRef}
          tabIndex={-1}
        >
          {children}
        </DialogContentText>
      </DialogContent>

      <DialogActions style={{ boxShadow: 'rgba(9, 17, 41, 0.1) 0px -8px 16px 0px' }}>
        <Button onClick={onClose} style={{ color: 'rgb(0, 70, 228)' }}>
          Retour
        </Button>
        <StyledButton href="tel:+33766485866">
          <CallIcon />
          07 66 48 58 66
        </StyledButton>
      </DialogActions>
    </Dialog>
  );
};

ScrollDialog.defaultProps = {
  title: "Devis depannage",
  onClose: () => {},
};

export default ScrollDialog;
