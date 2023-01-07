import Image from 'next/image';
import { PropTypes } from 'prop-types';
import { memo } from 'react';

import styles from './ExpertiseList.module.scss';

const ExpertiseList = ({ expertiseData }) => (
  <div className={styles.container}>
    {expertiseData.map(({ id, image, name, description }) => (
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

ExpertiseList.propTypes = {
  expertiseData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default memo(ExpertiseList);
