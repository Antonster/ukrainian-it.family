import Image from 'next/image';
import PropTypes from 'prop-types';
import { memo } from 'react';

import styles from './OurPartnerList.module.scss';

const OurPartnerList = ({ ourPartnersData }) => (
  <div className={styles.container}>
    {ourPartnersData.map(({ id, image, alt }) => (
      <div key={id} className={styles.image}>
        <Image src={image} alt={`${alt} icon`} width={158} height={158} objectFit="contain" />
      </div>
    ))}
  </div>
);

OurPartnerList.propTypes = {
  ourPartnersData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default memo(OurPartnerList);
