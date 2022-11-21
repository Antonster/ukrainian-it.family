import { expertiseListData } from '@constants';
import Image from 'next/image';
import { useRouter } from 'next/router';

import styles from './ExpertiseList.module.scss';

export const ExpertiseList = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {expertiseListData[router.locale].map(({ id, image, name, description }) => (
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
};
