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

export const Team = ({
  user,
  selectedUserId,
  setSelectedUserId,
  scores,
  winnerId,
}) => (
  <>
    {user ? (
      <StyledTeam
        selected={user.user.id === selectedUserId}
        onMouseOver={() => setSelectedUserId(user.user.id)}
        onMouseOut={() => setSelectedUserId(-1)}
        isWinner={user.user.id === winnerId}
      >
        <StyledTeamText>
              <StyledTeamTextTitle>{user.user.name} {user.user.surname}</StyledTeamTextTitle>
              <StyledTeamTextExtra team={user}>{user.org.title}</StyledTeamTextExtra>
              <StyledTeamTextExtra team={user}/>
            </StyledTeamText>
            <StyledTeamResults team={user}>
              <StyledTeamCoefs>
                <div className={scoreClasses.coefBlock}>0</div>
                <div className={scoreClasses.coefBlock}>24</div>
                <div className={scoreClasses.coefBlock}>0</div>
              </StyledTeamCoefs>
              <StyledTeamScore>{scores}</StyledTeamScore>
            </StyledTeamResults>
      </StyledTeam>
    ) : (
      <StyledTeam>
        <StyledTeamText>
              <StyledTeamTextTitle>'NA'</StyledTeamTextTitle>
              <StyledTeamTextExtra team={false}></StyledTeamTextExtra>
              <StyledTeamTextExtra team={false}/>
            </StyledTeamText>
            <StyledTeamResults team={false}>
            </StyledTeamResults>
      </StyledTeam>
    )}
  </>
);
