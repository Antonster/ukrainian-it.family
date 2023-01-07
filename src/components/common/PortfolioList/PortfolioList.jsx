import { MainButton, PortfolioCard } from '@components';
import { useMediaQuery } from '@hooks';
import Masonry from '@mui/lab/Masonry';
import { useTranslations } from 'next-intl';
import PropTypes from 'prop-types';
import { memo } from 'react';

import styles from './PortfolioList.module.scss';

const PortfolioList = ({ portfolioData, moreButton }) => {
  const t = useTranslations('Components.PortfolioList');
  const isSmallScreen = useMediaQuery('(max-width: 1024px)');

  return (
    <div className={styles.container}>
      <Masonry columns={isSmallScreen ? 1 : 2}>
        {portfolioData.map(({ id, name, tags, description, smallPreviewImage }, index) => {
          const big = (index + 1 - 2) % 4 === 0 || (index + 1 - 3) % 4 === 0;

          return (
            <PortfolioCard
              key={id}
              id={id}
              big={big}
              name={name}
              tags={tags}
              description={description}
              image={smallPreviewImage}
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
  portfolioData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      description: PropTypes.string.isRequired,
      smallPreviewImage: PropTypes.string.isRequired,
    }),
  ).isRequired,
  moreButton: PropTypes.bool,
};

export default memo(PortfolioList);
