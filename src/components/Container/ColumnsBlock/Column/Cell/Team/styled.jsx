import { styled } from '@mui/material/styles';
/* eslint-disable */

export const StyledTeam = styled('div')(({ isWinner, theme, selected }) => ({
  background: selected ? 'rgb(183, 44, 44)' : theme.palette.background.first,
  borderRadius: '8px',
  padding: '12px 17px',
  fontSize: '14px',
  display: 'flex',
  justifyContent: 'space-between',
  boxSizing: 'border-box',
  transition: '0.3s',
  outline: isWinner ? '1px solid #44B181' : `1px solid ${theme.palette.background.first}`,
}));

export const StyledTeamText = styled('div')(() => ({
  paddingRight: '3px',
}))

export const StyledTeamTextTitle = styled('div')(() => ({
  marginBottom: '3px',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  oveflow: 'hidden',
}));

export const StyledTeamTextExtra = styled('div')(({ team }) => ({
  marginBottom: '2px',
  fontSize: '8px',
  color: '#B8BBC1',
  width: !team ? '42px' : 'auto',
  height: !team ? '3px' : 'auto',
  background: !team ? 'rgba(255, 255, 255, 0.2)' : 'none',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  oveflow: 'hidden',
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
