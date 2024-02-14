import React, { useState } from "react";
import Accordian from "../ui/Accordian";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Stack,
  Typography
} from "@mui/material";
import InputField from ".././ui/Input";
import { ReactComponent as TagIcon } from "../assets/icons/TagIcon.svg";

import CloseIcon from "@mui/icons-material/Close";
import StyledButton from "../ui/StyledButton";
import OtpInput from ".././components/Checkout/OtpInput";
import Phonenumber from "../ui/PhoneNumber";
import DeliveryAddress from ".././components/Checkout/DeliveryAddress";
import PaymentMethods from ".././components/Checkout/PaymentMethods";
import Logout from ".././components/Checkout/Logout";

const Checkout = () => {
  const [inputValue, setInputValue] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [verificationResult, setVerificationResult] = useState(null);
  const [openLogout, setOpenLogout] = useState(false);
  const [showPayment, setShowPayment] = useState(false);


  const handleCloseLogout = () => {
    setOpenLogout(false);
  };
  const handlePaymentMethod = () => {
    setShowPayment(true);
  };
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handlePhoneChange = (value) => {
    setPhoneNumber(value);
  };

  const handleVerificationResult = (result) => {
    setVerificationResult(result);

    if (result === "Correct") {
      setShowOtpInput(false);
    }
  };

  const handleVerifyOTP = (event) => {
    event.preventDefault();
    console.log("Verify OTP clicked");
    setShowOtpInput(true); // Set state to show OtpInput
  };

  return (
    <Box sx={{ backgroundColor: "white",height: "540px" }}>
      
          <Stack spacing={1} p={1}>
            <Accordian />
          </Stack>
          <Stack spacing={1} p={1}>
            <Box sx={{ display: "flex", gap: "10px", width: "100%" }}>
              <InputField
                icon={<TagIcon />}
                placeholder={"Enter Coupon code"}
                value={inputValue}
                onChange={handleInputChange}
                style={{ width: "100% !important" }}
              />
              {inputValue && (
                <StyledButton variant="secondary">Apply</StyledButton>
              )}
            </Box>
          </Stack>
          {!verificationResult && !showOtpInput && (
            <>
              <Stack spacing={1} p={1}>
                <Phonenumber
                  phoneNumber={phoneNumber}
                  handlePhoneChange={handlePhoneChange}
                />
              </Stack>
              <Stack spacing={1} p={1}>
                <StyledButton
                  variant="secondary"
                  height={50}
                  onClick={handleVerifyOTP}
                >
                  Verify OTP
                </StyledButton>
              </Stack>
            </>
          )}
          {showOtpInput && (
            <Stack spacing={1} p={1}>
              <OtpInput
                phoneNumber={phoneNumber}
                onVerificationResult={handleVerificationResult}
              />
            </Stack>
          )}
          {verificationResult === "Correct" && (
            <>
              <Stack spacing={1} p={1}>
                <DeliveryAddress handlePayment={handlePaymentMethod} />
              </Stack>{" "}
              {showPayment && (
                <Stack spacing={1} p={1}>
                  <PaymentMethods />
                </Stack>
              )}
              <Stack spacing={1} p={1}>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography style={typographyStyle}>
                    Logged in with
                  </Typography>
                  <Button
                    variant="primary"
                    sx={{ fontSize: "0.75rem", textTransform: "none" }}
                    onClick={()=>setOpenLogout(true)}
                  >
                    Logout
                  </Button>
                </Stack>
              </Stack>
              <Dialog open={openLogout} fullWidth="true" maxWidth="xs">
                {" "}
                <IconButton
                  aria-label="close"
                  onClick={handleCloseLogout}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>{" "}
                <DialogContent>
                  <Logout handleCloseLogout={handleCloseLogout} />
                </DialogContent>
              </Dialog>
              {!showPayment && (
                <Stack spacing={1} p={1}>
                  <StyledButton variant="secondary" height={50}>
                    Proceed To Pay
                  </StyledButton>
                </Stack>
              )}
            </>
          )}
    </Box>
  );
};

const typographyStyle = {
  fontSize: ".625rem",
  lineHeight: " .75rem",
  color: "#949494",
};

export default Checkout;
