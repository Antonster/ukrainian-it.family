import { useMediaQuery } from '@hooks';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import PropTypes from 'prop-types';
import { memo } from 'react';

import styles from './ServiceProcess.module.scss';

const ServiceProcess = ({ data }) => {
  const t = useTranslations('Sections.ServiceProcess');
  const isSmallScreen = useMediaQuery('(max-width: 1024px)');

  return (
    <div className={styles.container}>
      {data.map(({ image, title, content }, index) => {
        const long = (index + 1) % 2 === 0;

        return (
          <div key={title} className={styles['process-item']}>
            <div
              className={`${styles['process-item__image-container']} ${styles[`color-${index}`]}`}
            >
              <Image src={image} alt="process icon" width={80} height={80} />
              <div className={styles['process-item__image-container-triangle']}>
                <Image
                  src={`/static/images/service-triangle-${index + 1}.svg`}
                  alt="process icon"
                  width={40}
                  height={120}
                />
              </div>
            </div>

            {!isSmallScreen && (
              <div className={styles['process-item__arrow']}>
                <Image
                  src={`/static/images/arrow-${long ? 'long' : 'short'}.png`}
                  alt="arrow icon"
                  width={12}
                  height={long ? 318 : 68}
                />
              </div>
            )}

            <div className={styles['process-item__content']}>
              <div className={styles['process-item__title']}>{title}</div>

              {content &&
                content.length === 1 &&
                content.map((item) => (
                  <div key={item} className={styles['process-item__text']}>
                    {item}
                  </div>
                ))}

              {content && content.length > 1 && (
                <ul className={styles['process-item__list']}>
                  {index === 0 && (
                    <li className={styles['process-item__text']}>
                      {t('FirstRow.0')}{' '}
                      <Link href="/contacts">
                        <a className={styles['process-item__link']}>{t('FirstRow.1')}</a>
                      </Link>
                    </li>
                  )}

                  {content.map((item) => (
                    <li key={item} className={styles['process-item__text']}>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

ServiceProcess.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.arrayOf(PropTypes.string.isRequired),
    }).isRequired,
  ).isRequired,
};

export default memo(ServiceProcess);
