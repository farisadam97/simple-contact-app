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
const LoginComponent = () => {
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
              <form>
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
