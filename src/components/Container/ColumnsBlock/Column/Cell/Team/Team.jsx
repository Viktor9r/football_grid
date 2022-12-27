import React from 'react';
import {
  StyledTeam,
  StyledTeamText,
  StyledTeamTextTitle,
  StyledTeamTextExtra,
  StyledTeamResults,
  StyledTeamCoefs,
  StyledTeamScore,
  scoreClasses,
} from './styled';
/* eslint-disable */

export const Team = ({ team }) => (
  <StyledTeam team={team}>
    <StyledTeamText team={team}>
          <StyledTeamTextTitle>{team ? 'C.Williamson' : 'NA'}</StyledTeamTextTitle>
          <StyledTeamTextExtra team={team}>{team && 'Dnipro Region'}</StyledTeamTextExtra>
          <StyledTeamTextExtra team={team}/>
        </StyledTeamText>
        <StyledTeamResults team={team}>
          <StyledTeamCoefs>
            <div className={scoreClasses.coefBlock}>0</div>
            <div className={scoreClasses.coefBlock}>24</div>
            <div className={scoreClasses.coefBlock}>0</div>
          </StyledTeamCoefs>
          <StyledTeamScore>1</StyledTeamScore>
        </StyledTeamResults>
  </StyledTeam>
);
