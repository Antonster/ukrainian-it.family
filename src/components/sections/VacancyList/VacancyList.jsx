import { CareerItem } from '@components/elements';
import { careerData } from '@constants';
import { useDebounce } from '@hooks';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { memo, useCallback, useState } from 'react';

import styles from './VacancyList.module.scss';

const VacancyList = () => {
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
        setFilteredCareerData(careerData[router.locale]);
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
          <CareerItem key={id} id={id} title={title} location={location} time={time} />
        ))}
      </div>
    </div>
  );
};

export default memo(VacancyList);
