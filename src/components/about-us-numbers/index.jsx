import { aboutUsNumbersData } from '@constants/index';
import styles from '@styles/components/about-us-numbers.module.scss';

const AboutUsNumbers = () => (
  <div className={styles.container}>
    {aboutUsNumbersData.map(({ id, image, name, description }) => (
      <div key={id} className={styles.item}>
        <img className={styles.item__image} src={image} alt="figure" />
        <div className={styles.item__name}>{name}</div>
        <div className={styles.item__description}>{description}</div>
      </div>
    ))}
  </div>
);

export default AboutUsNumbers;
