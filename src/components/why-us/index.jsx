import { whyUsData } from '@constants/index';
import styles from '@styles/components/why-us.module.scss';

const WhyUs = () => (
  <div className={styles.container}>
    {whyUsData.map(({ id, name, description }) => (
      <div key={id} className={styles.item}>
        <div className={styles.item__name}>{name}</div>
        <div className={styles.item__description}>{description}</div>
      </div>
    ))}
  </div>
);

export default WhyUs;
