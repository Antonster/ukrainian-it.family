import { careerData } from '@constants/index';
import styles from '@styles/components/vacancy-list.module.scss';
import Link from 'next/link';

const VacancyList = () => (
  <div className={styles.container}>
    <div className={styles.search}>
      <button className={styles.search__button} type="button">
        <img src="/static/images/loupe.svg" alt="loupe icon" />
      </button>
      <input
        className={styles.search__input}
        type="text"
        placeholder="Search for job opportunities"
      />
    </div>

    <div className={styles.list}>
      {careerData.map(({ id, title, location, time }) => (
        <div key={id} className={styles.list__item}>
          <div className={styles['list__item-content']}>
            <div className={styles['list__item-title']}>{title}</div>
            <div className={styles['list__item-info']}>
              <div className={styles['list__item-location']}>
                <img src="/static/images/location.svg" alt="location icon" />
                <div>{location}</div>
              </div>

              <div className={styles['list__item-time']}>
                <img src="/static/images/clock.svg" alt="clock icon" />
                <div>{time}</div>
              </div>
            </div>
          </div>

          <Link href={`/career/${id}`}>
            <a className={styles['list__item-link']}>
              <div>Details</div>
              <img src="/static/images/arrow-blue.svg" alt="arrow icon" />
            </a>
          </Link>
        </div>
      ))}
    </div>
  </div>
);

export default VacancyList;
