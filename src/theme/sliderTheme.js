// src/theme/sliderTheme.js
import { createTheme } from '@mui/material/styles';

const sliderTheme = createTheme({
  components: {
    MuiSlider: {
      styleOverrides: {
        root: {
          color: '#e91e63', // Couleur principale du slider
          height: 8,
        },
        thumb: {
          height: 24,
          width: 24,
          backgroundColor: '#fff',
          border: '2px solid currentColor',
          '&:hover': {
            boxShadow: '0 0 0 8px rgba(233, 30, 99, 0.16)',
          },
        },
        track: {
          height: 8,
          borderRadius: 4,
        },
        rail: {
          height: 8,
          borderRadius: 4,
        },
      },
    },
  },
});

export default sliderTheme;

