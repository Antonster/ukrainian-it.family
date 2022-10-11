import { expertiseListData } from '@constants/index';
import styles from '@styles/components/expertise-list.module.scss';

const ExpertiseList = () => (
  <div className={styles.container}>
    {expertiseListData.map(({ image, name, description }) => (
      <div key={image} className={styles.item}>
        <img className={styles.item__image} src={image} alt={`${name} logo`} />
        <div className={styles.item__name}>{name}</div>
        <div className={styles.item__description}>{description}</div>
      </div>
    ))}
  </div>
);

export default ExpertiseList;
