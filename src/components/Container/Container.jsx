import './Container.scss';
import React from 'react';
import { Header } from './Header/Header';
import { ColumnsBlock } from './ColumnsBlock/ColumnsBlock';

export const Container = () => (
  <div className="page-container">
    <Header />
    <ColumnsBlock />
  </div>
);
