import { Alert, AlertTitle, Stack } from "@mui/material";
const AlertComponent = (props) => {
  const { type, title, content } = props;
  return (
    <Alert severity={type}>
      <AlertTitle>{title}</AlertTitle>
      {content}
    </Alert>
  );
};

export default AlertComponent;
