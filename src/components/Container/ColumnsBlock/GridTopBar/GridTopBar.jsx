import './GridTopBar.scss';
import React from 'react';
/* eslint-disable */

export const GridTopBar = ({ showPanel, setShowPanel }) => {
  const hidePanel = () => {
    setShowPanel(false);
  };

  return (
    <div className="gridtopbar">
      <div className="gridtopbar__text">
        ЮНІОРИ, ЮНІОРИ, Мужчины, -59
      </div>
      <button
        className="gridtopbar__button"
        type="button"
        onClick={hidePanel}
      ></button>
    </div>
  );
};
