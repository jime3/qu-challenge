import classes from "./Planet.module.css";
import {
  Button,
  Card,
  CardContent,
  Typography,
  CardActions,
  Divider,
  Stack,
  Box,
  Modal,
} from "@mui/material";
import * as React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Planet = ({
  name,
  climate,
  diameter,
  rotation_period,
  orbital_period,
  gravity,
}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Card>
        <CardContent style={{ backgroundColor: "#6c6b98" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="h3"
            color="white"
            sx={{ fontWeight: "bold" }}
          >
            {name}
          </Typography>
          <Divider light={true} variant="middle" />

          <Stack
            direction="row"
            spacing={2}
            style={{
              marginTop: 30,
              marginBottom: 30,
              justifyContent: "center",
            }}
          >
            <Typography
              gutterBottom
              component="h4"
              color="white"
              sx={{ marginTop: "20px" }}
            >
              Diameter: {diameter}
            </Typography>
            <Typography
              gutterBottom
              component="h4"
              color="white"
              sx={{ marginTop: "20px" }}
            >
              Climate: {climate}
            </Typography>
          </Stack>
        </CardContent>
        <Divider />
        <CardActions style={{ display: "flex", justifyContent: "center" }}>
          <Button size="small" onClick={handleOpen}>
            Read more
          </Button>
        </CardActions>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Details
          </Typography>
          <Divider />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Rotatio period: {rotation_period}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Orbital period: {orbital_period}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Gravity: {gravity}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default Planet;
