import { expertiseListData } from '@constants/index';
import styles from '@styles/components/expertise-list.module.scss';
import Image from 'next/image';

const ExpertiseList = () => (
  <div className={styles.container}>
    {expertiseListData.map(({ id, image, name, description }) => (
      <div key={id} className={styles.item}>
        <div className={styles.item__image}>
          <Image src={image} alt={`${name} logo`} layout="fill" />
        </div>
        <div className={styles.item__name}>{name}</div>
        <div className={styles.item__description}>{description}</div>
      </div>
    ))}
  </div>
);

export default ExpertiseList;
