import styles from '@styles/components/title-section-wrapper.module.scss';
import PropTypes from 'prop-types';

const TitleSectionWrapper = ({ title, description, children }) => (
  <div className={styles.container}>
    <div className={styles['title-wrapper']}>
      <h1 className={styles['title-wrapper__title']}>{title}</h1>
      <div className={styles['title-wrapper__description']}>{description}</div>
    </div>

    {children}
  </div>
);

TitleSectionWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default TitleSectionWrapper;
