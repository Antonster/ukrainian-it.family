import PropTypes from 'prop-types';

import styles from './TitleSectionWrapper.module.scss';

export const TitleSectionWrapper = ({ title, description, small, children }) => (
  <div className={`${styles.container} ${small ? styles.small : ''}`}>
    <div className={styles['title-wrapper']}>
      <h1 className={styles['title-wrapper__title']}>{title}</h1>
      <div className={`${styles['title-wrapper__description']} ${small ? styles.small : ''}`}>
        {description}
      </div>
    </div>

    {children}
  </div>
);

TitleSectionWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  small: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};
