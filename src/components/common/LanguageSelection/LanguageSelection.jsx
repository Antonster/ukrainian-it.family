import Link from 'next/link';
import { useRouter } from 'next/router';
import { memo } from 'react';

import styles from './LanguageSelection.module.scss';

const LanguageSelection = () => {
  const router = useRouter();

  return (
    <div className={styles['language-selection']}>
      <Link href={router.asPath} locale="uk">
        <a
          className={`${styles['language-selection__language']} ${
            router.locale === 'uk' ? styles.active : ''
          }`}
        >
          UA
        </a>
      </Link>

      <div className={styles['language-selection__separator']}>|</div>

      <Link href={router.asPath} locale="en">
        <a
          className={`${styles['language-selection__language']} ${
            router.locale === 'en' ? styles.active : ''
          }`}
        >
          EN
        </a>
      </Link>
    </div>
  );
};

export default memo(LanguageSelection);
