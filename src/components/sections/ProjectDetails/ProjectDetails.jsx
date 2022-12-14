import 'swiper/css';

import PropTypes from 'prop-types';
import { memo } from 'react';
import YouTube from 'react-youtube';

import styles from './ProjectDetails.module.scss';

const ProjectDetails = ({ paragraphs, rows, videoId }) => (
  <div className={styles['project-details']}>
    <div className={styles['project-details__wrapper']}>
      <div className={styles['project-details__paragraphs']}>
        {paragraphs.map((item) => (
          <div key={item} className={styles['project-details__paragraphs-item']}>
            {item}
          </div>
        ))}
      </div>

      <ul className={styles['project-details__rows']}>
        {rows.map((item) => (
          <li key={item} className={styles['project-details__rows-item']}>
            {item}
          </li>
        ))}
      </ul>
    </div>

    {videoId && (
      <div className={styles['project-details__video']}>
        <div className={styles['project-details__video-title']}>
          Find more details in video
          <span className={styles['project-details__video-title-dot']}>.</span>
        </div>
        <YouTube
          videoId={videoId}
          opts={{
            width: '780',
            height: '480',
          }}
        />
      </div>
    )}
  </div>
);

ProjectDetails.propTypes = {
  paragraphs: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  rows: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  videoId: PropTypes.string.isRequired,
};

export default memo(ProjectDetails);
