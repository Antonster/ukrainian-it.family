/* eslint-disable react/no-array-index-key */
import styles from '@styles/components/breadcrumbs.module.scss';
import Link from 'next/link';
import PropTypes from 'prop-types';

const Breadcrumbs = ({ crumbs, centered }) => {
  const crumbList = crumbs.reduce((acc, item, i) => (i === 0 ? [item] : acc.concat('/', item)), []);

  return (
    <div className={styles.container}>
      <div className={`${styles.breadcrumbs} ${centered ? styles.centered : ''}`}>
        {crumbList.map((item, i) => {
          if (item === '/') {
            return (
              <span key={i}>
                <img
                  className={styles.breadcrumbs__separator}
                  src="/static/images/arrow-down-blue.svg"
                  alt="arrow icon"
                />
              </span>
            );
          }

          if (typeof item === 'string') {
            return (
              <span key={i} className={styles.breadcrumbs__text}>
                {item}
              </span>
            );
          }

          return (
            <Link key={i} href={item.link}>
              <a className={styles.breadcrumbs__link}>{item.text}</a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

Breadcrumbs.propTypes = {
  crumbs: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        link: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }),
    ]),
  ).isRequired,
  centered: PropTypes.bool,
};

export default Breadcrumbs;
