import { careerData } from '@constants';
import { useDebounce } from '@hooks';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { useCallback, useState } from 'react';

import styles from './VacancyList.module.scss';

export const VacancyList = () => {
  const t = useTranslations('Sections.VacancyList');
  const router = useRouter();
  const [searchValue, setSearchValue] = useState('');
  const [filteredCareerData, setFilteredCareerData] = useState(careerData[router.locale]);

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
          <Image src="/static/images/loupe.svg" alt="loupe icon" width={20} height={20} />
        </div>
        <input
          className={styles.search__input}
          type="text"
          placeholder={t('SearchPlaceholder')}
          value={searchValue}
          onChange={onChangeSearchValue}
        />
      </div>

      <div className={styles.list}>
        {filteredCareerData.map(({ id, title, location, time }) => (
          <div key={id} className={styles.list__item}>
            <div className={styles['list__item-content']}>
              <Link href={`/career/${id}`}>
                <a className={styles['list__item-title']}>{title}</a>
              </Link>

              <div className={styles['list__item-info']}>
                <div className={styles['list__item-location']}>
                  <Image
                    src="/static/images/location.svg"
                    alt="location icon"
                    width={16}
                    height={20}
                  />
                  <div>{location}</div>
                </div>

                <div className={styles['list__item-time']}>
                  <Image src="/static/images/clock.svg" alt="clock icon" width={24} height={24} />
                  <div>{time}</div>
                </div>
              </div>
            </div>

            <Link href={`/career/${id}`}>
              <a className={styles['list__item-link']}>
                <div>{t('ButtonText')}</div>
                <Image
                  src="/static/images/arrow-blue.svg"
                  alt="arrow icon"
                  width={25}
                  height={25}
                />
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
