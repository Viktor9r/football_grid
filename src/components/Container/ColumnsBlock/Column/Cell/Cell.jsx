import React from 'react';
import {
  StyledCourt,
  StyledCell,
  StyledTeamBox,
  teamClasses,
} from './styled';
import { Team } from './Team/Team';
import { Score } from './Score/Score';
/* eslint-disable */

export const Cell = ({ team }) => (
  <>
    {team && (
      <StyledCourt>Court 3 | 1:45 pm</StyledCourt>
    )}
    <StyledCell>
      <div>
        <Score team={team} />
      </div>
      <StyledTeamBox>
        <div className={teamClasses.team}>
          <Team team={team} />
        </div>
        <div className={teamClasses.team}>
          <Team team={team} />
        </div>
      </StyledTeamBox>
    </StyledCell>
  </>
);
