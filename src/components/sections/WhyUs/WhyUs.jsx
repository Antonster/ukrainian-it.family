import { whyUsData } from '@constants';
import { useRouter } from 'next/router';

import styles from './WhyUs.module.scss';

export const WhyUs = () => {
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
