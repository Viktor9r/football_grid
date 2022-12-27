import { styled } from '@mui/material/styles';
import FirstFlag from 'C:/React/football_grid/src/images/ua.png';
import SecondFlag from 'C:/React/football_grid/src/images/flags/CA.png';
/* eslint-disable */

export const StyledScore = styled('div')(({ theme, team }) => ({
  color: theme.palette.primary.main,
  background: theme.palette.background.first,
  display: 'flex',
  flexDirection: 'column',
  padding: '12px 6px',
  height: '81%',
  marginRight: '6px',
  justifyContent: 'space-between',
  borderRadius: '8px',
  ["&>:nth-child(1)"]: {
    backgroundImage: team ? `url(${FirstFlag})` : 'none',
  },
  ["&>:nth-child(3)"]: {
    backgroundImage: team ? `url(${SecondFlag})` : 'none',
  },
}));

export const StyledFlag = styled('div')(({ team }) => ({
  width: '37px',
  height: '26px',
  borderRadius: '4px',
  background: team ? 'none' : 'rgba(255, 255, 255, 0.2)',
}));

export const StyledScoreNumber = styled('div')(({ team }) => ({
  textAlign: 'center',
  color: team ? '#fff' : 'rgba(255, 255, 255, 0.2)',
}))
