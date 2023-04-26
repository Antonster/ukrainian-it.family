import { useMediaQuery } from '@hooks';
import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Fragment, memo } from 'react';

import styles from './SectionWrapper.module.scss';

const SectionWrapper = ({
  big,
  question,
  name,
  titles,
  description,
  titleColor,
  link,
  linkText,
  children,
}) => {
  const isSmallScreen = useMediaQuery('(max-width: 1024px)');

  return (
    <div className={`${styles.container} ${big ? styles.big : styles.small}`}>
      <div className={styles['name-wrapper']}>
        <div className={styles['name-wrapper__dot']} />
        <div
          className={`
          ${styles['name-wrapper__text']} 
          ${titleColor === 'secondary' ? styles['color-secondary'] : ''}
        `}
        >
          {name}
        </div>
      </div>

      <div className={styles['titles-wrapper']}>
        <div>
          {titles?.map((item) => (
            <Fragment key={item}>
              <h3
                className={`
                ${styles['titles-wrapper__name']} 
                ${titleColor === 'secondary' ? styles['color-secondary'] : ''}
              `}
              >
                {item}
                <span className={styles['titles-wrapper__dot']}>{question ? '?' : '.'}</span>
              </h3>
            </Fragment>
          ))}
        </div>

        {!isSmallScreen && link && (
          <Link href={link}>
            <a className={styles['titles-wrapper__link']}>
              <div className={styles['titles-wrapper__link-text']}>{linkText}</div>
              <Image
                src="/static/images/arrow-yellow.svg"
                alt="arrow icon"
                width={16}
                height={17}
              />
            </a>
          </Link>
        )}
      </div>

      {description && <div className={styles.description}>{description}</div>}

      {children}

      {isSmallScreen && link && (
        <Link href={link}>
          <a className={styles['titles-wrapper__link']}>
            <div className={styles['titles-wrapper__link-text']}>{linkText}</div>
            <Image src="/static/images/arrow-yellow.svg" alt="arrow icon" width={16} height={17} />
          </a>
        </Link>
      )}
    </div>
  );
};

SectionWrapper.propTypes = {
  big: PropTypes.bool,
  question: PropTypes.bool,
  name: PropTypes.string.isRequired,
  titles: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string,
  titleColor: PropTypes.oneOf(['secondary']),
  link: PropTypes.string,
  linkText: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default memo(SectionWrapper);
