import { ourPartnerListData } from '@constants/index';
import styles from '@styles/components/our-partner-list.module.scss';

const OurPartnerList = () => (
  <div className={styles.container}>
    {ourPartnerListData.map(({ id, image, alt }) => (
      <img key={id} className={styles.image} src={image} alt={`${alt} icon`} />
    ))}
  </div>
);

export default OurPartnerList;
