import MainButton from '@components/main-button';
import styles from '@styles/components/vacancy-description.module.scss';
import PropTypes from 'prop-types';

const VacancyDescription = ({ title, description, location, time }) => (
  <div className={styles['vacancy-description']}>
    <div className={styles['vacancy-description__content']}>
      <div className={styles['vacancy-description__title']}>{title}</div>
      <div className={styles['vacancy-description__description']}>{description}</div>
      <div className={styles['vacancy-description__info']}>
        <div className={styles['vacancy-description__location']}>
          <img src="/static/images/location.svg" alt="location icon" />
          <div>{location}</div>
        </div>

        <div className={styles['vacancy-description__time']}>
          <img src="/static/images/clock.svg" alt="clock icon" />
          <div>{time}</div>
        </div>
      </div>
    </div>

    <MainButton onClick={() => {}} text="apply" size="big" width="240px" />
  </div>
);

VacancyDescription.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default VacancyDescription;
