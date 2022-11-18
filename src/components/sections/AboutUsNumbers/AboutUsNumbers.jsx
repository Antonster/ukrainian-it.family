import { aboutUsNumbersData } from '@constants';
import Image from 'next/image';

import styles from './AboutUsNumbers.module.scss';

export const AboutUsNumbers = () => (
  <div className={styles.container}>
    {aboutUsNumbersData.map(({ id, image, name, description }) => (
      <div key={id} className={styles.item}>
        <div className={styles.item__image}>
          <Image src={image} alt="figure icon" objectFit="contain" layout="fill" />
        </div>
        <div className={styles.item__name}>{name}</div>
        <div className={styles.item__description}>{description}</div>
      </div>
    ))}
  </div>
);
