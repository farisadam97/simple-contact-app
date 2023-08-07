import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import { MoreVertRounded } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ListItemContact = (prop) => {
  const { data, onDelete } = prop;
  const name = `${data.firstName} ${data.lastName}`;

  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <ListItem
      alignItems="flex-start"
      sx={{
        borderBlock: "1px solid #e0e0e0",
      }}
    >
      <ListItemAvatar>
        <Avatar
          alt=""
          sx={{
            width: 48,
            height: 48,
            marginRight: 2,
            border: "1px solid #263238",
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
              {name || "John Doe"}
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
              {data.age || 0} years old
            </Typography>
          </>
        }
      />
      <>
        <IconButton
          aria-label="more"
          id="menu-button"
          aria-controls={open ? "menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertRounded />
        </IconButton>
        <Menu
          id="menu"
          MenuListProps={{
            "aria-labelledby": "menu-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem key={"edit"} onClick={() => navigate(`/edit/${data.id}`)}>
            Edit
          </MenuItem>
          <MenuItem
            key={"Delete"}
            onClick={(event) => {
              event.preventDefault();
              onDelete(data.id);
            }}
          >
            Delete
          </MenuItem>
        </Menu>
      </>
    </ListItem>
  );
};

export default ListItemContact;
