import React from 'react';
import './Team.scss';
/* eslint-disable */

export const Team = ({ team }) => (
  <div className="team">
    {!team ? (
      <>
        <div className="team__text">
          <div className="team__title">NA</div>
          <div className="team__extra team__extra--empty"></div>
          <div className="team__extra team__extra--empty"></div>
        </div>
      </>
    ) : (
      <>
        <div className="team__text">
          <div className="team__title">C. Williamson</div>
          <div className="team__extra">Dnipro region</div>
          <div className="team__extra"></div>
        </div>
        <div className="team__results">
          <div className="team__coef">
            <div className="team__coef-block team__coef-block--first">0</div>
            <div className="team__coef-block team__coef-block--second">24</div>
            <div className="team__coef-block team__coef-block--third">0</div>
          </div>
          <div className="team__score">1</div>
        </div>
      </>
    )}
  </div>
);
