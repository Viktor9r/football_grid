import React from 'react';
import './Cell.scss';
import { Team } from './Team/Team';
/* eslint-disable */

export const Cell = () => (
  <>
    {/* <div className="column__line column__line--prev"></div>
    <div className="column__line column__line--next"></div>
    <div className="column__line--down"></div>
    <div className="column__line--up"></div> */}
    <div className="cell">
      <div className="cell__team">
        <Team />
      </div>
      <div className="cell__team cell__team--second">
        <Team />
      </div>
    </div>
  </>
);
