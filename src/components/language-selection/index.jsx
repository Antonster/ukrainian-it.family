import styles from '@styles/components/language-selection.module.scss';
import { useState } from 'react';

const LanguageSelection = () => {
  const [lang, setLang] = useState('en');

  return (
    <div className={styles['language-selection']}>
      <button
        className={`${styles['language-selection__language']} ${
          lang === 'ua' ? styles.active : ''
        }`}
        type="button"
        onClick={() => setLang('ua')}
      >
        UA
      </button>
      <div className={styles['language-selection__separator']}>|</div>
      <button
        className={`${styles['language-selection__language']} ${
          lang === 'en' ? styles.active : ''
        }`}
        type="button"
        onClick={() => setLang('en')}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSelection;
