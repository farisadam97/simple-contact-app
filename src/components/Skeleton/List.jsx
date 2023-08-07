import {
  Skeleton,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
const SkeletonList = () => {
  return (
    <>
      <ListItem
        alignItems="flex-start"
        sx={{
          borderBlock: "1px solid #e0e0e0",
        }}
      >
        <ListItemAvatar>
          <Skeleton
            animation="wave"
            variant="circular"
            width={48}
            height={48}
          />
        </ListItemAvatar>
        <ListItemText
          primary={
            <>
              <Skeleton
                animation="wave"
                variant="text"
                sx={{ fontSize: "1.5rem" }}
              />
            </>
          }
          secondary={
            <>
              <Skeleton
                animation="wave"
                variant="text"
                sx={{ fontSize: "1rem" }}
              />
            </>
          }
        />
      </ListItem>
      <ListItem
        alignItems="flex-start"
        sx={{
          borderBlock: "1px solid #e0e0e0",
        }}
      >
        <ListItemAvatar>
          <Skeleton
            animation="wave"
            variant="circular"
            width={48}
            height={48}
          />
        </ListItemAvatar>
        <ListItemText
          primary={
            <>
              <Skeleton
                animation="wave"
                variant="text"
                sx={{ fontSize: "1.5rem" }}
              />
            </>
          }
          secondary={
            <>
              <Skeleton
                animation="wave"
                variant="text"
                sx={{ fontSize: "1rem" }}
              />
            </>
          }
        />
      </ListItem>
      <ListItem
        alignItems="flex-start"
        sx={{
          borderBlock: "1px solid #e0e0e0",
        }}
      >
        <ListItemAvatar>
          <Skeleton
            animation="wave"
            variant="circular"
            width={48}
            height={48}
          />
        </ListItemAvatar>
        <ListItemText
          primary={
            <>
              <Skeleton
                animation="wave"
                variant="text"
                sx={{ fontSize: "1.5rem" }}
              />
            </>
          }
          secondary={
            <>
              <Skeleton
                animation="wave"
                variant="text"
                sx={{ fontSize: "1rem" }}
              />
            </>
          }
        />
      </ListItem>
      <ListItem
        alignItems="flex-start"
        sx={{
          borderBlock: "1px solid #e0e0e0",
        }}
      >
        <ListItemAvatar>
          <Skeleton
            animation="wave"
            variant="circular"
            width={48}
            height={48}
          />
        </ListItemAvatar>
        <ListItemText
          primary={
            <>
              <Skeleton
                animation="wave"
                variant="text"
                sx={{ fontSize: "1.5rem" }}
              />
            </>
          }
          secondary={
            <>
              <Skeleton
                animation="wave"
                variant="text"
                sx={{ fontSize: "1rem" }}
              />
            </>
          }
        />
      </ListItem>
    </>
  );
};

export default SkeletonList;
