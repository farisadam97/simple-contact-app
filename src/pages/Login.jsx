import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import {
  Container,
  Card,
  CardContent,
  Typography,
  TextField,
  Box,
  Button,
  Grid,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { login } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";
const LoginComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const methods = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
    setValue,
    watch,
  } = methods;

  const handleLogin = async (data) => {
    dispatch(login({ username: "admin" }));
    console.log("login succesfull");
    navigate("/");
  };

  return (
    <Container sx={{ height: "100vh", display: "flex", width: "100%" }}>
      <Card
        sx={{
          width: "100vw",
          height: "480px",
          marginBlockStart: "40%",
          boxShadow: "none",
          background: "none",
        }}
      >
        <CardContent sx={{ textAlign: "center" }}>
          <h1>Login</h1>
          <Box>
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(handleLogin)}>
                <Grid container>
                  <Grid item xs={12}>
                    <Typography variant="h6" align="left">
                      Username
                    </Typography>
                    <TextField
                      {...register("username", {
                        required: "Username is required",
                      })}
                      error={!!errors.username}
                      helperText={errors.username?.message}
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h6" align="left">
                      Password
                    </Typography>
                    <TextField
                      {...register("password", {
                        required: "Password is required",
                      })}
                      error={!!errors.password}
                      helperText={errors.password?.message}
                      variant="outlined"
                      type="password"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      fullWidth
                      sx={{ marginBlock: "16px", paddingBlock: "8px" }}
                      variant="contained"
                      type="submit"
                      disabled={isSubmitting || !isDirty}
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </FormProvider>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default LoginComponent;
