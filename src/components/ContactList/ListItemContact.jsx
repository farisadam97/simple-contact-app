import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
} from "@mui/material";

const ListItemContact = (prop) => {
  const { data } = prop;
  const name = `${data.firstName} ${data.lastName}`;
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar
          alt=""
          sx={{
            width: 48,
            height: 48,
            marginRight: 2,
            border: "2px solid #263238",
          }}
          src={
            data.photo ||
            "https://thypix.com/wp-content/uploads/2021/11/sponge-bob-profile-picture-thypix-52-700x628.jpg"
          }
        />
      </ListItemAvatar>
      <ListItemText
        primary={
          <>
            <Typography
              component="span"
              variant="h5"
              sx={{ fontWeight: "500" }}
            >
              {name}
            </Typography>
          </>
        }
        secondary={
          <>
            <Typography
              component="span"
              variant="body2"
              sx={{ color: "#263238" }}
            >
              17 years old
            </Typography>
          </>
        }
      />
    </ListItem>
  );
};

export default ListItemContact;
