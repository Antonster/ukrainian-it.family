import { MainButton } from '@components/elements';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import PropTypes from 'prop-types';

import styles from './VacancyDescription.module.scss';

export const VacancyDescription = ({ title, description, location, time }) => {
  const t = useTranslations('Sections.VacancyDescription');

  return (
    <div className={styles['vacancy-description']}>
      <div className={styles['vacancy-description__content']}>
        <div className={styles['vacancy-description__title']}>{title}</div>
        <div className={styles['vacancy-description__description']}>{description}</div>
        <div className={styles['vacancy-description__info']}>
          <div className={styles['vacancy-description__location']}>
            <Image src="/static/images/location.svg" alt="location icon" width={16} height={20} />
            <div>{location}</div>
          </div>

          <div className={styles['vacancy-description__time']}>
            <Image src="/static/images/clock.svg" alt="clock icon" width={24} height={24} />
            <div>{time}</div>
          </div>
        </div>
      </div>

      <MainButton href="#career-form" type="link" text={t('ButtonText')} size="big" width="240px" />
    </div>
  );
};

VacancyDescription.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};
