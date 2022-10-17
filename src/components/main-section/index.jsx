import LanguageSelection from '@components/language-selection';
import Layout from '@components/layout';
import MainButton from '@components/main-button';
import NavigationItem from '@components/navigation-item';
import { headerData } from '@constants/index';
import styles from '@styles/components/main-section.module.scss';
import Link from 'next/link';
import { useState } from 'react';

const MainSection = () => {
  const [lang, setLang] = useState('en');

  return (
    <div className={styles.container}>
      <div>
        <header className={styles.header}>
          <div className={styles['header__logo-wrapper']}>
            <Link href="/">
              <a className={styles.header__logo}>
                <img src="/static/images/logo-full.svg" alt="logo" />
              </a>
            </Link>
          </div>

          <nav className={styles['header__navigation-container']}>
            <ul className={styles.header__navigation}>
              {headerData.map((item) => (
                <NavigationItem key={item.text} item={item} />
              ))}
              <li>
                <LanguageSelection />
              </li>
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

        <h1 className={styles.main__title}>
          <div className={styles['main__flag-emblem']}>
            <img src="/static/images/flag-emblem.svg" alt="flag emblem" />
          </div>
          <div>Bravery</div>
          <div>
            <img className={styles.main__emblem} src="/static/images/emblem.svg" alt="emblem" />
          </div>
        </h1>
        <h2 className={styles.main__subtitle}>to develop responsibly</h2>
        <div className={styles['main__description-container']}>
          <div className={styles.main__description}>
            Ukrainian IT Family leverages{' '}
            <span className={styles['main__description-decorator']}>
              exceptional Ukrainian engineering
            </span>{' '}
            talent to digitalize small and medium businesses.
          </div>

          <MainButton size="big" type="button" text="arrange a meeting" onClick={() => {}} />
        </div>
      </div>

      <img
        className={styles['main-background']}
        src="/static/images/main-background.svg"
        alt="background decorator"
      />
    </div>
  );
};

export default MainSection;
