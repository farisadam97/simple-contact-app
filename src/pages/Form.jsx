import { useLocation, useNavigate } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import {
  TextField,
  Button,
  Container,
  Grid,
  Typography,
  Avatar,
  Select,
  MenuItem,
} from "@mui/material";
import { postContact } from "../api/contact";
const Form = () => {
  const match = useLocation();
  const navigate = useNavigate();
  const avatarImages = [
    "https://thypix.com/wp-content/uploads/2021/11/sponge-bob-profile-picture-thypix-52-700x628.jpg",
    "https://thypix.com/wp-content/uploads/2021/11/sponge-bob-profile-picture-thypix-124-680x700.jpg",
    "https://thypix.com/wp-content/uploads/2021/11/sponge-bob-profile-picture-thypix-122-655x700.jpg",
    "https://thypix.com/wp-content/uploads/2021/11/sponge-bob-profile-picture-thypix-106-700x627.jpg",
  ];
  const methods = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      age: "",
      photo:
        "https://thypix.com/wp-content/uploads/2021/11/sponge-bob-profile-picture-thypix-106-700x627.jpg",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = methods;

  const onSubmit = async (data) => {
    console.log(data);
    postContact(data)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <FormProvider {...methods}>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Grid container rowSpacing={3} justifyContent="center">
          <Grid item xs={"auto"}>
            <Avatar
              alt="Remy Sharp"
              src={watch("photo")}
              sx={{ width: 120, height: 120 }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">Select Image</Typography>
            <Select
              fullWidth
              {...register("photo", {
                required: "Please select an image",
              })}
              value={watch("photo")}
            >
              {avatarImages.map((image, index) => (
                <MenuItem key={index} value={image}>
                  {image}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">First Name</Typography>
            <TextField
              {...register("firstName", {
                required: "First Name is required",
                maxLength: {
                  value: 20,
                  message: "First Name must not exceed 20 characters",
                },
              })}
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">Last Name</Typography>
            <TextField
              {...register("lastName", {
                required: "Last Name is required",
                maxLength: {
                  value: 20,
                  message: "Last Name must not exceed 20 characters",
                },
              })}
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">Age</Typography>
            <TextField
              type="number"
              {...register("age", {
                required: "Age is required",
                min: {
                  value: 1,
                  message: "Age must be at least 1",
                },
              })}
              error={!!errors.age}
              helperText={errors.age?.message}
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>

        <Container
          disableGutters
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            paddingBlock: 4,
          }}
        >
          <Button fullWidth sx={{ marginBlock: "3px" }} variant="outlined">
            Cancel
          </Button>
          <Button
            fullWidth
            sx={{ marginBlock: "3px" }}
            variant="contained"
            type="submit"
          >
            Submit
          </Button>
        </Container>
      </form>
    </FormProvider>
  );
};

export default Form;
