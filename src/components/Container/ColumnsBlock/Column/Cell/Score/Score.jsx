import React from 'react';
import {
  StyledScore,
  StyledFlag,
  StyledScoreNumber,
} from './styled';
/* eslint-disable */

export const Score = ({ team }) => (
  <StyledScore team={team}>
    <StyledFlag team={team} />
    <StyledScoreNumber team={team}>{team ? '31' : '00'}</StyledScoreNumber>
    <StyledFlag team={team} />
  </StyledScore>
);
