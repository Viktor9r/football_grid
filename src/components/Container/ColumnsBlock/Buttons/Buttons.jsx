import React from 'react';
import ArrowBack from '@mui/icons-material/ArrowBack';
import ArrowForward from '@mui/icons-material/ArrowForward';
import { StyledButton, StyledButtonsBlock } from './styled';
/* eslint-disable */

export const Buttons = ({ quarterVisibility, setQuarterVisibility }) => {
  const showFinal = () => {
    setQuarterVisibility(true);
  };

  const hideFinal = () => {
    setQuarterVisibility(false);
  };

  return (
    <StyledButtonsBlock quarterVisibility={quarterVisibility}>
      {quarterVisibility ? (
        <StyledButton
          variant="contained"
          onClick={hideFinal}
          startIcon={<ArrowBack />}
        >
          Previous Stage
        </StyledButton>
      ) : (
        <StyledButton
          variant="contained"
          onClick={showFinal}
          endIcon={<ArrowForward />}
        >
          Next Stage
        </StyledButton>
      )
    }
    </StyledButtonsBlock>
  );
};
