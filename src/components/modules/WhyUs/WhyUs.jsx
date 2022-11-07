import { whyUsData } from '@constants';

import styles from './WhyUs.module.scss';

export const WhyUs = () => (
  <div className={styles.container}>
    {whyUsData.map(({ id, name, description }) => (
      <div key={id} className={styles.item}>
        <div className={styles.item__name}>{name}</div>
        <div className={styles.item__description}>{description}</div>
      </div>
    ))}
  </div>
);
