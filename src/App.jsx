import React from 'react';
import './App.scss';
import {
  ThemeProvider,
  StyledEngineProvider,
  createTheme,
} from '@mui/material/styles';
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
  }
})

export const App = () => (
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={muiTheme}>
      <div className="page">
        <Container />
      </div>
    </ThemeProvider>
  </StyledEngineProvider>
);
