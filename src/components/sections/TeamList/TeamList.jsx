import { teamListData } from '@constants';
import Image from 'next/image';
import { useRouter } from 'next/router';

import styles from './TeamList.module.scss';

export const TeamList = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {teamListData[router.locale].map(({ id, name, position, photo }) => (
        <div key={id} className={styles.item}>
          <div className={styles.item__image}>
            <Image src={photo} alt={`${name} avatar`} width={280} height={280} />
          </div>
          <div className={styles.item__name}>{name}</div>
          <div className={styles.item__position}>{position}</div>
        </div>
      ))}
    </div>
  );
};
