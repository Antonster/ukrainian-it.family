import { headerData } from '@constants';
import { LanguageSelection, NavigationItem } from '@elements';
import { WidthBox } from '@layouts';
import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';

import styles from './Header.module.scss';

export const Header = ({ fixed }) => (
  <div className={`${styles.container} ${fixed ? styles.fixed : ''}`}>
    <WidthBox>
      <header className={styles.header}>
        <div className={styles['header__logo-wrapper']}>
          <Link href="/">
            <a className={styles.header__logo}>
              <Image src="/static/images/logo-full.svg" alt="logo" width={120} height={70} />
            </a>
          </Link>

          <LanguageSelection />
        </div>

        <nav>
          <ul className={styles.header__navigation}>
            {headerData.map((item) => (
              <NavigationItem key={item.text} item={item} />
            ))}

            <li>
              <Link href="/contacts">
                <a className={styles['header__navigation-get-item']}>
                  <div className={styles['header__navigation-get-item-text']}>Get in touch</div>
                  <Image
                    src="/static/images/arrow-yellow.svg"
                    alt="arrow icon"
                    width={16}
                    height={16}
                  />
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </WidthBox>
  </div>
);

Header.propTypes = {
  fixed: PropTypes.bool,
};
