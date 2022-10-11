import { serviceListData } from '@constants/index';
import styles from '@styles/components/service-list.module.scss';
import Link from 'next/link';

const ServiceList = () => (
  <div className={styles.container}>
    {serviceListData.map(({ link, image, name, description, buttonImage }) => (
      <div key={image} className={styles.item}>
        <div className={styles['item__text-wrapper']}>
          <div className={styles.item__name}>{name}</div>
          <div className={styles.item__description}>{description}</div>
        </div>
        <img className={styles.item__image} src={image} alt={`${name} icon`} />
        <Link href={link}>
          <a className={styles.item__button}>
            <div className={styles['item__button-text']}>learn more</div>
            <img src={buttonImage} alt="arrow icon" />
          </a>
        </Link>
      </div>
    ))}
  </div>
);

export default ServiceList;
