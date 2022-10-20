import LanguageSelection from '@components/language-selection';
import Layout from '@components/layout';
import NavigationItem from '@components/navigation-item';
import { headerData } from '@constants/index';
import styles from '@styles/components/header.module.scss';
import Link from 'next/link';

const Header = () => (
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

            <LanguageSelection />
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

export default Header;
