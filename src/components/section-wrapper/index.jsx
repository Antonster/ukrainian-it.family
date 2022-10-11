import styles from '@styles/components/section-wrapper.module.scss';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Fragment } from 'react';

const SectionWrapper = ({ big, name, titles, link, linkText = 'see all', children }) => (
  <div className={`${styles.container} ${big ? styles.big : styles.small}`}>
    <div className={styles['name-wrapper']}>
      <div className={styles['name-wrapper__dot']} />
      <div className={styles['name-wrapper__text']}>{name}</div>
    </div>

    <div className={styles['titles-wrapper']}>
      <div>
        {titles.map((item) => (
          <Fragment key={item}>
            <div className={styles['titles-wrapper__name']}>
              {item}
              <span className={styles['titles-wrapper__dot']}>.</span>
            </div>
          </Fragment>
        ))}
      </div>

      {link && (
        <Link href={link}>
          <a className={styles['titles-wrapper__link']}>
            <div className={styles['titles-wrapper__link-text']}>{linkText}</div>
            <img src="/static/images/arrow-yellow.svg" alt="arrow icon" />
          </a>
        </Link>
      )}
    </div>

    {children}
  </div>
);

SectionWrapper.propTypes = {
  big: PropTypes.bool,
  name: PropTypes.string.isRequired,
  titles: PropTypes.arrayOf(PropTypes.string).isRequired,
  link: PropTypes.string,
  linkText: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default SectionWrapper;
