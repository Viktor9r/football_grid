import React from 'react';
import {
  ThemeProvider,
  StyledEngineProvider,
  createTheme,
} from '@mui/material/styles';
import { StyledPage } from './styled';
import { Container } from './components/Container/Container';
/* eslint-disable */

const muiTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: "#fff",
    },
    secondary: {
      main: '#b8bbc1',
    },
    background: {
      first: '#182128',
      second: '#313c44',
      third: '#2a353f',
      buttons: 'rgba(0, 66, 105, 0.07)'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 5,
          color: "#fff",
          fontSize: "14px",
        },
      },
    },
  },
});

export const App = () => (
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={muiTheme}>
      <StyledPage>
        <Container />
      </StyledPage>
    </ThemeProvider>
  </StyledEngineProvider>
);
