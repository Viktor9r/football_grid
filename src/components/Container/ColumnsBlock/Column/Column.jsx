import React from 'react';
import {
  StyledColumn,
  StyledCellsList,
} from './styled';
import { Cell } from './Cell/Cell';
/* eslint-disable */

export const Column = ({
  pairs,
  selectedUserId,
  setSelectedUserId,
}) => {

  return (
    <StyledColumn>
      <StyledCellsList>
        {pairs.map((pair) => (
          <div style={{height: '163px'}} key={pair.id}>
            <Cell
              pair={pair}
              selectedUserId={selectedUserId}
              setSelectedUserId={setSelectedUserId}
            />
          </div>
        ))}
      </StyledCellsList>
    </StyledColumn>
  );
};
