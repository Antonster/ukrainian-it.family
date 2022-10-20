import { principlesListData } from '@constants/index';
import styles from '@styles/components/principles-list.module.scss';

const PrinciplesList = () => (
  <div className={styles.container}>
    {principlesListData.map(({ id, name, description }, index) => {
      const secondary = (index + 1 - 2) % 4 === 0 || (index + 1 - 3) % 4 === 0;

      return (
        <div key={id} className={`${styles.item} ${secondary ? styles.secondary : styles.primary}`}>
          <div className={styles.item__name}>{name}</div>
          <div className={styles.item__description}>{description}</div>
        </div>
      );
    })}
  </div>
);

export default PrinciplesList;
