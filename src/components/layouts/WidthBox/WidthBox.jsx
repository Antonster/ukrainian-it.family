import PropTypes from 'prop-types';
import { memo } from 'react';

import styles from './WidthBox.module.scss';

const WidthBox = ({ filled, small, children }) => (
  <div className={`${styles.container} ${filled ? styles['filled-background'] : ''}`}>
    <div className={`${styles.layout} ${small ? styles.small : ''}`}>{children}</div>
  </div>
);

WidthBox.propTypes = {
  filled: PropTypes.bool,
  small: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default memo(WidthBox);
