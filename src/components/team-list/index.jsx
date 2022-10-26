import { teamListData } from '@constants/index';
import styles from '@styles/components/team-list.module.scss';
import Image from 'next/image';

const TeamList = () => (
  <div className={styles.container}>
    {teamListData.map(({ id, name, position, photo }) => (
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

export default TeamList;
