import PropTypes from 'prop-types';
import { memo } from 'react';

import styles from './WhyUs.module.scss';

const WhyUs = ({ whyUsData }) => (
  <div className={styles.container}>
    {whyUsData.map(({ id, name, description }) => (
      <div key={id} className={styles.item}>
        <div className={styles.item__name}>{name}</div>
        <div className={styles.item__description}>{description}</div>
      </div>
    ))}
  </div>
);

WhyUs.propTypes = {
  whyUsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default memo(WhyUs);
