import { MainButton } from '@components';
import { useMediaQuery } from '@hooks';
import PropTypes from 'prop-types';
import { memo } from 'react';

import styles from './VacancyContent.module.scss';

const VacancyContent = ({ items, links }) => {
  const isMobileScreen = useMediaQuery('(max-width: 480px)');

  return (
    <div className={styles['vacancy-content']}>
      {items.map(({ type, title, content }) => (
        <div key={title} className={styles['vacancy-content__item']}>
          <div className={styles['vacancy-content__item-title']}>{title}</div>

          {type === 'text' && <div className={styles['vacancy-content__item-text']}>{content}</div>}

          {type === 'list' && (
            <ul className={styles['vacancy-content__item-list']}>
              {content.map((item) => (
                <li key={item} className={styles['vacancy-content__item-list-element']}>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}

      <div className={styles['vacancy-content__links']}>
        {links.map(({ text, href }) => (
          <MainButton
            key={text}
            type="link"
            href={href}
            text={text}
            blank
            buttonStyle="outlined"
            width={isMobileScreen ? '100%' : 'auto'}
          />
        ))}
      </div>
    </div>
  );
};

VacancyContent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)])
        .isRequired,
    }),
  ),
  links: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    }).isRequired,
  ),
};

export default memo(VacancyContent);
