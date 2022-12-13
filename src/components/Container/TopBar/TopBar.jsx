import './TopBar.scss';
import React from 'react';
/* eslint-disable */

export const TopBar = ({ showPanel, setShowPanel }) => {

  const showGrid = () => {
    setShowPanel(true);
  }

  if (!showPanel) {
    return (
      <div className="topbar">
        <button
          className="topbar__show"
          type="button"
          onClick={showGrid}
        >
          Show Grid
        </button>
      </div>
    )
  }

  return null;
};