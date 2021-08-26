// /* eslint-disable */
import React from 'react';
import propTypes from 'prop-types';

export const GoodsList = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li key={good}>
        {good}
      </li>
    ))}
  </ul>
);

GoodsList.propTypes = {
  goods: propTypes.arrayOf(
    propTypes.string.isRequired,
  ),
};

GoodsList.defaultProps = {
  goods: [],
};

/* export const GoodsList = React.memo(
  ({ goods }) => (
    <ul>
      {goods.map(good => (
        <li key={good}>
          {good}
        </li>
      ))}
    </ul>
  ),
);

GoodsList.propTypes = {
  goods: propTypes.arrayOf({
    good: propTypes.string.isRequired,
  }),
};

GoodsList.defaultProps = {
  goods: [],
}; */
