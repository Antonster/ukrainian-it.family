import { careerData } from '@constants/index';
import useDebounce from '@hooks/useDebounce';
import styles from '@styles/components/vacancy-list.module.scss';
import Link from 'next/link';
import { useCallback, useState } from 'react';

const VacancyList = () => {
  const [searchValue, setSearchValue] = useState('');
  const [filteredCareerData, setFilteredCareerData] = useState(careerData);

  const onChangeSearchValue = useCallback((event) => {
    setSearchValue(event.target.value);
  }, []);

  useDebounce(
    () => {
      if (searchValue) {
        const newData = filteredCareerData.filter(
          ({ title, location, time }) =>
            title.toLowerCase().includes(searchValue) ||
            location.toLowerCase().includes(searchValue) ||
            time.toLowerCase().includes(searchValue),
        );

        setFilteredCareerData(newData);
      } else {
        setFilteredCareerData(careerData);
      }
    },
    1000,
    [searchValue],
  );

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <div className={styles.search__button}>
          <img src="/static/images/loupe.svg" alt="loupe icon" />
        </div>
        <input
          className={styles.search__input}
          type="text"
          placeholder="Search for job opportunities"
          value={searchValue}
          onChange={onChangeSearchValue}
        />
      </div>

      <div className={styles.list}>
        {filteredCareerData.map(({ id, title, location, time }) => (
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
};

export default VacancyList;
