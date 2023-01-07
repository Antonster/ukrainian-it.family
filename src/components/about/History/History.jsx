import Image from 'next/image';
import PropTypes from 'prop-types';
import { memo } from 'react';

import styles from './History.module.scss';

const History = ({ historyData }) => (
  <div className={styles.history}>
    <div className={styles['history__top-row']}>
      {historyData.topRow.map(({ title, location, description, color }) => (
        <div key={title} className={`${styles['history__top-row-item']} ${styles[color]}`}>
          <div className={styles.history__title}>{title}</div>

          {location && (
            <div className={styles.history__location}>
              <div className={`${styles['history__location-image']} ${styles[color]}`}>
                <Image
                  src="/static/images/location.svg"
                  alt="location icon"
                  width={16}
                  height={24}
                />
              </div>
              <div className={styles['history__location-text']}>{location}</div>
            </div>
          )}

          <div className={styles.history__description}>{description}</div>
        </div>
      ))}
    </div>

    <div className={styles.history__separator}>
      <div className={styles['history__separator-arrow']}>
        <Image src="/static/images/arrow-down-blue.svg" alt="arrow icon" width={16} height={16} />
      </div>
    </div>

    <div className={styles['history__bottom-row']}>
      {historyData.bottomRow.map(({ title, location, description, color }) => (
        <div key={title} className={`${styles['history__bottom-row-item']} ${styles[color]}`}>
          <div className={styles.history__title}>{title}</div>

          {location && (
            <div className={styles.history__location}>
              <div className={`${styles['history__location-image']} ${styles[color]}`}>
                <Image
                  src="/static/images/location.svg"
                  alt="location icon"
                  width={16}
                  height={24}
                />
              </div>
              <div className={styles['history__location-text']}>{location}</div>
            </div>
          )}

          <div className={styles.history__description}>{description}</div>
        </div>
      ))}
    </div>
  </div>
);

History.propTypes = {
  historyData: PropTypes.shape({
    topRow: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        location: PropTypes.string,
        description: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
    bottomRow: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        location: PropTypes.string,
        description: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  }).isRequired,
};

export default memo(History);
