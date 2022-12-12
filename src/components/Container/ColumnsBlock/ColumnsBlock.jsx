import React, { useState } from 'react';
import './ColumnsBlock.scss';
import classNames from 'classnames';
import { Column } from './Column/Column';
import { Buttons } from './Buttons/Buttons';
/* eslint-disable */

export const ColumnsBlock = () => {
  const [quarterVisibility, setquarterVisibility] = useState(false);
  const [team, setTeam] = useState(true);

  return (
    <div className="columns-block">
      <Buttons
        quarterVisibility={quarterVisibility}
        setquarterVisibility={setquarterVisibility}
      />
      <div className={classNames({
        "columns-block__column": true,
        "columns-block__column--first": true,
        "columns-block__column--first--quarter": quarterVisibility
      })}>
        <div className="columns-block__rounds">1/32 finals</div>
        <Column
          team={team}
          blocksQuant={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ,16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32]}
        />
      </div>
      <div className={classNames({
        "columns-block__column": true,
        "columns-block__column--second": true,
        "columns-block__column--second--quarter": quarterVisibility
      })}>
        <div className="columns-block__rounds">1/16 finals</div>
        <Column blocksQuant={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ,16]} />
      </div>
      <div className={classNames({
        "columns-block__column": true,
        "columns-block__column--third": true,
        "columns-block__column--third--quarter": quarterVisibility
      })}>
        <div className="columns-block__rounds">1/8 finals</div>
        <Column blocksQuant={[1, 2, 3, 4, 5, 6, 7, 8]} />
      </div>
      <div className={classNames({
        "columns-block__column": true,
        "columns-block__column--fourth": true,
        "columns-block__column--fourth--quarter": quarterVisibility
      })}>
        <div className="columns-block__rounds">Quarters final</div>
        <Column blocksQuant={[1, 2, 3, 4]} />
      </div>
    </div>
  );
};
