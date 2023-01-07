import { MainButton } from '@components';
import { useMediaQuery } from '@hooks';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { PropTypes } from 'prop-types';
import { memo } from 'react';

import styles from './ServiceList.module.scss';

const ServiceList = ({ servicesData }) => {
  const t = useTranslations('Components.ServiceList');
  const isSmallScreen = useMediaQuery('(max-width: 1024px)');

  return (
    <div className={styles.container}>
      {servicesData.map(({ link, image, name, description }, index) => {
        const primary = (index + 1 - 2) % 4 === 0 || (index + 1 - 3) % 4 === 0;

        return (
          <div
            key={image}
            className={`${styles.item} ${primary ? styles.primary : styles.secondary}`}
          >
            <div className={styles['item__text-wrapper']}>
              <div className={styles.item__name}>{name}</div>
              <div className={styles.item__description}>{description}</div>
            </div>

            <Image
              src={image}
              alt={`${name} icon`}
              width={isSmallScreen ? 96 : 240}
              height={isSmallScreen ? 96 : 240}
            />

            <div className={styles.item__button}>
              <MainButton
                type="link"
                href={link}
                width="100%"
                buttonStyle={!primary ? 'primary' : 'secondary'}
                size="big"
                text={t('ButtonText')}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

ServiceList.propTypes = {
  servicesData: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default memo(ServiceList);
