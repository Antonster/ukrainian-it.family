import LanguageSelection from '@components/language-selection';
import MainButton from '@components/main-button';
import NavigationItem from '@components/navigation-item';
import { headerData } from '@constants/index';
import styles from '@styles/components/main-section.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const MainSection = () => (
  <div className={styles.container}>
    <div>
      <header className={styles.header}>
        <div className={styles['header__logo-wrapper']}>
          <Link href="/">
            <a className={styles.header__logo}>
              <Image src="/static/images/logo-full.svg" alt="logo" width={120} height={70} />
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
              <Image
                src="/static/images/arrow-yellow.svg"
                alt="arrow icon"
                width={16}
                height={16}
              />
            </li>
          </ul>
        </nav>
      </header>

      <h1 className={styles.main__title}>
        <div className={styles['main__flag-emblem']}>
          <Image src="/static/images/flag-emblem.svg" alt="flag emblem" width={8} height={45} />
        </div>
        <div>Bravery</div>
        <div className={styles.main__emblem}>
          <Image src="/static/images/emblem.svg" alt="emblem" width={20} height={29} />
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

    <div className={styles['main-background']}>
      <Image
        src="/static/images/main-background.svg"
        alt="background decorator"
        layout="fixed"
        width={500}
        height={878}
      />
    </div>
  </div>
);

export default MainSection;
