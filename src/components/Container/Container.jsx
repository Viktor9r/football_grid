import './Container.scss';
import React, { useState } from 'react';
import { Header } from './Header/Header';
import { ColumnsBlock } from './ColumnsBlock/ColumnsBlock';
import { TopBar } from './TopBar/TopBar';

export const Container = () => {
  const [showPanel, setShowPanel] = useState(false);

  return (
    <div className="page-container">
      <Header />
      <TopBar showPanel={showPanel} setShowPanel={setShowPanel} />
      {showPanel && (
        <ColumnsBlock showPanel={showPanel} setShowPanel={setShowPanel} />
      )}
    </div>
  );
};
