import { MainButton } from '@components';
import { useMediaQuery } from '@hooks';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import PropTypes from 'prop-types';
import { memo } from 'react';

import styles from './VacancyDescription.module.scss';

const VacancyDescription = ({ title, description, location, time }) => {
  const t = useTranslations('Components.VacancyDescription');
  const isMobileScreen = useMediaQuery('(max-width: 480px)');

  return (
    <div className={styles['vacancy-description']}>
      <div className={styles['vacancy-description__content']}>
        <div className={styles['vacancy-description__title']}>{title}</div>
        <div className={styles['vacancy-description__description']}>{description}</div>
        <div className={styles['vacancy-description__info']}>
          <div className={styles['vacancy-description__location']}>
            <Image src="/static/images/location.svg" alt="location icon" width={24} height={24} />
            <div>{location}</div>
          </div>

          <div className={styles['vacancy-description__time']}>
            <Image src="/static/images/clock.svg" alt="clock icon" width={24} height={24} />
            <div>{time}</div>
          </div>
        </div>
      </div>

      <MainButton
        href="#career-form"
        type="link"
        text={t('ButtonText')}
        size="big"
        width={isMobileScreen ? '100%' : '240px'}
      />
    </div>
  );
};

VacancyDescription.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default memo(VacancyDescription);
