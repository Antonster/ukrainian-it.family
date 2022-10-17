import LanguageSelection from '@components/language-selection';
import Layout from '@components/layout';
import { footerLinksData, footerTermsData, socialLogoListData } from '@constants/index';
import styles from '@styles/components/footer.module.scss';
import Link from 'next/link';
import { useMemo } from 'react';

const Footer = () => {
  const mainLinks = useMemo(() => Object.keys(footerLinksData), []);

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.main__info}>
            <Link href="/">
              <a className={styles.main__logo}>
                <img src="/static/images/logo-full.svg" alt="logo" />
              </a>
            </Link>

            <div className={styles.main__description}>
              Ukrainian IT Family leverages exceptional Ukrainian engineering talent to digitalize
              small and medium businesses.
            </div>

            <div className={styles['main__social-links']}>
              {socialLogoListData.map(({ link, image, alt }) => (
                <a
                  key={alt}
                  className={styles['main__social-item']}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={link}
                >
                  <img src={image} alt={alt} />
                </a>
              ))}
            </div>

            <LanguageSelection />
          </div>

          <div className={styles['main__links-container']}>
            {mainLinks.map((linkList) => (
              <div key={linkList} className={styles['main__links-container-item']}>
                <div className={styles['main__links-container-title']}>{linkList}</div>

                <ul className={styles['main__link-list']}>
                  {footerLinksData[linkList].map(({ type, text, link }) => (
                    <li key={text} className={styles['main__link-list-item']}>
                      {type === 'blank' ? (
                        <a href={link} target="_blank" rel="noopener noreferrer">
                          {text}
                        </a>
                      ) : (
                        <Link href={link}>
                          <a>{text}</a>
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.separator} />

        <div className={styles.terms}>
          <div className={styles.terms__clutch}>
            <img src="/static/images/clutch.svg" alt="clutch logo" />
          </div>
          <ul className={styles['terms__link-list']}>
            {footerTermsData.map(({ text }) => (
              <li key={text} className={styles['terms__link-item']}>
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Footer;
