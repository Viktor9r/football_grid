import React from 'react';
import { StyledTopBar, StyledShowButton } from './styled';
/* eslint-disable */

export const TopBar = ({ showPanel, setShowPanel }) => {

  const showGrid = () => {
    setShowPanel(true);
  }

  if (!showPanel) {
    return (
      <StyledTopBar>
        <StyledShowButton
          type="button"
          onClick={showGrid}
        >
          Show Grid
        </StyledShowButton>
      </StyledTopBar>
    )
  }

  return null;
};