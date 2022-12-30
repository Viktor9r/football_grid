import { styled } from '@mui/material/styles';
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
}));

export const StyledFlag = styled('img')(({ team }) => ({
  width: '37px',
  height: '26px',
  border: 'none',
  borderRadius: '4px',
  objectFit: 'cover',
  backgroundSize: 'cover',
}));

export const StyledFlagEmpty = styled('div')(({}) => ({
  width: '37px',
  height: '26px',
  borderRadius: '4px',
  background: 'rgba(255, 255, 255, 0.2)',
}));

export const StyledScoreNumber = styled('div')(({ team }) => ({
  textAlign: 'center',
  color: team ? '#fff' : 'rgba(255, 255, 255, 0.2)',
}))
