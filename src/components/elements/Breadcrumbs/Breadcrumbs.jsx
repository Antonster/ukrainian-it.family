import { useMediaQuery } from '@hooks';
import { nanoid } from 'nanoid';
import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { memo, useMemo } from 'react';

import styles from './Breadcrumbs.module.scss';

const Breadcrumbs = ({ crumbs, centered }) => {
  const isMobileScreen = useMediaQuery('(max-width: 480px)');
  const crumbList = useMemo(() => {
    if (isMobileScreen) {
      return ['/', crumbs.at(-2)];
    }

    return crumbs.reduce((acc, item, index) => (index === 0 ? [item] : acc.concat('/', item)), []);
  }, [crumbs, isMobileScreen]);

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

export default memo(Breadcrumbs);
