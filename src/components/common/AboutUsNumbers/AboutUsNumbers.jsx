import Image from 'next/image';
import PropTypes from 'prop-types';
import { memo } from 'react';

import styles from './AboutUsNumbers.module.scss';

const AboutUsNumbers = ({ aboutUsNumbersData }) => (
  <div className={styles.container}>
    {aboutUsNumbersData.map(({ id, image, name, description }) => (
      <div key={id} className={styles.item}>
        <div className={styles.item__image}>
          <Image src={image} alt="figure icon" objectFit="contain" layout="fill" />
        </div>

        <div className={styles.item__name}>{name}</div>

        <div className={styles.item__description}>{description}</div>
      </div>
    ))}
  </div>
);

AboutUsNumbers.propTypes = {
  aboutUsNumbersData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default memo(AboutUsNumbers);
