import React, { useState } from 'react';
import './ColumnsBlock.scss';
import classNames from 'classnames';
import { Column } from './Column/Column';
import { Buttons } from './Buttons/Buttons';
import { GridTopBar } from './GridTopBar/GridTopBar';
/* eslint-disable */

export const ColumnsBlock = ({ showPanel, setShowPanel }) => {
  const [quarterVisibility, setQuarterVisibility] = useState(false);
  const [team, setTeam] = useState(true);
  const [all, setAll] = useState(true);
  const [thirtytwo, setThirtyTwo] = useState(false);
  const [sixteen, setSixteen] = useState(false);
  const [eight, setEight] = useState(false);
  const [quarter, setQuarter] = useState(false);
  const [semi, setSemi] = useState(false);
  const [final, setFinal] = useState(false);
  const [showFinals, setShowFinals] = useState(false);

  const onlyAll = () => {
    setAll(true);
    setThirtyTwo(false);
    setSixteen(false);
    setEight(false);
    setQuarter(false);
    setSemi(false);
    setFinal(false);
  };

  const onlyThirtyTwo = () => {
    setThirtyTwo(true);
    setAll(false);
    setSixteen(false);
    setEight(false);
    setQuarter(false);
    setSemi(false);
    setFinal(false);
  };

  const onlySixteen = () => {
    setSixteen(true);
    setAll(false);
    setThirtyTwo(false);
    setEight(false);
    setQuarter(false);
    setSemi(false);
    setFinal(false);
  };

  const onlyEight = () => {
    setEight(true);
    setAll(false);
    setThirtyTwo(false);
    setSixteen(false);
    setQuarter(false);
    setSemi(false);
    setFinal(false);
  };

  const onlyQuarter = () => {
    setQuarter(true);
    setAll(false);
    setThirtyTwo(false);
    setSixteen(false);
    setEight(false);
    setSemi(false);
    setFinal(false);
  };

  const onlySemi = () => {
    setQuarter(false);
    setAll(false);
    setThirtyTwo(false);
    setSixteen(false);
    setEight(false);
    setSemi(true);
    setFinal(false);
  };

  const onlyFinal = () => {
    setQuarter(false);
    setAll(false);
    setThirtyTwo(false);
    setSixteen(false);
    setEight(false);
    setSemi(false);
    setFinal(true);
  };

  return (
    <div className="columns-block">
      <GridTopBar showPanel={showPanel} setShowPanel={setShowPanel} />
      <div className={classNames({
        "round-setters": true,
        "round-setters--bigger-margin": !all
      })}>
        <button
          onClick={onlyAll}
          className={classNames({
            "round-setters__button": true,
            "round-setters__button--all": all,
          })}
        >
          all
        </button>
        <button
          onClick={onlyThirtyTwo}
          className="round-setters__button round-setters__button--thtw"
        >
          1/32 finals
        </button>
        <button
          onClick={onlySixteen}
          className="round-setters__button round-setters__button--sxtn"
        >
          1/16 finals
        </button>
        <button
          onClick={onlyEight}
          className="round-setters__button round-setters__button--eight"
        >
          1/8 finals
        </button>
        <button
          onClick={onlyQuarter}
          className="round-setters__button round-setters__button--quarter"
        >
          1/4 finals
        </button>
        <button
          onClick={onlySemi}
          className="round-setters__button round-setters__button--semi"
        >
          Semi-finals
        </button>
        <button
          onClick={onlyFinal}
          className="round-setters__button round-setters__button--final"
        >
          Final
        </button>
      </div>
      <div className={classNames({
        "columns-block__column": true,
        "columns-block__column--first": true,
        "columns-block__column--hide": sixteen || eight || quarter || thirtytwo || final || showFinals === false,
        "columns-block__column--first-position": semi,
      })}>
        <div className={classNames({
          "columns-block__rounds": true,
          "columns-block__rounds--mar": team,
        })}>Semi-final 1</div>
        <Column
          blocksQuant={[1]}
          columnId={5}
          team={team}
        />
      </div>
      <div className={classNames({
        "columns-block__column": true,
        "columns-block__column--second": true,
        "columns-block__column--hide": sixteen || eight || quarter || thirtytwo || final || showFinals === false,
        "columns-block__column--first-position": semi,
      })}>
        <div className={classNames({
          "columns-block__rounds": true,
          "columns-block__rounds--mar": team,
        })}>Semi-final 2</div>
        <Column
          blocksQuant={[1]}
          columnId={6}
          team={team}
        />
      </div>
      <div className={classNames({
        "columns-block__column": true,
        "columns-block__column--third": true,
        "columns-block__column--hide": sixteen || eight || quarter || thirtytwo || semi || showFinals === false,
        "columns-block__column--first-position": final
      })}>
        <div className={classNames({
          "columns-block__rounds": true,
          "columns-block__rounds--mar": team,
        })}>Final</div>
        <Column
          blocksQuant={[1]}
          columnId={7}
          team={team}
        />
      </div>

      {all && (
        <>
          <Buttons
            all={all}
            quarterVisibility={quarterVisibility}
            setQuarterVisibility={setQuarterVisibility}
          />
        </>
      )}

      <div className={classNames({
        "columns-block__column": true,
        "columns-block__column--first": true,
        "columns-block__column--first--quarter": quarterVisibility,
        "columns-block__column--hide": sixteen || eight || quarter || semi || final,
        "columns-block__column--first-position": thirtytwo
      })}>
        <div className={classNames({
          "columns-block__rounds": true,
          "columns-block__rounds--mar": team,
        })}>1/32 finals</div>
        <Column
          blocksQuant={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ,16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32]}
          columnId={1}
          team={team}
        />
      </div>
      <div className={classNames({
        "columns-block__column": true,
        "columns-block__column--second": true,
        "columns-block__column--second--quarter": quarterVisibility,
        "columns-block__column--hide": thirtytwo || eight || quarter || semi || final,
        "columns-block__column--first-position": sixteen
      })}>
        <div className={classNames({
          "columns-block__rounds": true,
          "columns-block__rounds--mar": team,
        })}>1/16 finals</div>
        <Column
          blocksQuant={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ,16]}
          columnId={2}
          team={team}
        />
      </div>
      <div className={classNames({
        "columns-block__column": true,
        "columns-block__column--third": true,
        "columns-block__column--third--quarter": quarterVisibility,
        "columns-block__column--hide": sixteen || quarter || thirtytwo || semi || final,
        "columns-block__column--first-position": eight
      })}>
        <div className={classNames({
          "columns-block__rounds": true,
          "columns-block__rounds--mar": team,
        })}>1/8 finals</div>
        <Column
          blocksQuant={[1, 2, 3, 4, 5, 6, 7, 8]}
          columnId={3}
          team={team}
        />
      </div>
      <div className={classNames({
        "columns-block__column": true,
        "columns-block__column--fourth": true,
        "columns-block__column--fourth--quarter": quarterVisibility,
        "columns-block__column--hide": sixteen || eight || thirtytwo || semi || final,
        "columns-block__column--first-position": quarter
      })}>
        <div className={classNames({
          "columns-block__rounds": true,
          "columns-block__rounds--mar": team,
        })}>Quarter finals</div>
        <Column
          columnId={4}
          team={team}
          blocksQuant={[1, 2, 3, 4]}
          showFinals={showFinals}
          setShowFinals={setShowFinals}
        />
      </div>
    </div>
  );
};
