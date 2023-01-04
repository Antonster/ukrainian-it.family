import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import PropTypes from 'prop-types';
import { memo } from 'react';

import styles from './CareerItem.module.scss';

const CareerItem = ({ id, title, location, time }) => {
  const t = useTranslations('Components.CareerItem');

  return (
    <div className={styles['career-item']}>
      <div className={styles['career-item__content']}>
        <Link href={`/career/${id}`}>
          <a className={styles['career-item__title']}>{title}</a>
        </Link>

        <div className={styles['career-item__info']}>
          <div className={styles['career-item__location']}>
            <Image src="/static/images/location.svg" alt="location icon" width={24} height={24} />
            <div>{location}</div>
          </div>

          <div className={styles['career-item__time']}>
            <Image src="/static/images/clock.svg" alt="clock icon" width={24} height={24} />
            <div>{time}</div>
          </div>
        </div>
      </div>

      <Link href={`/career/${id}`}>
        <a className={styles['career-item__link']}>
          <div>{t('ButtonText')}</div>
          <Image src="/static/images/arrow-blue.svg" alt="arrow icon" width={25} height={25} />
        </a>
      </Link>
    </div>
  );
};

CareerItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default memo(CareerItem);
