import { aboutUsNumbersData } from '@data';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { memo } from 'react';

import styles from './AboutUsNumbers.module.scss';

const AboutUsNumbers = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {aboutUsNumbersData[router.locale].map(({ id, image, name, description }) => (
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
};

export default memo(AboutUsNumbers);
