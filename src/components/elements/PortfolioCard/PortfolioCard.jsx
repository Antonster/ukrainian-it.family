import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import PropTypes from 'prop-types';

import styles from './PortfolioCard.module.scss';

export const PortfolioCard = ({ id, big, name, tags, description, image }) => {
  const t = useTranslations('Elements.PortfolioCard');

  return (
    <div className={`${styles.container} ${big ? styles.big : ''}`}>
      <Link href={`/portfolio/${id}`}>
        <a className={styles.name}>{name}</a>
      </Link>

      <div className={styles['tags-wrapper']}>
        {tags.map((tag) => (
          <div key={tag} className={styles.tag}>
            #{tag}
          </div>
        ))}
      </div>

      <div className={styles.description}>{description}</div>

      <div className={`${styles['image-wrapper']} ${big ? styles.big : ''}`}>
        <Link href={`/portfolio/${id}`}>
          <a className={`${styles['image-wrapper__link-wrapper']} ${big ? styles.big : ''}`}>
            <div className={styles['image-wrapper__link']}>
              <div className={styles['image-wrapper__link-text']}>{t('LinkText')}</div>
              <Image src="/static/images/arrow-blue.svg" alt="arrow icon" width={25} height={25} />
            </div>
          </a>
        </Link>
        <div className={`${styles['image-wrapper__image']} ${big ? styles.big : ''}`}>
          <Image src={image} alt={`${name}`} layout="fill" />
        </div>
      </div>
    </div>
  );
};

PortfolioCard.propTypes = {
  id: PropTypes.string.isRequired,
  big: PropTypes.bool,
  name: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
