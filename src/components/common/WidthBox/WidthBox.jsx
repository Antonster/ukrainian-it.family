import PropTypes from 'prop-types';
import { memo } from 'react';

import styles from './WidthBox.module.scss';

const WidthBox = ({ filled, small, children }) => (
  <div
    className={`
      ${styles.container}
      ${filled === 'light' ? styles['filled-light'] : ''} 
      ${filled === 'dark' ? styles['filled-dark'] : ''}
    `}
  >
    <div className={`${styles.layout} ${small ? styles.small : ''}`}>{children}</div>
  </div>
);

WidthBox.propTypes = {
  filled: PropTypes.oneOf(['light', 'dark']),
  small: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default memo(WidthBox);
