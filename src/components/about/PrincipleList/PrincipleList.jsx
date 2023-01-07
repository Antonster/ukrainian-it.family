import { useMediaQuery } from '@hooks';
import PropTypes from 'prop-types';
import { memo } from 'react';

import styles from './PrincipleList.module.scss';

const PrincipleList = ({ principlesData }) => {
  const isSmallScreen = useMediaQuery('(max-width: 1024px)');

  return (
    <div className={styles.container}>
      {principlesData.map(({ id, name, description }, index) => {
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

PrincipleList.propTypes = {
  principlesData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default memo(PrincipleList);
