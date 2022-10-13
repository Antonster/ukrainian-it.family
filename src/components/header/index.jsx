import Layout from '@components/layout';
import NavigationItem from '@components/navigation-item';
import { headerData } from '@constants/index';
import styles from '@styles/components/header.module.scss';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [lang, setLang] = useState('en');

  return (
    <div className={styles.container}>
      <div className={styles['fixed-container']}>
        <Layout>
          <header className={styles.header}>
            <div className={styles['header__logo-wrapper']}>
              <Link href="/">
                <a className={styles.header__logo}>
                  <img src="/static/images/logo-full.svg" alt="logo" />
                </a>
              </Link>
              <div className={styles['header__languages-wrapper']}>
                <button
                  className={`${styles.header__language} ${lang === 'ua' ? styles.active : ''}`}
                  type="button"
                  onClick={() => setLang('ua')}
                >
                  UA
                </button>
                <div className={styles.header__separator}>|</div>
                <button
                  className={`${styles.header__language} ${lang === 'en' ? styles.active : ''}`}
                  type="button"
                  onClick={() => setLang('en')}
                >
                  EN
                </button>
              </div>
            </div>

            <nav>
              <ul className={styles.header__navigation}>
                {headerData.map((item) => (
                  <NavigationItem key={item.text} item={item} />
                ))}
                <li className={styles['header__navigation-get-item']}>
                  <div className={styles['header__navigation-get-item-text']}>Get in touch</div>
                  <img
                    className={styles['header__navigation-get-item-image']}
                    src="/static/images/arrow-yellow.svg"
                    alt="arrow icon"
                  />
                </li>
              </ul>
            </nav>
          </header>
        </Layout>
      </div>
    </div>
  );
};

export default Header;
