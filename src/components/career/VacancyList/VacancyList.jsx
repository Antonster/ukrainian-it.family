import { CareerItem } from '@components';
import { useDebounce } from '@hooks';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import PropTypes from 'prop-types';
import { memo, useCallback, useEffect, useState } from 'react';

import styles from './VacancyList.module.scss';

const VacancyList = ({ careerData }) => {
  const t = useTranslations('Components.VacancyList');
  const [searchValue, setSearchValue] = useState('');
  const [filteredCareerData, setFilteredCareerData] = useState();

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

  useEffect(() => {
    setFilteredCareerData(careerData);
  }, [careerData]);

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
        {filteredCareerData?.map(({ id, title, location, time }) => (
          <CareerItem key={id} id={id} title={title} location={location} time={time} />
        ))}
      </div>
    </div>
  );
};

VacancyList.propTypes = {
  careerData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          type: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
          content: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
            PropTypes.string.isRequired,
          ]).isRequired,
        }).isRequired,
      ).isRequired,
      links: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string.isRequired,
          href: PropTypes.string.isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
  ).isRequired,
};

export default memo(VacancyList);
