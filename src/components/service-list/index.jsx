import MainButton from '@components/main-button';
import { serviceListData } from '@constants/index';
import styles from '@styles/components/service-list.module.scss';

const ServiceList = () => (
  <div className={styles.container}>
    {serviceListData.map(({ link, image, name, description }, index) => {
      const primary = (index + 1 - 2) % 4 === 0 || (index + 1 - 3) % 4 === 0;

      return (
        <div
          key={image}
          className={`${styles.item} ${primary ? styles.primary : styles.secondary}`}
        >
          <div className={styles['item__text-wrapper']}>
            <div className={styles.item__name}>{name}</div>
            <div className={styles.item__description}>{description}</div>
          </div>
          <img className={styles.item__image} src={image} alt={`${name} icon`} />
          <div className={styles.item__button}>
            <MainButton
              type="link"
              href={link}
              width="100%"
              buttonStyle={!primary ? 'primary' : 'secondary'}
              size="big"
              text="Learn more"
            />
          </div>
        </div>
      );
    })}
  </div>
);

export default ServiceList;
