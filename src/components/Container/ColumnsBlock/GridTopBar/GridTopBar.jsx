import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

import {
  StyledTopBar,
  topBarClasses,
  TopBarButton,
} from './styled';
/* eslint-disable */

export const GridTopBar = ({ setShowPanel }) => {
  const hidePanel = () => {
    setShowPanel(false);
  };

  return (
    <StyledTopBar>
      <div className={topBarClasses.text}>
        ЮНІОРИ, ЮНІОРИ, Мужчины, -59
      </div>
      <TopBarButton
        onClick={hidePanel}
        startIcon={<CloseIcon />}
      ></TopBarButton>
    </StyledTopBar>
  );
};
