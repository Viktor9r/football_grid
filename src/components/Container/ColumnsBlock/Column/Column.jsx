import React, { useEffect } from 'react';
import {
  StyledColumn,
  StyledCellsList,
} from './styled';
import { Cell } from './Cell/Cell';
/* eslint-disable */

export const Column = ({
  team,
  columnId,
  setShowFinals,
  blocksQuant,
}) => {

  useEffect(() => {
    if (team === true && columnId === 4) {
      setShowFinals(true);
    }
  });

  return (
    <StyledColumn>
      <StyledCellsList>
        {blocksQuant.map((block) => (
          <li key={block}>
            {team ? (
              <>
                <Cell team={team} />
              </>
            ) : (
              <Cell />
            )}
          </li>
        ))}
      </StyledCellsList>
    </StyledColumn>
  );
};
