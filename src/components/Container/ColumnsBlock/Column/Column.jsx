import React, { useEffect } from 'react';
import './Column.scss';
import { Cell } from './Cell/Cell';
/* eslint-disable */

export const Column = (props) => {

  useEffect(() => {
    if (props.team === true && props.columnId === 4) {
      props.setShowFinals(true);
    }
  });

  return (
    <div className="column">
      <ul className="column__cells">
        {props.blocksQuant.map((block) => (
          <li className="column__cell" key={block}>
            {props.team ? (
              <>
                <Cell team={props.team} />
              </>
            ) : (
              <Cell />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
