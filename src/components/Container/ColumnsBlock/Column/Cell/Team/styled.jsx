import { styled } from '@mui/material/styles';
/* eslint-disable */

export const StyledTeam = styled('div')(({ theme }) => ({
  background: theme.palette.background.first,
  borderRadius: '8px',
  padding: '12px 17px',
  fontSize: '14px',
  display: 'flex',
  justifyContent: 'space-between',
}));

export const StyledTeamText = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
}))

export const StyledTeamTextTitle = styled('div')(() => ({
  marginBottom: '3px',
}));

export const StyledTeamTextExtra = styled('div')(({ team }) => ({
  marginBottom: '2px',
  fontSize: '8px',
  color: '#B8BBC1',
  width: !team ? '42px' : 'fit-content',
  height: !team ? '3px' : 'fit-content',
  background: !team ? 'rgba(255, 255, 255, 0.2)' : 'none',
}));

export const StyledTeamResults = styled('div')(({ team, theme }) => ({
  display: team ? 'flex' : 'none',
}));

const PREFIX = "team__coef";

export const scoreClasses = {
  coefBlock: `${PREFIX}-block`,
};

export const StyledTeamCoefs = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  marginRight: '14px',
  [`& .${scoreClasses.coefBlock}`]: {
    width: '19px',
    height: '19px',
    background: '#525D67',
    borderRadius: '2px',
    margin: 'auto',
    textAlign: 'center',
    fontSize: '10px',
    marginRight: '4px',
    verticalAlign: 'middle',
    lineHeight: '19px',
  },
  ["&>:nth-child(2)"]: {
    background: '#44B181',
  },
}));

export const StyledTeamScore = styled('div')(() => ({
  top: '20px',
  bottom: '0',
  fontSize: '20px',
  lineHeight: '35px',
}))
