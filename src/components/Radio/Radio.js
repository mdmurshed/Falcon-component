import React from 'react';
import PropTypes, { object } from 'prop-types';

export const Radio = ({ horizontal, options, defaultCheck, getResult }) => {
  const func = obj => 'active' in obj;

  return (
    <div
      className={`d-flex ${
        horizontal
          ? 'flex-row align-items-center align-content-center'
          : 'flex-column'
      }`}
    >
      {options?.map(option => (
        <React.Fragment key={option.id}>
          {func(option) ? (
            option?.active && (
              <label className="radio-custom">
                <input
                  type="radio"
                  name="radio"
                  id={option.id}
                  onClick={() => getResult(option.value)}
                  defaultChecked={option.value === defaultCheck}
                />
                <span className="c-check-Mark" />
                <label htmlFor={option.id}>{option.label}</label>
              </label>
            )
          ) : (
            <label className="radio-custom">
              <input
                type="radio"
                name="radio"
                id={option.id}
                onClick={() => getResult(option.value)}
                defaultChecked={option.value === defaultCheck}
              />
              <span className="c-check-Mark" />
              <label htmlFor={option.id}>{option.label}</label>
            </label>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

Radio.propTypes = {
  horizontal: PropTypes.bool,
  options: PropTypes.arrayOf(object).isRequired,
  defaultCheck: PropTypes.string,
  getResult: PropTypes.func.isRequired
};
