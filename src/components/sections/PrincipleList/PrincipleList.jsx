import { principleListData } from '@data';
import { useMediaQuery } from '@hooks';
import { useRouter } from 'next/router';
import { memo } from 'react';

import styles from './PrincipleList.module.scss';

const PrincipleList = () => {
  const router = useRouter();
  const isSmallScreen = useMediaQuery('(max-width: 1024px)');

  return (
    <div className={styles.container}>
      {principleListData[router.locale].map(({ id, name, description }, index) => {
        const secondary = isSmallScreen
          ? (index + 1 - 2) % 2 === 0
          : (index + 1 - 2) % 4 === 0 || (index + 1 - 3) % 4 === 0;

        return (
          <div
            key={id}
            className={`${styles.item} ${secondary ? styles.secondary : styles.primary}`}
          >
            <div className={styles.item__name}>{name}</div>
            <div className={styles.item__description}>{description}</div>
          </div>
        );
      })}
    </div>
  );
};

export default memo(PrincipleList);
