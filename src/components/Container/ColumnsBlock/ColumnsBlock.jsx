import React from 'react';
import { Tabs } from '@mui/material';
import { Column } from './Column/Column';
import { GridTopBar } from './GridTopBar/GridTopBar';
import draw from '../../../test.json';
import { Buttons } from './Buttons/Buttons';
import {
  StyledRoundSettersBlock,
  StyledSettersBox,
  StyledTab,
  StyledGridBox,
  StyledColumn,
  StyledColumnRounds,
} from './styled';
/* eslint-disable */

const stagesNames = [
  "All",
  "Final",
  "Semi-Final",
  "1/4 Finals",
  "1/8 Finals",
  "1/16 Finals",
  "1/32 Finals",
  "1/64 Finals",
];

const stagesNames2 = [
  "All",
  "Final",
  "Semi-Final",
];

export const ColumnsBlock = ({ showPanel, setShowPanel }) => {
  function BasicTabs() {
    const [value, setValue] = React.useState(0);
    const [index, setIndex] = React.useState(0);
    const [selectedUserId, setSelectedUserId] = React.useState(-1);
    const [sortedPairs, setSortedPairs] = React.useState(draw.pairs.sort((a, b) => a.number - b.number))

    const allSerials = Array.from({length: [...draw.pairs].reduce((acc, value) => Math.max(acc, value.serial), 0)}, (_, i) => i + 1);

    const allSerialsReversed = allSerials.reverse();

    console.log(allSerialsReversed);

    const allSerialsLast = allSerialsReversed.slice(-2);

    console.log(allSerialsLast);

    const pairs = allSerials.map((i) => {
      const r = sortedPairs.filter((pair) => pair.serial === i).map((pair) => {
        let p = {...pair};
        p.user1 = null;
        p.user2 = null;
        if (p.sp1_id > 0) {
          p.user1 = draw.competitors.find((comp) => comp.user.id === p.sp1_id)
        };
        if (p.sp2_id > 0) {
          p.user2 = draw.competitors.find((comp) => comp.user.id === p.sp2_id)
        };

        return p;
      });

      return {
        serial: i,
        pairs: r,
      }
    });

    const pairsScroll = allSerials.filter((i) => i > 2).map((i) => {
      const r = sortedPairs.filter((pair) => pair.serial === i).map((pair) => {
        let p = {...pair};
        p.user1 = null;
        p.user2 = null;
        if (p.sp1_id > 0) {
          p.user1 = draw.competitors.find((comp) => comp.user.id === p.sp1_id)
        };
        if (p.sp2_id > 0) {
          p.user2 = draw.competitors.find((comp) => comp.user.id === p.sp2_id)
        };

        return p;
      })

      return {
        serial: i,
        pairs: r,
      }
    });

    const finalsPairs = [2, 1, 0];

    const finalPairsDraw = sortedPairs.filter((pair) => pair.serial < 3 && pair.sp1_id !== 0 && pair.sp2_id !== 0).map((pair) => {
        let p = {...pair};
        p.user1 = null;
        p.user2 = null;
        if (p.sp1_id > 0) {
          p.user1 = draw.competitors.find((comp) => comp.user.id === p.sp1_id)
        };
        if (p.sp2_id > 0) {
          p.user2 = draw.competitors.find((comp) => comp.user.id === p.sp2_id)
        };

        return p;
      }
    ).map((pair) => {
      return {
        serial: pair.serial,
        pairs: [pair],
      }
    });
    /* sp1_id & sp2_id != 0 */

    console.log(pairs);
    console.log(value);

    const hasScroll = pairsScroll.reduce((acc, value) => acc += value.pairs.length, 0) > 0;

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const screenWidth = window.innerWidth;

    const breakpoint = 900;

    let pairsSliced = pairsScroll.slice(index, index + 3);

    const pairsSlicedSmallScreen = pairsScroll.slice(index, index + 1);

    return (
      <>
        <GridTopBar showPanel={showPanel} setShowPanel={setShowPanel} />
        <StyledRoundSettersBlock>
          <StyledSettersBox>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="scrollable prevent tabs example"
              variant="fullWidth"
              fullWidth={true}
              scrollButtons={true}
              TabIndicatorProps={{
                style: {
                  display: 'none',
                }
              }}
            >
              <StyledTab label="All" />
              {allSerialsReversed.map((i) => (
                <StyledTab label={stagesNames[i]} />
              ))}
            </Tabs>
          </StyledSettersBox>
        </StyledRoundSettersBlock>

        {value === 0 ? (
          <>
              <StyledGridBox>
                {finalPairsDraw.map((pair, i) => (
                  <>
                    {pair ? (
                      <StyledColumn>
                      <StyledColumnRounds>{stagesNames2[pair.serial]}</StyledColumnRounds>
                      <Column
                        pairs={pair.pairs}
                        selectedUserId={selectedUserId}
                        setSelectedUserId={setSelectedUserId}
                      />
                    </StyledColumn>
                    ) : (
                      ''
                    )}
                  </>
                ))}
            </StyledGridBox>
            {hasScroll ? (
              <>
                <Buttons
                  index={index}
                  setIndex={setIndex}
                  maxIndex={pairsScroll.length}
                  screenWidth={screenWidth}
                  breakpoint={breakpoint}
                />
                <StyledGridBox>
                  {screenWidth < breakpoint ? (
                    pairsSlicedSmallScreen.map((pair, i) => (
                      <StyledColumn>
                        <StyledColumnRounds>{stagesNames[pair.serial]}</StyledColumnRounds>
                        <Column
                          allSerialsLast={allSerialsLast}
                          pairs={pair.pairs}
                          selectedUserId={selectedUserId}
                          setSelectedUserId={setSelectedUserId}
                        />
                      </StyledColumn>
                    ))
                  ) : (
                    pairsSliced.map((pair, i) => (
                      <StyledColumn>
                        <StyledColumnRounds>{stagesNames[pair.serial]}</StyledColumnRounds>
                        <Column
                          allSerialsLast={allSerialsLast}
                          pairs={pair.pairs}
                          selectedUserId={selectedUserId}
                          setSelectedUserId={setSelectedUserId}
                        />
                      </StyledColumn>
                    ))
                  )}
                </StyledGridBox>
              </>
            ) : (
              null
            )}
          </>
        ) : (
          <StyledGridBox>
            <StyledColumn>
                <StyledColumnRounds>{stagesNames[pairs[value - 1].serial]}</StyledColumnRounds>
                <Column
                  pairs={pairs[value - 1].pairs}
                />
            </StyledColumn>
          </StyledGridBox>
        )}
      </>
    );
  };

  return (
    <BasicTabs />
  )
};
