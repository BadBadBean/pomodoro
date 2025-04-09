import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

export default function SliderSizes({
  defaultValue,
  onChange,
  variant,
  ...props
}) {
  // Styles personnalisés selon la variante
  const variantStyles = {
    work: {
      color: "#f54e4e",
    },
    break: {
      color: "#4aec8c", // vert
    },
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        defaultValue={defaultValue}
        onChange={(event, value) => onChange(value)}
        aria-label="Minutes"
        min={1}
        max={60}
        sx={{
          height: 40,
          ...(variant ? variantStyles[variant] : { color: "#f54e4e" }),

          "& .MuiSlider-rail": {
            backgroundColor: "transparent",
            borderRadius: 999,
            border: "2px solid currentColor",
          },

          "& .MuiSlider-track": {
            backgroundColor: "transparent",
            borderRadius: 999,
            border: "transparent",
          },

          "& .MuiSlider-thumb": {
            width: 40,
            height: 40,
            backgroundColor: "currentColor",
            border: "2px solid currentColor",
            borderRadius: "50%",
          },
        }}
        {...props}
      />
    </Box>
  );
}
