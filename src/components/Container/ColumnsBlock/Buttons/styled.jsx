import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
/* eslint-disable */

export const StyledButtonsBlock = styled('div')(({ quarterVisibility}) => ({
  marginTop: '15px',
  display: 'flex',
  width: '100%',
  gridColumn: '1/13',
  justifyContent: !quarterVisibility ? 'flex-end' : 'flex-start',
  boxSizing: 'border-box',
}))

export const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.secondary.main,
  background: theme.palette.background.buttons,
  textTransform: 'uppercase',
  padding: '15px',
  borderRadius: '4px',
  transition: '0.3s',
  border: 'none',
  boxShadow: 'none',
  fontSize: '18px',
  ["&:hover"]: {
    cursor: 'pointer',
    background: theme.palette.background.first,
  }
}));
