import { contactsListData } from '@constants';
import Image from 'next/image';

import styles from './ContactsList.module.scss';

export const ContactsList = () => (
  <div className={styles.container}>
    {contactsListData.map(
      ({ id, image, arrow, link, mainColor, mainText, secondaryColor, secondaryText }) => (
        <div key={id} className={styles.item}>
          <div className={styles['item__image-container']} style={{ background: mainColor }}>
            <Image src={image} alt="contact icon" width={24} height={24} />
          </div>

          <a
            className={styles.item__link}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: secondaryColor }}
          >
            <div className={styles['item__main-text']}>{mainText}</div>

            <div className={styles.item__secondary}>
              {secondaryText && <div>{secondaryText}</div>}

              {arrow && (
                <Image
                  src="/static/images/arrow-blue.svg"
                  alt="arrow icon"
                  width={25}
                  height={25}
                />
              )}
            </div>
          </a>
        </div>
      ),
    )}
  </div>
);
