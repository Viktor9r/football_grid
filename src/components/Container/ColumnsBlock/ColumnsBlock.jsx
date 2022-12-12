import React, { useState } from 'react';
import './ColumnsBlock.scss';
import classNames from 'classnames';
import { Column } from './Column/Column';
import { Buttons } from './Buttons/Buttons';
/* eslint-disable */

export const ColumnsBlock = () => {
  const [finalVisibility, setFinalVisibility] = useState(false);

  return (
    <div className="columns-block">
      <div className={classNames({
        "columns-block__column": true,
        "columns-block__column--first": true,
        "columns-block__column--first--final": finalVisibility
      })}>
        <div className="columns-block__rounds">1/8 finals</div>
        <Column blocksQuant={[1, 2, 3, 4, 5, 6, 7, 8]} />
      </div>
      <div className={classNames({
        "columns-block__column": true,
        "columns-block__column--second": true,
        "columns-block__column--second--final": finalVisibility
      })}>
        <div className="columns-block__rounds">Quarter-finals</div>
        <Column blocksQuant={[1, 2, 3, 4]} />
      </div>
      <div className={classNames({
        "columns-block__column": true,
        "columns-block__column--third": true,
        "columns-block__column--third--final": finalVisibility
      })}>
        <div className="columns-block__rounds">Semi-finals</div>
        <Column blocksQuant={[1, 2]} />
      </div>
      <div className={classNames({
        "columns-block__column": true,
        "columns-block__column--fourth": true,
        "columns-block__column--fourth--final": finalVisibility
      })}>
        <div className="columns-block__rounds">Final</div>
        <Column blocksQuant={[1]} />
      </div>

      <Buttons
        finalVisibility={finalVisibility}
        setFinalVisibility={setFinalVisibility}
      />
    </div>
  );
};
