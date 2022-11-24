import { ourPartnerListData } from '@constants';
import Image from 'next/image';
import { memo } from 'react';

import styles from './OurPartnerList.module.scss';

const OurPartnerList = () => (
  <div className={styles.container}>
    {ourPartnerListData.map(({ id, image, alt }) => (
      <div key={id} className={styles.image}>
        <Image src={image} alt={`${alt} icon`} width={158} height={158} objectFit="contain" />
      </div>
    ))}
  </div>
);

export default memo(OurPartnerList);
