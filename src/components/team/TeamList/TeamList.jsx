import Image from 'next/image';
import PropTypes from 'prop-types';
import { memo } from 'react';

import styles from './TeamList.module.scss';

const TeamList = ({ teamData }) => (
  <div className={styles.container}>
    {teamData.map(({ id, name, position, photo }) => (
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

TeamList.propTypes = {
  teamData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default memo(TeamList);
