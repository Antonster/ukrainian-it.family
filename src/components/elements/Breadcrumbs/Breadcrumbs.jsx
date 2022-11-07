import { nanoid } from 'nanoid';
import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';

import styles from './Breadcrumbs.module.scss';

export const Breadcrumbs = ({ crumbs, centered }) => {
  const crumbList = crumbs.reduce(
    (acc, item, index) => (index === 0 ? [item] : acc.concat('/', item)),
    [],
  );

  return (
    <div className={styles.container}>
      <div className={`${styles.breadcrumbs} ${centered ? styles.centered : ''}`}>
        {crumbList.map((item) => {
          if (item === '/') {
            return (
              <span key={nanoid()} className={styles.breadcrumbs__separator}>
                <Image
                  src="/static/images/arrow-down-blue.svg"
                  alt="arrow icon"
                  width={16}
                  height={16}
                />
              </span>
            );
          }

          if (typeof item === 'string') {
            return (
              <span key={nanoid()} className={styles.breadcrumbs__text}>
                {item}
              </span>
            );
          }

          return (
            <Link key={nanoid()} href={item.link}>
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
