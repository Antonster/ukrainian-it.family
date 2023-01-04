import Image from 'next/image';
import { useTranslations } from 'next-intl';
import PropTypes from 'prop-types';
import { memo } from 'react';

import styles from './TestimonialList.module.scss';

const TestimonialList = ({ data }) => {
  const t = useTranslations('Components.TestimonialList');

  return (
    <div className={styles.container}>
      {data.map(({ id, image, name, company, description, link }) => (
        <div key={id} className={styles.item}>
          <Image className={styles.item__image} src={image} alt="figure" width={88} height={88} />
          <div className={styles['item__content-wrapper']}>
            <div className={styles.item__name}>{name}</div>
            <div className={styles.item__company}>{company}</div>
            <div className={styles.item__description}>{description}</div>
            {link && (
              <a
                className={styles.item__link}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/static/images/youtube-logo.svg"
                  width={16}
                  height={16}
                  alt="youtube logo"
                />
                <div>{t('LinkText')}</div>
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

TestimonialList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default memo(TestimonialList);
