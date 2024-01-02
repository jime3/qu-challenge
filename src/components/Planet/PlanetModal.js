import { Typography, Divider, Box } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "12px",
  boxShadow: 24,
  p: 4,
};

const PlanetModal = ({ rotation_period, orbital_period, gravity }) => {
  return (
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Details
      </Typography>
      <Divider />
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Rotation period: {rotation_period}
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Orbital period: {orbital_period}
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Gravity: {gravity}
      </Typography>
    </Box>
  );
};

export default PlanetModal;
