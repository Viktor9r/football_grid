import React from 'react';
import './Column.scss';
import { Cell } from './Cell/Cell';
/* eslint-disable */

export const Column = ({ blocksQuant }) => {
  return (
    <div className="column">
      <ul className="column__cells">
        {blocksQuant.map((block) => (
          <li className="column__cell" key={block}>
            <Cell />
          </li>
        ))}
      </ul>
    </div>
  );
};
