import { contactsListData } from '@constants';
import Image from 'next/image';

import styles from './ContactsList.module.scss';

export const ContactsList = () => (
  <div className={styles.container}>
    {contactsListData.map(
      ({ id, image, arrow, link, mainColor, mainText, secondaryColor, secondaryText }) => (
        <a key={id} className={styles.item} href={link} target="_blank" rel="noopener noreferrer">
          <div className={styles['item__image-container']} style={{ background: mainColor }}>
            <Image src={image} alt="contact icon" width={24} height={24} />
          </div>

          <div className={styles.item__link} style={{ background: secondaryColor }}>
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
          </div>
        </a>
      ),
    )}
  </div>
);
