import React, { useState, useEffect, useRef } from "react";
import { Typography, Box, Stack } from "@mui/material";
import StyledButton from "../../ui/StyledButton";
import { ReactComponent as MessageIcon } from "../../assets/icons/MessageIcon.svg";
import { ReactComponent as WhatsappIcon } from "../../assets/icons/WhatsappIcon.svg";

const OtpInput = ({ phoneNumber, onVerificationResult }) => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(30);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  const startTimer = () => {
    setTimer(30);
  };

  useEffect(() => {
    let interval;

    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  const handleResend = () => {
    startTimer();
  };

  const handleInputChange = (index, value) => {
    const digit = value.charAt(value.length - 1);

    const newOtp = [...otp];
    newOtp[index] = digit;
    setOtp(newOtp);

    if (index < 3 && digit !== "") {
      inputRefs[index + 1].current.focus();
      inputRefs[index + 1].current.style.border = "2px solid #EAEF29";
    }

    inputRefs[index].current.style.border = "2px solid #EAEF29";

    if (index === 3 && digit !== "") {
      const enteredOtp = newOtp.join("");
      const correctOtp = "1234"; // Change this to your predefined OTP
      onVerificationResult(enteredOtp === correctOtp ? "Correct" : "Incorrect");
    } 
  };

  return (
    <Box sx={Boxstyle}>
      <Typography sx={{ fontSize: ".875rem", lineHeight: "1rem", marginBottom: "18px" }}>
        Enter OTP Sent To {phoneNumber}
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {otp.map((value, index) => (
          <CustomInput
            key={index}
            value={value}
            onChange={(e) => handleInputChange(index, e.target.value)}
            onFocus={() => {}}
            ref={inputRefs[index]}
          />
        ))}
      </Box>

      <Box sx={{ textAlign: "center", marginTop: "20px", color: "#6e6e6e", fontWeight: "400", fontSize: ".75rem" }}>
        <Stack spacing={1} p={1}>Please enter the correct OTP to fetch saved addresses</Stack>
        <Stack spacing={1} p={1}>
          {timer === 0 ? (
            <Typography>Resend OTP via</Typography>
          ) : (
            <Typography>Resend OTP in {timer} seconds</Typography>
          )}
        </Stack>
      </Box>

      {timer === 0 ? (
        <Box sx={{ display: "flex", gap: "8px", justifyContent: "center" }}>
          <StyledButton variant="primary" fontSize={10} >
            <MessageIcon style={{ marginRight: "8px", width: "24px", height: "24px" }} />
            SMS
          </StyledButton>
          <StyledButton variant="primary" fontSize={10}>
            <WhatsappIcon style={{ marginRight: "8px", width: "24px", height: "24px" }} />
            Whatsapp
          </StyledButton>
        </Box>
      ) : null}
    </Box>
  );
};

const CustomInput = React.forwardRef(({ value, onChange }, ref) => (
  <input type="text" value={value} onChange={onChange} ref={ref} style={subBox} />
));

const Boxstyle = {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  paddingY: "0.5rem",
  alignItems: "center",
  border: "1px solid #ccc",
  background: "var(--inner, #ffffff)",
  borderRadius: "10px",
};

const subBox = {
  width: "50px",
  height: "40px",
  margin: "0 4px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  boxSizing: "border-box",
  textAlign: "center",
};

export default OtpInput;
