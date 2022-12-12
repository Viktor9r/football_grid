import React from 'react';
import './Buttons.scss';
import classNames from 'classnames';
/* eslint-disable */

export const Buttons = (props) => {
  const showquarter = () => {
    props.setquarterVisibility(true);
  };

  const hidequarter = () => {
    props.setquarterVisibility(false);
  };

  return (
    <div className={classNames({
      buttons: true,
      buttonsquarter: props.quarterVisibility
    })}>
      {props.quarterVisibility ? (
        <button
          type="button"
          className="buttons__button"
          onClick={hidequarter}
        >
          Previous Stage
        </button>
      ) : (
        <button
          type="button"
          className="buttons__button"
          onClick={showquarter}
        >
          Next Stage
        </button>
      )
    }
    </div>
  );
};
