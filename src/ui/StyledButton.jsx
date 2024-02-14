import React from "react";

const StyledButton = (props) => {
  const {
    fontSize,
    width,
    mt,
    alignItems,
    justifyContent,
    variant,
    onClick, 
    children,
  } = props;

  const buttonStyles = {
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "0.5rem",
    fontFamily: "Inter, sans-serif",
    cursor: "pointer",
    gap: "0.25 rem",
    display: "flex",
    flexDirection: "row",
    alignItems: alignItems ? `${alignItems}` : "center",
    width: width || "100%",
    justifyContent: justifyContent ? `${justifyContent}` : "center",
    transition: "background-color 0.3s, box-shadow 0.3s",
    fontSize: fontSize ? `${fontSize}px` : "16px",
    height: variant === "primary" ? "35px" : "3.5rem",
    marginTop: mt ? `${mt}px` : null,
  };

  if (variant === "secondary") {
    buttonStyles.backgroundColor = "#ebef29";
    buttonStyles.color = "#000000";
    buttonStyles.fontWeight = 500;
    buttonStyles.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.25)";
  } else if (variant === "primary") {
    buttonStyles.backgroundColor = "white";
    buttonStyles.color = "#000000";
    buttonStyles.border='1px solid rgb(229 231 235)'
    buttonStyles.padding='10px'
  }

  return (
    <button style={buttonStyles} className="styled-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default StyledButton;
