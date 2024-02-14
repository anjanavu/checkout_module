import { FormControlLabel, Radio, RadioGroup, IconButton, Menu, MenuItem, DialogTitle, Dialog, Slide, DialogContent } from '@mui/material';
import React, { useState } from 'react';
import { ReactComponent as MenuIcon } from "../../assets/icons/MenuIcon.svg";
import { ReactComponent as EditIcon } from "../../assets/icons/EditIcon.svg";
import CloseIcon from "@mui/icons-material/Close";
import Address from '../Address';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
const SelectAddress = () => {
  const options = [
    { value: 'home', label: 'Home', description: 'This is the home description.' },
    { value: 'work', label: 'Work', description: 'This is the work description.' },

  ];
  const [openAddress, setOpenAddress] = useState(false);
  const handleOpenAddress = () => {
    setOpenAddress(true);
  };

  const handleCloseAddress = () => {
    setOpenAddress(false);
  };
  const [selectedValue, setSelectedValue] = useState(options[0].value);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);

  const labelStyle = (value) => ({
    border: `1px solid ${value === selectedValue ? '#ebef29' : '#ccc'}`,
    borderRadius: '10px',
    padding: '8px',
    margin: '10px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between', // Align items horizontally with space between
    alignItems: 'center',
  });

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleMenuClick = (event, option) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };


  return (
    <div>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        value={selectedValue}
        onChange={handleRadioChange}
        name="radio-buttons-group"
      >
        {options.map((option) => (
          <div key={option.value} style={labelStyle(option.value)}>
            <FormControlLabel
              value={option.value}
              control={<Radio color="default" />}
              label={
                <>
                  <div>{option.label}</div>
                  <p>{option.description}</p>
                </>
              }
            />
            <IconButton
              aria-label="menu"
              onClick={(e) => handleMenuClick(e, option)}
            >
              {/* Use your menu icon here, e.g., <MenuIcon /> */}
              <MenuIcon  style={icon} />
            </IconButton>
            <Menu
              anchorEl={menuAnchorEl}
              open={Boolean(menuAnchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem  onClick={() => handleOpenAddress()}><EditIcon style={icon} />Edit</MenuItem>
              {/* Add more menu options as needed */}
            </Menu>
          </div>
        ))}
      </RadioGroup>
      <Dialog
        open={openAddress}
        // scroll="body"
        maxWidth="xs"
        TransitionComponent={Transition}
      >
        <DialogTitle id="scroll-dialog-title">
          Edit Address
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
        <DialogContent dividers >
          <Address />
        </DialogContent>
      </Dialog>
    </div>
  );
};
const icon = {
    cursor: "pointer",
    width: "24px",
    height: "24px",
    color: "#87898E",
    marginRight: "8px",
  };
export default SelectAddress;
