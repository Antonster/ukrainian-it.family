import { LanguageSelection } from '@components/elements';
import { WidthBox } from '@components/layouts';
import { footerLinksData, footerTermsData, socialLogoListData } from '@constants';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';

import styles from './Footer.module.scss';

export const Footer = () => {
  const mainLinks = useMemo(() => Object.keys(footerLinksData), []);

  return (
    <WidthBox>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.main__info}>
            <Link href="/">
              <a className={styles.main__logo}>
                <Image src="/static/images/logo-full.svg" alt="logo" width={120} height={70} />
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
                  <Image src={image} alt={alt} width={24} height={24} />
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
          <a href="/" className={styles.terms__clutch} target="_blank" rel="noopener noreferrer">
            <Image src="/static/images/clutch.svg" alt="clutch logo" width={100} height={64} />
          </a>

          <ul className={styles['terms__link-list']}>
            {footerTermsData.map(({ text, link }) => (
              <li key={text} className={styles['terms__link-item']}>
                {link ? (
                  <Link href={link}>
                    <a>{text}</a>
                  </Link>
                ) : (
                  <>{text}</>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </WidthBox>
  );
};
