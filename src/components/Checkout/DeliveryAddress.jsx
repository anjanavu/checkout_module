import React, { useState } from "react";
import {
  Typography,
  IconButton,
  DialogTitle,
  Box,
} from "@mui/material";
import { ReactComponent as VehicleIcon } from "../../assets/icons/VehicleIcon.svg";
import { ReactComponent as PlusIcon } from "../../assets/icons/PlusIcon.svg";
import CloseIcon from "@mui/icons-material/Close";
import {
  Dialog,
  DialogContent,
} from "@mui/material";
import Address from "../Address";
import StyledButton from "../../ui/StyledButton";
import Slide from "@mui/material/Slide";
import SelectAddress from "./SelectAddress";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const DeliveryAddress = ({handlePayment}) => {
  const [showSelectAddress, setshowSelectAddress] = useState(true); 
  const [openAddress, setOpenAddress] = useState(false);
  const handleOpenAddress = (mode) => {
    setOpenAddress(true);
  };

  const handleCloseAddress = () => {
    setOpenAddress(false);
  };
  const handleCloseDelivery = () => {
    setOpenAddress(false);
    setshowSelectAddress(false);
    handlePayment();
  };
  return (
    <div style={boxstyle}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          fontSize: ".875rem",
          lineHeight: "1rem",
          color: "#4d4d4d",
          marginBottom: "8px",
        }}
      >
        <VehicleIcon style={icon} />

        <Typography>Delivery</Typography>
      </div>
      {showSelectAddress && ( <><div style={{ display: "flex", justifyContent: "flex-start" }}>
       <StyledButton
          variant="primary"
          onClick={() => handleOpenAddress()}
        >
          <PlusIcon
            style={{ marginRight: "8px", width: "24px", height: "24px" }}
          />
          Add New Address
        </StyledButton>
        
      </div> <SelectAddress  /></>)}{!showSelectAddress && ( <Box style={boxstyle}>123-Newyork</Box>)}
      <Dialog
        open={openAddress}
        // scroll="paper"
        maxWidth="xs"
        TransitionComponent={Transition}
      >
        <DialogTitle id="scroll-dialog-title">
          Add New Address
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleCloseAddress}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>{" "}
        <DialogContent dividers>
          <Address handleCloseAddress={handleCloseDelivery}/>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const boxstyle = {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  padding: "0.5rem",
  gap: "8px",
  border: "1px solid #ccc",
  borderRadius: "10px",
};

const icon = {
  cursor: "pointer",
  width: "24px",
  height: "24px",
  color: "#87898E",
  marginRight: "8px",
};

export default DeliveryAddress;
