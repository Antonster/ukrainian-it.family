import { MainButton, PortfolioCard } from '@components/elements';
import Masonry from '@mui/lab/Masonry';
import { useTranslations } from 'next-intl';
import PropTypes from 'prop-types';

import styles from './PortfolioList.module.scss';

export const PortfolioList = ({ data, moreButton }) => {
  const t = useTranslations('Sections.PortfolioList');

  return (
    <div className={styles.container}>
      <Masonry columns={2}>
        {data.map(({ id, name, tags, description, image }, index) => {
          const big = (index + 1 - 2) % 4 === 0 || (index + 1 - 3) % 4 === 0;

          return (
            <PortfolioCard
              key={id}
              id={id}
              big={big}
              name={name}
              tags={tags}
              description={description}
              image={image}
            />
          );
        })}
      </Masonry>

      {moreButton && (
        <div className={styles['button-wrapper']}>
          <MainButton
            type="link"
            href="/portfolio"
            width="100%"
            buttonStyle="secondary"
            size="big"
            text={t('MainButton')}
          />
        </div>
      )}
    </div>
  );
};

PortfolioList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }),
  ).isRequired,
  moreButton: PropTypes.bool,
};
