import { historyData } from '@constants/index';
import styles from '@styles/components/history.module.scss';

const History = () => (
  <div className={styles.history}>
    <div className={styles['history__top-row']}>
      {historyData.topRow.map(({ title, location, description, color }) => (
        <div key={title} className={`${styles['history__top-row-item']} ${styles[color]}`}>
          <div className={styles.history__title}>{title}</div>

          {location && (
            <div className={styles.history__location}>
              <img
                className={`${styles['history__location-image']} ${styles[color]}`}
                src="/static/images/location.svg"
                alt="location icon"
              />
              <div className={styles['history__location-text']}>{location}</div>
            </div>
          )}

          <div className={styles.history__description}>{description}</div>
        </div>
      ))}
    </div>

    <div className={styles.history__separator}>
      <img
        className={styles['history__separator-arrow']}
        src="/static/images/arrow-down-blue.svg"
        alt="arrow icon"
      />
    </div>

    <div className={styles['history__bottom-row']}>
      {historyData.bottomRow.map(({ title, location, description, color }) => (
        <div key={title} className={`${styles['history__bottom-row-item']} ${styles[color]}`}>
          <div className={styles.history__title}>{title}</div>

          {location && (
            <div className={styles.history__location}>
              <img
                className={`${styles['history__location-image']} ${styles[color]}`}
                src="/static/images/location.svg"
                alt="location icon"
              />
              <div className={styles['history__location-text']}>{location}</div>
            </div>
          )}

          <div className={styles.history__description}>{description}</div>
        </div>
      ))}
    </div>
  </div>
);

export default History;
