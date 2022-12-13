import React from 'react';
import './Buttons.scss';
import classNames from 'classnames';
/* eslint-disable */

export const Buttons = (props) => {
  const showFinal = () => {
    props.setQuarterVisibility(true);
  };

  const hideFinal = () => {
    props.setQuarterVisibility(false);
  };

  return (
    <div className={classNames({
      buttons: true,
      "buttons--start": !props.quarterVisibility
    })}>
      {props.quarterVisibility ? (
        <button
          type="button"
          className="buttons__button"
          onClick={hideFinal}
        >
          Previous Stage
        </button>
      ) : (
        <button
          type="button"
          className="buttons__button"
          onClick={showFinal}
        >
          Next Stage
        </button>
      )
    }
    </div>
  );
};
