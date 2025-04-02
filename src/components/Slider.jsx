import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

export default function SliderSizes({ defaultValue, onChange }) {
  return (
    <Box sx={{ width: 300 }}>
      <Slider 
        defaultValue={defaultValue}
        onChange={(event, value) => onChange(value)}
        aria-label="Default" 
        min={1}
        max={60} 
      />
    </Box>
  );
}
