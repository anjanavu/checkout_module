import React, { useState } from 'react';
import { Button, Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import Checkout from './Checkout';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const Home = () => {
  const [openCheckout, setOpenCheckout] = useState(false);
  
  const handleOpenCheckout = () => {
    setOpenCheckout(true);
  };

  const handleCloseCheckout = () => {
    setOpenCheckout(false);
  };

  return (
    <div>
      <Button onClick={handleOpenCheckout}>Checkout</Button>
      <Dialog
  open={openCheckout}
  fullWidth={true} maxWidth={'xs'}
   scroll={'body'}
> 
        <DialogTitle id="scroll-dialog-title">  <IconButton
            edge="start"
            onClick={handleCloseCheckout}
            aria-label="close"
          >
            <ArrowBackIcon />
          </IconButton>Checkout</DialogTitle>
        <DialogContent  dividers>
          <Checkout />
        </DialogContent>
      </Dialog>
      
    </div>
  );
};

export default Home;
