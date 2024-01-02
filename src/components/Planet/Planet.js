import {
  Button,
  Card,
  CardContent,
  Typography,
  CardActions,
  Divider,
  Stack,
  Modal,
} from "@mui/material";
import * as React from "react";
import PlanetModal from "./PlanetModal";

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
      <Modal open={open} onClose={handleClose}>
        <PlanetModal
          rotation_period={rotation_period}
          orbital_period={orbital_period}
          gravity={gravity}
        />
      </Modal>
    </>
  );
};

export default Planet;
