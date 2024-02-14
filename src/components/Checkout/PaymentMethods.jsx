import React, { useState } from "react";
import { Typography, Stack } from "@mui/material";
import StyledButton from "../../ui/StyledButton";

const paymentMethod = [
  {
    id: 1,
    title: "Pay via UPI/Credit/Debits Cards",
    description: "Use any payment method",
    buttonText: "Pay ₹3000",
  },
  {
    id: 2,
    title: "Wallets",
    description: "Paytm, OlaMoney, Mobikwik & more",
    buttonText: "Pay ₹3000",
  },
  {
    id: 3,
    title: "Netbanking",
    description: "Select from a list of banks",
    buttonText: "Pay ₹3000",
  },
  {
    id: 4,
    title: "Cash on delivery",
    description: "Pay with cash",
    buttonText: "Place COD order for ₹3000",
  },
  {
    id: 5,
    title: "Snapmint- Pay at 0% EMI",
    description: "Pay with cash",
    buttonText: "0% EMI • No credit card needed",
  },
];

const PaymentMethods = () => {
  const [selectedPayment, setSelectedPayment] = useState(paymentMethod[0]);

  const handlePaymentClick = (paymentMethod) => {
    setSelectedPayment(
      paymentMethod.id === selectedPayment?.id ? null : paymentMethod
    );
  };

  return (
    <Stack
      direction="column"
      spacing={2}
      alignItems="stretch"
      sx={{
        position: "relative",
        width: "100%",
        boxSizing: "border-box",
        padding: "10px",
        border: "1px solid #ccc",
        background: "var(--inner, #ffffff)",
        borderRadius: "10px",
      }}
    >
      <Typography sx={{ ...paymentHeading }}>
        PAYMENT METHODS
      </Typography>

      <Stack spacing={4}>
        {paymentMethod.map((paymentMethod) => (
          <Stack
          key={paymentMethod.id}
          spacing={1}
          onClick={() => handlePaymentClick(paymentMethod)}
          sx={{
            cursor: "pointer",
            border: selectedPayment?.id === paymentMethod.id ? "2px solid #ebef29" : "2px solid transparent",
            borderRadius: "8px",
            padding:"5px",
            transition: "border 0.1s",
          }}
        >
            <Typography variant="h6" sx={paymentHeading}>
              {paymentMethod.title}
            </Typography>
            <Typography variant="body1" sx={paymentDetails}>
              {paymentMethod.description}
            </Typography>
            {selectedPayment?.id === paymentMethod.id && (
              <StyledButton mt={17} height={50}  variant="secondary">
                {paymentMethod.buttonText}
              </StyledButton>
            )}
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

const paymentHeading = {
  color: "#4d4d4d",
  fontWeight: 500,
  fontSize: ".875rem",
  lineHeight: "1rem",
};

const paymentDetails = {
  color: "#949494",
  fontWeight: 400,
  fontSize: ".75rem",
  lineHeight: ".875rem",
};

export default PaymentMethods;
