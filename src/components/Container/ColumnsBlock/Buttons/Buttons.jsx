import React from 'react';
import './Buttons.scss';
import classNames from 'classnames';
/* eslint-disable */

export const Buttons = (props) => {
  const showFinal = () => {
    props.setFinalVisibility(true);
  };

  const hideFinal = () => {
    props.setFinalVisibility(false);
  };

  return (
    <div className={classNames({
      buttons: true,
      buttonsFinal: props.finalVisibility
    })}>
      {props.finalVisibility ? (
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
