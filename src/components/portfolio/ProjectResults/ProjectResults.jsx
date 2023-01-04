import { testimonialListData } from '@data';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import PropTypes from 'prop-types';
import { memo, useMemo } from 'react';

import styles from './ProjectResults.module.scss';

const ProjectResults = ({ resultList, feedbackId }) => {
  const t = useTranslations('Components.ProjectResults');
  const router = useRouter();
  const feedback = useMemo(
    () => testimonialListData[router.locale].find(({ id }) => id === feedbackId),
    [feedbackId, router.locale],
  );

  return (
    <div className={styles['project-results']}>
      <div className={styles['project-results__items-container']}>
        {resultList.map(({ value, description }) => (
          <div key={value + description} className={styles['project-results__item']}>
            <div className={styles['project-results__item-value']}>{value}</div>
            <div className={styles['project-results__item-description']}>{description}</div>
          </div>
        ))}
      </div>

      {feedback && (
        <div className={styles['project-results__feedback']}>
          <div className={styles['project-results__feedback-title']}>
            Client’s feedback
            <span className={styles['project-results__feedback-title-dot']}>.</span>
          </div>

          <div className={styles['project-results__feedback-container']}>
            <Image
              className={styles.item__image}
              src={feedback.image}
              alt="figure"
              width={88}
              height={88}
            />
            <div className={styles['project-results__feedback-content']}>
              <div className={styles['project-results__feedback-content-name']}>
                {feedback.name}
              </div>
              <div className={styles['project-results__feedback-content-company']}>
                {feedback.company}
              </div>
              <div className={styles['project-results__feedback-content-description']}>
                {feedback.description}
              </div>
              {feedback.link && (
                <a
                  className={styles['project-results__feedback-content-link']}
                  href={feedback.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/static/images/youtube-logo.svg"
                    width={16}
                    height={16}
                    alt="youtube logo"
                  />
                  <div>{t('FeedbackLinkText')}</div>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

ProjectResults.propTypes = {
  resultList: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  feedbackId: PropTypes.string,
};

export default memo(ProjectResults);
