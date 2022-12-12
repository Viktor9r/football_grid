import React from 'react';
import './Team.scss';
/* eslint-disable */

export const Team = ({ team }) => (
  <div className="team">
    {!team ? (
      <>
        <div className="team__title">NA</div>
        <div className="team__extra team__extra--empty"></div>
        <div className="team__extra team__extra--empty"></div>
      </>
    ) : (
      <>
        <div className="team__title">C. Williamson</div>
        <div className="team__extra">Dnipro region</div>
      </>
    )}
  </div>
);
