import { expertiseListData } from '@constants';
import Image from 'next/image';

import styles from './ExpertiseList.module.scss';

export const ExpertiseList = () => (
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
