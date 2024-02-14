import React, { useState } from "react";
import InputField from ".././ui/Input";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Checkbox from ".././ui/Checkbox";
import { ReactComponent as CloseIcon } from "../assets/icons/CloseIcon.svg";
import Phonenumber from ".././ui/PhoneNumber";
import StyledButton from ".././ui/StyledButton";
import Selectbox from ".././ui/Selectbox";
const Address = ({ handleCloseAddress }) => {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
  ];

  const [selectedValue, setSelectedValue] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otherAddress, setOtherAddress] = useState("");
  const [showOtherAddress, setShowOtherAddress] = useState(false);

  const handleCheckboxChange = (value) => {
    setSelectedOption(value);
    setShowOtherAddress(value === "Other");
  };

  const handlePhoneChange = (value) => {
    setPhoneNumber(value);
  };

  const handleOtherAddressChange = (value) => {
    setOtherAddress(value);
  };

  const handleShowThreeCheckboxes = () => {
    setShowOtherAddress(false);
  };
  const handleSaveAndContinue = () => {
    handleCloseAddress();
  };
  return (
    <Box>
      {/* <Grid item xs={12}> */}
      <Typography style={typoheading}>PERSONAL DETAILS</Typography>

      <Stack spacing={1} p={2}>
        <Typography style={typographyStyle}> PHONE NUMBER </Typography>
        <Phonenumber
          phoneNumber={phoneNumber}
          handlePhoneChange={handlePhoneChange}
        />
      </Stack>

      <Stack spacing={1} p={2}>
        <Typography style={typographyStyle}>FULL NAME</Typography>
        <InputField style={{ width: "100%" }} />
      </Stack>
      <Stack spacing={1} p={2}>
        <Typography style={typographyStyle}>EMAIL</Typography>
        <InputField style={{ width: "100%" }} />
      </Stack>

      <Typography style={typoheading}>ADDRESS</Typography>

      <Stack spacing={1} p={2}>
        <Typography style={typographyStyle}>
          HOUSE NO., BUILDING, ROAD, AREA
        </Typography>
        <InputField style={{ width: "100%" }} />
      </Stack>
      <Stack spacing={1} p={2}>
        <Typography style={typographyStyle}>PINCODE</Typography>
        <InputField style={{ width: "100%" }} />
      </Stack>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Stack spacing={1} p={2}>
            <Typography style={typographyStyle}>CITY</Typography>
            <InputField style={{ width: "100%" }} />
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack spacing={1} p={2}>
            <Typography style={typographyStyle}>STATE</Typography>
            <Selectbox
              options={options}
              value={selectedValue}
              onChange={setSelectedValue}
            />
          </Stack>
        </Grid>
      </Grid>

      <Typography style={typoheading}>SAVE ADDRESS AS</Typography>

      <Grid container spacing={2} style={{ marginTop: "1rem" }}>
        {showOtherAddress && (
          <Grid item xs={12}>
            <InputField
              placeholder={"ex:Simpson's Home"}
              iconright={<CloseIcon onClick={handleShowThreeCheckboxes} />}
              value={otherAddress}
              onChange={(e) => handleOtherAddressChange(e.target.value)}
              style={{ width: "100% !important" }}
            />
          </Grid>
        )}
        {!showOtherAddress && (
          <>
            <Grid item xs={4}>
              <Checkbox
                label="Home"
                checked={selectedOption === "Home"}
                onChange={() => handleCheckboxChange("Home")}
              />
            </Grid>
            <Grid item xs={4}>
              <Checkbox
                label="Office"
                checked={selectedOption === "Office"}
                onChange={() => handleCheckboxChange("Office")}
              />
            </Grid>
            <Grid item xs={4}>
              <Checkbox
                label="Other"
                checked={selectedOption === "Other"}
                onChange={() => handleCheckboxChange("Other")}
              />
            </Grid>
          </>
        )}</Grid>
        <Stack spacing={1} p={2}>
          <StyledButton variant="secondary" onClick={handleSaveAndContinue}>
            Save and Continue
          </StyledButton></Stack>
      
    </Box>
  );
};
const typographyStyle = {
  fontSize: ".625rem",
  lineHeight: " .75rem",
  color: "#949494",
};

const typoheading = {
  fontSize: ".625rem",
  lineHeight: " .75rem",
  borderBottom: "1px solid #ccc",
  paddingBottom: "0.5rem",
};
export default Address;
