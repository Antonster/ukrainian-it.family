import PropTypes from 'prop-types';
import { memo } from 'react';

import styles from './ProjectDescription.module.scss';

const ProjectDescription = ({ name, tags, description }) => (
  <div className={styles['project-description']}>
    <div className={styles['project-description__name']}>{name}</div>
    <div className={styles['project-description__description']}>{description}</div>
    <div className={styles['project-description__tags-wrapper']}>
      {tags.map((tag) => (
        <div key={tag} className={styles['project-description__tag']}>
          #{tag}
        </div>
      ))}
    </div>
  </div>
);

ProjectDescription.propTypes = {
  name: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string.isRequired,
};

export default memo(ProjectDescription);
