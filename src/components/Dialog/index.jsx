import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";

const DialogComponent = (props) => {
  const { open, onClickPrimary, onClickSecondary, title, content, children } =
    props;
  return (
    <Dialog
      open={open}
      onClose={onClickSecondary}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="xs"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {content || children}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClickSecondary}>Cancel</Button>
        <Button onClick={onClickPrimary}>Confirm</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogComponent;
