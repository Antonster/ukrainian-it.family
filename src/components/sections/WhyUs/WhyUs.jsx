import { whyUsData } from '@data';
import { useRouter } from 'next/router';
import { memo } from 'react';

import styles from './WhyUs.module.scss';

const WhyUs = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {whyUsData[router.locale].map(({ id, name, description }) => (
        <div key={id} className={styles.item}>
          <div className={styles.item__name}>{name}</div>
          <div className={styles.item__description}>{description}</div>
        </div>
      ))}
    </div>
  );
};

export default memo(WhyUs);
