import React from 'react';
import './Cell.scss';
import { Team } from './Team/Team';
import { Score } from './Score/Score';
/* eslint-disable */

export const Cell = ({ team }) => (
  <>
    {/* <div className="column__line column__line--prev"></div>
    <div className="column__line column__line--next"></div>
    <div className="column__line--down"></div>
    <div className="column__line--up"></div> */}
    {team && (
      <div className="cell__court">Court 3 | 1:45 pm</div>
    )}
    <div className="cell">
      <div className="cell__score">
        <Score team={team} />
      </div>
      <div className="cell__team-box">
        <div className="cell__team">
          <Team team={team} />
        </div>
        <div className="cell__team cell__team--second">
          <Team team={team} />
        </div>
      </div>
    </div>
  </>
);
