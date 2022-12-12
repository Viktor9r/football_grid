import React from 'react';
import './Score.scss';
/* eslint-disable */

export const Score = ({ team }) => (
  <div className="score">
    {!team ? (
      <>
        <div className="score__flag score__flag--first score__flag--empty"></div>
        <div className="score__number score__number--empty">00</div>
        <div className="score__flag score__flag--second score__flag--empty"></div>
      </>
    ) :  (
      <>
        <div className="score__flag score__flag--first score__flag--first--fill"></div>
        <div className="score__number">31</div>
        <div className="score__flag score__flag--second score__flag--second--fill"></div>
      </>
    )}
  </div>
);
