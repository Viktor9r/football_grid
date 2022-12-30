import React from 'react';
import FirstFlag from '../../../../../../images/UA.png';
import {
  StyledScore,
  StyledFlag,
  StyledScoreNumber,
  StyledFlagEmpty,
} from './styled';
/* eslint-disable */

export const Score = ({ pair }) => (
  <StyledScore team={pair}>
    {pair.user1 ? (
      <StyledFlag src={FirstFlag} />
    ) : (
      <StyledFlagEmpty />
    )}
    <StyledScoreNumber team={pair}>{pair.number}</StyledScoreNumber>
    {pair.user2 ? (
      <StyledFlag src={FirstFlag} />
    ) : (
      <StyledFlagEmpty />
    )}
  </StyledScore>
);
