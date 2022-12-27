import { List } from '@mui/material';
import { styled } from '@mui/material/styles';
/* eslint-disable */

export const StyledColumn = styled('div')(() => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}));

export const StyledCellsList = styled(List)(() => ({
  margin: '0',
  paddingInlineStart: '0',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  height: '100%',
  borderRadius: '16px',
  boxSizing: 'border-box',
  listStyle: 'none',
  width: '100%',
  margin: '0 auto',
}))
