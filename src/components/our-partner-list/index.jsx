import { ourPartnerListData } from '@constants/index';
import styles from '@styles/components/our-partner-list.module.scss';
import Image from 'next/image';

const OurPartnerList = () => (
  <div className={styles.container}>
    {ourPartnerListData.map(({ id, image, alt }) => (
      <div key={id} className={styles.image}>
        <Image src={image} alt={`${alt} icon`} width={158} height={158} objectFit="contain" />
      </div>
    ))}
  </div>
);

export default OurPartnerList;
