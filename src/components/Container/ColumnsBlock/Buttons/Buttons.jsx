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
          className="buttons__button buttons__button--prev"
          onClick={hideFinal}
        >
          <div className="buttons__icon buttons__icon--prev"></div>
          <div className="buttons__text">
            Previous Stage 
          </div>
        </button>
      ) : (
        <button
          type="button"
          className="buttons__button buttons__button--next"
          onClick={showFinal}
        >
          <div className="buttons__text">
            Next Stage 
          </div>
          <div className="buttons__icon buttons__icon--next"></div>
        </button>
      )
    }
    </div>
  );
};
