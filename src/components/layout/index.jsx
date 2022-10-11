import styles from '@styles/components/layout.module.scss';
import PropTypes from 'prop-types';

const Layout = ({ filled, children }) => (
  <div className={`${styles.container} ${filled ? styles['filled-background'] : ''}`}>
    <div className={styles.layout}>{children}</div>
  </div>
);

Layout.propTypes = {
  filled: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default Layout;
